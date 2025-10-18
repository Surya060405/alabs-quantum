import { motion } from "framer-motion";
import { Cpu, Shield, Atom, Code, Wrench, Users, Lightbulb, Network } from "lucide-react";

const whyItems = [
  {
    icon: Cpu,
    title: "Optimize Complex Processes",
    description: "Streamline operations across healthcare, finance, manufacturing, and logistics",
  },
  {
    icon: Lightbulb,
    title: "Accelerate Data Analysis & ML",
    description: "Computational power that exceeds classical computers for advanced algorithms",
  },
  {
    icon: Shield,
    title: "Quantum-Resilient Cryptography",
    description: "Ensure security of sensitive data in the quantum era",
  },
  {
    icon: Atom,
    title: "Solve the Unsolvable",
    description: "Harness quantum algorithms for previously intractable problems",
  },
];

const services = [
  {
    icon: Code,
    title: "Quantum Software Development",
    description: "Custom solutions leveraging quantum algorithms for industry-specific challenges",
  },
  {
    icon: Wrench,
    title: "Quantum Hardware Engineering",
    description: "Specialized hardware components including quantum processors",
  },
  {
    icon: Users,
    title: "Quantum Consulting",
    description: "Expert guidance from proof-of-concept to full-scale implementation",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Cutting-edge work in quantum algorithms, ML, and cryptography",
  },
  {
    icon: Network,
    title: "Quantum Integration",
    description: "Seamless integration with existing business processes and IT infrastructure",
  },
];

export const AboutQuantumLabs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-quantaforge-dark relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 md:mb-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-quantaforge-secondary">
            Introducing Quantum Labs
          </h3>
          <p className="text-sm md:text-base text-quantaforge-light/70 leading-relaxed max-w-3xl mx-auto">
            We are proud to introduce our new division, <span className="text-quantaforge-secondary font-semibold">Quantum Labs</span>—a cutting-edge venture dedicated to pioneering quantum computing solutions. Quantum Labs combines our deep expertise in technology consulting, custom software development, and hardware engineering with the transformative power of quantum computing to offer businesses unique, scalable, and disruptive solutions for the next generation of digital innovation.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-6 sm:p-8 md:p-12 rounded-2xl border border-quantaforge-secondary/20 mb-12 md:mb-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-quantaforge-light text-center">
            Our Mission
          </h3>
          <p className="text-base sm:text-lg text-quantaforge-light/70 leading-relaxed text-center">
            Our mission at Quantum Labs is to make quantum computing <span className="text-quantaforge-secondary font-semibold">accessible, practical, and transformative</span> for businesses across industries. We are committed to harnessing the potential of quantum technologies to deliver novel solutions that tackle complex computational challenges and unlock new possibilities for efficiency, security, and performance.
          </p>
        </motion.div>

        {/* Why Quantum Labs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light text-center">
            Why Quantum Labs?
          </h3>
          <p className="text-base sm:text-lg text-quantaforge-light/60 max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
            As industries evolve, traditional computing methods are being stretched to their limits. Quantum computing represents the next frontier in computational power.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {whyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-5 md:p-6 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-quantaforge-light/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light text-center">
            What We Offer
          </h3>
          <p className="text-base sm:text-lg text-quantaforge-light/60 max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
            A comprehensive range of services to embrace the power of quantum computing
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-5 md:p-6 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-quantaforge-accent to-quantaforge-success flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-quantaforge-light/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
