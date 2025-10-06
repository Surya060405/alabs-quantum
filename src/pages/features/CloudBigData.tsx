import { motion } from "framer-motion";
import { Cloud, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const CloudBigData = () => {
  const capabilities = [
    "Multi-Cloud Platforms, Big Data Analytics",
    "PaaS, SaaS, Data Lakes, ETL Pipelines",
    "Hybrid Cloud: Azure, AWS, GCP",
    "Platform Models: PaaS, CaaS, SaaS, Stacks: MEAN, MERN, LAMP",
    "Microservices Architecture, Docker, Kubernetes, Kubeflow",
    "Programming: Scala, Ruby, Java, Python",
    "Frameworks: Apache Hadoop"
  ];

  const technologies = [
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Kubeflow",
    "Apache Hadoop", "Scala", "Ruby", "Java", "Python",
    "MEAN Stack", "MERN Stack", "LAMP Stack", "Microservices", "ETL"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-neon-green transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block p-4 rounded-2xl bg-neon-green/10 mb-6">
              <Cloud className="w-16 h-16 text-neon-green" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-green">Cloud Computing & Big Data</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Scalable cloud infrastructure and comprehensive big data analytics solutions for enterprise needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism p-10 rounded-2xl max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gradient-green mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We architect and implement robust cloud solutions that scale with your business. Our expertise spans 
              all major cloud platforms including AWS, Azure, and GCP, enabling hybrid and multi-cloud strategies 
              tailored to your specific requirements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From designing data lakes to building sophisticated ETL pipelines, we help organizations harness the 
              power of big data. Our microservices architecture expertise ensures your applications are resilient, 
              scalable, and maintainable using containerization technologies like Docker and Kubernetes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-green/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-green">Technologies & Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade cloud and big data tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism px-6 py-3 rounded-full border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-blue">Key Capabilities</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl flex items-start gap-4 hover:glow-neon-green transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-neon-green" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-blue/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism p-12 rounded-2xl text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gradient-green mb-6">
              Scale Your Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a cloud strategy that grows with your business
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-neon-green transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudBigData;
