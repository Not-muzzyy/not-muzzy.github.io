import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mini-SIEM AI Case Study | Mohammed Muzammil C',
  description: 'AI-powered Security Information and Event Management system with ML attack classification, automated risk scoring, and SHAP explainability.',
};

export default function MiniSiemPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow px-6 max-w-3xl mx-auto w-full py-12">
          <div className="mb-12">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Project Case Study
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Mini-SIEM AI
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              AI-powered Security Information and Event Management system with ML attack classification, automated risk scoring, and SHAP explainability.
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>What is Mini-SIEM AI?</h2>
              <p>
                Mini-SIEM AI is a lightweight, intelligent Security Information and Event Management (SIEM) tool designed to monitor logs, classify cyber attacks using Machine Learning, and automatically generate narrative incident reports using LLMs.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Problem</h2>
              <p>
                Traditional SOC analysts spend roughly 45 minutes manually triaging a single complex alert. Legacy SIEMs rely on static regex rules that generate high false-positive rates and offer "black-box" alerts with little explanation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Solution & Architecture</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Log Ingestion:</strong> Real-time streaming and parsing of network/system logs.</li>
                <li><strong>ML Classifier:</strong> Ensemble model replacing static regex to classify attack vectors dynamically.</li>
                <li><strong>Risk Scoring:</strong> Automated severity assessment based on anomaly thresholds.</li>
                <li><strong>SHAP Explainability:</strong> Calculates feature contribution values to mathematically prove <em>why</em> an alert was triggered.</li>
                <li><strong>Incident Reporting:</strong> Groq LLaMA 3.1 synthesizes the technical data into sub-second, human-readable narrative reports for analysts.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Technology Stack</h2>
              <p>
                Python, Streamlit, Scikit-learn, SHAP, Pandas, Groq API (LLaMA).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Repository & Links</h2>
              <p>
                <a href="https://github.com/not-muzzyy/mini-siem-ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-glow)', textDecoration: 'none' }}>View Source Code on GitHub</a>
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Author</h2>
              <p>
                Mohammed Muzammil C
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
