'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <span className="logo-text">Muzammil</span>
        <span className="logo-dot"></span>
        <span className="logo-text">C</span>
      </Link>

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
          <Link href="/#about" style={{ '--nav-hue': '150' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/#skills" style={{ '--nav-hue': '270' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/#projects" style={{ '--nav-hue': '210' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog/" style={{ '--nav-hue': '160' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/#certs" style={{ '--nav-hue': '45' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Certs
          </Link>
        </li>
        <li>
          <Link href="/#contact" style={{ '--nav-hue': '0' } as React.CSSProperties} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav-border-glow" />
    </nav>
  );
}
