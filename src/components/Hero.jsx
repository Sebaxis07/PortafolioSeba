import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const roles = [
    'Desarrollador Fullstack',
    'Especialista en MERN & Django',
    'Integrador de Inteligencia Artificial',
    'Creador de MVPs Eficientes'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          // Pause at the end of the word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-tag animate-fade-in">
          <Sparkles className="icon-sparkle" size={16} />
          <span>Ingeniero en Informática (INACAP)</span>
        </div>
        
        <h1 className="hero-title">
          Hola, soy <span className="hero-name-gradient">Sebastián Vásquez</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Soy <span className="typing-text">{currentText}</span>
          <span className="typing-cursor">|</span>
        </h2>
        
        <p className="hero-description">
          Desarrollador Fullstack con enfoque sólido en construir soluciones eficientes utilizando React, Node.js y Django. Especializado en crear MVPs rápidos de alta calidad e integrar modelos de lenguaje (LLMs) para la automatización de procesos.
        </p>
        
        <div className="hero-ctas">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="btn btn-primary"
          >
            <span>Ver Proyectos</span>
            <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-outline"
          >
            <span>Contáctame</span>
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="visual-orb-container">
          <div className="visual-orb orb-primary"></div>
          <div className="visual-orb orb-secondary"></div>
          <div className="visual-glass-card">
            <div className="card-header">
              <div className="card-dot dot-red"></div>
              <div className="card-dot dot-yellow"></div>
              <div className="card-dot dot-green"></div>
              <span className="card-title">seba_terminal.sh</span>
            </div>
            <div className="card-body">
              <p className="code-line"><span className="code-keyword">const</span> developer = &#123;</p>
              <p className="code-line indent-1"><span className="code-property">name</span>: <span className="code-string">'Sebastián Vásquez'</span>,</p>
              <p className="code-line indent-1"><span className="code-property">stack</span>: [<span className="code-string">'MERN'</span>, <span className="code-string">'Django'</span>, <span className="code-string">'AI/LLMs'</span>],</p>
              <p className="code-line indent-1"><span className="code-property">passion</span>: <span className="code-string">'Crear productos escalables con IA'</span>,</p>
              <p className="code-line indent-1"><span className="code-property">readyToWork</span>: <span className="code-literal">true</span></p>
              <p className="code-line">&#125;;</p>
              <p className="code-line"><span className="code-keyword">console</span>.<span className="code-method">log</span>(developer.passion);</p>
              <p className="code-line code-output">&gt; "Crear productos escalables con IA"</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="mouse-wheel"></div>
      </div>
    </section>
  );
};

export default Hero;
