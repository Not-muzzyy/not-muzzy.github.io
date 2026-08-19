'use client';

import { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface Cert {
  icon: string;
  pending?: boolean;
  date: string;
  title: string;
  sub: string;
  status: string;
  statusPending?: boolean;
  hue: string; // Specific color hue for the minimal styling
  link?: string;
}

const certs: Cert[] = [
  {
    icon: 'fa-brands fa-google',
    date: '2024',
    title: 'Google Cloud Cybersecurity',
    sub: 'Security fundamentals, threat analysis, cloud defense',
    status: 'COMPLETED',
    hue: '210', // Google Blue
    link: '#',
  },
  {
    icon: 'fa-solid fa-robot',
    date: '2025',
    title: 'AI Agents Fundamentals',
    sub: 'HuggingFace - Building and deploying autonomous AI agents',
    status: 'COMPLETED',
    hue: '45', // Yellow/Gold
    link: '#',
  },
  {
    icon: 'fa-solid fa-brain',
    date: '2025',
    title: 'Anthropic — AI Fluency, Claude 101, Claude Code',
    sub: 'AI literacy, Claude API, agentic coding workflows',
    status: 'COMPLETED',
    hue: '20', // Peach/Orange
    link: '#',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    pending: true,
    date: 'Targeting 2026',
    title: 'CEH — Certified Ethical Hacker',
    sub: 'EC-Council',
    status: 'IN PROGRESS',
    statusPending: true,
    hue: '0', // Red/Grey
  },
  {
    icon: 'fa-solid fa-lock',
    pending: true,
    date: 'Targeting 2026',
    title: 'CompTIA Security+',
    sub: 'Industry-standard security certification',
    status: 'IN PROGRESS',
    statusPending: true,
    hue: '150', // Teal
  },
];

function CertCard({ c }: { c: Cert }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`cert-card stagger-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--cert-hue': c.hue } as React.CSSProperties}
    >
      <div className="cert-minimal-glow" aria-hidden="true" />
      <div className="cert-minimal-border" aria-hidden="true" />

      <div className="cert-content">
        <div className={`cert-icon-wrapper${c.pending ? ' pending' : ''}`}>
          <i className={c.icon} />
        </div>
        <div className="cert-details">
          <div className="cert-date">{c.date}</div>
          <div className="cert-title flex items-center gap-2">
            {c.title}
            {c.link && (
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" title="Verify Credential" onClick={(e) => e.stopPropagation()}>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
              </a>
            )}
          </div>
          <div className="cert-sub">{c.sub}</div>
          <span
            className={`cert-badge-tag${c.statusPending ? ' pending' : ''}`}
          >
            <span className="cert-badge-dot" aria-hidden="true" />
            {c.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CertsSection() {
  return (
    <section id="certs">
      <div className="section-label">Credentials</div>
      <h2 className="section-title">Certifications</h2>
      <ScrollReveal>
        <div className="cert-grid">
          {certs.map((c) => (
            <CertCard c={c} key={c.title} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
