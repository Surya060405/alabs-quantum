import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeHero } from "@/components/quantaforge/hero";
import { ValuePillars } from "@/components/quantaforge/value-pillars";
import { HowWeWork } from "@/components/quantaforge/how-we-work";
import { BenchmarksSection } from "@/components/quantaforge/benchmarks-section";
import { SolutionsCards } from "@/components/quantaforge/solutions-cards";
import { CaseHighlights } from "@/components/quantaforge/case-highlights";
import { CTABand } from "@/components/quantaforge/cta-band";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";

const QuantaForgeIndex = () => {
  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      <main>
        <QuantaForgeHero />
        <ValuePillars />
        <HowWeWork />
        <BenchmarksSection />
        <SolutionsCards />
        <CaseHighlights />
        <CTABand />
      </main>
      <QuantaForgeFooter />
    </div>
  );
};

export default QuantaForgeIndex;
