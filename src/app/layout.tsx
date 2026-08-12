import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Muzammil C | Portfolio',
  description:
    'Muzammil C — Cybersecurity and Machine Learning developer portfolio',
  authors: [{ name: 'Muzammil C' }],
  openGraph: {
    title: 'Muzammil C | Portfolio',
    description: 'Cybersecurity and AI projects by Muzammil C',
    type: 'website',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
