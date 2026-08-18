import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Phishing Detector Case Study | Mohammed Muzammil C',
  description: '4-layer cybersecurity pipeline achieving 97% accuracy across English, Hindi, and Hinglish threat content.',
};

export default function PhishingDetectorPage() {
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
              Phishing Detector Advanced
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              4-layer cybersecurity pipeline achieving 97% accuracy across English, Hindi, and Hinglish threat content.
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>What is the Phishing Detector?</h2>
              <p>
                An advanced Machine Learning pipeline designed to evaluate URLs, HTML email content, and text to determine the probability of a phishing attack.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Problem</h2>
              <p>
                Phishing attacks have evolved to bypass standard heuristic filters. Additionally, many automated detectors fail when analyzing regional or mixed-language threats, such as Hinglish (Hindi + English), which are highly prevalent in the Indian subcontinent.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Architecture</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Multi-modal Input:</strong> Processes raw text, complete URLs, HTML emails, and SMTP headers.</li>
                <li><strong>Feature Engineering:</strong> Extracts over 20 structural, domain-age, and lexical features from URLs.</li>
                <li><strong>Multilingual NLP:</strong> Trained to handle English, Hindi, and Hinglish semantic structures.</li>
                <li><strong>Classification:</strong> Utilizes optimized Scikit-learn algorithms for high-confidence predictions.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Results & Evidence</h2>
              <p>
                The model was evaluated against a customized, split dataset consisting of verified benign and malicious sources. On the project's evaluated test set, it reports:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong>Accuracy:</strong> 97%</li>
                <li><strong>Precision:</strong> 96%</li>
                <li><strong>Recall:</strong> 97%</li>
                <li><strong>F1-Score:</strong> 97%</li>
              </ul>
              <p className="mt-4 text-sm italic">
                * Note: These metrics represent performance on the evaluated dataset and showcase structural ML capabilities rather than enterprise-wide production parity.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Technology Stack</h2>
              <p>
                Python, Scikit-learn, Pandas, NLTK, Streamlit.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Repository & Links</h2>
              <p>
                <a href="https://github.com/not-muzzyy/phishing-detector-advanced" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-glow)', textDecoration: 'none' }}>View Source Code on GitHub</a>
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
