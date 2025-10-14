import { motion } from "framer-motion";
import { Smartphone, Brain, Cloud, Shield, Cpu, Wifi, Atom, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const techNodes = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description: "Cross-platform applications with modern UX/UI design",
    color: "neon-blue",
    position: { x: 0, y: -175 },
    link: "/features/mobile-web-apps"
  },
  {
    id: 2,
    icon: Brain,
    title: "AI/ML, NLP/GenAI",
    description: "Advanced AI solutions and machine learning models",
    color: "neon-purple",
    position: { x: 151, y: -87 },
    link: "/features/ai-ml-nlp"
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud, Big Data Analytics",
    description: "Scalable cloud infrastructure and data analytics",
    color: "neon-green",
    position: { x: 151, y: 87 },
    link: "/features/cloud-big-data"
  },
  {
    id: 4,
    icon: Shield,
    title: "Blockchain, DLT",
    description: "Distributed ledger technologies and smart contracts",
    color: "neon-blue",
    position: { x: 0, y: 175 },
    link: "/features/blockchain-dlt"
  },
  {
    id: 5,
    icon: Cpu,
    title: "VLSI IC, EDA/CAD",
    description: "Integrated circuit design and electronic automation",
    color: "neon-purple",
    position: { x: -151, y: 87 },
    link: "/features/vlsi-eda-cad"
  },
  {
    id: 6,
    icon: Wifi,
    title: "IoT, Embedded",
    description: "Internet of Things and embedded system solutions",
    color: "neon-green",
    position: { x: -151, y: -87 },
    link: "/features/iot-embedded-robotics"
  }
];

export const HeroSection = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark background for light mode to match dark theme */}
      <div className="absolute inset-0 bg-[hsl(220,25%,6%)] dark:bg-transparent" />
      
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
              <Link to="/adyakshar#services">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-blue hover:scale-105 transition-all duration-300">
                  Explore Our Work
                </button>
              </Link>
              <Link to="/">
                <button className="px-8 py-4 bg-quantaforge-secondary text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg border border-[hsl(229,84%,35%)]/30">
                  <Atom className="h-5 w-5 animate-pulse" />
                  Explore Quantum Solutions
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Modern Hexagonal Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex-1 relative flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px]">
              {/* Animated Moving Hexagon - R&D Solutions, Tech-Biz */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  x: [0, 60, 60, 0, -60, -60, 0],
                  y: [0, -35, 35, 70, 35, -35, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
                  {/* Hexagon Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-neon-blue/30 to-neon-green/30 backdrop-blur-md border-2 border-neon-purple/50">
                    <div className="w-full h-full" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                    }} />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
                    <span className="text-xs md:text-sm font-bold text-neon-purple tracking-wide text-center">R&D Solutions</span>
                    <span className="text-xs md:text-sm font-bold text-neon-green tracking-wide text-center">Tech-Biz</span>
                  </div>
                  
                  {/* Glowing border */}
                  <div className="absolute inset-0 glow-purple opacity-70" style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                  }} />
                </div>
              </motion.div>

              {/* Surrounding Hexagonal Nodes */}
              {techNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <Link
                    key={node.id}
                    to={node.link}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        left: `calc(50% + ${node.position.x}px)`,
                        top: `calc(50% + ${node.position.y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="relative w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24">
                      {/* Hexagon Shape */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${node.color}/10 via-background/80 to-background/60 backdrop-blur-sm border border-${node.color}/40 cursor-pointer`}>
                        <div className="w-full h-full" style={{
                          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                        }} />
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Icon className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-${node.color}`} />
                      </div>
                      
                      {/* Glowing edge effect */}
                      <motion.div 
                        className={`absolute inset-0 glow-${node.color.replace('-', '-neon-')} opacity-0 group-hover:opacity-60`}
                        style={{
                          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                        }}
                        animate={{
                          opacity: hoveredNode === node.id ? 0.8 : 0.3
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Connection Line */}
                      <div 
                        className={`absolute w-px h-24 md:h-28 lg:h-32 bg-gradient-to-b from-${node.color}/30 via-${node.color}/10 to-transparent`}
                        style={{
                          transformOrigin: 'center bottom',
                          transform: `rotate(${Math.atan2(-node.position.y, -node.position.x) * 180 / Math.PI + 90}deg)`,
                          left: '50%',
                          bottom: '50%'
                        }}
                      />

                      {/* Enhanced Tooltip */}
                      {hoveredNode === node.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
                        >
                          <div className="glassmorphism p-4 rounded-xl w-52 border border-neon-blue/20 glow-subtle">
                            <h4 className={`font-bold text-sm text-${node.color} mb-2`}>{node.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{node.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  </Link>
                );
              })}

              {/* Animated light trails */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-neon-blue/40 rounded-full"
                    style={{
                      left: `${50 + 30 * Math.cos((i * 120) * Math.PI / 180)}%`,
                      top: `${50 + 30 * Math.sin((i * 120) * Math.PI / 180)}%`,
                      filter: 'blur(2px)'
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};