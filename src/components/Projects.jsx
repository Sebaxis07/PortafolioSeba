import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

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

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      title: 'Canchas Puma',
      category: 'Sistema de Reservas',
      description: 'Sistema web completo para el arriendo de canchas sintéticas y multicanchas. Automatiza el flujo de clientes, gestiona horarios de atención de 24 horas y facilita la reserva en minutos mediante APIs REST.',
      tech: ['React 19', 'Node.js', 'Express', 'JSON Database', 'Axios', 'React Router'],
      role: 'Desarrollador Full-Stack Principal',
      impact: 'Automatización del control de agenda y eliminación de conflictos por reservas duplicadas.',
      images: [
        {
          src: '/projects/canchapumas/Cancha-pumas.png',
          title: 'Página de Inicio / Landing Page',
          desc: 'Presenta el recinto deportivo, sus horarios de atención continuada (24 hrs), la galería interactiva y llamados a la acción claros para guiar a los usuarios a agendar de forma instantánea.'
        },
        {
          src: '/projects/canchapumas/reserva.png',
          title: 'Formulario de Reserva',
          desc: 'Módulo dinámico que permite seleccionar fecha, hora disponible, tipo de cancha (Fútbol 5, 7, Tenis, Básquetbol) y número de jugadores con cálculo de tarifa en tiempo real.'
        },
        {
          src: '/projects/canchapumas/Contacto.png',
          title: 'Ubicación y Canales de Contacto',
          desc: 'Integra un mapa de localización interactivo, panel de preguntas frecuentes estructurado y formulario de contacto directo para resolver inquietudes del cliente.'
        }
      ],
      github: 'https://github.com/Sebaxis07/Cancha-Pumas',
      features: [
        'Validación inteligente de disponibilidad y selección de horarios en tiempo real.',
        'Galería integrada con visualizador lightbox y fotos del recinto.',
        'Módulo de reseñas públicas para que usuarios valoren canchas con estrellas.',
        'Panel administrativo para la gestión de reservas (Creación, Modificación y Eliminación).'
      ]
    },
    {
      title: 'Sol Naciente POS',
      category: 'Punto de Venta e Inventario',
      description: 'Sistema de punto de venta y ERP empresarial para minimarkets y panaderías. Permite un control absoluto sobre transacciones de venta rápida, arqueos de caja, inventario con semáforo de vencimientos y cuentas de proveedores.',
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Context API', 'JWT', 'BcryptJS'],
      role: 'Desarrollador Full-Stack & Arquitecto',
      impact: 'Optimización del tiempo de cierre de turnos en un 50% y monitoreo de pérdidas por productos perecederos.',
      images: [
        {
          src: '/projects/sol-naciente/sol-naciente.png',
          title: 'Dashboard Financiero y KPIs',
          desc: 'Panel principal que resume las estadísticas críticas del día: ingresos brutos, transacciones, ganancias y fondos activos, integrando gráficos contables dinámicos.'
        },
        {
          src: '/projects/sol-naciente/inventario.png',
          title: 'Inventario y Alertas de Vencimiento',
          desc: 'Muestra el stock físico del negocio y clasifica los productos perecederos mediante un semáforo dinámico de vencimientos (Vencido, Crítico, Pronto, Sano).'
        },
        {
          src: '/projects/sol-naciente/boletas.png',
          title: 'Historial y Gestión de Ventas',
          desc: 'Permite buscar, auditar y reimprimir boletas térmicas de compras pasadas, indicando el cajero a cargo y los métodos de pago empleados.'
        },
        {
          src: '/projects/sol-naciente/proveedores.png',
          title: 'Directorio de Proveedores y Deudas',
          desc: 'Lleva la contabilidad de compras al por mayor y el saldo actual de Cuentas por Pagar asociadas a cada distribuidor comercial.'
        },
        {
          src: '/projects/sol-naciente/reportes.png',
          title: 'Reportes y Auditoría de Arqueos',
          desc: 'Ofrece analíticas contables de ingresos acumulados e historial completo de cierres de caja con reportes de descuadre o sobrantes en efectivo.'
        }
      ],
      github: 'https://github.com/Sebaxis07/SolNaciente',
      features: [
        'Terminal POS optimizado para venta por unidad y por peso (gramos de pan/fiambre).',
        'Arqueo de caja guiado y protegido por confirmación de contraseña del administrador.',
        'Control de niveles mínimos de stock con notificaciones de reabastecimiento.',
        'Autenticación robusta y seguridad mediante Tokens JWT y contraseñas encriptadas.'
      ]
    },
    {
      title: 'Smart Financial Assistant (Monochrome Edition)',
      category: 'Finanzas Personales / IA',
      description: 'Plataforma web de gestión financiera diseñada para el control inteligente de ingresos, gastos y metas, implementando una arquitectura de roles (Cliente Principal y Supervisor), procesamiento de lenguaje natural y asesoramiento mediante inteligencia artificial.',
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Gemini 2.5 Flash', 'JWT', 'BcryptJS'],
      role: 'Desarrollador Full-Stack Principal',
      impact: 'Ingesta inteligente de transacciones con IA, visualización interactiva de la regla 50/30/20 y auditoría financiera remota.',
      images: [
        {
          src: '/projects/InkFinance/login.png',
          title: 'Acceso y Autenticación de Usuarios',
          desc: 'Inicio de sesión seguro mediante tokens JWT y recuperación de contraseñas con código OTP de 6 dígitos autogenerado.'
        },
        {
          src: '/projects/InkFinance/Principal.png',
          title: 'Dashboard y Regla 50/30/20',
          desc: 'Consolidación de balance general mensual, tasa de ahorro neto y barras de progreso de la regla de distribución 50/30/20.'
        },
        {
          src: '/projects/InkFinance/Movimientos.png',
          title: 'Registro de Transacciones con NLP',
          desc: 'Formulario estructurado y procesamiento por lenguaje natural (NLP) en tiempo real, parseando texto a datos JSON con Gemini.'
        },
        {
          src: '/projects/InkFinance/Metas.png',
          title: 'Gestión de Metas de Ahorro',
          desc: 'Configuración de objetivos de ahorro prioritarios con cálculo automatizado de la cuota mensual sugerida y control de avance.'
        },
        {
          src: '/projects/InkFinance/IA.png',
          title: 'Asesor Financiero IA y Roles',
          desc: 'Consola de chat contextualizada con análisis directo de datos y control de accesos para supervisores autorizados.'
        }
      ],
      github: 'https://github.com/Sebaxis07/inkfinance',
      demo: 'https://inkfinance.vercel.app',
      features: [
        'Matriz de Roles y Permisos: Flujos diferenciados para Cliente Principal (gestión de capital) y Supervisor/Auditor (control externo).',
        'Dashboard Dinámico 50/30/20: Gráficos circulares monocromáticos, alertas de límite excedido en Necesidades, Deseos y Ahorro.',
        'Ingesta NLP en Tiempo Real: Motor heurístico local que previsualiza transacciones y API con Gemini 2.5 Flash para categorización exacta.',
        'Asesor Financiero IA Contextualizado: Inyección segura de balance, categorías de gastos y metas del usuario en el prompt del sistema.',
        'Consola de Supervisión Activa (Roster): Panel de auditoría de expedientes clientes vinculados con KPIs de cumplimiento de metas y libro mayor.',
        'Herramientas de Auditoría y Control: Gatillo de escaneo de riesgos y simulación de envío de recomendaciones por correo electrónico.',
        'Gestión de Sesión e Invitaciones: Flujo completo de recuperación de clave (OTP), y autorización o revocación inmediata de supervisores.'
      ]
    }
  ];

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const getActiveImageIndex = (projIdx) => activeImageIndices[projIdx] || 0;

  const handlePrevImage = (projIdx, totalImages) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projIdx]: (getActiveImageIndex(projIdx) - 1 + totalImages) % totalImages
    }));
  };

  const handleNextImage = (projIdx, totalImages) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projIdx]: (getActiveImageIndex(projIdx) + 1) % totalImages
    }));
  };

  const handleSelectImage = (projIdx, imgIdx) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [projIdx]: imgIdx
    }));
  };

  const toggleFeatures = (idx) => {
    setExpandedProject(expandedProject === idx ? null : idx);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-number">02.</span>
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => {
          const isExpanded = expandedProject === idx;
          const activeImgIdx = getActiveImageIndex(idx);
          const currentImage = project.images[activeImgIdx];

          return (
            <div key={idx} className="project-card">
              {/* Dynamic Image Carousel (clickable to open modal) */}
              <div 
                className="project-image-container project-carousel"
                onClick={() => setActiveModalProject(idx)}
                style={{ cursor: 'zoom-in' }}
                title="Haga clic para ampliar la imagen y ver explicaciones detalladas"
              >
                <img 
                  src={currentImage.src} 
                  alt={`${project.title} - ${currentImage.title}`} 
                  className="project-image"
                  key={currentImage.src} // Force re-render for fade-in animation
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback" style={{ display: 'none' }}>
                  <span className="fallback-text">{project.category}</span>
                </div>
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      type="button"
                      className="carousel-arrow arrow-left" 
                      onClick={(e) => { e.stopPropagation(); handlePrevImage(idx, project.images.length); }}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      type="button"
                      className="carousel-arrow arrow-right" 
                      onClick={(e) => { e.stopPropagation(); handleNextImage(idx, project.images.length); }}
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Dot Pagination */}
                {project.images.length > 1 && (
                  <div className="carousel-dots">
                    {project.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        type="button"
                        className={`carousel-dot ${activeImgIdx === imgIdx ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); handleSelectImage(idx, imgIdx); }}
                        aria-label={`Ir a imagen ${imgIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                <div className="project-overlay"></div>
              </div>

              {/* Dynamic Image Explanation */}
              <div className="project-carousel-caption">
                <div className="caption-header">
                  <ImageIcon size={14} className="caption-icon text-cyan" />
                  <span className="caption-title">{currentImage.title}</span>
                </div>
                <p className="caption-desc">{currentImage.desc}</p>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver Código">
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver Demo En Vivo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>

                {/* Role & Impact Metadata */}
                <div className="project-metadata">
                  <div className="metadata-item">
                    <span className="metadata-label">Rol:</span>
                    <span className="metadata-value">{project.role}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Impacto:</span>
                    <span className="metadata-value">{project.impact}</span>
                  </div>
                </div>

                {/* Interactive Toggler Button */}
                <button 
                  onClick={() => toggleFeatures(idx)}
                  className={`btn-features-toggle ${isExpanded ? 'active' : ''}`}
                >
                  <span>{isExpanded ? 'Ocultar Funcionalidades' : 'Ver Funcionalidades'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Dropdown panel */}
                {isExpanded && (
                  <div className="project-features-list animate-slide-down">
                    <h4 className="features-title">Funcionalidades Técnicas Clave:</h4>
                    <ul>
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="feature-item">
                          <span className="feature-bullet">⚡</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-tech-list">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="tech-tag">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Split-View Modal */}
      {activeModalProject !== null && (() => {
        const project = projects[activeModalProject];
        const activeImgIdx = getActiveImageIndex(activeModalProject);
        const currentImage = project.images[activeImgIdx];

        return (
          <div 
            className="project-modal-overlay" 
            onClick={() => setActiveModalProject(null)}
          >
            <div 
              className="project-modal-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close" 
                onClick={() => setActiveModalProject(null)}
                aria-label="Cerrar ventana"
              >
                ✕
              </button>

              {/* Left Panel: Image view with full carousel control */}
              <div className="modal-left">
                <div className="modal-carousel-container">
                  <img 
                    src={currentImage.src} 
                    alt={`${project.title} - ${currentImage.title}`} 
                    className="modal-image"
                    key={currentImage.src}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-fallback" style={{ display: 'none' }}>
                    <span className="fallback-text">{project.category}</span>
                  </div>

                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button 
                        type="button"
                        className="carousel-arrow arrow-left always-visible" 
                        onClick={() => handlePrevImage(activeModalProject, project.images.length)}
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button 
                        type="button"
                        className="carousel-arrow arrow-right always-visible" 
                        onClick={() => handleNextImage(activeModalProject, project.images.length)}
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                  {/* Dot Pagination */}
                  {project.images.length > 1 && (
                    <div className="carousel-dots">
                      {project.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          type="button"
                          className={`carousel-dot ${activeImgIdx === imgIdx ? 'active' : ''}`}
                          onClick={() => handleSelectImage(activeModalProject, imgIdx)}
                          aria-label={`Ir a imagen ${imgIdx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Panel: Scrollable Project Info & Current Slide Caption */}
              <div className="modal-right">
                <div className="modal-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="modal-project-title">{project.title}</h3>
                </div>

                <div className="modal-section dynamic-caption">
                  <h4 className="modal-subtitle">
                    <ImageIcon size={15} className="text-cyan caption-icon" />
                    <span>Funcionalidad Visualizada</span>
                  </h4>
                  <div className="modal-caption-box">
                    <h5 className="modal-caption-title">{currentImage.title}</h5>
                    <p className="modal-caption-desc">{currentImage.desc}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subtitle">Descripción General</h4>
                  <p className="modal-project-desc">{project.description}</p>
                </div>

                <div className="modal-section">
                  <div className="modal-meta-grid">
                    <div className="meta-item">
                      <span className="metadata-label">Rol:</span>
                      <span className="metadata-value">{project.role}</span>
                    </div>
                    <div className="meta-item">
                      <span className="metadata-label">Impacto:</span>
                      <span className="metadata-value">{project.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subtitle">Características Clave</h4>
                  <ul className="modal-features-list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="modal-feature-item">
                        <span className="feature-bullet">⚡</span>
                        <span className="modal-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4 className="modal-subtitle">Stack Tecnológico</h4>
                  <div className="project-tech-list">
                    {project.tech.map((techItem) => (
                      <span key={techItem} className="tech-tag">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-footer">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline modal-btn"
                  >
                    <Github size={16} />
                    <span>Ver Código</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary modal-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Demo En Vivo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default Projects;
