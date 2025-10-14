import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { Lightbulb, Target, Users, Rocket, Code, Wrench, Shield, Network, Award, ArrowRight } from "lucide-react";
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
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 quantaforge-text-gradient">
              About Quantum Labs
            </h1>
            <p className="text-xl text-quantaforge-light/70 leading-relaxed">
              Pioneering the future of quantum computing through innovation, expertise, and partnership
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Company Context */}
      <section className="py-16 bg-quantaforge-primary/30">
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
            <div className="grid md:grid-cols-2 gap-12">
              

              <div className="glassmorphism p-8 rounded-2xl border border-quantaforge-secondary/20 text-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-quantaforge-secondary">
                    Quantum Labs
                  </h2>
                </div>
                <p className="text-quantaforge-light/70 leading-relaxed">
                  We are proud to introduce our new division, <span className="text-quantaforge-secondary font-semibold">Quantum Labs</span>—a cutting-edge venture dedicated to pioneering quantum computing solutions. Quantum Labs combines our deep expertise in technology consulting, custom software development, and hardware engineering with the transformative power of quantum computing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
      
      <QuantaForgeFooter />
    </div>;
};
export default AboutPage;