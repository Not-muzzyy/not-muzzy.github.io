'use client';

import { useEffect, useRef, useState } from 'react';
import MagneticButton from './MagneticButton';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      // Calculate mouse position as a percentage for the gradient
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });

      // For standard CSS var tracking
      const rect = heroRef.current.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      heroRef.current.style.setProperty('--mouse-x', `${px}px`);
      heroRef.current.style.setProperty('--mouse-y', `${py}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-container">
      {/* Dynamic Background Glow */}
      <div 
        className="hero-ambient-glow" 
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(80, 100, 255, 0.08) 0%, rgba(200, 80, 255, 0.03) 25%, transparent 60%)` 
        }} 
      />

      <div className="hero-content">
        <div className="hero-label animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="hero-label-dot"></span> CYBERSECURITY × AI
        </div>

        <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="sr-only">Mohammed </span>
          <span className="glitch-name" data-text="Muzammil">Muzammil</span><br />
          <span className="glitch-name" data-text="C">C</span>
        </h1>
        
        <div className="hero-middle-section">
          <div className="hero-middle-left">
            <p className="hero-tagline animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Building intelligent security systems through <strong className="glow-text">AI</strong>,<br className="hide-mobile" />
              <strong className="glow-text">automation</strong> and modern software.
            </p>
            <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.35s' }}>
              Specializing in SOC Operations, ML-Driven Threat Detection, and Agentic RAG Systems.
            </p>

            <div className="hero-roles-tokens animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="role-token">
                <i className="fa-solid fa-shield-halved" /> Cybersecurity Engineer
              </div>
              <div className="role-token">
                <i className="fa-solid fa-microchip" /> AI Systems Developer
              </div>
              <div className="role-token">
                <i className="fa-brands fa-github" /> Open Source Contributor
              </div>
            </div>

            <div className="hero-cta animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <MagneticButton href="#projects" className="btn btn-primary interactive-btn">
                <span className="btn-glow"></span>
                <span className="btn-text">Explore Work</span>
                <i className="fa-solid fa-arrow-right btn-icon" />
              </MagneticButton>
              <MagneticButton href="/resume.pdf" download className="btn btn-ghost interactive-btn">
                <span className="btn-text">Resume</span>
              </MagneticButton>
              <MagneticButton href="https://github.com/not-muzzyy" target="_blank" rel="noopener noreferrer" className="btn btn-ghost interactive-btn">
                <span className="btn-text">GitHub</span>
              </MagneticButton>
            </div>

            <div className="hero-tech animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <span className="tech-item">Python</span>
              <span className="tech-dot"></span>
              <span className="tech-item">Next.js</span>
              <span className="tech-dot"></span>
              <span className="tech-item">AI</span>
              <span className="tech-dot"></span>
              <span className="tech-item">Cybersecurity</span>
              <span className="tech-dot"></span>
              <span className="tech-item">Docker</span>
            </div>
          </div>


        </div>
      </div>


    </section>
  );
}
