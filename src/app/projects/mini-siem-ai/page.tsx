import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mini-SIEM AI - SOC Case Study',
  description: 'AI-powered Security Information and Event Management system with ML attack classification, automated risk scoring, and SHAP explainability.',
  alternates: {
    canonical: '/projects/mini-siem-ai/',
  },
  openGraph: {
    title: 'Mini-SIEM AI - SOC Case Study | Mohammed Muzammil C',
    description: 'AI-powered Security Information and Event Management system with ML attack classification, automated risk scoring, and SHAP explainability.',
    url: 'https://muzzyy.me/projects/mini-siem-ai/',
    type: 'article',
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://muzzyy.me/projects/mini-siem-ai/#software",
  "name": "Mini-SIEM AI",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web, Cross-platform",
  "url": "https://muzzyy.me/projects/mini-siem-ai/",
  "description": "AI-powered SIEM platform featuring ML attack classification, automated risk scoring, SHAP explainability, and Groq incident report generation.",
  "author": {
    "@type": "Person",
    "name": "Mohammed Muzammil C",
    "url": "https://muzzyy.me/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function MiniSiemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow">
          <div className="section-label">Case Study</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Mini-SIEM AI</h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            AI-powered Security Information and Event Management system with ML attack classification, automated risk scoring, and SHAP explainability.
          </p>

          <div className="about-grid">
             <div className="about-text-column">
                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What is Mini-SIEM AI?</h2>
                <div className="about-text">
                  <p>Mini-SIEM AI is a lightweight, intelligent Security Information and Event Management (SIEM) tool designed to monitor logs, classify cyber attacks using Machine Learning, and automatically generate narrative incident reports using LLMs.</p>
                </div>

                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Problem</h2>
                <div className="about-text">
                  <p>Traditional SOC analysts spend roughly 45 minutes manually triaging a single complex alert. Legacy SIEMs rely on static regex rules that generate high false-positive rates and offer &quot;black-box&quot; alerts with little explanation.</p>
                </div>
             </div>
             
             <div className="about-visuals-column">
                <div className="stat-card" style={{ padding: '32px' }}>
                  <div className="stat-value" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Architecture & Solution</div>
                  <div className="core-values" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Ingestion: Real-time network logs</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>ML Classifier: Ensemble attack classification</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Risk Scoring: Automated severity assessment</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Explainability: SHAP feature contribution</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Reporting: Groq LLM sub-second narratives</div>
                  </div>
                </div>
                
                <div className="stat-card" style={{ padding: '32px' }}>
                   <div className="stat-value" style={{ fontSize: '1.25rem' }}>Tech Stack</div>
                   <div className="hero-roles-tokens" style={{ marginTop: '16px' }}>
                     <span className="role-token">Python</span>
                     <span className="role-token">Streamlit</span>
                     <span className="role-token">Scikit-learn</span>
                     <span className="role-token">SHAP</span>
                     <span className="role-token">Pandas</span>
                     <span className="role-token">Groq API</span>
                   </div>
                </div>
                
                <a href="https://github.com/Not-muzzyy/mini-siem-ai" target="_blank" rel="noopener noreferrer" className="interactive-btn btn-primary" style={{ marginTop: '16px', width: 'fit-content' }}>
                  <span className="btn-text">View Source Code</span>
                  <span className="link-arrow">→</span>
                  <div className="btn-glow" aria-hidden="true"></div>
                </a>
             </div>
          </div>

          <div className="stat-card" style={{ marginTop: '48px', padding: '32px', overflowX: 'auto' }}>
            <h3 className="glow-text" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              SOC Triage Benchmark &bull; Comparative Analysis
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text)' }}>
                  <th style={{ padding: '12px 16px' }}>Dimension</th>
                  <th style={{ padding: '12px 16px' }}>Traditional Rule-Based SIEM</th>
                  <th style={{ padding: '12px 16px', color: 'var(--brand-glow)' }}>Mini-SIEM AI Architecture</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-dim)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Detection Engine</td>
                  <td style={{ padding: '12px 16px' }}>Static regex &amp; threshold alerts (high fatigue)</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)' }}>Multi-class Scikit-learn ML classifier</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Alert Transparency</td>
                  <td style={{ padding: '12px 16px' }}>Cryptic raw log dumps (black-box)</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)' }}>Mathematical SHAP feature attribution</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Triage Turnaround</td>
                  <td style={{ padding: '12px 16px' }}>30–45 minutes manual triage per incident</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)' }}>Sub-second Groq LLaMA narrative summaries</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Threat Mapping</td>
                  <td style={{ padding: '12px 16px' }}>Manual analyst cross-referencing</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)' }}>Automated severity risk scoring &amp; classification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
