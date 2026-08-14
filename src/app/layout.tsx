import type { Metadata, Viewport } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://muzzyy.me'),
  title: {
    default:
      'Mohammed Muzammil C | Cybersecurity Engineer & AI Systems Developer',
    template: '%s | Mohammed Muzammil C',
  },
  description:
    'Portfolio of Mohammed Muzammil C — Cybersecurity Engineer and AI Developer specializing in SOC analysis, ML threat detection, SIEM, and RAG architectures.',
  applicationName: 'Muzammil C Portfolio',
  authors: [{ name: 'Mohammed Muzammil C', url: 'https://muzzyy.me' }],
  generator: 'Next.js',
  keywords: [
    'Mohammed Muzammil C',
    'Muzammil C',
    'not-muzzyy',
    'Cybersecurity Engineer',
    'AI Systems Developer',
    'SOC Analyst',
    'Threat Detection',
    'Mini-SIEM AI',
    'EduSathi RAG',
    'Phishing Detector ML',
    'LangChain FAISS',
    'Python Developer',
    'Ballari Karnataka',
    'Cybersecurity Portfolio',
  ],
  creator: 'Mohammed Muzammil C',
  publisher: 'Mohammed Muzammil C',
  alternates: {
    canonical: 'https://muzzyy.me',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Mohammed Muzammil',
    lastName: 'C',
    username: 'not-muzzyy',
    gender: 'male',
    locale: 'en_US',
    url: 'https://muzzyy.me',
    title:
      'Mohammed Muzammil C | Cybersecurity Engineer & AI Systems Developer',
    description:
      'Building intelligent security systems through AI, automation, and modern software. Explore production-grade tools: EduSathi, Mini-SIEM AI, and Phishing Detector.',
    siteName: 'Muzammil C | Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohammed Muzammil C — Cybersecurity Engineer & AI Systems Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Mohammed Muzammil C | Cybersecurity Engineer & AI Systems Developer',
    description:
      'Building intelligent security systems through AI, automation, and modern software. Open for SOC Analyst & Applied ML roles.',
    images: ['/opengraph-image.png'],
    creator: '@not_muzzyy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
