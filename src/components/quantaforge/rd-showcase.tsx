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
            Pushing the boundaries of quantum computing innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 md:p-10 rounded-xl border border-quantaforge-secondary/20 hover:border-quantaforge-secondary/50 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-quantaforge-secondary/80 to-quantaforge-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Microscope className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-quantaforge-light group-hover:text-quantaforge-secondary transition-colors">
                  Research & Development
                </h3>
                
                <p className="text-base md:text-lg text-quantaforge-light/70 mb-6">
                  Explore cutting-edge quantum research in EDA, FPGA, and Finance. From quantum circuit design to algorithmic trading, we push the boundaries of quantum computing.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {["Quantum EDA", "Quantum FPGA", "Quantum Finance", "Advanced algorithms"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm md:text-base text-quantaforge-light/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/research">
                  <Button 
                    variant="outline" 
                    className="border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10 group-hover:border-quantaforge-secondary"
                  >
                    Explore Our Research
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};