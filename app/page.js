import Hero from "@/sections/Hero";
import AboutPreview from "@/sections/AboutPreview";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ServicesSection from "@/sections/ServicesSection";
import ContactCTA from "@/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection limit={4} />
      <ContactCTA />
    </>
  );
}
