import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import WorkSection from "@/components/work-section";

const PortfolioPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default PortfolioPage;
