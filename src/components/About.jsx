import React from 'react';
import { User, Cpu, Database, Layout, GraduationCap, Server, Brain } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Desarrollo Frontend',
      icon: <Layout size={22} className="category-icon text-cyan" />,
      description: 'Construcción de interfaces interactivas con estados dinámicos, animaciones fluidas y adaptabilidad responsiva completa.',
      techs: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vanilla CSS', 'Responsive Design']
    },
    {
      title: 'Desarrollo Backend & DB',
      icon: <Cpu size={22} className="category-icon text-purple" />,
      description: 'Diseño de arquitecturas de servidor estructuradas, APIs REST sólidas, lógica en tiempo real y bases de datos.',
      techs: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'Socket.io']
    },
    {
      title: 'Inteligencia Artificial',
      icon: <Database size={22} className="category-icon text-pink" />,
      description: 'Automatización inteligente de flujos de trabajo backend mediante la integración directa de LLMs y APIs cognitivas.',
      techs: ['Prompt Engineering', 'LLM Integration', 'AI Automation', 'System Workflows']
    },
    {
      title: 'Metodologías & Prácticas',
      icon: <User size={22} className="category-icon text-cyan" />,
      description: 'Aseguramiento de código limpio y documentado bajo metodologías de entrega rápida y constante de valor técnico.',
      techs: ['Git & GitHub', 'Scrum / Kanban', 'Clean Code', 'MVP Delivery', 'Inglés Técnico']
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-number">01.</span>
        <h2 className="section-title">Sobre Mí</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-container">
        {/* Top Section: Bio & Profile */}
        <div className="about-profile-row">
          <div className="about-bio">
            <p>
              ¡Hola! Soy estudiante de cuarto año de <strong>Ingeniería Informática en INACAP</strong> con un enfoque sólido en desarrollo Full-Stack utilizando el stack MERN y Django.
            </p>
            <p>
              Destaco por mi mentalidad de dueño, mi capacidad para construir <strong>Productos Mínimos Viables (MVP)</strong> con altos estándares de calidad, e integrar <strong>Inteligencia Artificial (LLMs)</strong> en sistemas backend para optimizar flujos de trabajo operativos.
            </p>
            <p>
              Tengo experiencia real liderando equipos de desarrollo y resolviendo problemas complejos de software, buscando impactar activamente en la creación de tecnología escalable, eficiente y bien documentada. Manejo inglés técnico fluido aplicado diariamente.
            </p>
          </div>

          <div className="about-metrics-panel">
            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <GraduationCap size={20} className="text-cyan" />
              </div>
              <div>
                <div className="metric-value">4to Año</div>
                <div className="metric-label">Ing. Informática</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <Server size={20} className="text-purple" />
              </div>
              <div>
                <div className="metric-value">MERN + Django</div>
                <div className="metric-label">Fullstack Stack</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <Brain size={20} className="text-pink" />
              </div>
              <div>
                <div className="metric-value">AI / LLM</div>
                <div className="metric-label">Integración Avanzada</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider / Subtitle */}
        <div className="skills-subheader">
          <h3 className="skills-grid-title">Áreas de Especialización</h3>
          <div className="skills-grid-line"></div>
        </div>

        {/* Bottom Section: 2x2 Grid of cards */}
        <div className="about-skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills-category-card">
              <div className="category-header">
                {cat.icon}
                <h4 className="category-title-text">{cat.title}</h4>
              </div>
              <p className="category-description-text">{cat.description}</p>
              <div className="category-techs-container">
                {cat.techs.map((tech) => (
                  <span key={tech} className="tech-badge-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
