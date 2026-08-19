import React from "react"; 
import Link from 'next/link';

export default function Footer() { 
  return ( 
    <footer role="contentinfo" className="footer-container"> 
      <div className="footer-glow-line" />
      <div className="footer-content" style={{ flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', width: '100%', gap: '48px' }}>
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}> 
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span className="footer-name" style={{ fontSize: '1.2rem' }}>Muzammil C</span> 
              <span className="footer-year" style={{ color: 'var(--text-dim)' }}>&copy; {new Date().getFullYear()}</span> 
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '8px' }}> 
              Built with Next.js & TypeScript<br/>Ballari, Karnataka, India (583101) 
            </p> 
          </div> 
          
          <nav aria-label="Footer Navigation" className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}> 
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)', fontWeight: 600, marginBottom: '4px' }}>Navigation</span>
            <Link href="/#about" style={{ textDecoration: 'none' }}>About</Link> 
            <Link href="/#skills" style={{ textDecoration: 'none' }}>Skills</Link> 
            <Link href="/#projects" style={{ textDecoration: 'none' }}>Projects</Link> 
            <Link href="/faq/" style={{ textDecoration: 'none' }}>FAQ</Link> 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Resume</a> 
          </nav> 
          
          <nav aria-label="Service Areas" className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}> 
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)', fontWeight: 600, marginBottom: '4px' }}>Service Areas</span>
            <Link href="/locations/ballari/" style={{ textDecoration: 'none' }}>Ballari (Local)</Link> 
            <Link href="/locations/bangalore/" style={{ textDecoration: 'none' }}>Bengaluru</Link> 
            <Link href="/locations/hospet/" style={{ textDecoration: 'none' }}>Hospet</Link> 
          </nav> 
        </div>
        
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
          <Link href="/" style={{ color: 'var(--brand-glow)', textDecoration: 'none', fontSize: '0.85rem' }}>Back to Home &uarr;</Link>
        </div>
      </div> 
    </footer> 
  ); 
}
