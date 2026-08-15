import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SOC Analyst & Cybersecurity Engineer in Ballari | Mohammed Muzammil C',
  description: 'Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer located in Ballari, Karnataka. Available for local and remote SOC Analyst roles.',
};

export default function BallariLocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mohammed Muzammil C - Cybersecurity Services",
    "image": "https://muzzyy.me/favicon.ico",
    "description": "Cybersecurity Engineer, SOC Analyst, and AI Systems Developer based in Ballari.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ballari",
      "addressRegion": "Karnataka",
      "postalCode": "583101",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ballari"
    },
    "url": "https://muzzyy.me/locations/ballari"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Mohammed Muzammil C available for SOC Analyst roles in Ballari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mohammed Muzammil C is based in Ballari and is available for local on-site, hybrid, and remote SOC Analyst and Cybersecurity Engineering roles."
        }
      },
      {
        "@type": "Question",
        "name": "What cybersecurity services does Mohammed Muzammil C offer in Ballari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Services include Threat Intelligence monitoring, SIEM administration (Splunk, Elastic), ML-driven phishing detection, and RAG-based automated incident reporting."
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
              Cybersecurity Engineer & SOC Analyst in Ballari
            </h1>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '700px' }}>
              Based in Ballari, Karnataka, I specialize in building intelligent security systems, SOC monitoring utilities, and production RAG pipelines. Available for local and global remote engagements.
            </p>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Regional Expertise & Services</h2>
            <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'disc', paddingLeft: '20px' }}>
              <li><strong>Local Presence:</strong> Immediate availability for on-site collaborations or hybrid setups in the Ballari region.</li>
              <li><strong>Threat Detection:</strong> Implementing ML-driven attack classification systems exceeding 97% accuracy.</li>
              <li><strong>Security Operations:</strong> Real-time log ingestion and automated Groq LLaMA incident reporting.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Frequently Asked Questions (Ballari)</h2>
            <dl className="space-y-8">
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  Is Mohammed Muzammil C available for SOC Analyst roles in Ballari?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Yes, Mohammed Muzammil C is based in Ballari and is available for local on-site, hybrid, and remote SOC Analyst and Cybersecurity Engineering roles.
                </dd>
              </div>
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  What cybersecurity systems has he developed locally?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Projects include Mini-SIEM AI for automated risk scoring and EduSathi, an AI study companion utilizing FAISS vector indexing.
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
