import { motion } from "framer-motion";
import { Building2, DollarSign, Beaker } from "lucide-react";

const cases = [
  {
    icon: Building2,
    company: "Quantum Hardware Startup",
    industry: "Semiconductor",
    challenge: "Needed production-grade compiler for their novel architecture",
    result: "5× reduction in gate errors, 3× faster circuit execution",
  },
  {
    icon: DollarSign,
    company: "Global Financial Institution",
    industry: "Financial Services",
    challenge: "Required quantum-resistant cryptography for blockchain assets",
    result: "Successful PQC migration with zero downtime",
  },
  {
    icon: Beaker,
    company: "Pharmaceutical Research Lab",
    industry: "Pharma & Biotech",
    challenge: "Drug discovery simulations too slow on classical systems",
    result: "10× acceleration in molecular property calculations",
  },
];

export const CaseHighlights = () => {
  return (
    <section className="py-24 bg-quantaforge-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Case Highlights
          </h2>
          <p className="text-lg text-quantaforge-light/60 max-w-2xl mx-auto">
            Real results from real deployments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-primary/30 hover:border-quantaforge-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mb-4">
                <caseStudy.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="text-sm text-quantaforge-secondary mb-2">{caseStudy.industry}</div>
              <h3 className="text-xl font-bold mb-3 text-quantaforge-light">
                {caseStudy.company}
              </h3>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-quantaforge-light/80 mb-1">Challenge:</div>
                <p className="text-sm text-quantaforge-light/60">{caseStudy.challenge}</p>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-quantaforge-light/80 mb-1">Result:</div>
                <p className="text-sm text-quantaforge-success font-medium">{caseStudy.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
