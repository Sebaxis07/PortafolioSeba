# 💻 Portafolio Profesional - Sebastián Vásquez

¡Bienvenido al repositorio de mi portafolio profesional! Esta es una aplicación web moderna, interactiva y de alto rendimiento diseñada para presentar mi trayectoria académica, experiencia laboral y proyectos destacados como desarrollador Full-Stack e Ingeniero en Informática.

El portafolio está optimizado para SEO, es completamente responsivo y cuenta con animaciones fluidas y microinteracciones utilizando tecnologías web modernas sin dependencias externas pesadas de diseño.

---

## 🚀 Tecnologías Utilizadas

El sitio fue construido desde cero con un enfoque de código limpio y eficiente:

*   **Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) (Entorno de desarrollo rápido)
*   **Diseño y Estilos:** Vanilla CSS (Diseño responsivo, Grid, Flexbox y Variables CSS personalizadas)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Partículas de Fondo:** Módulo de red de nodos interactivos renderizado mediante Canvas API
*   **Despliegue:** [Vercel](https://vercel.com/)

---

## ✨ Características Destacadas

1.  **Interactividad Dinámica:**
    *   **Fondo de Partículas Interactivo:** Una red de nodos interactiva autogenerada sobre un elemento `<canvas>` que reacciona a la posición del mouse y mantiene el rendimiento.
    *   **Desplazamiento Suave (Smooth Scroll):** Navegación integrada que rastrea dinámicamente la sección activa del usuario y actualiza la barra de navegación en tiempo real.
    *   **Visualizador Split-View Modal:** Selector interactivo de proyectos con carrusel de imágenes integrados y zoom-in (Lightbox) para explicaciones técnicas detalladas.
    *   **Acordeón de Características Técnicas:** Desplegable dinámico dentro de las tarjetas de proyectos para ver las funcionalidades sin saturar el diseño principal.
    *   **Controlador de Línea de Tiempo de Trayectoria:** Panel con pestañas interactivas para navegar de forma organizada entre mi experiencia profesional y académica.
2.  **Alineado con Buenas Prácticas:**
    *   **SEO Optimizado:** Metatags descriptivas completas, Open Graph (para previsualizaciones en redes sociales), estructura semántica HTML5 y jerarquía de títulos única.
    *   **Accesibilidad (a11y):** Atributos ARIA y etiquetas correspondientes en botones de control del carrusel y menú móvil.

---

## 📁 Estructura del Proyecto

La estructura del código fuente está organizada de la siguiente manera:

```text
personal-portfolio/
├── public/                 # Recursos públicos (imágenes de proyectos, iconos)
├── src/
│   ├── assets/             # Recursos estáticos adicionales
│   ├── components/         # Componentes React modulares
│   │   ├── About.jsx               # Información sobre mí y habilidades
│   │   ├── BackgroundParticles.jsx # Canvas animado de fondo
│   │   ├── Contact.jsx             # Formulario y métodos de contacto
│   │   ├── Experience.jsx          # Línea de tiempo de trayectoria
│   │   ├── Hero.jsx                # Presentación de impacto inicial
│   │   └── Projects.jsx            # Módulo de proyectos y modal interactivo
│   ├── App.jsx             # Componente raíz con la lógica del header, footer y barras fijas
│   ├── index.css           # Sistema de diseño, variables CSS y estilos generales
│   └── main.jsx            # Punto de entrada de React
├── index.html              # HTML5 de entrada con etiquetas SEO
├── package.json            # Configuración de dependencias y scripts de npm
├── vite.config.js          # Configuración de Vite
└── vercel.json             # Reglas de redirección de rutas para despliegue en Vercel
```

---

## 🛠️ Instalación y Configuración Local

Sigue estos pasos para levantar el entorno de desarrollo localmente:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Sebaxis07/personal-portfolio.git
    cd personal-portfolio
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    El sitio web estará disponible en `http://localhost:5173`.

4.  **Genera la compilación para producción (Build):**
    ```bash
    npm run build
    ```

---

## ✉️ Contacto

Si deseas ponerte en contacto conmigo para oportunidades laborales, colaboraciones o consultas técnicas:

*   **LinkedIn:** [sebastian-vasquez-467542271](https://www.linkedin.com/in/sebastian-vasquez-467542271/)
*   **GitHub:** [@Sebaxis07](https://github.com/Sebaxis07)
*   **Email:** [Thefilex07@gmail.com](mailto:Thefilex07@gmail.com)
