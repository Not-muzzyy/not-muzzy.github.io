import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertsSection from '@/components/CertsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mohammed Muzammil C | Cybersecurity & AI Engineer',
  description: 'Cybersecurity Engineer & AI Developer based in Ballari. Specializing in SOC analysis, SIEM systems, and RAG architectures.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohammed Muzammil C | Cybersecurity & AI Engineer',
    description: 'Cybersecurity Engineer & AI Developer based in Ballari. Specializing in SOC analysis, SIEM systems, and RAG architectures.',
    url: 'https://muzzyy.me/',
    type: 'website',
  },
};

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-[#0a0a0c] text-white">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <CertsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
