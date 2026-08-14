import React from 'react';

export default function JsonLd() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://muzzyy.me/#person',
        name: 'Mohammed Muzammil C',
        alternateName: ['Muzammil C', 'Muzzy', 'not-muzzyy'],
        url: 'https://muzzyy.me/',
        image: 'https://muzzyy.me/icon.png',
        jobTitle: [
          'Cybersecurity Engineer',
          'AI Systems Developer',
          'SOC Analyst',
        ],
        email: 'mailto:mohammedmuzammil643@gmail.com',
        sameAs: [
          'https://github.com/not-muzzyy',
          'https://linkedin.com/in/muzzammilc7',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ballari',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Nandi Institute of Management and Science',
          location: {
            '@type': 'PostalAddress',
            addressLocality: 'Ballari',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
          },
        },
        knowsAbout: [
          'Cybersecurity',
          'Security Operations Center (SOC)',
          'SIEM Architecture',
          'Threat Analysis & Malware Analysis',
          'Machine Learning & NLP',
          'Retrieval-Augmented Generation (RAG)',
          'LangChain & FAISS',
          'Python & Scikit-learn',
          'SHAP Explainability',
          'Groq & LLaMA Integration',
          'Phishing Detection Pipelines',
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Google Cloud Cybersecurity Certificate',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Google Cloud',
            },
            validFrom: '2024',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'AI Agents Fundamentals',
            credentialCategory: 'Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Hugging Face',
            },
            validFrom: '2025',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Anthropic AI Fluency, Claude 101, Claude Code',
            credentialCategory: 'Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Anthropic',
            },
            validFrom: '2025',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://muzzyy.me/#website',
        url: 'https://muzzyy.me/',
        name: 'Mohammed Muzammil C Portfolio',
        description:
          'Portfolio of Mohammed Muzammil C — Cybersecurity Engineer & AI Systems Developer.',
        publisher: {
          '@id': 'https://muzzyy.me/#person',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://muzzyy.me/#edusathi',
        name: 'EduSathi',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        description:
          'Production-grade AI study companion utilizing RAG, FAISS, LangChain, and Groq API with dual-portal RBAC for university curricula.',
        author: { '@id': 'https://muzzyy.me/#person' },
        programmingLanguage: 'Python',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://muzzyy.me/#minisiem',
        name: 'Mini-SIEM AI',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web',
        description:
          'AI-powered Security Information and Event Management (SIEM) system featuring ML attack classification, risk scoring, SHAP explainability, and Groq incident reporting.',
        author: { '@id': 'https://muzzyy.me/#person' },
        programmingLanguage: 'Python',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://muzzyy.me/#phishingdetector',
        name: 'Phishing Detector ML',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web / Python CLI',
        description:
          '3-layer machine learning phishing detection pipeline achieving 97% accuracy across English, Hindi, and Hinglish URLs using 20+ lexical/domain features.',
        author: { '@id': 'https://muzzyy.me/#person' },
        programmingLanguage: 'Python',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://muzzyy.me/#pollutiongrid',
        name: 'Virtual Pollution Intelligence Grid',
        applicationCategory: 'GeospatialDataApplication',
        operatingSystem: 'Web',
        description:
          'Geospatial air quality intelligence dashboard featuring 7-day AI risk forecasting and anomaly detection built during Chakravyuha 3.0 Hackathon.',
        author: { '@id': 'https://muzzyy.me/#person' },
        programmingLanguage: 'Python',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
