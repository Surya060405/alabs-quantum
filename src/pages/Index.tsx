import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutQuantumLabs } from "@/components/quantaforge/about-section";
import { ServicesSection } from "@/components/services-section";
import { TechnologiesSection } from "@/components/technologies-section";
import { OurTeamSection } from "@/components/our-team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutQuantumLabs />
        <ServicesSection />
        <TechnologiesSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
