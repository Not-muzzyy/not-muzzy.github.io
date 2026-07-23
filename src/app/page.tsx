import HeroSection from '@/components/HeroSection';
import SOCPanel from '@/components/SOCPanel';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ToolkitSection from '@/components/ToolkitSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertsSection from '@/components/CertsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SOCPanel />
      <AboutSection />
      <SkillsSection />
      <ToolkitSection />
      <ProjectsSection />
      <CertsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
