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
            <Link href="/blog/" style={{ textDecoration: 'none' }}>Blog</Link> 
            <Link href="/faq/" style={{ textDecoration: 'none' }}>FAQ</Link> 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Resume</a> 
          </nav> 

          <nav aria-label="Project Case Studies" className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}> 
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)', fontWeight: 600, marginBottom: '4px' }}>Case Studies</span>
            <Link href="/projects/edusaathi/" style={{ textDecoration: 'none' }}>EduSathi RAG</Link> 
            <Link href="/projects/mini-siem-ai/" style={{ textDecoration: 'none' }}>Mini-SIEM AI</Link> 
            <Link href="/projects/phishing-detector/" style={{ textDecoration: 'none' }}>Phishing Detector</Link> 
            <Link href="/projects/virtual-pollution-grid/" style={{ textDecoration: 'none' }}>Pollution Grid</Link> 
          </nav> 
          
          <nav aria-label="Service Areas & Legal" className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}> 
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)', fontWeight: 600, marginBottom: '4px' }}>Service Areas</span>
            <Link href="/locations/ballari/" style={{ textDecoration: 'none' }}>Ballari (Local)</Link> 
            <Link href="/locations/bangalore/" style={{ textDecoration: 'none' }}>Bengaluru</Link> 
            <Link href="/locations/hospet/" style={{ textDecoration: 'none' }}>Hospet</Link> 
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)', fontWeight: 600, marginTop: '8px', marginBottom: '4px' }}>Legal</span>
            <Link href="/privacy-policy/" style={{ textDecoration: 'none' }}>Privacy Policy</Link> 
            <Link href="/terms/" style={{ textDecoration: 'none' }}>Terms of Service</Link> 
          </nav> 
        </div>
        
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            <Link href="/privacy-policy/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy</Link>
            <span>&bull;</span>
            <Link href="/terms/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms</Link>
            <span>&bull;</span>
            <Link href="/sitemap.xml" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Sitemap</Link>
          </div>
          <Link href="/" style={{ color: 'var(--brand-glow)', textDecoration: 'none', fontSize: '0.85rem' }}>Back to Home &uarr;</Link>
        </div>
      </div> 
    </footer> 
  ); 
}
