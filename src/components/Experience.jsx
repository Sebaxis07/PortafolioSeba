import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: 'Desarrollador de Software (Práctica)',
      company: 'Electrans',
      period: 'Ene 2026 - Mar 2026',
      type: 'work',
      techs: ['React', 'Node.js', 'Express', 'Django', 'MongoDB', 'AI Integration', 'REST APIs'],
      details: [
        'Colaboración en el desarrollo del ERP principal de la empresa, acelerando la integración de datos contables.',
        'Liderazgo en el diseño de un chatbot con IA generativa para soporte técnico de clientes, integrando APIs de modelos fundacionales en el backend.',
        'Modelado de base de datos y optimización de consultas SQL/NoSQL en entornos locales y de producción.'
      ]
    },
    {
      role: 'Líder & Desarrollador Principal',
      company: 'Club de Videojuegos INACAP',
      period: '2025 - Presente',
      type: 'work',
      techs: ['React', 'Node.js', 'Socket.io', 'Express', 'Web Audio API', 'Agile/Scrum'],
      details: [
        'Fundación y liderazgo técnico de la comunidad de desarrollo del club, coordinando a desarrolladores bajo metodologías ágiles.',
        'Diseño de la arquitectura del Dashboard en tiempo real y el motor de emparejamiento suizo para eventos institucionales.',
        'Implementación de simulaciones de juego con agentes autónomos mediante WebSockets, garantizando estabilidad en concurrencia.'
      ]
    },
    {
      role: 'Ingeniería en Informática',
      company: 'INACAP Antofagasta',
      period: '2023 - 2026',
      type: 'education',
      techs: ['Python', 'Machine Learning', 'Data Mining', 'Software Architecture', 'Network Security'],
      details: [
        'Estudiante de cuarto (último) año del programa con sólida formación en Seguridad de Redes, Minería de Datos y Arquitectura de Software.',
        'Implementación práctica de algoritmos de descenso de gradiente aplicados al procesamiento digital y reducción de ruido en imágenes.',
        'Estudio avanzado de arquitecturas de software limpias y preparación técnica para certificación oficial de Python (PCEP).'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-number">03.</span>
        <h2 className="section-title">Mi Trayectoria</h2>
        <div className="section-divider"></div>
      </div>

      <div className="experience-container">
        <div className="experience-tabs">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              className={`tab-button ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{exp.company}</span>
            </button>
          ))}
        </div>

        <div className="experience-content">
          <div className="experience-card">
            <div className="exp-card-header">
              <div className="role-and-company">
                <h3 className="exp-role">
                  {experiences[activeTab].role}{' '}
                  <span className="exp-company-text">@ {experiences[activeTab].company}</span>
                </h3>
              </div>
              <div className="exp-header-meta">
                <span className={`exp-type-badge ${experiences[activeTab].type}`}>
                  {experiences[activeTab].type === 'work' ? 'Profesional' : 'Académico'}
                </span>
                <div className="exp-period">
                  <Calendar size={14} className="icon-calendar" />
                  <span>{experiences[activeTab].period}</span>
                </div>
              </div>
            </div>

            <ul className="exp-details-list">
              {experiences[activeTab].details.map((detail, dIdx) => (
                <li key={dIdx} className="exp-detail-item">
                  <span className="bullet-point">✦</span>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>

            <div className="exp-techs">
              <span className="exp-techs-title">Foco & Tecnologías Clave:</span>
              <div className="exp-tech-list">
                {experiences[activeTab].techs.map((tech) => (
                  <span key={tech} className="exp-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
