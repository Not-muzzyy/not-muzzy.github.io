import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <section className="flex-grow flex flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="hero-name" style={{ marginBottom: '16px' }}>
            <span className="glitch-name" data-text="404">404</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
            System breach detected. The sector you are looking for does not exist.
          </p>
          <Link href="/" className="interactive-btn btn-primary" style={{ textDecoration: 'none' }}>
            <span className="btn-glow"></span>
            <span className="btn-text">Return to Base</span>
          </Link>
        </section>
        <Footer />
      </main>
    </>
  );
}
