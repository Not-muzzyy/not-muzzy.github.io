import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Mohammed Muzammil C portfolio and services.',
  alternates: {
    canonical: '/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy | Mohammed Muzammil C',
    description: 'Privacy policy for Mohammed Muzammil C portfolio and services.',
    url: 'https://muzzyy.me/privacy-policy/',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow px-6 max-w-3xl mx-auto w-full py-12">
          <div className="mb-12">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Legal
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Privacy Policy
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              Last updated: September 2026
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>1. Introduction</h2>
              <p>
                Welcome to muzzyy.me. This privacy policy outlines how personal data is handled when you visit this website. As a static portfolio designed with privacy in mind, data collection is kept to an absolute minimum.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>2. Data Collection & Analytics</h2>
              <p>
                This website uses <strong>Simple Analytics</strong>, a privacy-first, cookieless analytics solution. Simple Analytics does not collect personal data, does not use tracking cookies, and does not track visitors across websites. It collects only anonymized, aggregate metrics (such as page visits and general referrer sources) in full compliance with GDPR, PECR, and CCPA.
              </p>
              <p className="mt-4">
                Standard server access logs (e.g., IP addresses, browser agents) may also be processed by our hosting provider (GitHub Pages) for security and operational integrity.
              </p>
              <p className="mt-4">
                If you choose to contact me via email or LinkedIn, the information you provide will only be used to respond to your inquiry and will never be sold or shared with third parties.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>3. External Links</h2>
              <p>
                This site contains links to external platforms like GitHub and LinkedIn. Please be aware that these external sites have their own privacy policies, and I do not accept responsibility or liability for their practices.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>4. Contact</h2>
              <p>
                For any questions regarding this privacy policy, please contact me at: <br/>
                <a href="mailto:mohammedmuzammil643@gmail.com" style={{ color: 'var(--brand-glow)', textDecoration: 'none' }}>mohammedmuzammil643@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
