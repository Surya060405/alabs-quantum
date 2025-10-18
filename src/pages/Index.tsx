import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutQuantumLabs } from "@/components/quantaforge/about-section";
import { SolutionsCards } from "@/components/quantaforge/solutions-cards";
import { RDShowcase } from "@/components/quantaforge/rd-showcase";
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
        <SolutionsCards />
        <RDShowcase />
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
