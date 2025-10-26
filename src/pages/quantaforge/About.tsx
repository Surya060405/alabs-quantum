import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { Lightbulb, Target, Users, Rocket, Code, Wrench, Shield, Network, Award, ArrowRight } from "lucide-react";
import TransparentLogo from "@/assets/transparent_Logo.png"; // Import the transparent logo

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [{
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering quantum computing solutions at the cutting edge of technology"
  }, {
    icon: Target,
    title: "Practical Solutions",
    description: "Making quantum computing accessible and applicable to real-world challenges"
  }, {
    icon: Users,
    title: "Partnership Approach",
    description: "Collaborating closely with clients from proof-of-concept to production"
  }, {
    icon: Rocket,
    title: "Future-Focused",
    description: "Building the foundation for the next generation of computing"
  }];
  const services = [{
    icon: Code,
    title: "Quantum Software Development",
    description: "Custom software solutions leveraging quantum algorithms to solve industry-specific problems, enhancing performance and scalability beyond classical computing limits."
  }, {
    icon: Wrench,
    title: "Quantum Hardware Engineering",
    description: "Hardware solutions designed to support quantum computing applications, including quantum processors and specialized hardware components that bridge quantum and classical systems."
  }, {
    icon: Users,
    title: "Quantum Consulting",
    description: "Expertise and guidance in navigating the complex landscape of quantum computing, from proof-of-concept development to full-scale implementation and integration."
  }, {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Cutting-edge research on quantum algorithms, quantum machine learning, and quantum cryptography, tailored to meet the evolving needs of our clients."
  }, {
    icon: Network,
    title: "Quantum Integration",
    description: "Seamlessly integrating quantum solutions with existing business processes and IT infrastructure to drive real-world value and measurable results."
  }];
  const whyItems = [{
    title: "Optimize Complex Processes",
    description: "Streamline operations across industries like healthcare, finance, manufacturing, and logistics with quantum-powered optimization."
  }, {
    title: "Accelerate Data Analysis & Machine Learning",
    description: "Leverage computational power that exceeds classical computers to enhance analytics and ML algorithms."
  }, {
    title: "Enable Quantum-Resilient Cryptography",
    description: "Ensure the security of sensitive data in the quantum era with post-quantum cryptographic solutions."
  }, {
    title: "Solve the Unsolvable",
    description: "Harness quantum algorithms to tackle problems that were previously thought intractable by classical computing."
  }];
  return <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 quantaforge-text-gradient flex items-center justify-center gap-2">
              About <img src={TransparentLogo} alt="Quantum Labs Logo" className="h-12 mx-4 mt-4 md:h-16 w-auto" />
            </h1>
            <p className="text-xl text-quantaforge-light/70 leading-relaxed">
              Pioneering the future of quantum computing through innovation, expertise, and partnership
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Company Context */}
      

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-quantaforge-light">
              Our Mission
            </h2>
            <p className="text-xl text-quantaforge-light/70 leading-relaxed">
              To make quantum computing accessible, practical, and transformative for businesses across industries, delivering novel solutions that tackle complex computational challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Quantum Labs Section */}
      

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-quantaforge-light text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} className="glassmorphism p-6 rounded-2xl border border-quantaforge-secondary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-quantaforge-secondary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-quantaforge-light/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-quantaforge-primary/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-quantaforge-light text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} className="glassmorphism p-6 rounded-2xl border border-quantaforge-secondary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-quantaforge-secondary">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-quantaforge-light/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-quantaforge-light text-center">
              What You Get
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Time‑to‑insight:</span> quantum‑enhanced simulation pipelines with AI/active learning.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Time‑to‑execution:</span> hardware‑agnostic, noise‑aware compilation from IR to pulse‑level.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Time‑to‑secure:</span> PQC migration, tokenization, QKD‑ready peering for post‑quantum risk.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lean-Team Impacts Section */}
      <section className="py-20 bg-quantaforge-primary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-quantaforge-light text-center">
              Lean‑Team Impacts
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Automate model tuning, passes of the compiler, number of simulations</span> → fewer engineer‑hours per release.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Cross‑platform portability</span> → less vendor lock‑in and retraining.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20"
              >
                <p className="text-quantaforge-light/80 leading-relaxed">
                  <span className="text-quantaforge-secondary font-semibold">Compliance‑ready tokenization/PQC</span> → lower audit and ops overhead.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <QuantaForgeFooter />
    </div>;
};
export default AboutPage;