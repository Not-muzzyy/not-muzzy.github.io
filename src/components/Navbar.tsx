'use client';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <span className="logo-text">Muzammil</span>
        <span className="logo-dot"></span>
        <span className="logo-text">C</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about" style={{ '--nav-hue': '150' } as React.CSSProperties}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" style={{ '--nav-hue': '270' } as React.CSSProperties}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" style={{ '--nav-hue': '210' } as React.CSSProperties}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certs" style={{ '--nav-hue': '45' } as React.CSSProperties}>
            Certs
          </a>
        </li>
        <li>
          <a href="#contact" style={{ '--nav-hue': '0' } as React.CSSProperties}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-border-glow" />
    </nav>
  );
}
