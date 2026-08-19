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
      answer: (
        <>
          <p>
            Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer from Ballari, Karnataka, India. A BCA graduate from NIMS Ballari, he specializes in building SOC threat monitoring tools, ML-driven SIEM systems, and advanced Retrieval-Augmented Generation (RAG) architectures.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Location:</strong> Ballari, Karnataka, India</li>
            <li><strong>Core Focus:</strong> Cybersecurity, SOC Operations, Artificial Intelligence</li>
            <li><strong>Education:</strong> BCA, Nandi Institute of Management and Science</li>
          </ul>
        </>
      )
    },
    {
      question: "What is EduSathi and how does its RAG pipeline work?",
      answer: (
        <>
          <p>
            EduSathi is an AI-powered academic companion that processes university curriculum documents through a 4-stage Retrieval-Augmented Generation (RAG) pipeline. It parses PDFs with recursive character text chunking, builds dense semantic embeddings indexed in FAISS, and executes sub-second query synthesis using Groq LLaMA models.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Vector Store:</strong> FAISS (Facebook AI Similarity Search)</li>
            <li><strong>Orchestration:</strong> LangChain RAG pipeline</li>
            <li><strong>Inference Engine:</strong> Groq API (LLaMA 3.1)</li>
            <li><strong>Access Control:</strong> Dual-portal RBAC (Student & Administrator)</li>
          </ul>
        </>
      )
    },
    {
      question: "How does Mini-SIEM AI detect cybersecurity attacks?",
      answer: (
        <>
          <p>
            Mini-SIEM AI ingests real-time logs and uses an ensemble machine learning classification system to dynamically flag attack vectors, replacing traditional static regex rules. It provides mathematically proven SHAP explainability for alert transparency and generates sub-second narrative incident reports using Groq LLaMA models.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Log Analysis:</strong> Streamlit & Pandas</li>
            <li><strong>ML Classifier:</strong> Scikit-learn (Ensemble Methods)</li>
            <li><strong>Explainability:</strong> SHAP (SHapley Additive exPlanations)</li>
            <li><strong>Reporting:</strong> Groq API LLaMA 3.1</li>
          </ul>
        </>
      )
    },
    {
      question: "What is the accuracy of the Phishing URL Detector?",
      answer: (
        <>
          <p>
            The Phishing URL Detector achieves 97% classification accuracy across English, Hindi, and Hinglish URLs by evaluating over 20 structural, domain-age, and lexical features. These metrics represent performance on the project&apos;s evaluated test dataset using optimized Scikit-learn algorithms.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Accuracy:</strong> 97%</li>
            <li><strong>Precision:</strong> 96%</li>
            <li><strong>Recall:</strong> 97%</li>
            <li><strong>F1-Score:</strong> 97%</li>
          </ul>
        </>
      )
    },
    {
      question: "Is Mohammed Muzammil C available for SOC Analyst roles in Bengaluru, Hyderabad, or remote?",
      answer: (
        <>
          <p>
            Yes, Mohammed Muzammil C is actively available for SOC Analyst, Threat Intelligence, and Applied AI engineering roles. He offers immediate on-site availability in Ballari, Bengaluru, and Hyderabad, as well as full flexibility for remote positions globally.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Primary Hub:</strong> Bengaluru (Bangalore), Karnataka</li>
            <li><strong>Secondary Hubs:</strong> Hyderabad, Ballari</li>
            <li><strong>Work Models:</strong> On-site, Hybrid, Remote</li>
          </ul>
        </>
      )
    },
    {
      question: "What is SafePush?",
      answer: (
        <>
          <p>
            SafePush is a plugin-based developer security gate that orchestrates code scanners like Semgrep, Gitleaks, and Trivy. It runs automatically in CI/CD pipelines or as a pre-commit hook to catch vulnerabilities, hardcoded secrets, and risky AI-generated code before it reaches production.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>SAST:</strong> Semgrep Integration</li>
            <li><strong>Secret Scanning:</strong> Gitleaks integration</li>
            <li><strong>Container Security:</strong> Trivy integration</li>
            <li><strong>Implementation:</strong> Pre-commit / CI pipelines</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col pt-24 pb-12">
        <Navbar />
        <section className="flex-grow">
          <div className="section-label">Knowledge Base</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>
            Frequently Asked Questions
          </h1>
          <p className="hero-tagline" style={{ marginBottom: '64px' }}>
            Direct answers about my expertise, projects, and availability.
          </p>

          <div className="about-visuals-column" style={{ gap: '24px' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="stat-card" style={{ padding: '32px' }}>
                <h2 className="glow-text" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                  {faq.question}
                </h2>
                <div className="about-text" style={{ fontSize: '0.95rem' }}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
