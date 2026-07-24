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
                  <div className="timeline-dot" style={{ background: 'hsla(270, 70%, 60%, 1)' }}></div>
                  <div className="timeline-content">
                    <div className="timeline-year">2023 &mdash; 2026</div>
                    <div className="timeline-title">BCA Graduate</div>
                    <div className="timeline-desc">Nandi Institute of Management and Science, Bellary. Specializing in AI, Machine Learning, and Cybersecurity.</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot" style={{ background: 'hsla(150, 70%, 60%, 1)' }}></div>
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
