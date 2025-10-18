import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RDShowcase = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-quantaforge-primary/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Our R&D
          </h2>
          <p className="text-base sm:text-lg text-quantaforge-light/60 max-w-2xl mx-auto px-4">
            Pushing the boundaries of quantum computing research
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glassmorphism p-6 md:p-8 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-quantaforge-secondary/80 to-quantaforge-primary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Microscope className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
              Research & Development
            </h3>
            
            <p className="text-sm md:text-base text-quantaforge-light/70 mb-4 md:mb-6">
              Explore cutting-edge quantum research in EDA, FPGA, and Finance. From quantum circuit design to algorithmic trading, we push the boundaries of quantum computing.
            </p>
            
            <ul className="space-y-2 mb-8 flex-1">
              {["Quantum EDA", "Quantum FPGA", "Quantum Finance", "Advanced algorithms"].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-quantaforge-light/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link to="/research">
              <Button 
                variant="outline" 
                className="w-full border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10 group-hover:border-quantaforge-secondary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
