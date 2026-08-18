import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Mohammed Muzammil C',
  description: 'Direct answers regarding Mohammed Muzammil C, his cybersecurity projects, and AI development expertise.',
};

export default function FaqPage() {
  const faqs = [
    {
      question: "Who is Mohammed Muzammil C?",
      answer: "Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer from Ballari, Karnataka, India. A BCA graduate from NIMS Ballari, he specializes in building SOC threat monitoring tools, SIEM systems, and RAG architectures."
    },
    {
      question: "What is EduSathi and how does its RAG pipeline work?",
      answer: "EduSathi is an AI study assistant utilizing a 4-stage RAG pipeline: PDF ingestion, recursive text chunking, FAISS vector indexing, and Groq LLaMA inference with dual-portal RBAC."
    },
    {
      question: "How does Mini-SIEM AI detect cybersecurity attacks?",
      answer: "Mini-SIEM AI ingests real-time logs, uses machine learning classification to flag attack types, provides SHAP explainability for alert transparency, and generates Groq narrative incident reports."
    },
    {
      question: "What is the accuracy of the Phishing URL Detector?",
      answer: "The Phishing URL Detector achieves 97% classification accuracy across English, Hindi, and Hinglish URLs by evaluating 20+ structural and domain-age features."
    },
    {
      question: "Is Mohammed Muzammil C available for SOC Analyst roles in Bengaluru, Hyderabad, or remote?",
      answer: "Yes, Mohammed Muzammil C is actively available for SOC Analyst and Applied AI engineering roles with on-site availability in Bengaluru, Hyderabad, Ballari, and remote globally."
    },
    {
      question: "What is SafePush?",
      answer: "SafePush is a plugin-based developer security gate that orchestrates Semgrep, Gitleaks, and Trivy to catch vulnerabilities, secrets, and risky AI code before they hit production."
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow px-6 max-w-3xl mx-auto w-full py-12">
          <div className="mb-12">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              Knowledge Base
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Frequently Asked Questions
            </h1>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
              Direct answers about my expertise, projects, and availability.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/5 pb-8 last:border-0">
                <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text)', marginBottom: '12px' }}>
                  {faq.question}
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
