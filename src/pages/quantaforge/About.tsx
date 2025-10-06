import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Target, Rocket, Users, Award } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "We build quantum software with the same rigor as quantum hardware - every qubit, every gate matters."
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Turning cutting-edge quantum research into production-ready solutions that deliver real value today."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work alongside your team, understanding your unique challenges and co-creating tailored solutions."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Our solutions have helped leading organizations achieve 3x+ improvements in quantum circuit performance."
    }
  ];

  return (
    <div className="min-h-screen bg-quantaforge-dark text-quantaforge-light">
      <QuantaForgeNavigation />
      
      <main className="container mx-auto px-4 py-24 sm:py-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            className="text-5xl font-bold tracking-tight sm:text-6xl quantaforge-text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Quantum Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-quantaforge-light/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A specialized division of Adyakshar Labs, we bridge the gap between quantum research and real-world applications. 
            Our mission is to make quantum computing practical, secure, and accessible for organizations ready to harness its power.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-secondary/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-quantaforge-secondary mb-4">Our Mission</h2>
              <p className="text-quantaforge-light/70 leading-relaxed">
                To accelerate the quantum advantage by delivering high-performance compiler toolchains, 
                quantum-safe cryptography, and AI-powered simulation platforms that transform how 
                organizations approach quantum computing challenges.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-secondary/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-quantaforge-secondary mb-4">Our Vision</h2>
              <p className="text-quantaforge-light/70 leading-relaxed">
                A world where quantum computing is not a distant promise but a practical tool driving 
                innovation in pharmaceuticals, finance, security, and beyond - with Quantum Solutions 
                as the trusted partner making it happen.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-24">
          <motion.h2 
            className="text-4xl font-bold text-center quantaforge-text-gradient mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Drives Us
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-2xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10 hover:ring-quantaforge-secondary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <value.icon className="h-10 w-10 text-quantaforge-secondary mb-4" />
                <h3 className="text-xl font-bold text-quantaforge-light mb-3">{value.title}</h3>
                <p className="text-quantaforge-light/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-quantaforge-secondary/10 to-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-secondary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold quantaforge-text-gradient mb-6">Why Choose Quantum Solutions?</h2>
          <p className="text-lg text-quantaforge-light/70 leading-relaxed mb-8">
            We're not just quantum software developers - we're quantum application engineers. 
            With deep expertise spanning compiler optimization, post-quantum cryptography, and 
            quantum simulation, we've helped organizations achieve measurable results: 3x deeper 
            circuits, 30% cost savings, and zero-downtime migrations to quantum-safe security.
          </p>
          <p className="text-quantaforge-light/60">
            Part of the{" "}
            <a href="/" className="text-quantaforge-secondary hover:underline font-semibold">
              Adyakshar Labs
            </a>{" "}
            family, we bring the same commitment to innovation and excellence that defines all our work.
          </p>
        </motion.div>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default AboutPage;