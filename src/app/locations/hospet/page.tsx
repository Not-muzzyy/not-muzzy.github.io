import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SOC Analyst & Cyber Engineer in Hospet',
  description: 'Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer serving Hospet, Karnataka. Available for local and remote SOC Analyst roles.',
  alternates: {
    canonical: '/locations/hospet/',
  },
  openGraph: {
    title: 'SOC Analyst & Cyber Engineer in Hospet | Mohammed Muzammil C',
    description: 'Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer serving Hospet, Karnataka. Available for local and remote SOC Analyst roles.',
    url: 'https://muzzyy.me/locations/hospet/',
    type: 'website',
  },
};

export default function HospetLocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mohammed Muzammil C - Cybersecurity Services",
    "image": "https://muzzyy.me/icon.png",
    "description": "Cybersecurity Engineer, SOC Analyst, and AI Systems Developer serving Hospet.",
    "priceRange": "$$",
    "email": "mailto:mohammedmuzammil643@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hospet",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.2740,
      "longitude": 76.3888
    },
    "areaServed": {
      "@type": "City",
      "name": "Hospet"
    },
    "url": "https://muzzyy.me/locations/hospet/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Mohammed Muzammil C available for SOC Analyst roles in Hospet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with close proximity to Hospet, Mohammed Muzammil C is available for local hybrid and remote SOC Analyst and Cybersecurity Engineering roles."
        }
      },
      {
        "@type": "Question",
        "name": "What cybersecurity expertise does Mohammed Muzammil C bring to Hospet organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expertise includes ML-based Threat Intelligence, custom SIEM architecture, network security, and AI-driven automated incident reporting."
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
              Cybersecurity Engineer & SOC Analyst in Hospet
            </h1>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '700px' }}>
              Serving the Hospet and Vijayanagara region, I specialize in next-generation security systems, SOC monitoring utilities, and production AI architectures.
            </p>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Regional Expertise & Services</h2>
            <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'disc', paddingLeft: '20px' }}>
              <li><strong>Local Presence:</strong> Close proximity enables on-site consultations and rapid deployment for organizations in Hospet.</li>
              <li><strong>Zero-Day Mitigation:</strong> Transitioning reactive SOCs into proactive units using ensemble ML classification.</li>
              <li><strong>Security Operations:</strong> Real-time log ingestion, alert explainability (SHAP), and automated threat triaging.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Frequently Asked Questions (Hospet)</h2>
            <dl className="space-y-8">
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  Is Mohammed Muzammil C available for SOC Analyst roles in Hospet?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Yes, with close proximity to Hospet, Mohammed Muzammil C is available for local hybrid and remote SOC Analyst and Cybersecurity Engineering roles.
                </dd>
              </div>
              <div>
                <dt style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>
                  What makes your AI-Augmented approach better for local businesses?
                </dt>
                <dd style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Traditional rules miss mutations. By employing local machine learning and RAG pipelines, businesses can detect phishing and anomalies with 97% accuracy while lowering analyst fatigue.
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
