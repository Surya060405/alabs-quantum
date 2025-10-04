import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTABand = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-quantaforge-primary via-quantaforge-accent/20 to-quantaforge-primary relative overflow-hidden">
      <div className="absolute inset-0 quantum-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-quantaforge-light">
            Ready to accelerate your quantum journey?
          </h2>
          <p className="text-xl text-quantaforge-light/70 mb-10">
            Book a technical scoping call or download our capabilities brief to learn how we can help
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quantaforge/contact">
              <Button 
                size="lg" 
                className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow text-lg px-8"
              >
                Book a Technical Scoping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-quantaforge-light/30 text-quantaforge-light hover:bg-quantaforge-light/10 text-lg px-8"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Capabilities Brief
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
