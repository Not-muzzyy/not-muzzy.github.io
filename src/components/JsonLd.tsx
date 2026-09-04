import React from "react"; 

export default function JsonLd() { 
  const jsonLdData = { 
    "@context": "https://schema.org", 
    "@graph": [ 
      {
        "@type": "WebSite",
        "@id": "https://muzzyy.me/#website",
        "url": "https://muzzyy.me/",
        "name": "Mohammed Muzammil C",
        "description": "Portfolio of Mohammed Muzammil C — Cybersecurity Engineer & AI Developer specializing in SOC analysis, SIEM, and RAG architectures.",
        "publisher": {
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
        "jobTitle": "Cybersecurity Engineer & AI Developer", 
        "email": "mailto:mohammedmuzammil643@gmail.com", 
        "sameAs": [ 
          "https://github.com/Not-muzzyy", 
          "https://linkedin.com/in/muzzammilc7",
          "https://x.com/not_muzzyy" 
        ], 
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Cybersecurity Engineer",
            "occupationalCategory": "15-1212.00",
            "skills": "SOC Analysis, Threat Detection, SIEM Administration, Python, Secure SDLC"
          },
          {
            "@type": "Occupation",
            "name": "AI Systems Developer",
            "occupationalCategory": "15-1252.00",
            "skills": "Retrieval-Augmented Generation (RAG), LangChain, FAISS, LLM Inference, Scikit-learn"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Google Cloud Cybersecurity Certificate",
            "credentialCategory": "Professional Certificate"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Hugging Face AI Agents Fundamentals",
            "credentialCategory": "Certification"
          }
        ],
        "creator": [
          {
            "@type": "SoftwareApplication",
            "name": "EduSathi",
            "url": "https://muzzyy.me/projects/edusaathi/"
          },
          {
            "@type": "SoftwareApplication",
            "name": "Mini-SIEM AI",
            "url": "https://muzzyy.me/projects/mini-siem-ai/"
          },
          {
            "@type": "SoftwareApplication",
            "name": "Phishing Detector Advanced",
            "url": "https://muzzyy.me/projects/phishing-detector/"
          }
        ],
        "address": { 
          "@type": "PostalAddress", 
          "streetAddress": "Ballari Cantonment", 
          "addressLocality": "Ballari", 
          "addressRegion": "Karnataka", 
          "postalCode": "583101", 
          "addressCountry": "IN" 
        }, 
        "homeLocation": { 
          "@type": "Place", 
          "name": "Ballari, Karnataka, India",
          "geo": { 
            "@type": "GeoCoordinates", 
            "latitude": 15.1394, 
            "longitude": 76.9214 
          } 
        }, 
        "alumniOf": { 
          "@type": "CollegeOrUniversity", 
          "name": "Nandi Institute of Management and Science", 
          "alternateName": "NIMS Ballari", 
          "address": { 
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
          "Phishing Detection" 
        ] 
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
