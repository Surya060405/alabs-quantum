import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyBadge } from "./company-badge";
import logo from "@/assets/logo.png";

export const QuantaForgeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Quantum grid background */}
      <div className="absolute inset-0 quantum-grid opacity-30" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-quantaforge-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CompanyBadge />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 quantaforge-text-gradient flex flex-col items-center gap-4">
              <span className="underline decoration-2 underline-offset-4">
                Welcome to Quantum Labs
              </span>
              <span className="flex items-center gap-3 text-3xl md:text-4xl">
                <span className="italic font-light">a division of</span>
                <img src={logo} alt="Adyakshar Laboratories" className="h-10 md:h-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-quantaforge-light/80 mb-4">
              Pioneering Quantum Computing Solutions for the Next Generation
            </p>
            <p className="text-lg md:text-xl text-quantaforge-light/60 mb-12 max-w-3xl mx-auto">
              From compiler stacks for real quantum hardware to quantum-secure tokenization 
              and simulation for drug discovery—ship production-grade quantum software with the power of quantum computing.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/quantumlabs/contact">
              <Button 
                size="lg" 
                className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow text-lg px-8"
              >
                Book a technical scoping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10 text-lg px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download capabilities brief
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-quantaforge-light/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by leading quantum startups, labs, and Fortune 500 R&D
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-quantaforge-dark to-transparent" />
    </section>
  );
};
