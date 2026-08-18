import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EduSathi Case Study | Mohammed Muzammil C',
  description: 'Production-grade AI study companion utilizing RAG, FAISS, LangChain, and Groq API with dual-portal RBAC for university curricula.',
};

export default function EduSathiPage() {
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
              EduSathi
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              Production-grade AI study companion utilizing RAG, FAISS, LangChain, and Groq API with dual-portal RBAC for university curricula.
            </p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8 }} className="space-y-8">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>What is EduSathi?</h2>
              <p>
                EduSathi is an AI-powered study assistant designed specifically for university students, leveraging a 4-stage Retrieval-Augmented Generation (RAG) pipeline to deliver precise, curriculum-aligned answers.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Problem</h2>
              <p>
                Students often struggle to find specific, reliable answers within hundreds of pages of university-provided PDF materials. Traditional keyword searches are inefficient, and generic LLMs hallucinate or provide out-of-syllabus answers.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Architecture</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ingestion:</strong> High-speed PDF parsing of university materials.</li>
                <li><strong>Chunking:</strong> Recursive text chunking to maintain contextual boundaries.</li>
                <li><strong>Indexing:</strong> FAISS dense vector similarity search for rapid retrieval.</li>
                <li><strong>Inference:</strong> Groq LLaMA models configured to answer strictly based on retrieved context.</li>
                <li><strong>Access Control:</strong> Dual-portal Role-Based Access Control (RBAC) for admins and students.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Technology Stack</h2>
              <p>
                Python, LangChain, FAISS, Groq API (LLaMA 3.1), Streamlit, PyPDF2.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '16px' }}>Repository & Links</h2>
              <p>
                <a href="https://github.com/not-muzzyy/EduSathi-Production-Grade-RAG-Based-AI-Study-Companion" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-glow)', textDecoration: 'none' }}>View Source Code on GitHub</a>
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
