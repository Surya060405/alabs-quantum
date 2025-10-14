import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Shield, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Cpu,
    title: "Quantum Compiler Studio",
    description: "Hardware-aware compilers with routing, scheduling, pulse-level optimization, and error-aware transpilation. Turn any quantum device into a reliable computer.",
    features: ["QIR/OpenQASM compatible", "Gate decomposition", "Pulse optimization", "Error mitigation"],
    href: "/quantumlabs/compiler",
    gradient: "from-quantaforge-secondary to-quantaforge-accent",
  },
  {
    icon: Shield,
    title: "Quantum-Secure Tokenization",
    description: "Post-quantum cryptography, QKD-ready interfaces, and tokenization rails for Web3 and enterprise. Future-proof your security infrastructure today.",
    features: ["PQC key management", "QKD integration", "Blockchain security", "Compliance-ready"],
    href: "/quantumlabs/tokenization",
    gradient: "from-quantaforge-accent to-quantaforge-success",
  },
  {
    icon: Atom,
    title: "Quantum Simulation & AI",
    description: "Accelerate drug discovery and materials research with VQE/QAOA solvers, molecular simulation, and hybrid quantum-classical workflows integrated with HPC/ML.",
    features: ["Molecular simulation", "Hybrid workflows", "HPC integration", "Variational solvers"],
    href: "/quantumlabs/simulation",
    gradient: "from-quantaforge-success to-quantaforge-secondary",
  },
];

export const SolutionsCards = () => {
  return (
    <section className="py-24 bg-quantaforge-primary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Our Solutions
          </h2>
          <p className="text-lg text-quantaforge-light/60 max-w-2xl mx-auto">
            Three specialized pillars for production-grade quantum computing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism p-8 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-quantaforge-light/70 mb-6">
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
      </div>
    </section>
  );
};
