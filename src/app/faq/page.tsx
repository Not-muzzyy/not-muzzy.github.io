import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Direct answers regarding Mohammed Muzammil C, his cybersecurity projects, and AI development expertise.',
  alternates: {
    canonical: '/faq/',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Mohammed Muzammil C',
    description: 'Direct answers regarding Mohammed Muzammil C, his cybersecurity projects, and AI development expertise.',
    url: 'https://muzzyy.me/faq/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://muzzyy.me/faq/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Mohammed Muzammil C?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer from Ballari, Karnataka, India. A BCA graduate from NIMS Ballari, he specializes in building SOC threat monitoring tools, SIEM systems, and production RAG architectures."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications does Mohammed Muzammil C hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He holds the Google Cloud Cybersecurity Professional Certificate (2024), the Hugging Face AI Agents Fundamentals Certification (2025), and Anthropic's Claude AI Fluency, Claude 101, and Claude Code credentials (2025). He is actively targeting CEH and CompTIA Security+ in 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What is Mohammed Muzammil C's experience with SIEM tools and SOC analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mohammed Muzammil C specializes in SIEM log ingestion, threat detection, and alert triage. He architected Mini-SIEM AI, an automated SOC threat monitoring platform featuring machine learning attack classification, SHAP feature explainability, and Groq narrative incident report synthesis."
      }
    },
    {
      "@type": "Question",
      "name": "What machine learning and AI technologies does Mohammed Muzammil C use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muzammil works with LangChain, FAISS, Scikit-learn, Pandas, SHAP, Sentence Transformers, Groq API (LLaMA 3.1/3.3), Anthropic Claude, and OpenAI GPT-4o, specializing in Retrieval-Augmented Generation (RAG) and transparent, explainable machine learning."
      }
    },
    {
      "@type": "Question",
      "name": "What is EduSathi and how does its RAG pipeline work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EduSathi is an AI study assistant utilizing a 4-stage RAG pipeline: PDF document ingestion, recursive text chunking, FAISS vector indexing with all-MiniLM-L6-v2, and Groq LLaMA inference with dual-portal RBAC for students and faculty."
      }
    },
    {
      "@type": "Question",
      "name": "How does Mini-SIEM AI detect cybersecurity attacks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mini-SIEM AI ingests real-time logs, applies a Scikit-learn multi-class ensemble classifier to detect attack vectors, computes SHAP feature contributions for alert transparency, and generates automated narrative triage reports in seconds via Groq LLaMA."
      }
    },
    {
      "@type": "Question",
      "name": "What is the accuracy of the Phishing URL Detector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Phishing URL Detector achieves 97% classification accuracy, 96% precision, 97% recall, and 97% F1-score across English, Hindi, and Hinglish URLs by evaluating over 20 structural, domain-age, and lexical features."
      }
    },
    {
      "@type": "Question",
      "name": "What is SafePush?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SafePush is a plugin-based developer security gate CLI that orchestrates Semgrep (SAST), Gitleaks (secrets), and Trivy (container/dependencies) in pre-commit hooks and CI/CD pipelines to block vulnerabilities before deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mohammed Muzammil C available for SOC Analyst roles in Bengaluru, Hyderabad, or remote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Mohammed Muzammil C is actively available for immediate hire in SOC Analyst, Threat Intelligence, and Applied AI engineering roles with on-site availability in Bengaluru, Ballari, and Hyderabad, and remote availability globally."
      }
    },
    {
      "@type": "Question",
      "name": "What is Mohammed Muzammil C's educational background and location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He completed his Bachelor of Computer Applications (BCA) at Nandi Institute of Management and Science (NIMS Ballari) and is based in Ballari, Karnataka (PIN: 583101), India."
      }
    }
  ]
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
            <li><strong>Location:</strong> Ballari, Karnataka, India (PIN: 583101)</li>
            <li><strong>Core Focus:</strong> SOC Operations, Threat Detection, Applied Artificial Intelligence</li>
            <li><strong>Education:</strong> BCA, Nandi Institute of Management and Science</li>
          </ul>
        </>
      )
    },
    {
      question: "What certifications does Mohammed Muzammil C hold?",
      answer: (
        <>
          <p>
            Mohammed Muzammil C holds verified credentials across cloud security, AI agents, and LLM development.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Google Cloud Cybersecurity Professional:</strong> Security fundamentals, cloud defense, Linux, network security.</li>
            <li><strong>Hugging Face AI Agents Fundamentals:</strong> Building and orchestrating autonomous agent workflows.</li>
            <li><strong>Anthropic AI Fluency, Claude 101 &amp; Claude Code:</strong> Prompt caching, agentic coding, and tool use.</li>
            <li><strong>In Progress (2026):</strong> Certified Ethical Hacker (CEH) &amp; CompTIA Security+.</li>
          </ul>
        </>
      )
    },
    {
      question: "What is Mohammed Muzammil C's experience with SIEM tools and SOC analysis?",
      answer: (
        <>
          <p>
            Muzammil specializes in SIEM telemetry, log ingestion, and alert triage. He built Mini-SIEM AI, an automated threat monitoring platform combining ML attack classification, SHAP feature explainability, and automated Groq LLaMA incident reports.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>SIEM &amp; Telemetry:</strong> Splunk, Elastic SIEM, Pandas log pipelines.</li>
            <li><strong>Attack Classification:</strong> Multi-class ensemble detection for Brute Force, SQLi, DDoS, Port Scan.</li>
            <li><strong>Explainable AI:</strong> Mathematical SHAP feature attribution to prove why alerts trigger.</li>
            <li><strong>Incident Triage:</strong> Sub-second automated narrative synthesis via Groq API.</li>
          </ul>
        </>
      )
    },
    {
      question: "What machine learning and AI technologies does Mohammed Muzammil C use?",
      answer: (
        <>
          <p>
            Muzammil develops production-grade AI systems with a focus on Retrieval-Augmented Generation (RAG), vector search, and transparent machine learning.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Frameworks:</strong> LangChain, Scikit-learn, Pandas, NumPy, NLTK.</li>
            <li><strong>Vector Databases &amp; Embeddings:</strong> FAISS, Sentence Transformers (<code>all-MiniLM-L6-v2</code>).</li>
            <li><strong>Inference &amp; LLMs:</strong> Groq API (LLaMA 3.1 8B/70B, 3.3 70B), Anthropic Claude, OpenAI GPT-4o.</li>
            <li><strong>Model Explainability:</strong> SHAP (SHapley Additive exPlanations).</li>
          </ul>
        </>
      )
    },
    {
      question: "What is EduSathi and how does its RAG pipeline work?",
      answer: (
        <>
          <p>
            EduSathi is an AI-powered academic companion that processes university curriculum documents through a 4-stage Retrieval-Augmented Generation (RAG) pipeline to deliver precise, syllabus-grounded answers.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Vector Store:</strong> FAISS (Facebook AI Similarity Search) with dense semantic embeddings</li>
            <li><strong>Orchestration:</strong> LangChain 4-stage RAG pipeline (Ingest → Chunk → Index → Query)</li>
            <li><strong>Inference Engine:</strong> Groq API (LLaMA 3.1) with strict context grounding</li>
            <li><strong>Access Control:</strong> Dual-portal RBAC (Student &amp; Faculty/Admin)</li>
          </ul>
        </>
      )
    },
    {
      question: "How does Mini-SIEM AI detect cybersecurity attacks?",
      answer: (
        <>
          <p>
            Mini-SIEM AI ingests real-time logs and uses an ensemble machine learning classification system to dynamically flag attack vectors, replacing traditional static regex rules with mathematical transparency.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Log Analysis:</strong> Streamlit &amp; Pandas real-time log ingestion</li>
            <li><strong>ML Classifier:</strong> Scikit-learn ensemble attack categorization</li>
            <li><strong>Explainability:</strong> SHAP feature contribution values proving alert triggers</li>
            <li><strong>Reporting:</strong> Groq LLaMA automated narrative incident summaries</li>
          </ul>
        </>
      )
    },
    {
      question: "What is the accuracy of the Phishing URL Detector?",
      answer: (
        <>
          <p>
            The Phishing URL Detector achieves 97% classification accuracy across English, Hindi, and Hinglish URLs by evaluating over 20 structural, domain-age, and lexical features.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Accuracy:</strong> 97% on evaluated test benchmarks</li>
            <li><strong>Precision:</strong> 96% | <strong>Recall:</strong> 97% | <strong>F1-Score:</strong> 97%</li>
            <li><strong>Feature Engineering:</strong> 20+ URL parameters (entropy, subdomains, IP presence)</li>
            <li><strong>NLP:</strong> Multilingual phonetic analysis for Hinglish threats</li>
          </ul>
        </>
      )
    },
    {
      question: "What is SafePush?",
      answer: (
        <>
          <p>
            SafePush is a plugin-based developer security gate that orchestrates code scanners like Semgrep, Gitleaks, and Trivy. It runs automatically in CI/CD pipelines or as a pre-commit hook to catch vulnerabilities before production.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>SAST:</strong> Semgrep rule-based vulnerability scanning</li>
            <li><strong>Secret Scanning:</strong> Gitleaks regex and entropy leak prevention</li>
            <li><strong>Container Security:</strong> Trivy image and dependency CVE checks</li>
            <li><strong>Workflow:</strong> Modular CLI integration for pre-commit and GitHub Actions</li>
          </ul>
        </>
      )
    },
    {
      question: "Is Mohammed Muzammil C available for SOC Analyst roles in Bengaluru, Hyderabad, or remote?",
      answer: (
        <>
          <p>
            Yes, Mohammed Muzammil C is actively available for immediate hire in SOC Analyst, Threat Intelligence, and Applied AI engineering roles. He offers immediate on-site availability in Ballari, Bengaluru, and Hyderabad, and remote globally.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Primary Hub:</strong> Bengaluru (Bangalore), Karnataka (Immediate relocation ready)</li>
            <li><strong>Regional Hubs:</strong> Ballari (Native base), Hyderabad</li>
            <li><strong>Work Models:</strong> On-site, Hybrid, and Full Remote</li>
            <li><strong>Availability:</strong> Immediate / Zero notice period</li>
          </ul>
        </>
      )
    },
    {
      question: "What is Mohammed Muzammil C's educational background and location?",
      answer: (
        <>
          <p>
            Mohammed Muzammil C is a Bachelor of Computer Applications (BCA) graduate from Nandi Institute of Management and Science (NIMS Ballari), natively based in Ballari, Karnataka.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
            <li><strong>Degree:</strong> Bachelor of Computer Applications (BCA)</li>
            <li><strong>Institution:</strong> Nandi Institute of Management and Science (NIMS Ballari)</li>
            <li><strong>Location:</strong> Ballari, Karnataka, India (583101)</li>
            <li><strong>Languages:</strong> English, Hindi, Kannada, Urdu</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
