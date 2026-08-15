import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Mohammed Muzammil C',
  description: 'Terms of service and usage for Mohammed Muzammil C portfolio.',
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              Last updated: August 2026
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>1. General Terms</h2>
              <p>
                By accessing and using muzzyy.me, you accept and agree to be bound by the terms and provision of this agreement. 
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>2. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all material on this website, including but not limited to the design, layout, look, appearance, graphics, and written content, are owned by or licensed to Mohammed Muzammil C. Reproduction is prohibited without explicit prior consent.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>3. Disclaimer of Warranties</h2>
              <p>
                The information is provided &quot;as is&quot; without any representations or warranties, express or implied. I make no representations or warranties in relation to this website or the information and materials provided on this website.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>4. Limitations of Liability</h2>
              <p>
                Mohammed Muzammil C will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss.
              </p>
            </div>
            
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>5. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact me at: <br/>
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
