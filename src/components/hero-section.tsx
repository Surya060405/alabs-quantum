import { motion } from "framer-motion";
import { Smartphone, Brain, Cloud, Shield, Cpu, Wifi } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const techNodes = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description: "Cross-platform applications with modern UX/UI design",
    color: "neon-blue",
    position: { x: 0, y: -120 }
  },
  {
    id: 2,
    icon: Brain,
    title: "AI/ML, NLP, GenAI",
    description: "Advanced AI solutions and machine learning models",
    color: "neon-purple",
    position: { x: 104, y: -60 }
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud & Big Data",
    description: "Scalable cloud infrastructure and data analytics",
    color: "neon-green",
    position: { x: 104, y: 60 }
  },
  {
    id: 4,
    icon: Shield,
    title: "Blockchain & DLT",
    description: "Distributed ledger technologies and smart contracts",
    color: "neon-blue",
    position: { x: 0, y: 120 }
  },
  {
    id: 5,
    icon: Cpu,
    title: "VLSI IC, EDA/CAD",
    description: "Integrated circuit design and electronic automation",
    color: "neon-purple",
    position: { x: -104, y: 60 }
  },
  {
    id: 6,
    icon: Wifi,
    title: "IoT & Embedded",
    description: "Internet of Things and embedded system solutions",
    color: "neon-green",
    position: { x: -104, y: -60 }
  }
];

export const HeroSection = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-blue">Adyakshar</span>{" "}
              <span className="text-foreground">Labs</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turning <span className="text-gradient-purple">Cutting-Edge Research</span> into{" "}
              <span className="text-neon-green">Real-World Innovation</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-blue hover:scale-105 transition-all duration-300">
                Explore Our Work
              </button>
              <button className="px-8 py-4 border border-border/20 text-foreground rounded-lg font-semibold hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Hexagonal Tech Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex-1 relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Center Node */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 glassmorphism rounded-full flex items-center justify-center border-2 border-neon-blue/30 glow-blue"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-sm font-bold text-neon-blue">R&D</span>
              </motion.div>

              {/* Tech Nodes */}
              {techNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.id}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${node.position.x}px)`,
                      top: `calc(50% + ${node.position.y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <motion.div
                      className="relative w-16 h-16 glassmorphism rounded-full flex items-center justify-center border-2 border-neon-blue/30 cursor-pointer animate-float glow-blue"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Icon className="h-6 w-6 text-neon-blue" />
                      
                      {/* Connection Line to Center */}
                      <div 
                        className={`absolute w-px bg-gradient-to-r from-${node.color}/20 to-transparent`}
                        style={{
                          height: Math.sqrt(node.position.x ** 2 + node.position.y ** 2),
                          transform: `rotate(${Math.atan2(-node.position.y, -node.position.x)}rad)`,
                          transformOrigin: '0 0',
                          left: '50%',
                          top: '50%'
                        }}
                      />

                      {/* Tooltip */}
                      {hoveredNode === node.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-20 left-1/2 transform -translate-x-1/2 glassmorphism p-3 rounded-lg w-48 z-20"
                        >
                          <h4 className="font-semibold text-sm text-foreground mb-1">{node.title}</h4>
                          <p className="text-xs text-muted-foreground">{node.description}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};