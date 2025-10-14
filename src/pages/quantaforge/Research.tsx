import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { RDSection } from "@/components/quantaforge/rd-section";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";

const Research = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <main className="pt-20">
        <RDSection />
      </main>
      <QuantaForgeFooter />
    </div>
  );
};

export default Research;
