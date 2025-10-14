import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, GitMerge, Router, FileText, Server, Wallet, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Tokenization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Shield,
      title: "PQC migration toolkit",
      description: "Integration of NIST-selected algorithms (CRYSTALS-Kyber/Dilithium, etc.), hybrid TLS, certificate rollout, HSM integration.",
    },
    {
      icon: Lock,
      title: "Tokenization services",
      description: "Format-preserving tokenization, vaulted/non-vaulted modes, deterministic mapping for analytics, PCI-friendly designs.",
    },
    {
      icon: GitMerge,
      title: "Blockchain hardening",
      description: "PQC wallets, threshold signatures/MPC, quantum-safe key derivation, post-quantum L2 bridges.",
    },
    {
      icon: Router,
      title: "QKD-ready peering",
      description: "API to add QKD channels where available; session key management and auditing.",
    },
    {
      icon: FileText,
      title: "Compliance",
      description: "PCI DSS, GDPR, HIPAA, SOX; chain-of-custody, attestations, key management SOPs.",
    },
  ];

  const referenceArchitectures = [
    {
      icon: Server,
      title: "Enterprise Tokenization Gateway",
      description: "with PQC KMS and HSM.",
    },
    {
      icon: Wallet,
      title: "Web3 Custody Wallet",
      description: "with MPC + PQ signatures; policy engine.",
    },
  ];

  const outcomes = [
    "Crypto-agile posture; staged rollout without breaking legacy flows.",
    "Reduced breach surface via tokenization and policy controls.",
  ];

  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Quantum-resistant tokenization & blockchain security (PQC, QKD-ready)</title>
      </Helmet>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-accent">
                Tokenize with quantum-grade security.
              </h1>
              <p className="text-lg text-quantaforge-light/60 mb-8 max-w-3xl">
                We help enterprises and Web3 teams migrate to post-quantum cryptography (PQC) and build tokenization rails that remain secure against quantum adversaries. Integrate lattice-based KEMs/signatures, forward-secure key rotation, and QKD-ready interfaces without disrupting user experience.
              </p>
              <Link to="/quantumlabs/contact">
                <Button className="bg-quantaforge-accent text-white hover:bg-quantaforge-accent/90 shadow-lg shadow-quantaforge-accent/30">
                  Book a PQC readiness assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Capabilities</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
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

        {/* Reference Architectures */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Reference Architectures</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {referenceArchitectures.map((arch, index) => (
                    <motion.div 
                        key={index} 
                        className="p-6 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-primary/50 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-4">
                            <arch.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-quantaforge-light">{arch.title}</h3>
                        <p className="text-quantaforge-light/70">{arch.description}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Outcomes</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-dark/50"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-success flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{outcome}</p>
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
                Ready to future-proof your assets?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Let's discuss a staged migration to quantum-resistant tokenization.
              </p>
              <Link to="/quantumlabs/contact">
                <Button size="lg" className="bg-quantaforge-accent text-white hover:bg-quantaforge-accent/90 shadow-lg shadow-quantaforge-accent/30">
                  Book a PQC readiness assessment
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
