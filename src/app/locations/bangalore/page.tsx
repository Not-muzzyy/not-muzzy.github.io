import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SOC Analyst in Bengaluru | Cybersecurity Engineer - Mohammed Muzammil C',
  description: 'Mohammed Muzammil C is a Cybersecurity Engineer available for SOC Analyst and Applied AI roles in Bengaluru (Bangalore), Karnataka.',
  alternates: {
    canonical: '/locations/bangalore/',
  }
};

export default function BangaloreLocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mohammed Muzammil C - Cybersecurity Services",
    "image": "https://muzzyy.me/favicon.ico",
    "description": "Cybersecurity Engineer, SOC Analyst, and AI Systems Developer serving Bangalore / Bengaluru.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "url": "https://muzzyy.me/locations/bangalore"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Mohammed Muzammil C available for SOC Analyst roles in Bangalore (Bengaluru)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mohammed Muzammil C is actively seeking and available for on-site, hybrid, and remote SOC Analyst and Cybersecurity Engineering roles based in Bangalore."
        }
      },
      {
        "@type": "Question",
        "name": "What AI and Cybersecurity skills does he bring to Bangalore tech companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "He brings production-level expertise in RAG pipelines, LangChain, FAISS, SIEM administration, Groq LLaMA integration, and machine learning for threat detection."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen pt-24 pb-12 flex flex-col">
        <Navbar />
        
        <section className="py-24 px-6 max-w-4xl mx-auto flex-grow">
          <div className="mb-16">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Local Availability
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Cybersecurity Engineer & SOC Analyst for Bangalore
            </h1>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '700px' }}>
              Available for full-time, on-site, and hybrid opportunities in Bangalore (Bengaluru). Specializing in AI-augmented security systems, SOC monitoring, and production ML pipelines for enterprise environments.
            </p>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Expertise for Bangalore Enterprises</h2>
            <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'disc', paddingLeft: '20px' }}>
              <li><strong>Immediate Availability:</strong> Ready to relocate or join hybrid teams operating out of India's tech capital.</li>
              <li><strong>Advanced AI Integration:</strong> Assisting security teams in transitioning from rigid regex rules to explainable ML models (SHAP).</li>
              <li><strong>Security Operations Center:</strong> Proficient in Tier 1 & Tier 2 triage, SIEM (Splunk/Elastic), and automated incident reporting using LLMs.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Frequently Asked Questions (Bangalore)</h2>
            <dl className="space-y-8">
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  Is Mohammed Muzammil C available for SOC Analyst roles in Bangalore (Bengaluru)?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Yes, Mohammed Muzammil C is actively seeking and available for on-site, hybrid, and remote SOC Analyst and Cybersecurity Engineering roles based in Bangalore.
                </dd>
              </div>
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  Can he build RAG (Retrieval-Augmented Generation) systems?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Absolutely. He has built production-grade systems like EduSathi utilizing FAISS, recursive text chunking, LangChain, and Groq inference models for sub-second retrieval.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
