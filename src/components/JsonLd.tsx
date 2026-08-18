import React from "react"; 

export default function JsonLd() { 
const jsonLdData = { 
"@context": "https://schema.org", 
"@graph": [ 
{
  "@type": "WebSite",
  "@id": "https://muzzyy.me/#website",
  "url": "https://muzzyy.me/",
  "name": "Mohammed Muzammil C"
},
{
  "@type": "ProfilePage",
  "@id": "https://muzzyy.me/#profile",
  "url": "https://muzzyy.me/",
  "mainEntity": {
    "@id": "https://muzzyy.me/#person"
  }
},
{ 
  "@type": "Person", 
  "@id": "https://muzzyy.me/#person", 
  "name": "Mohammed Muzammil C", 
  "alternateName": ["Muzammil C", "Muzzy", "not-muzzyy"], 
  "url": "https://muzzyy.me/", 
  "image": "https://muzzyy.me/icon.png", 
  "jobTitle": "Cybersecurity and AI Developer", 
  "email": "mailto:mohammedmuzammil643@gmail.com", 
  "sameAs": [ 
    "https://github.com/not-muzzyy", 
    "https://linkedin.com/in/muzzammilc7" 
  ], 
  "address": { 
    "@type": "PostalAddress", 
    "streetAddress": "Ballari Cantonment", 
    "addressLocality": "Ballari", 
    "addressRegion": "Karnataka", 
    "postalCode": "583101", 
    "addressCountry": "IN" 
  }, 
  "geo": { 
    "@type": "GeoCoordinates", 
    "latitude": 15.1394, 
    "longitude": 76.9214 
  }, 
  "alumniOf": { 
    "@type": "EducationalOrganization", 
    "name": "Nandi Institute of Management and Science", 
    "alternateName": "NIMS Ballari", 
    "location": { 
      "@type": "PostalAddress", 
      "addressLocality": "Ballari", 
      "addressRegion": "Karnataka", 
      "postalCode": "583101", 
      "addressCountry": "IN" 
    } 
  }, 
  "knowsAbout": [ 
    "Cybersecurity", 
    "Machine Learning",
    "Artificial Intelligence",
    "Security Operations Center (SOC)", 
    "SIEM Threat Monitoring", 
    "Retrieval-Augmented Generation (RAG)", 
    "LangChain", 
    "FAISS Vector Database", 
    "Python", 
    "SHAP Tree Explainability", 
    "Groq & LLaMA Integration", 
    "Phishing Detection" 
  ] 
}, 
{ 
  "@type": "BreadcrumbList", 
  "@id": "https://muzzyy.me/#breadcrumbs", 
  "itemListElement": [ 
    { 
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home", 
      "item": "https://muzzyy.me/" 
    }, 
    { 
      "@type": "ListItem", 
      "position": 2, 
      "name": "Projects", 
      "item": "https://muzzyy.me/projects/edusaathi" 
    }, 
    { 
      "@type": "ListItem", 
      "position": 3, 
      "name": "FAQ", 
      "item": "https://muzzyy.me/faq" 
    }, 
    { 
      "@type": "ListItem", 
      "position": 4, 
      "name": "Privacy Policy", 
      "item": "https://muzzyy.me/privacy-policy" 
    }, 
    { 
      "@type": "ListItem", 
      "position": 5, 
      "name": "Terms of Service", 
      "item": "https://muzzyy.me/terms" 
    } 
  ] 
}, 
{ 
  "@type": "FAQPage", 
  "@id": "https://muzzyy.me/#faq", 
  "mainEntity": [ 
    { 
      "@type": "Question", 
      "name": "Who is Mohammed Muzammil C?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "Mohammed Muzammil C is a Cybersecurity Engineer and AI Systems Developer from Ballari, Karnataka, India. A BCA graduate from NIMS Ballari, he specializes in building SOC threat monitoring tools, SIEM systems, and RAG architectures." 
      } 
    }, 
    { 
      "@type": "Question", 
      "name": "What is EduSathi and how does its RAG pipeline work?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "EduSathi is an AI study assistant utilizing a 4-stage RAG pipeline: PDF ingestion, recursive text chunking, FAISS vector indexing, and Groq LLaMA inference with dual-portal RBAC." 
      } 
    }, 
    { 
      "@type": "Question", 
      "name": "How does Mini-SIEM AI detect attacks?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "Mini-SIEM AI ingests real-time logs, uses machine learning classification to flag attack types, provides SHAP explainability for alert transparency, and generates Groq narrative incident reports." 
      } 
    }, 
    { 
      "@type": "Question", 
      "name": "What is the accuracy of the Phishing Detector?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "The Phishing Detector reports 97% accuracy, 96% precision, 97% recall, and 97% F1 on the project's evaluated dataset. See the methodology and repository for implementation details." 
      } 
    }, 
    { 
      "@type": "Question", 
      "name": "Is Mohammed Muzammil C available for SOC Analyst roles?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "Yes, Mohammed Muzammil C is actively available for SOC Analyst and Applied AI engineering roles with on-site availability in Ballari, Bengaluru, Hyderabad, and remote globally." 
      } 
    } 
  ] 
}, 
{ 
  "@type": "SoftwareApplication", 
  "@id": "https://muzzyy.me/#edusathi", 
  "name": "EduSathi", 
  "applicationCategory": "EducationalApplication", 
  "url": "https://muzzyy.me/projects/edusaathi",
  "description": "Production-grade AI study companion utilizing RAG, FAISS, LangChain, and Groq API with dual-portal RBAC for university curricula.", 
  "creator": { "@id": "https://muzzyy.me/#person" }, 
  "programmingLanguage": "Python" 
}, 
{ 
  "@type": "SoftwareApplication", 
  "@id": "https://muzzyy.me/#minisiem", 
  "name": "Mini-SIEM AI", 
  "applicationCategory": "SecurityApplication", 
  "url": "https://muzzyy.me/projects/mini-siem-ai",
  "description": "AI-powered SIEM platform featuring ML attack classification, automated risk scoring, SHAP explainability, and Groq incident report generation.", 
  "creator": { "@id": "https://muzzyy.me/#person" }, 
  "programmingLanguage": "Python" 
},
{ 
  "@type": "SoftwareApplication", 
  "@id": "https://muzzyy.me/#phishingdetector", 
  "name": "Phishing Detector", 
  "applicationCategory": "SecurityApplication", 
  "url": "https://muzzyy.me/projects/phishing-detector",
  "description": "Machine learning system for detecting malicious URLs across English, Hindi, and Hinglish with 97% accuracy on test data.", 
  "creator": { "@id": "https://muzzyy.me/#person" }, 
  "programmingLanguage": "Python" 
},
{ 
  "@type": "SoftwareApplication", 
  "@id": "https://muzzyy.me/#pollutiongrid", 
  "name": "Virtual Pollution Intelligence Grid", 
  "applicationCategory": "UtilityApplication", 
  "url": "https://muzzyy.me/projects/virtual-pollution-grid",
  "description": "Interactive geospatial monitoring dashboard with 7-day AI risk forecasting and scenario simulations.", 
  "creator": { "@id": "https://muzzyy.me/#person" }, 
  "programmingLanguage": "Python" 
}
] 
}; 

return ( 
<script 
type="application/ld+json" 
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} 
/> 
); 
} 
