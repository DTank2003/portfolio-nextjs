import CustomCursor from "./components/CustomCursor";
import AboutSection from "./sections/About";
import ContactSection  from "./sections/Contact";
import ExperienceSection from "./sections/Experience";
import HeaderSection from "./sections/Header";
import HeroSection from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
