import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Key, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tokenization = () => {
  const offerings = [
    {
      icon: Key,
      title: "PQC Key Management",
      description: "CRYSTALS-Kyber/Dilithium-based key generation, rotation, and hierarchical derivation",
    },
    {
      icon: Shield,
      title: "QKD-ready Interfaces",
      description: "Integration points for quantum key distribution networks (BB84, E91)",
    },
    {
      icon: Lock,
      title: "Tokenization Rails",
      description: "Privacy-preserving asset encoding and quantum-safe smart contract layers",
    },
  ];

  const standards = [
    "NIST PQC finalist algorithms",
    "CRYSTALS-Kyber (key encapsulation)",
    "CRYSTALS-Dilithium (digital signatures)",
    "QKD protocol compatibility",
  ];

  const useCases = [
    {
      sector: "Web3 & Digital Assets",
      challenge: "Blockchain cryptography vulnerable to future quantum attacks",
      solution: "Hybrid classical-PQC signature schemes for wallet and smart contract security",
    },
    {
      sector: "Financial Services",
      challenge: "High-value transactions require quantum-grade security",
      solution: "QKD-backed tokenization for institutional assets and settlement rails",
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
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-accent/20 text-quantaforge-accent text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                Quantum-Secure Tokenization
              </h1>
              <p className="text-2xl text-quantaforge-light/70 mb-8">
                Tokenize with quantum-grade security.
              </p>
              <p className="text-lg text-quantaforge-light/60 mb-8 max-w-3xl">
                Today's blockchain and tokenization systems rely on cryptography that quantum computers 
                will break. Future-proof your security infrastructure with post-quantum cryptography (PQC) 
                and quantum key distribution (QKD) integration.
              </p>
              <Link to="/quantaforge/contact">
                <Button className="bg-quantaforge-accent text-white hover:bg-quantaforge-accent/90 shadow-lg shadow-quantaforge-accent/30">
                  Schedule Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Offer</h2>
              <p className="text-lg text-quantaforge-light/60 max-w-2xl">
                Comprehensive quantum-resistant security infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {offerings.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-dark/50 hover:border-quantaforge-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <p className="text-quantaforge-light/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Compliance */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Standards & Compliance</h2>
              <div className="glassmorphism p-8 rounded-xl border border-quantaforge-accent/20">
                <p className="text-quantaforge-light/70 mb-6">
                  We implement NIST-approved post-quantum cryptographic algorithms and maintain 
                  compatibility with emerging QKD standards:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {standards.map((standard) => (
                    <div key={standard} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-quantaforge-success flex-shrink-0" />
                      <span className="text-quantaforge-light">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Use Cases</h2>
              <p className="text-lg text-quantaforge-light/60 max-w-2xl">
                Real-world applications of quantum-secure tokenization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.sector}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-dark/50"
                >
                  <h3 className="text-2xl font-bold mb-4 text-quantaforge-accent">{useCase.sector}</h3>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-quantaforge-light/80 mb-2">Challenge:</div>
                    <p className="text-quantaforge-light/70">{useCase.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-quantaforge-light/80 mb-2">Our Solution:</div>
                    <p className="text-quantaforge-light/70">{useCase.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                Secure your assets for the quantum era
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Schedule a security assessment to discuss quantum-resistant cryptography for your infrastructure
              </p>
              <Link to="/quantaforge/contact">
                <Button size="lg" className="bg-quantaforge-accent text-white hover:bg-quantaforge-accent/90 shadow-lg shadow-quantaforge-accent/30">
                  Schedule Security Assessment
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

export default Tokenization;
