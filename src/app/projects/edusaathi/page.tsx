import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EduSathi AI - Case Study | Mohammed Muzammil C',
  description: 'Production-grade AI study companion using RAG, FAISS, and LangChain for Indian university curriculum.',
  alternates: {
    canonical: '/projects/edusaathi/',
  }
};

export default function EduSathiPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow">
          <div className="section-label">Case Study</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>EduSathi</h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            Production-grade AI study companion utilizing RAG, FAISS, LangChain, and Groq API with dual-portal RBAC for university curricula.
          </p>

          <div className="about-grid">
             <div className="about-text-column">
                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What is EduSathi?</h2>
                <div className="about-text">
                  <p>EduSathi is an AI-powered study assistant designed specifically for university students, leveraging a 4-stage Retrieval-Augmented Generation (RAG) pipeline to deliver precise, curriculum-aligned answers.</p>
                </div>

                <h2 className="glow-text" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '32px' }}>Problem</h2>
                <div className="about-text">
                  <p>Students often struggle to find specific, reliable answers within hundreds of pages of university-provided PDF materials. Traditional keyword searches are inefficient, and generic LLMs hallucinate or provide out-of-syllabus answers.</p>
                </div>
             </div>
             
             <div className="about-visuals-column">
                <div className="stat-card" style={{ padding: '32px' }}>
                  <div className="stat-value" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Architecture</div>
                  <div className="core-values" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Ingestion: High-speed PDF parsing</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Chunking: Recursive text boundaries</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Indexing: FAISS dense vector search</div>
                    <div className="value-item" style={{ width: '100%', justifyContent: 'flex-start' }}><span className="value-icon">→</span>Inference: Groq LLaMA models</div>
                  </div>
                </div>
                
                <div className="stat-card" style={{ padding: '32px' }}>
                   <div className="stat-value" style={{ fontSize: '1.25rem' }}>Tech Stack</div>
                   <div className="hero-roles-tokens" style={{ marginTop: '16px' }}>
                     <span className="role-token">Python</span>
                     <span className="role-token">LangChain</span>
                     <span className="role-token">FAISS</span>
                     <span className="role-token">Groq API</span>
                     <span className="role-token">Streamlit</span>
                   </div>
                </div>
                
                <a href="https://github.com/Not-muzzyy/edusathi" target="_blank" rel="noopener noreferrer" className="interactive-btn btn-primary" style={{ marginTop: '16px', width: 'fit-content' }}>
                  <span className="btn-text">View Source Code</span>
                  <span className="link-arrow">→</span>
                  <div className="btn-glow" aria-hidden="true"></div>
                </a>
             </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
