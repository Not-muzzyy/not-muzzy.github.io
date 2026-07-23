'use client';

import { useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface ProfBar {
  label: string;
  pct: number;
  red?: boolean;
}

interface SkillGroupData {
  icon: string;
  title: string;
  tags: { label: string; red?: boolean }[];
  bars: ProfBar[];
}

const groups: SkillGroupData[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Languages',
    tags: [
      { label: 'Python' }, { label: 'JavaScript' },
      { label: 'HTML' }, { label: 'CSS' },
      { label: 'Bash' }, { label: 'SQL' },
    ],
    bars: [
      { label: 'Python', pct: 90 },
      { label: 'JavaScript', pct: 70 },
      { label: 'Bash / SQL', pct: 65 },
    ],
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'ML / AI',
    tags: [
      { label: 'Scikit-learn' }, { label: 'Pandas' },
      { label: 'NumPy' }, { label: 'Groq API' },
      { label: 'RAG' }, { label: 'LLM Integration' },
      { label: 'Plotly' },
    ],
    bars: [
      { label: 'Scikit-learn', pct: 85 },
      { label: 'RAG / LLMs', pct: 80 },
    ],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Cybersecurity',
    tags: [
      { label: 'Network Analysis', red: true },
      { label: 'Phishing Detection', red: true },
      { label: 'SIEM', red: true },
      { label: 'TryHackMe', red: true },
      { label: 'HackTheBox', red: true },
      { label: 'Linux', red: true },
    ],
    bars: [
      { label: 'Threat Detection', pct: 80, red: true },
      { label: 'Linux / Tools', pct: 75, red: true },
    ],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Tools & Infra',
    tags: [
      { label: 'Git' }, { label: 'Streamlit' },
      { label: 'VS Code' }, { label: 'Google Cloud' },
      { label: 'Streamlit Cloud' }, { label: 'Folium' },
    ],
    bars: [
      { label: 'Git / GitHub', pct: 88 },
      { label: 'Streamlit', pct: 85 },
    ],
  },
];

export default function SkillsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLDivElement>('.prof-fill').forEach((bar) => {
              bar.style.width = bar.dataset.width + '%';
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.skill-group').forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-label">// 02 &mdash; skills</div>
      <h2 className="section-title">Tech Stack</h2>
      <ScrollReveal>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <div className="skill-group-title">
                <i className={g.icon} /> {g.title}
              </div>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span className={`tag${t.red ? ' red' : ''}`} key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>
              <div className="prof-bars">
                {g.bars.map((b) => (
                  <div className="prof-item" key={b.label}>
                    <div className="prof-label">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="prof-track">
                      <div
                        className={`prof-fill${b.red ? ' red' : ''}`}
                        data-width={b.pct}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
