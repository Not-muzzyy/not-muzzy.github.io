import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function FaqSection() {
  return (
    <section id="faq">
      <div className="section-label">Knowledge Base</div>
      <h2 className="section-title">Frequently Asked Questions</h2>

      <ScrollReveal>
        <dl className="faq-list">
          <div className="faq-item">
            <dt className="faq-question">
              Who is Mohammed Muzammil C?
            </dt>
            <dd className="faq-answer">
              Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer from Ballari, Karnataka, India. A BCA graduate from NIMS Ballari, he specializes in building SOC threat monitoring tools, SIEM systems, and RAG architectures.
            </dd>
          </div>

          <div className="faq-item">
            <dt className="faq-question">
              What is EduSathi and how does its RAG pipeline work?
            </dt>
            <dd className="faq-answer">
              EduSathi is an AI study assistant utilizing a 4-stage RAG pipeline: PDF ingestion, recursive text chunking, FAISS vector indexing, and Groq LLaMA inference with dual-portal RBAC.
            </dd>
          </div>

          <div className="faq-item">
            <dt className="faq-question">
              How does Mini-SIEM AI detect cybersecurity attacks?
            </dt>
            <dd className="faq-answer">
              Mini-SIEM AI ingests real-time logs, uses machine learning classification to flag attack types, provides SHAP explainability for alert transparency, and generates Groq narrative incident reports.
            </dd>
          </div>

          <div className="faq-item">
            <dt className="faq-question">
              What is the accuracy of the Phishing URL Detector?
            </dt>
            <dd className="faq-answer">
              The Phishing URL Detector achieves 97% classification accuracy across English, Hindi, and Hinglish URLs by evaluating 20+ structural and domain-age features.
            </dd>
          </div>

          <div className="faq-item">
            <dt className="faq-question">
              Is Mohammed Muzammil C available for SOC Analyst roles in Bengaluru, Hyderabad, or remote?
            </dt>
            <dd className="faq-answer">
              Yes, Mohammed Muzammil C is actively available for SOC Analyst and Applied AI engineering roles with on-site availability in Bengaluru, Hyderabad, and remote globally.
            </dd>
          </div>
        </dl>
      </ScrollReveal>
    </section>
  );
}
