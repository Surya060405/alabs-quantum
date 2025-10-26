import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Shield, Atom, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cpu,
    title: "Quantum Compiler Studio",
    description: "Hardware-aware compilers with routing, scheduling, pulse-level optimization, and error-aware transpilation. Turn any quantum device into a reliable computer.",
    features: ["QIR/OpenQASM compatible", "Gate decomposition", "Pulse optimization", "Error mitigation"],
    href: "/compiler",
    gradient: "from-quantaforge-secondary to-quantaforge-accent",
  },
  {
    icon: Shield,
    title: "Quantum-Secure Tokenization",
    description: "Post-quantum cryptography, QKD-ready interfaces, and tokenization rails for Web3 and enterprise. Future-proof your security infrastructure today.",
    features: ["PQC key management", "QKD integration", "Blockchain security", "Compliance-ready"],
    href: "/tokenization",
    gradient: "from-quantaforge-accent to-quantaforge-success",
  },
  {
    icon: Atom,
    title: "Quantum Simulation & AI",
    description: "Accelerate drug discovery and materials research with VQE/QAOA solvers, molecular simulation, and hybrid quantum-classical workflows integrated with HPC/ML.",
    features: ["Molecular simulation", "Hybrid workflows", "HPC integration", "Variational solvers"],
    href: "/simulation",
    gradient: "from-quantaforge-success to-quantaforge-secondary",
  },
];

export const SolutionsCards = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-quantaforge-primary/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Our Solutions
          </h2>
          <p className="text-base sm:text-lg text-quantaforge-light/60 max-w-2xl mx-auto px-4">
            Four specialized pillars for production-grade quantum computing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group flex flex-col"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-sm md:text-base text-quantaforge-light/70 mb-4 md:mb-6">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-8 flex-1">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-quantaforge-light/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={solution.href}>
                <Button 
                  variant="outline" 
                  className="w-full border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10 group-hover:border-quantaforge-secondary"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Reference Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-quantaforge-light text-center">
            Reference Architecture (high-level)
          </h3>
          <div className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-secondary/20">
            <div className="space-y-4 text-quantaforge-light/70">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-quantaforge-secondary mt-2 flex-shrink-0" />
                <p className="text-sm md:text-base">
                  <span className="font-semibold text-quantaforge-light">Top layer:</span> domain apps & notebooks (chemistry, materials, tokenization flows).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-quantaforge-accent mt-2 flex-shrink-0" />
                <p className="text-sm md:text-base">
                  <span className="font-semibold text-quantaforge-light">Middle:</span> Quantum Simulation & AI pipelines; Compiler Studio (QIR/OpenQASM); PQC/Tokenization services.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-quantaforge-success mt-2 flex-shrink-0" />
                <p className="text-sm md:text-base">
                  <span className="font-semibold text-quantaforge-light">Bottom:</span> GPUs/tensor networks via CUDA–Quantum; target devices (IBM Q, IonQ, Rigetti) and classical infra; security & compliance controls.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KPIs & Business Case Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-quantaforge-light text-center">
            KPIs & Business Case (manpower-efficient)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Engineering Productivity */}
            <div className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-secondary/20">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-quantaforge-secondary">
                A. Engineering Productivity
              </h4>
              <div className="space-y-3">
                <div className="pl-4 border-l-2 border-quantaforge-secondary/30">
                  <p className="text-sm md:text-base text-quantaforge-light/70">
                    <span className="font-medium text-quantaforge-light">Simulation & AI:</span> wall-clock per experiment; iterations per engineer-week; % automated sweeps.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-quantaforge-accent/30">
                  <p className="text-sm md:text-base text-quantaforge-light/70">
                    <span className="font-medium text-quantaforge-light">Compiler:</span> circuit depth/2-qubit count; job throughput; manual tuning hours avoided.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-quantaforge-success/30">
                  <p className="text-sm md:text-base text-quantaforge-light/70">
                    <span className="font-medium text-quantaforge-light">Tokenization/PQC:</span> time-to-compliance, % systems migrated, audit task hours avoided.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample Manpower-Savings Model */}
            <div className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-accent/20">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-quantaforge-accent">
                B. Sample Manpower-Savings Model
              </h4>
              <div className="space-y-4">
                <div className="bg-quantaforge-dark/50 p-4 rounded-lg border border-quantaforge-accent/20">
                  <p className="text-sm md:text-base text-quantaforge-light/80 font-mono">
                    Savings = (Manual hours/iteration – Automated hours/iteration) × Iterations/month × Loaded hourly rate
                  </p>
                </div>
                <p className="text-sm md:text-base text-quantaforge-light/70">
                  Track for simulation sweeps, compiler passes, and compliance/audit tasks.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery & Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-quantaforge-light text-center">
            Delivery & Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mb-4">
                <Microscope className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-quantaforge-light">Engagements</h4>
              <p className="text-sm text-quantaforge-light/70">
                Discovery workshop → scoped pilot → production hardening.
              </p>
            </div>

            <div className="glassmorphism p-6 rounded-xl border border-quantaforge-accent/20">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-4">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-quantaforge-light">Ops</h4>
              <p className="text-sm text-quantaforge-light/70">
                CI/CD hooks, IaC templates, observability dashboards, and security reviews.
              </p>
            </div>

            <div className="glassmorphism p-6 rounded-xl border border-quantaforge-success/20">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-quantaforge-success to-quantaforge-secondary flex items-center justify-center mb-4">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-quantaforge-light">Support</h4>
              <p className="text-sm text-quantaforge-light/70">
                Enterprise SLAs, training for your team, and periodic performance clinics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
