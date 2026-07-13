import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectsPreview />
      <CallToAction />
      <Footer />
    </main>
  );
}

