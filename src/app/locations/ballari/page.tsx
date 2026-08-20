import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SOC Analyst & Cybersecurity Engineer in Ballari | Mohammed Muzammil C',
  description: 'Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer located in Ballari, Karnataka. Available for local and remote SOC Analyst roles.',
  alternates: {
    canonical: '/locations/ballari/',
  }
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
    "url": "https://muzzyy.me/locations/ballari/"
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
        
        <section className="flex-grow">
          <div className="section-label">Local Service Area</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Cybersecurity Engineer in Ballari</h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            Based in Ballari, Karnataka, I specialize in building intelligent security systems, SOC monitoring utilities, and production RAG pipelines. Available for local and global remote engagements.
          </p>

          <div className="about-grid">
            <div className="about-text-column">
              <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Regional Expertise & Services</h2>
              <div className="about-text">
                <p>As a cybersecurity professional based natively in <strong className="highlight-emerald">Ballari</strong>, I provide specialized security systems engineering, ranging from local hybrid infrastructure monitoring to globally distributed AI applications.</p>
                <p>My core focus relies on building machine learning pipelines that prevent attacks autonomously and deploying secure, production-grade applications that solve real-world problems.</p>
              </div>
              
              <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Local Availability</h2>
              <div className="core-values" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                 <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Immediate on-site availability in Ballari</div>
                 <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Threat detection and ML-driven analysis</div>
                 <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Local security infrastructure consulting</div>
              </div>
            </div>
            
            <div className="about-visuals-column">
              <div className="stat-card" style={{ padding: '24px', overflow: 'hidden' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text)' }}>Location: Ballari, Karnataka (583101)</h3>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123281.79469146911!2d76.85244510006798!3d15.143714589920155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb76fd7406ce1e9%3A0x6b6df5e7300c14b2!2sBallari%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714413123456!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ballari Google Map"
                ></iframe>
              </div>
              
              <div className="stat-card" style={{ padding: '32px' }}>
                 <div className="stat-value" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Local FAQ</div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                   <div>
                     <h4 style={{ color: 'var(--text)', fontSize: '0.95rem', fontWeight: 600 }}>Available for local SOC roles?</h4>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>Yes, I am based in Ballari and available for local on-site, hybrid, and remote SOC Analyst and Cybersecurity roles.</p>
                   </div>
                   <div>
                     <h4 style={{ color: 'var(--text)', fontSize: '0.95rem', fontWeight: 600 }}>What systems have you developed locally?</h4>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>Projects include Mini-SIEM AI for automated risk scoring and EduSathi, an AI study companion built with RAG architecture.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
