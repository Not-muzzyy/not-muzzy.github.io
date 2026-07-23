'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface Project {
  cat: string;
  icon: string;
  previewLabel: string;
  badge: string;
  badgeClass?: string;
  num: string;
  title: string;
  desc: string;
  tags: { label: string; red?: boolean }[];
  github: string;
  liveApp?: string;
}

const projects: Project[] = [
  {
    cat: 'cybersecurity ai',
    icon: 'fa-solid fa-shield-halved',
    previewLabel: 'PHISHING_DETECTOR.PY',
    badge: 'LIVE',
    badgeClass: 'live',
    num: '01 — Cybersecurity',
    title: 'Phishing Detector',
    desc: 'Intelligent phishing URL detection with 0.97 accuracy. Groq LLaMA + Scikit-learn + Streamlit Cloud. Hinglish support included.',
    tags: [
      { label: 'Python' }, { label: 'Cybersecurity', red: true },
      { label: 'Streamlit' }, { label: 'Groq' }, { label: 'Scikit-learn' },
    ],
    github: 'https://github.com/not-muzzyy',
    liveApp: '#',
  },
  {
    cat: 'ai tools',
    icon: 'fa-solid fa-file-lines',
    previewLabel: 'RESUME_AI.PY',
    badge: 'LIVE',
    badgeClass: 'live',
    num: '02 — AI Tool',
    title: 'ResumeAI',
    desc: 'AI-powered ATS resume checker using Groq LLaMA 3.3 70B. ATS scoring, gap analysis, resume generation, and DOCX download.',
    tags: [
      { label: 'Python' }, { label: 'Streamlit' },
      { label: 'Groq' }, { label: 'LLaMA 3.3' }, { label: 'DOCX' },
    ],
    github: 'https://github.com/not-muzzyy',
    liveApp: '#',
  },
  {
    cat: 'ai',
    icon: 'fa-solid fa-graduation-cap',
    previewLabel: 'EDUSATHI_RAG.PY',
    badge: 'WIP',
    num: '03 — AI + Education',
    title: 'EduSathi',
    desc: 'RAG-based AI study companion for Indian university students. VSKUB question paper analysis, MCQ generation, knowledge gap detection.',
    tags: [
      { label: 'Python' }, { label: 'RAG' },
      { label: 'Groq' }, { label: 'PDF Parsing' }, { label: 'VSKUB' },
    ],
    github: 'https://github.com/not-muzzyy',
  },
  {
    cat: 'cybersecurity tools',
    icon: 'fa-solid fa-tower-broadcast',
    previewLabel: 'MINI_SIEM.PY',
    badge: 'Research',
    num: '04 — Cybersecurity',
    title: 'Mini-SIEM AI',
    desc: 'Lightweight AI-enhanced SIEM for log analysis, anomaly detection, and threat correlation. Designed for small-scale SOC environments.',
    tags: [
      { label: 'SIEM', red: true }, { label: 'Log Analysis', red: true },
      { label: 'Python' }, { label: 'ML' },
    ],
    github: 'https://github.com/not-muzzyy',
  },
];

const filters = ['all', 'ai', 'cybersecurity', 'tools'];

export default function ProjectsSection() {
  const [active, setActive] = useState('all');

  const filtered = projects.filter(
    (p) => active === 'all' || p.cat.includes(active)
  );

  return (
    <section id="projects">
      <div className="section-label">// 03 &mdash; projects</div>
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
            <div className="project-card" key={p.title}>
              <div className="project-preview">
                <i className={`${p.icon} preview-icon`} />
                <span className="preview-label">{p.previewLabel}</span>
              </div>
              <div className="project-body">
                <span className={`badge${p.badgeClass ? ` ${p.badgeClass}` : ''}`}>
                  {p.badge}
                </span>
                <div className="project-num">{p.num}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className={`tag${t.red ? ' red' : ''}`} key={t.label}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub &rarr;
                  </a>
                  {p.liveApp && (
                    <a href={p.liveApp} className="project-link">
                      Live App &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
