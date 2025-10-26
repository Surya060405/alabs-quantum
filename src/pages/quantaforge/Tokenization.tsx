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
      title: "PQC Migration Toolkit",
      description:
        "Integrate NIST-selected algorithms such as CRYSTALS-Kyber and Dilithium into existing cryptographic infrastructures with minimal disruption.\n• Enable hybrid TLS handshakes, certificate rollout, and HSM-backed key management for enterprise-grade migration to post-quantum cryptography.\n• Automate deployment pipelines for cryptographic agility, ensuring forward security and compliance readiness and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Lock,
      title: "Tokenization Services",
      description:
        "Implement format-preserving and PCI-compliant tokenization architectures for secure data representation.\n• Support vaulted and non-vaulted configurations with deterministic mapping to retain analytical integrity.\n• Deliver scalable tokenization rails that protect sensitive assets while maintaining seamless user experience and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: GitMerge,
      title: "Blockchain Hardening",
      description:
        "Secure decentralized ecosystems with PQC-enabled wallets and quantum-safe threshold signature schemes.\n• Incorporate multiparty computation (MPC) and lattice-based key derivation for tamper-resistant consensus.\n• Enable post-quantum L2 bridges to safeguard cross-chain communication from emerging quantum adversaries and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Router,
      title: "QKD-Ready Peering",
      description:
        "Deploy APIs that integrate Quantum Key Distribution (QKD) channels wherever available for ultimate link-layer security.\n• Implement automated session key management, rotation, and auditing through programmable interfaces.\n• Bridge classical and quantum communication layers for end-to-end authenticated encryption across distributed systems and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: FileText,
      title: "Compliance",
      description:
        "Align cryptographic operations with PCI DSS, GDPR, HIPAA, and SOX regulatory standards.\n• Maintain audit-ready chain-of-custody, policy attestations, and standardized key management procedures.\n• Provide compliance-driven cryptographic assurance designed to meet both enterprise governance and quantum-era risk frameworks and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
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
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-accent/20 text-quantaforge-accent text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-accent">
                Tokenize with quantum-grade security.
              </h1>
              <p className="text-lg text-quantaforge-light/60 mb-8 max-w-3xl leading-relaxed">
                Future-proof your data, assets, and digital ecosystems against quantum threats. We help enterprises and
                Web3 teams migrate seamlessly to post-quantum cryptography (PQC) while preserving speed, compliance, and
                user trust. Our architecture integrates lattice-based KEMs and signature schemes, forward-secure key
                rotation, and QKD-ready interfaces without disrupting performance. From hybrid TLS frameworks to
                quantum-safe tokenization and blockchain hardening, we deliver cryptographic resilience engineered for
                the post-quantum era and more.
              </p>
              <Link to="/quantumlabs/contact"></Link>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Capabilities</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="p-6 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-dark/50 hover:border-quantaforge-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <div className="text-quantaforge-light/70 space-y-2 whitespace-pre-line">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Value Propositions</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "Delivers forward-secure, quantum-resistant encryption across all layers.",
                "Enables cryptographic agility and smooth PQC migration for legacy systems.",
                "Strengthens Web3, IoT, and financial networks against quantum adversaries.",
                "Ensures compliance and audit-readiness for enterprise-grade cryptographic governance.",
                "Bridges classical and quantum security models for long-term digital resilience.",
                "Quantum‑safe data protection in finance/healthcare; payment tokenization; secure cross‑chain comms; regulated‑industry readiness.",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-accent/20"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-accent flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Architectures */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Reference Architectures</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {referenceArchitectures.map((arch, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-primary/50 flex flex-col items-center text-center"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.15,
                    }}
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
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Outcomes</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-dark/50"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-success flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-quantaforge-dark relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="absolute top-1/4 left-3/4 w-96 h-96 bg-quantaforge-accent/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 quantaforge-text-gradient">
                Success Stories
              </h2>
              <p className="text-xl text-quantaforge-light/70 max-w-3xl mx-auto">
                Real-world achievements in quantum-resistant security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "PQC Migration Toolkit",
                  content: "Kyber, Dilithium; hybrid TLS; cryptographic agility."
                },
                {
                  title: "Tokenization Services",
                  content: "PCI‑compliant, format‑preserving; blockchain hardening with PQC‑enabled wallets and MPC‑based consensus."
                },
                {
                  title: "QKD-Ready Peering",
                  content: "QKD‑ready peering and compliance frameworks (GDPR, PCI DSS, HIPAA)."
                }
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism bg-quantaforge-primary/30 backdrop-blur-xl border-quantaforge-light/10 rounded-xl p-8 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-quantaforge-accent/20 border border-quantaforge-accent/30 mb-6">
                    <CheckCircle className="h-7 w-7 text-quantaforge-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-quantaforge-light mb-4">
                    {story.title}
                  </h3>
                  <p className="text-quantaforge-light/80 text-base flex-grow">
                    {story.content}
                  </p>
                  <p className="text-quantaforge-accent text-sm font-medium mt-6">
                    For more information, contact:{" "}
                    <a href="mailto:info@alabs-quantum.com" className="hover:underline">
                      info@alabs-quantum.com
                    </a>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot to Production */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 text-quantaforge-light">Pilot to Production</h2>
              <div className="space-y-6">
                {[
                  {
                    phase: "0–2 weeks",
                    description: "crypto inventory; risk mapping; pilot boundary."
                  },
                  {
                    phase: "3–6 weeks",
                    description: "hybrid TLS enablement; tokenization in a gold path."
                  },
                  {
                    phase: "7–12 weeks",
                    description: "phased PQC rollout; SIEM/control integration; go‑live."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 rounded-xl border border-quantaforge-accent/20 bg-quantaforge-primary/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-quantaforge-accent mb-2">{item.phase}</h3>
                        <p className="text-quantaforge-light/70">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
      </main>

      <QuantaForgeFooter />
    </div>
  );
};
export default Tokenization;
