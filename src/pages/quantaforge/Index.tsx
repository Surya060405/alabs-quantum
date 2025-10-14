import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeHero } from "@/components/quantaforge/hero";
import { AboutQuantumLabs } from "@/components/quantaforge/about-section";
import { ValuePillars } from "@/components/quantaforge/value-pillars";
import { SolutionsCards } from "@/components/quantaforge/solutions-cards";
import { CaseHighlights } from "@/components/quantaforge/case-highlights";
import { PricingSection } from "@/components/quantaforge/pricing-section";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";

const QuantaForgeIndex = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      <main>
        <QuantaForgeHero />
        <AboutQuantumLabs />
        <ValuePillars />
        <section id="solutions-section">
          <SolutionsCards />
        </section>
        <CaseHighlights />
        <PricingSection />
      </main>
      <QuantaForgeFooter />
    </div>
  );
};

export default QuantaForgeIndex;
