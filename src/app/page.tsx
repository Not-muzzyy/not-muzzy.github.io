import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertsSection from '@/components/CertsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
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
      <Footer />
    </>
  );
}
