import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { GitBranch, Sliders, Shield, Zap, Server, Lock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Technologies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const technologies = [{
    icon: GitBranch,
    title: "Compiler Architecture & IR/QIR",
    description: "Dialects, pass pipelines, validation, equivalence checking."
  }, {
    icon: Sliders,
    title: "Mapping, Routing, Scheduling",
    description: "Noise-aware strategies, latency models, concurrency."
  }, {
    icon: Shield,
    title: "Error Mitigation/Correction",
    description: "DD, RC, PEC now; logical ops and decoders next."
  }, {
    icon: Zap,
    title: "Pulse & Control",
    description: "Parametric gates, calibration hooks, control stacks (QM OPX, Qiskit Pulse)."
  }, {
    icon: Server,
    title: "Runtime & Orchestration",
    description: "Mid-circuit feedback, classical co-processing, cloud/hybrid execution."
  }, {
    icon: Lock,
    title: "Security & Compliance",
    description: "Cryptographic hygiene, supply-chain SBOM, SOC 2 Type II roadmap."
  }];
  return <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Our Technology Stack | QuantaForge</title>
      </Helmet>
      <QuantaForgeNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                Our Technology Stack
              </h1>
              <p className="text-lg text-quantaforge-light/70 mb-8 max-w-3xl">
                We build on a foundation of deep technical expertise across the full quantum software stack. Our modular and extensible architecture allows us to deliver solutions that are tailored to your specific hardware and application needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => <motion.div key={tech.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="p-6 rounded-xl border border-quantaforge-light/10 bg-quantaforge-dark/50 hover:border-quantaforge-accent/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{tech.title}</h3>
                  <p className="text-quantaforge-light/70">{tech.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </main>

      <QuantaForgeFooter />
    </div>;
};
export default Technologies;