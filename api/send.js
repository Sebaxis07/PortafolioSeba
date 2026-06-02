export default async function handler(req, res) {
  // Configurar cabeceras de CORS para permitir pruebas locales si es necesario
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder a peticiones OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'La clave API de Resend (RESEND_API_KEY) no está configurada' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: process.env.TO_EMAIL || 'Thefilex07@gmail.com',
        subject: `Nuevo mensaje de ${name} (desde Portafolio)`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #00f2fe; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mensaje:</strong></p>
            <blockquote style="background: #f9f9f9; border-left: 5px solid #00f2fe; padding: 10px 15px; margin: 0; white-space: pre-wrap;">${message}</blockquote>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Error al enviar el correo' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}
