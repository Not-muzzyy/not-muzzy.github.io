import type { Metadata } from 'next';
import './globals.css';

import CustomCursor from '@/components/CustomCursor';
import MatrixCanvas from '@/components/MatrixCanvas';
import ThreatTicker from '@/components/ThreatTicker';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import CommandTerminal from '@/components/CommandTerminal';

export const metadata: Metadata = {
  title: 'Muzammil C | Portfolio',
  description:
    'Muzammil C — Cybersecurity and Machine Learning developer portfolio',
  authors: [{ name: 'Muzammil C' }],
  openGraph: {
    title: 'Muzammil C | Portfolio',
    description: 'Cybersecurity and AI projects by Muzammil C',
    type: 'website',
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
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CustomCursor />
        <MatrixCanvas />
        <ThreatTicker />
        <Navbar />
        <ThemeToggle />
        <CommandTerminal />
        {children}
      </body>
    </html>
  );
}
