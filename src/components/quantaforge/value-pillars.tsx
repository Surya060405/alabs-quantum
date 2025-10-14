import { motion } from "framer-motion";
import { Cpu, Shield, Atom } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Hardware-aware compilers",
    description: "Routing, scheduling, pulse-level optimization, and error-aware transpilation",
    gradient: "from-quantaforge-secondary to-quantaforge-accent",
  },
  {
    icon: Shield,
    title: "Quantum-safe cryptography",
    description: "PQC keying, tokenization, and QKD-ready interfaces for Web3/enterprise",
    gradient: "from-quantaforge-accent to-quantaforge-success",
  },
  {
    icon: Atom,
    title: "Simulation & AI",
    description: "Chemistry/materials workflows, variational solvers, hybrid runtime with HPC/ML",
    gradient: "from-quantaforge-success to-quantaforge-secondary",
  },
];

export const ValuePillars = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-quantaforge-dark relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Our Core Capabilities
          </h2>
          <p className="text-base sm:text-lg text-quantaforge-light/60 max-w-2xl mx-auto px-4">
            Three core capabilities that transform quantum devices into production-ready systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-quantaforge-light/70">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
