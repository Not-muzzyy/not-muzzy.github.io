'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const outputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = 'building EduSathi & open to opportunities';
    let idx = 0;
    const timer = setTimeout(function type() {
      if (outputRef.current && idx < text.length) {
        outputRef.current.textContent += text[idx];
        idx++;
        setTimeout(type, 40);
      }
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <div className="hero-tag">// Initializing profile...</div>
      <h1 className="hero-name">
        Muzammil<br />
        <span className="accent">C</span>
      </h1>
      <p className="hero-role">
        Security Analyst &nbsp;/&nbsp; ML Engineer &nbsp;/&nbsp;
        <span>Final Year BCA</span>
      </p>

      <div className="terminal-box">
        <div className="term-header">
          <div className="term-dot r" />
          <div className="term-dot y" />
          <div className="term-dot g" />
        </div>
        <div className="term-line">
          <span className="prompt">$</span>
          <span className="cmd">whoami</span>
        </div>
        <div className="term-line">
          <span className="out">muzammil_c :: cybersecurity + ml :: bellary, karnataka</span>
        </div>
        <div className="term-line">
          <span className="prompt">$</span>
          <span className="cmd">cat interests.txt</span>
        </div>
        <div className="term-line">
          <span className="out">SOC analysis, threat detection, RAG systems, AI tooling</span>
        </div>
        <div className="term-line">
          <span className="prompt">$</span>
          <span className="cmd">status --current</span>
        </div>
        <div className="term-line">
          <span className="out">
            <span ref={outputRef} />
            <span className="cursor-blink" />
          </span>
        </div>
      </div>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          <i className="fa-solid fa-code" /> View Projects
        </a>
        <a href="/resume.pdf" download className="btn btn-outline">
          <i className="fa-solid fa-download" /> Resume
        </a>
        <a href="#contact" className="btn btn-ghost">
          Contact Me
        </a>
      </div>

      <div className="visitor-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://komarev.com/ghpvc/?username=not-muzzyy&color=00ff41&style=flat-square&label=PROFILE+VIEWS"
          alt="Visitor Count"
          loading="lazy"
        />
      </div>
    </section>
  );
}
