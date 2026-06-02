import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Phone } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset back to idle after 5s
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-number">04.</span>
        <h2 className="section-title">Contacto</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-heading">¿Tienes una idea en mente?</h3>
          <p className="contact-text">
            Estoy buscando activamente oportunidades para colaborar en nuevos proyectos web interesantes. Si tienes preguntas, una propuesta de trabajo, o simplemente quieres decir hola, ¡no dudes en escribirme!
          </p>

          <div className="contact-channels">
            <a href="mailto:Thefilex07@gmail.com" className="channel-item">
              <div className="channel-icon-wrapper text-cyan">
                <Mail size={20} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Enviar Email</span>
                <span className="channel-value">Thefilex07@gmail.com</span>
              </div>
            </a>

            <a href="tel:+56963408038" className="channel-item">
              <div className="channel-icon-wrapper text-cyan">
                <Phone size={20} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Teléfono / WhatsApp</span>
                <span className="channel-value">+56 9 6340 8038</span>
              </div>
            </a>

            <div className="social-links-row">
              <a href="https://github.com/Sebaxis07" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sebastian-vasquez-467542271/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {status === 'success' ? (
            <div className="form-success-card">
              <CheckCircle2 size={48} className="success-icon text-cyan" />
              <h3 className="success-title">¡Mensaje Enviado!</h3>
              <p className="success-message">
                Muchas gracias por ponerte en contacto. Te responderé lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="form-input"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu.correo@ejemplo.com"
                  className="form-input"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  className="form-input form-textarea"
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={status === 'sending' || !formData.name || !formData.email || !formData.message}
              >
                <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
