import React from "react"; 

export default function Footer() { 
  return ( 
    <footer role="contentinfo" className="footer-container"> 
      <div className="footer-glow-line" />
      <div className="footer-content" style={{ flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: '24px' }}>
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}> 
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span className="footer-name" style={{ fontSize: '1.2rem' }}>Muzammil C</span> 
              <span className="footer-year" style={{ color: 'var(--text-dim)' }}>&copy; {new Date().getFullYear()}</span> 
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '8px' }}> 
              Built with Next.js & TypeScript<br/>Ballari, Karnataka, India (583101) 
            </p> 
          </div> 
          
          <nav aria-label="Footer Navigation" className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}> 
            <a href="#about" style={{ textDecoration: 'none' }}>About</a> 
            <a href="#skills" style={{ textDecoration: 'none' }}>Skills</a> 
            <a href="#projects" style={{ textDecoration: 'none' }}>Projects</a> 
            <a href="#faq" style={{ textDecoration: 'none' }}>FAQ</a> 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Resume</a> 
            <a href="#hero" style={{ color: 'var(--brand-glow)' }}>Back to Top &uarr;</a>
          </nav> 
        </div>
      </div> 
    </footer> 
  ); 
}
