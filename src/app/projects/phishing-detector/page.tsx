import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Phishing Detector - ML Case Study',
  description: '4-layer cybersecurity pipeline achieving 97% accuracy across English, Hindi, and Hinglish threat content.',
  alternates: {
    canonical: '/projects/phishing-detector/',
  },
  openGraph: {
    title: 'Phishing Detector - ML Case Study | Mohammed Muzammil C',
    description: '4-layer cybersecurity pipeline achieving 97% accuracy across English, Hindi, and Hinglish threat content.',
    url: 'https://muzzyy.me/projects/phishing-detector/',
    type: 'article',
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://muzzyy.me/projects/phishing-detector/#software",
  "name": "Phishing Detector",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web, Cross-platform",
  "url": "https://muzzyy.me/projects/phishing-detector/",
  "description": "Machine learning system for detecting malicious URLs across English, Hindi, and Hinglish with 97% accuracy on test data.",
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

export default function PhishingDetectorPage() {
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
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Phishing Detector</h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            4-layer cybersecurity pipeline achieving 97% accuracy across English, Hindi, and Hinglish threat content.
          </p>

          <div className="about-grid">
             <div className="about-text-column">
                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What is the Phishing Detector?</h2>
                <div className="about-text">
                  <p>An advanced Machine Learning pipeline designed to evaluate URLs, HTML email content, and text to determine the probability of a phishing attack.</p>
                </div>

                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Problem</h2>
                <div className="about-text">
                  <p>Phishing attacks have evolved to bypass standard heuristic filters. Additionally, many automated detectors fail when analyzing regional or mixed-language threats, such as Hinglish (Hindi + English), which are highly prevalent in the Indian subcontinent.</p>
                </div>
                
                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Results & Evidence</h2>
                <div className="about-text">
                  <p>The model was evaluated against a customized, split dataset consisting of verified benign and malicious sources. On the project&apos;s evaluated test set, it reports:</p>
                </div>
                
                <div className="stat-grid" style={{ marginBottom: '16px' }}>
                  <div className="stat-card">
                    <div className="stat-value">97%</div>
                    <div className="stat-label">Accuracy</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">96%</div>
                    <div className="stat-label">Precision</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">97%</div>
                    <div className="stat-label">Recall</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">97%</div>
                    <div className="stat-label">F1-Score</div>
                  </div>
                </div>
                
                <div className="about-text">
                  <p style={{ fontSize: '0.8rem' }}>* Note: These metrics represent performance on the evaluated dataset and showcase structural ML capabilities rather than enterprise-wide production parity.</p>
                </div>
             </div>
             
             <div className="about-visuals-column">
                <div className="stat-card" style={{ padding: '32px' }}>
                  <div className="stat-value" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Architecture</div>
                  <div className="core-values" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Input: URLs, HTML, Text</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Features: 20+ structural & lexical extracts</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>NLP: English, Hindi & Hinglish support</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Classification: Optimized Scikit-learn</div>
                  </div>
                </div>
                
                <div className="stat-card" style={{ padding: '32px' }}>
                   <div className="stat-value" style={{ fontSize: '1.25rem' }}>Tech Stack</div>
                   <div className="hero-roles-tokens" style={{ marginTop: '16px' }}>
                     <span className="role-token">Python</span>
                     <span className="role-token">Scikit-learn</span>
                     <span className="role-token">Pandas</span>
                     <span className="role-token">NLTK</span>
                     <span className="role-token">Streamlit</span>
                   </div>
                </div>
                
                <a href="https://github.com/Not-muzzyy/phishing-detector-advanced" target="_blank" rel="noopener noreferrer" className="interactive-btn btn-primary" style={{ marginTop: '16px', width: 'fit-content' }}>
                  <span className="btn-text">View Source Code</span>
                  <span className="link-arrow">→</span>
                  <div className="btn-glow" aria-hidden="true"></div>
                </a>
             </div>
          </div>

          <div className="stat-card" style={{ marginTop: '48px', padding: '32px', overflowX: 'auto' }}>
            <h3 className="glow-text" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              Evaluated Benchmark Performance &bull; Multi-Vector Analysis
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text)' }}>
                  <th style={{ padding: '12px 16px' }}>Metric</th>
                  <th style={{ padding: '12px 16px' }}>Score</th>
                  <th style={{ padding: '12px 16px' }}>Evaluated Benchmark Scope</th>
                  <th style={{ padding: '12px 16px', color: 'var(--brand-glow)' }}>Operational Defense Significance</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-dim)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Accuracy</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>97%</td>
                  <td style={{ padding: '12px 16px' }}>Comprehensive multi-source test dataset</td>
                  <td style={{ padding: '12px 16px' }}>High generalizability across common threat categories</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Precision</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>96%</td>
                  <td style={{ padding: '12px 16px' }}>Legitimate domain false-positive testing</td>
                  <td style={{ padding: '12px 16px' }}>Minimizes false-alarm disruption for authorized communications</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>Recall</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>97%</td>
                  <td style={{ padding: '12px 16px' }}>Obfuscated and look-alike domain evasion</td>
                  <td style={{ padding: '12px 16px' }}>Crucial for zero-day credential harvesting attempts</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 500 }}>F1-Score</td>
                  <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>97%</td>
                  <td style={{ padding: '12px 16px' }}>Multilingual English, Hindi, Hinglish threats</td>
                  <td style={{ padding: '12px 16px' }}>Harmonized balance between sensitivity and specificity</td>
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
