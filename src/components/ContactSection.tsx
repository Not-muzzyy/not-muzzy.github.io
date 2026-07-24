'use client';

import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

function ContactLink({
  href,
  icon,
  text,
  hue,
  delay,
}: {
  href: string;
  icon: string;
  text: string;
  hue: string;
  delay: number;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      link.style.setProperty('--mouse-x', `${x}px`);
      link.style.setProperty('--mouse-y', `${y}px`);
    };

    link.addEventListener('mousemove', handleMouseMove);
    return () => link.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className="contact-link stagger-item"
      style={
        {
          '--contact-hue': hue,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
    >
      <div className="contact-minimal-glow" aria-hidden="true" />
      <div className="contact-icon-wrapper">
        <i className={icon} />
      </div>
      <span className="contact-text">{text}</span>
      <span className="contact-arrow">↗</span>
    </a>
  );
}

function CopyEmailLink({ email, hue, delay }: { email: string; hue: string; delay: number }) {
  const linkRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      link.style.setProperty('--mouse-x', `${x}px`);
      link.style.setProperty('--mouse-y', `${y}px`);
    };

    link.addEventListener('mousemove', handleMouseMove);
    return () => link.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      ref={linkRef}
      onClick={handleCopy}
      className={`contact-link stagger-item ${copied ? 'copied' : ''}`}
      style={
        {
          '--contact-hue': copied ? '150' : hue, // Green when copied
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
    >
      <div className="contact-minimal-glow" aria-hidden="true" />
      <div className="contact-icon-wrapper">
        <i className={copied ? "fa-solid fa-check" : "fa-solid fa-envelope"} />
      </div>
      <span className="contact-text">{copied ? 'Email Copied!' : email}</span>
      <span className="contact-arrow">{copied ? '✓' : '↗'}</span>
    </button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-label">Connect</div>
      <h2 className="section-title">Get In Touch</h2>
      <ScrollReveal>
        <div className="contact-grid">
          <div className="contact-desc">
            <div className="contact-desc-glow" aria-hidden="true" />
            <div className="status-badge stagger-item" style={{ marginBottom: '32px' }}>
              <span className="status-dot" aria-hidden="true"></span>
              <span className="status-text">Available for Hire</span>
            </div>
            <p>
              Open to <strong>SOC analyst</strong> roles,{' '}
              <strong>ML internships</strong>, and{' '}
              <strong>collaboration</strong> on security or AI projects.
            </p>
            <p>
              If you&apos;re building something interesting, let&apos;s talk.
            </p>
          </div>
          <div className="contact-links">
            <ContactLink
              href="https://linkedin.com/in/muzzammilc7"
              icon="fa-brands fa-linkedin"
              text="linkedin.com/in/muzzammilc7"
              hue="210" // LinkedIn Blue
              delay={0}
            />
            <ContactLink
              href="https://github.com/not-muzzyy"
              icon="fa-brands fa-github"
              text="github.com/not-muzzyy"
              hue="0" // Monochrome / White
              delay={0.1}
            />
            <CopyEmailLink
              email="mohammedmuzammil643@gmail.com"
              hue="35" // Amber / Gold
              delay={0.2}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
