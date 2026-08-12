'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <span className="logo-text">Muzammil</span>
        <span className="logo-dot"></span>
        <span className="logo-text">C</span>
      </div>

      <button 
        className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li>
          <a href="#about" style={{ '--nav-hue': '150' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" style={{ '--nav-hue': '270' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" style={{ '--nav-hue': '210' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certs" style={{ '--nav-hue': '45' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Certs
          </a>
        </li>
        <li>
          <a href="#contact" style={{ '--nav-hue': '0' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-border-glow" />
    </nav>
  );
}
