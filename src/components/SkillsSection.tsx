'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface SkillTag {
  name: string;
  proficiency: number;
}

interface SkillGroupData {
  title: string;
  icon: string;
  tags: SkillTag[];
  accent: string; // HSL hue
  accentColor: string; // full HSL color string
}

const groups: SkillGroupData[] = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    tags: [
      { name: 'Python (Adv)', proficiency: 95 },
      { name: 'R', proficiency: 75 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'HTML/CSS', proficiency: 90 },
      { name: 'SQL', proficiency: 85 },
      { name: 'Bash', proficiency: 70 }
    ],
    accent: '190',
    accentColor: 'hsl(190, 90%, 55%)',
  },
  {
    title: 'AI / ML',
    icon: '◈',
    tags: [
      { name: 'Scikit-learn', proficiency: 90 },
      { name: 'Pandas / NumPy', proficiency: 95 },
      { name: 'LangChain', proficiency: 85 },
      { name: 'FAISS & RAG', proficiency: 90 },
      { name: 'NLP & SHAP', proficiency: 80 }
    ],
    accent: '270',
    accentColor: 'hsl(270, 80%, 65%)',
  },
  {
    title: 'LLMs & Tools',
    icon: '⚙',
    tags: [
      { name: 'Groq & LLaMA', proficiency: 95 },
      { name: 'Anthropic Claude', proficiency: 90 },
      { name: 'OpenAI GPT-4o', proficiency: 85 },
      { name: 'Streamlit & Flask', proficiency: 90 },
      { name: 'Git & Cloud Platform', proficiency: 85 }
    ],
    accent: '35',
    accentColor: 'hsl(35, 90%, 60%)',
  },
  {
    title: 'Cybersecurity',
    icon: '⛊',
    tags: [
      { name: 'SOC & Threat Analysis', proficiency: 85 },
      { name: 'Network Security', proficiency: 90 },
      { name: 'Ethical Hacking', proficiency: 80 },
      { name: 'Malware Analysis', proficiency: 75 },
      { name: 'SIEM Fundamentals', proficiency: 85 }
    ],
    accent: '155',
    accentColor: 'hsl(155, 75%, 50%)',
  },
];

function FloatingOrbs({ hue }: { hue: string }) {
  return (
    <div className="skill-orbs" aria-hidden="true">
      <div
        className="skill-orb skill-orb-1"
        style={{
          background: `radial-gradient(circle, hsla(${hue}, 80%, 55%, 0.12) 0%, transparent 70%)`,
        }}
      />
      <div
        className="skill-orb skill-orb-2"
        style={{
          background: `radial-gradient(circle, hsla(${hue}, 70%, 50%, 0.08) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

function SkillCard({ group, index }: { group: SkillGroupData; index: number }) {
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
      className={`skill-group stagger-item ${isHovered ? 'skill-group--active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        {
          '--skill-accent': group.accentColor,
          '--skill-hue': group.accent,
        } as React.CSSProperties
      }
    >
      <FloatingOrbs hue={group.accent} />

      {/* Glow border overlay */}
      <div className="skill-glow-border" aria-hidden="true" />

      {/* Cursor follow glow */}
      <div className="skill-cursor-glow" aria-hidden="true" />

      <div className="skill-group-header">
        <span className="skill-group-icon">{group.icon}</span>
        <div className="skill-group-title">{group.title}</div>
        <span className="skill-group-count">{group.tags.length}</span>
      </div>

      <div className="skill-tags">
        {group.tags.map((t, i) => (
          <div
            className="skill-item-container"
            key={t.name}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="tag skill-tag">
              <span className="tag-dot" />
              {t.name}
            </span>
            <div className="skill-heatmap-track">
              <div 
                className="skill-heatmap-fill" 
                style={{ width: `${t.proficiency}%`, background: group.accentColor }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title">Tech Stack</h2>
      <ScrollReveal>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <SkillCard group={g} index={i} key={g.title} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
