import type { Metadata, Viewport } from "next"; 
import JsonLd from "@/components/JsonLd"; 
import "./globals.css"; 

export const viewport: Viewport = { 
themeColor: "#0a0a0c", 
width: "device-width", 
initialScale: 1, 
maximumScale: 5, 
}; 

export const metadata: Metadata = { 
metadataBase: new URL("https://muzzyy.me"), 
title: { 
default: "Mohammed Muzammil C | Cybersecurity & AI Engineer in Ballari", 
template: "%s | Mohammed Muzammil C", 
}, 
description: 
"Mohammed Muzammil C is a Cybersecurity Engineer & AI Developer based in Ballari, Karnataka. Specializing in SOC analysis, SIEM systems, and RAG architectures.", 
applicationName: "Muzammil C Portfolio", 
authors: [{ name: "Mohammed Muzammil C", url: "https://muzzyy.me" }], 
generator: "Next.js", 
keywords: [ 
"Mohammed Muzammil C", 
"Muzammil C", 
"Cybersecurity Engineer Ballari", 
"AI Developer Bellary Karnataka", 
"SOC Analyst Ballari", 
"RAG LangChain FAISS Developer", 
"Mini-SIEM AI", 
"EduSathi RAG", 
"Phishing Detector ML", 
], 
creator: "Mohammed Muzammil C", 
publisher: "Mohammed Muzammil C", 
other: { 
"geo.region": "IN-KA", 
"geo.placename": "Ballari", 
"geo.position": "15.1394;76.9214", 
ICBM: "15.1394, 76.9214", 
"max-image-preview": "large", 
}, 
openGraph: { 
type: "profile", 
firstName: "Mohammed Muzammil", 
lastName: "C", 
username: "not-muzzyy", 
gender: "male", 
locale: "en_US", 
url: "https://muzzyy.me", 
title: "Mohammed Muzammil C | Cybersecurity & AI Engineer in Ballari", 
description: 
"Building intelligent security systems and production RAG pipelines in Ballari, Karnataka. Explore EduSathi, Mini-SIEM AI, and Phishing Detector.", 
siteName: "Muzammil C | Portfolio", 
images: [ 
{ 
url: "/opengraph-image.png", 
width: 1200, 
height: 630, 
alt: "Mohammed Muzammil C — Cybersecurity Engineer & AI Developer", 
}, 
], 
}, 
twitter: { 
card: "summary_large_image", 
title: "Mohammed Muzammil C | Cybersecurity & AI Engineer", 
description: 
"Building intelligent security systems through AI and modern software. Open for SOC Analyst & Applied ML roles.", 
images: ["/opengraph-image.png"], 
creator: "@not_muzzyy", 
}, 
robots: { 
index: true, 
follow: true, 
googleBot: { 
index: true, 
follow: true, 
"max-video-preview": -1, 
"max-image-preview": "large", 
"max-snippet": -1, 
}, 
}, 
icons: { 
icon: "/icon.png", 
apple: "/apple-touch-icon.png", 
}, 
}; 

export default function RootLayout({ 
children, 
}: Readonly<{ 
children: React.ReactNode; 
}>) { 
return ( 
<html lang="en" className="dark scroll-smooth"> 
<head> 
<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 
<link rel="dns-prefetch" href="https://github.com" /> 
<link rel="dns-prefetch" href="https://linkedin.com" />
<link rel="alternate" type="text/plain" title="LLM context" href="/llms.txt" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</head> 
<body className="bg-[#0a0a0c] text-zinc-100 antialiased font-sans selection:bg-emerald-500/30 selection:text-emerald-300"> 
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-500 text-black font-semibold rounded-md shadow-lg">Skip to main content</a> 
<JsonLd /> 
{children} 
<a href="mailto:mohammedmuzammil643@gmail.com" className="mobile-sticky-cta">
  Contact Me
</a>
</body> 
</html> 
); 
} 
