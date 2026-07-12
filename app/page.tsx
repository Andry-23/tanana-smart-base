import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsPreview from "@/components/ProjectsPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectsPreview />
      <ContactCTA />
    </main>
  );
}