'use client';

import { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

function StatCard({ num, label, hue }: { num: string; label: string; hue: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`stat-card stagger-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--stat-hue': hue } as React.CSSProperties}
    >
      <div className="stat-minimal-glow" aria-hidden="true" />
      <div className="stat-minimal-border" aria-hidden="true" />
      <div className="stat-content">
        <div className="stat-num">{num}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2 className="section-title">Who I Am</h2>
      <ScrollReveal>
        <div className="about-grid">
          <div className="about-text-column">
            <div className="status-badge stagger-item">
              <span className="status-dot" aria-hidden="true"></span>
              <span className="status-text">Available for SOC & ML Roles</span>
            </div>

            <div className="about-text">
              <p className="stagger-item">
                I&apos;m <strong className="highlight-blue">Mohammed Muzammil C</strong> — a BCA graduate
                building at the intersection of <strong className="highlight-purple">AI</strong>,{' '}
                <strong className="highlight-teal">full-stack development</strong>,{' '}
                <strong className="highlight-emerald">cybersecurity</strong>, and <strong className="highlight-amber">design</strong>.
              </p>
              <p className="stagger-item">
                I turn complex ideas into simple, scalable products — from
                AI-powered applications and intelligent automation to modern web
                solutions and secure systems. Every project starts with
                performance, usability, and real-world impact in mind.
              </p>
              <p className="stagger-item">
                I believe great software isn&apos;t just technically sound — it
                should be accessible, efficient, and genuinely useful. I
                continuously push my boundaries through hackathons, emerging
                technologies, and products that solve meaningful problems.
              </p>
              <div className="stagger-item mt-6 p-4 rounded-lg bg-white/[0.03] border border-white/[0.08]" style={{ fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                  At A Glance &bull; Quick Facts
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 16px', color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--text)' }}><strong>Target Roles:</strong></span>
                  <span>Cybersecurity Engineer, SOC Analyst, Applied AI Developer</span>
                  <span style={{ color: 'var(--text)' }}><strong>Specialization:</strong></span>
                  <span>SOC Threat Monitoring, SIEM Systems, RAG Architectures</span>
                  <span style={{ color: 'var(--text)' }}><strong>Locations:</strong></span>
                  <span>Ballari (Local), Bengaluru, Hyderabad &amp; Global Remote</span>
                  <span style={{ color: 'var(--text)' }}><strong>Education:</strong></span>
                  <span>BCA, Nandi Institute of Management &amp; Science (NIMS Ballari)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-3 border border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[var(--brand-glow)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md" />
                <span className="relative font-medium text-[var(--text)] text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                  VIEW RESUME
                </span>
              </a>
            </div>

            <div className="core-values stagger-item">
              <div className="value-item">
                <i className="fa-solid fa-shield-cat value-icon" />
                <span>Security-First</span>
              </div>
              <div className="value-item">
                <i className="fa-solid fa-bolt value-icon" />
                <span>Performance</span>
              </div>
              <div className="value-item">
                <i className="fa-solid fa-wand-magic-sparkles value-icon" />
                <span>Intuitive UX</span>
              </div>
            </div>
          </div>

          <div className="about-visuals-column">
            <div className="stat-grid">
              <StatCard num="0.97" label="Phishing Accuracy" hue="210" />
              <StatCard num="4+" label="Live Projects" hue="270" />
              <StatCard num="3+" label="AI/Cloud Certs" hue="45" />
              <StatCard num="SOC" label="Target Role" hue="150" />
            </div>

            <ScrollReveal>
              <div className="timeline-container stagger-item">
                <div className="timeline-item">
                  <div className="timeline-dot" style={{ background: 'var(--brand-glow)' }}></div>
                  <div className="timeline-content">
                    <div className="timeline-year">2023 &mdash; 2026</div>
                    <div className="timeline-title">BCA Graduate</div>
                    <div className="timeline-desc">Nandi Institute of Management and Science, Bellary. Specializing in AI, Machine Learning, and Cybersecurity.</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" style={{ background: 'var(--accent)' }}></div>
                  <div className="timeline-content">
                    <div className="timeline-year">Present</div>
                    <div className="timeline-title">Security & AI Developer</div>
                    <div className="timeline-desc">Building production-grade AI tools (EduSathi, Mini-SIEM) and exploring SOC analysis, threat intelligence, and ethical hacking.</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="github-stats-container stagger-item">
                <div className="github-stats-glow" aria-hidden="true" />
                <div className="github-stats">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=not-muzzyy&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=e8e8e8&icon_color=555555&text_color=888888"
                    alt="GitHub Stats"
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ghchart.rshah.org/555555/not-muzzyy"
                    alt="GitHub Contributions"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
