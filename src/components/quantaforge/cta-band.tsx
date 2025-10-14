import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTABand = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-quantaforge-primary via-quantaforge-accent/20 to-quantaforge-primary relative overflow-hidden">
      <div className="absolute inset-0 quantum-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-quantaforge-light px-4">
            Ready to accelerate your quantum journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-quantaforge-light/70 mb-8 md:mb-10 px-4">
            Book a technical scoping call or download our capabilities brief to learn how we can help
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg" 
                className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow text-base md:text-lg px-6 md:px-8 min-h-[44px]"
              >
                Book a Technical Scoping
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-quantaforge-light/30 text-quantaforge-light hover:bg-quantaforge-light/10 text-base md:text-lg px-6 md:px-8 min-h-[44px]"
            >
              <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Download Capabilities Brief
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
