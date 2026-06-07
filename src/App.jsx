import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Cpu } from 'lucide-react';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scrolling to style navbar and set active sections
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Background Particles Network */}
      <BackgroundParticles />

      {/* Navigation Header */}
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <Cpu className="logo-icon text-cyan" size={24} />
          <span className="logo-text">SEBA<span className="text-cyan">.DEV</span></span>
        </div>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="nav-index">01.</span> Sobre Mí
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <span className="nav-index">02.</span> Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            <span className="nav-index">03.</span> Trayectoria
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <span className="nav-index">04.</span> Contacto
          </button>
          <a 
            href="/CV.pdf" 
            download="CV_Sebastian_Vasquez.pdf"
            className="btn btn-outline btn-nav"
          >
            CV / Resumen
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`nav-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="nav-mobile-list">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-mobile-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="nav-index">01.</span> Sobre Mí
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`nav-mobile-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <span className="nav-index">02.</span> Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`nav-mobile-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            <span className="nav-index">03.</span> Trayectoria
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-mobile-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <span className="nav-index">04.</span> Contacto
          </button>
          <a 
            href="/CV.pdf" 
            download="CV_Sebastian_Vasquez.pdf"
            className="btn btn-primary mobile-cv-btn"
          >
            Descargar CV
          </a>
        </nav>
      </div>

      {/* Left Social Panel (Fixed) */}
      <div className="fixed-panel social-panel">
        <div className="panel-icons">
          <a href="https://github.com/Sebaxis07" target="_blank" rel="noopener noreferrer" className="panel-icon-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-vasquez-467542271/" target="_blank" rel="noopener noreferrer" className="panel-icon-link">
            <Linkedin size={20} />
          </a>
          <a href="mailto:Thefilex07@gmail.com" className="panel-icon-link">
            <Mail size={20} />
          </a>
        </div>
        <div className="panel-line"></div>
      </div>

      {/* Right Email Panel (Fixed) */}
      <div className="fixed-panel email-panel">
        <a href="mailto:Thefilex07@gmail.com" className="panel-email-text">
          Thefilex07@gmail.com
        </a>
        <div className="panel-line"></div>
      </div>

      {/* Main Sections */}
      <main className="main-content">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/Sebaxis07" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-vasquez-467542271/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <Linkedin size={18} />
          </a>
          <a href="mailto:Thefilex07@gmail.com" className="footer-social-link">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-copy">
          Diseñado & Desarrollado por Sebastián Vásquez © {new Date().getFullYear()}
        </p>
        <p className="footer-subtitle">
          Construido con React, Vite y Vanilla CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
