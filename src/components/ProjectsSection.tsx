'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface Project {
  cat: string;
  badge: string;
  badgeClass?: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  liveApp?: string;
  caseStudy?: string;
  accent: string; // Hue value for minimal color splash
}

const projects: Project[] = [
  {
    cat: 'ai',
    badge: 'LIVE',
    badgeClass: 'live',
    num: '01',
    title: 'EduSathi',
    desc: 'Production-grade AI study companion using RAG, FAISS, and LangChain. Features dual-portal RBAC and a PDF ingestion pipeline for Indian university curriculum.',
    tags: ['Python', 'RAG', 'LangChain', 'FAISS', 'Groq API'],
    github: 'https://github.com/Not-muzzyy/edusathi',
    caseStudy: '/projects/edusaathi/',
    accent: '150', // Minimal teal
  },
  {
    cat: 'cybersecurity ai',
    badge: 'Research',
    num: '02',
    title: 'Mini-SIEM AI',
    desc: 'AI-powered SIEM for SOC-style monitoring. Features ML attack classification, automated risk scoring, and SHAP explainability with Groq narrative incident reports.',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'SHAP', 'Groq'],
    github: 'https://github.com/Not-muzzyy/mini-siem-ai',
    caseStudy: '/projects/mini-siem-ai/',
    accent: '270', // Minimal purple
  },
  {
    cat: 'cybersecurity ai',
    badge: 'LIVE',
    badgeClass: 'live',
    num: '03',
    title: 'Phishing Detector',
    desc: '3-layer ML phishing detection pipeline achieving 97% accuracy for English/Hindi/Hinglish. Extracts 20+ URL features evaluated via ensemble methods.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NLP'],
    github: 'https://github.com/Not-muzzyy/phishing-detector-advanced',
    caseStudy: '/projects/phishing-detector/',
    accent: '210', // Minimal blue
  },
  {
    cat: 'ai tools',
    badge: 'Hackathon',
    num: '04',
    title: 'Virtual Pollution Intel Grid',
    desc: 'Interactive geospatial dashboard with AI 7-day risk forecasting and anomaly detection. Built in 24 hours at Chakravyuha 3.0 Hackathon.',
    tags: ['Python', 'Folium', 'Plotly', 'Streamlit'],
    github: 'https://github.com/Not-muzzyy/virtual-pollution-intelligence-grid',
    caseStudy: '/projects/virtual-pollution-grid/',
    accent: '30', // Minimal amber
  }
];

const filters = ['all', 'ai', 'cybersecurity', 'tools'];

function ProjectCard({ p }: { p: Project }) {
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
      className={`project-card stagger-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--proj-hue': p.accent } as React.CSSProperties}
    >
      <div className="project-minimal-glow" aria-hidden="true" />
      <div className="project-minimal-border" aria-hidden="true" />
      
      <div className="project-content">
        <div className="project-header">
          <span className="project-num">{p.num}</span>
          <span className={`badge${p.badgeClass ? ` ${p.badgeClass}` : ''}`}>
            {p.badge}
          </span>
        </div>
        <div className="project-title-wrapper">
          <div className="project-title">{p.title}</div>
          <div className="project-title-underline" aria-hidden="true" />
        </div>
        <div className="project-desc">{p.desc}</div>
        <div className="project-tags">
          {p.tags.map((t) => (
            <span className="project-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          {p.caseStudy && (
            <Link
              href={p.caseStudy}
              className="project-link"
            >
              <span className="link-text">Case Study</span>
              <span className="link-arrow">→</span>
            </Link>
          )}
          <a
            href={p.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-text">GitHub</span>
            <span className="link-arrow">→</span>
          </a>
          {p.liveApp && (
            <a href={p.liveApp} className="project-link">
              <span className="link-text">Live</span>
              <span className="link-arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState('all');

  const filtered = projects.filter(
    (p) => active === 'all' || p.cat.includes(active)
  );

  return (
    <section id="projects">
      <div className="section-label">Work</div>
      <h2 className="section-title">Projects</h2>

      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ScrollReveal>
        <div className="projects-grid">
          {filtered.map((p) => (
            <ProjectCard p={p} key={p.title} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
