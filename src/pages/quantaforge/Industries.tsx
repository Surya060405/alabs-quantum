import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Beaker, DollarSign, Cpu, Building2, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      icon: Beaker,
      name: "Pharma & Biotech",
      id: "pharma",
      description: "Accelerate drug discovery and molecular research",
      challenges: [
        "Protein folding simulations too slow on classical systems",
        "Drug-target binding affinity calculations require quantum precision",
        "Materials property prediction needs molecular-level accuracy",
      ],
      solutions: [
        "VQE-based molecular ground state calculations",
        "Quantum simulation for protein interactions",
        "Hybrid quantum-classical workflows integrated with existing HPC",
      ],
      impact: "10× faster molecular property calculations",
    },
    {
      icon: DollarSign,
      name: "Financial Services",
      id: "finance",
      description: "Quantum-secure cryptography for high-value transactions",
      challenges: [
        "Current blockchain cryptography vulnerable to quantum attacks",
        "High-value asset tokenization requires quantum-grade security",
        "Regulatory compliance demands future-proof encryption",
      ],
      solutions: [
        "Post-quantum cryptography (PQC) implementation",
        "QKD-ready infrastructure for institutional assets",
        "Quantum-safe smart contract layers",
      ],
      impact: "Zero-trust security with post-quantum guarantees",
    },
    {
      icon: Cpu,
      name: "Semiconductor & Hardware",
      id: "semiconductor",
      description: "Production-grade compiler stacks for quantum devices",
      challenges: [
        "Hardware heterogeneity makes software portability difficult",
        "Gate errors and connectivity constraints limit circuit performance",
        "Need for device-specific optimization pipelines",
      ],
      solutions: [
        "Custom compiler infrastructure for novel architectures",
        "Hardware-aware routing and scheduling",
        "Error mitigation tuned to device noise profiles",
      ],
      impact: "5× reduction in gate errors, 3× faster execution",
    },
    {
      icon: Building2,
      name: "Government & Labs",
      id: "government",
      description: "Vendor-neutral quantum infrastructure",
      challenges: [
        "Need for interoperable quantum computing platforms",
        "Require error correction and fault-tolerant architectures",
        "Must maintain security and control over sensitive workloads",
      ],
      solutions: [
        "Vendor-neutral QIR/OpenQASM compiler stacks",
        "Custom QEC software development",
        "On-premise deployment with full control",
      ],
      impact: "Weeks → days for cross-platform algorithm porting",
    },
    {
      icon: Coins,
      name: "Web3 & Digital Assets",
      id: "web3",
      description: "Future-proof blockchain security",
      challenges: [
        "Wallet cryptography will be broken by quantum computers",
        "Smart contracts need quantum-resistant signatures",
        "NFT and tokenization platforms require security upgrades",
      ],
      solutions: [
        "Hybrid classical-PQC signature schemes",
        "Quantum-safe wallet infrastructure",
        "Tokenization rails with CRYSTALS-Kyber/Dilithium",
      ],
      impact: "Quantum-secure migration with zero downtime",
    },
  ];

  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                Industries We Serve
              </h1>
              <p className="text-xl text-quantaforge-light/70 mb-8">
                Quantum solutions tailored to your sector's unique challenges
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              id={industry.id}
              className={index % 2 === 0 ? "bg-quantaforge-dark" : "bg-quantaforge-primary/50"}
            >
              <div className="container mx-auto px-4 py-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mb-6">
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">
                        {industry.name}
                      </h2>
                      <p className="text-xl text-quantaforge-light/70 mb-8">
                        {industry.description}
                      </p>
                      <div className="inline-block px-6 py-3 rounded-lg bg-quantaforge-secondary/20 border border-quantaforge-secondary/30">
                        <span className="text-quantaforge-secondary font-semibold">
                          {industry.impact}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-quantaforge-secondary">
                          Common Challenges
                        </h3>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-secondary mt-2 flex-shrink-0" />
                              <span className="text-quantaforge-light/80">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 text-quantaforge-accent">
                          Our Solutions
                        </h3>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution) => (
                            <li key={solution} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-accent mt-2 flex-shrink-0" />
                              <span className="text-quantaforge-light/80">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-quantaforge-light">
                Ready to transform your industry?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Let's discuss how quantum computing can solve your specific challenges
              </p>
              <Link to="/quantaforge/contact">
                <Button size="lg" className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow">
                  Book a Technical Scoping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default Industries;
