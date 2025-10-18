import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
export const QuantaForgeHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Quantum grid background */}
      <div className="absolute inset-0 quantum-grid opacity-30" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-quantaforge-secondary rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0.2, 1, 0.2]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
              <span className="block text-quantaforge-secondary mb-2">Welcome to</span>
              <span className="block quantaforge-text-gradient relative inline-block pb-3">
                Quantum Labs
                <span className="absolute bottom-0 left-0 w-full h-1 bg-quantaforge-secondary"></span>
                
              </span>
            </h1>
            <p className="text-lg md:text-xl text-quantaforge-light/70 italic flex items-center gap-4 flex-wrap justify-center mb-8">
              A division of
              <span className="flex items-center gap-2">
                <img src={logo} alt="Adyakshar Labs" className="h-6 md:h-8" />
              </span>
            </p>
            <p className="text-xl md:text-2xl text-quantaforge-light/80 mb-4">
              Pioneering Quantum Computing Solutions for the Next Generation
            </p>
            <p className="text-base md:text-lg text-quantaforge-light/70 max-w-4xl mx-auto">From compiler stacks for real quantum hardware to quantum-secure tokenization and simulation for drug discovery, ship production-grade quantum software with the power of quantum computing.</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-quantaforge-dark to-transparent" />
    </section>;
};