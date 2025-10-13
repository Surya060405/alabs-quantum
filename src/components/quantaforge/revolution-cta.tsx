import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RevolutionCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-quantaforge-dark to-quantaforge-primary/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-quantaforge-secondary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 quantaforge-text-gradient">
            Join Us at the Forefront of Innovation
          </h2>
          
          <p className="text-xl md:text-2xl text-quantaforge-light/80 mb-8 leading-relaxed">
            Quantum computing is no longer a distant concept—it is here, and the future of computing is now.
          </p>
          
          <p className="text-lg text-quantaforge-light/70 mb-12 max-w-3xl mx-auto">
            At Quantum Labs, we are committed to being at the pioneering edge of this revolution. Join us as we explore and unlock the boundless potential of quantum technologies to solve the world's most pressing challenges.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/quantaforge/contact">
              <Button 
                size="lg" 
                className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow text-lg px-8"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/quantaforge/resources">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10 text-lg px-8"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Our Research
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
