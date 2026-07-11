import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
    </main>
  );
}