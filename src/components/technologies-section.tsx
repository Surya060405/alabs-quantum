import { motion } from "framer-motion";
import { 
  Smartphone, 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Wifi,
  Code,
  Database,
  Zap
} from "lucide-react";

const technologies = [
  {
    icon: Smartphone,
    title: "Full Stack Web & Mobile",
    description: "Complete R&D of native and hybrid applications with UI/UX/CX, DevOps, API, Backend and Analytics",
    color: "neon-blue",
    features: ["React Native", "Flutter", "DevOps", "API Development", "Backend Systems", "Analytics"]
  },
  {
    icon: Brain,
    title: "Data Science & Analytics",
    description: "AI, ML/DL, Computer Vision, AR/VR, NLP, Conv. AI powered smart & interactive solutions",
    color: "neon-purple",
    features: ["Machine Learning", "Computer Vision", "AR/VR", "NLP", "Conversational AI", "Deep Learning"]
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Apache/Hadoop and Modern systems, Data lakes, ETL, NoSQL, Containers, Multi-tenant systems, Search",
    color: "neon-green",
    features: ["Apache/Hadoop", "Data Lakes", "ETL", "NoSQL", "Containers", "Multi-tenant Systems"]
  },
  {
    icon: Wifi,
    title: "IoT & Embedded Systems",
    description: "Embedded systems, Sensors, Actuators, Firmware, FPGA, IIOT, Board level design, Connection protocols",
    color: "neon-blue",
    features: ["Embedded Systems", "Sensors", "Actuators", "Firmware", "FPGA", "IIOT"]
  },
  {
    icon: Cpu,
    title: "Digital & Analog VLSI IC Design",
    description: "ASIC/CPU/SOC Arch, RTL & Verification, Custom & Memory, RF, Synthesis & PD, Timing & Power",
    color: "neon-purple",
    features: ["ASIC/CPU/SOC", "RTL & Verification", "Custom & Memory", "RF Design", "Synthesis & PD", "Timing & Power"]
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Public and private cloud platforms, CAAS, PAAS, SAAS, Serverless, Streaming analytics",
    color: "neon-green",
    features: ["Public/Private Cloud", "CAAS", "PAAS", "SAAS", "Serverless", "Streaming Analytics"]
  },
  {
    icon: Code,
    title: "EDA SW & CAD Flows",
    description: "Front & Back end EDA tools, Math/Stat Optimization, CAD for different design phases & process corners",
    color: "neon-blue",
    features: ["EDA Tools", "Math/Stat Optimization", "CAD Flows", "Design Phases", "Process Corners", "Verification"]
  },
  {
    icon: Shield,
    title: "Blockchain & Security",
    description: "Smart contracts, Decentralisation, DLT, Arbitrage, Tamper-proof supply chain, Logistics, Data security",
    color: "neon-purple",
    features: ["Smart Contracts", "DLT", "Arbitrage", "Supply Chain", "Logistics", "Data Security"]
  },
  {
    icon: Zap,
    title: "Bioinformatics & Life Sciences",
    description: "Genomics, Protein-protein interactions, wearables, drug discovery, personalization, digital pharmacy",
    color: "neon-green",
    features: ["Genomics", "Protein Interactions", "Wearables", "Drug Discovery", "Personalization", "Digital Pharmacy"]
  }
];

export const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-green/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-purple">Core</span>{" "}
            <span className="text-foreground">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across cutting-edge technologies that power 
            the digital transformation of tomorrow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className={`glassmorphism p-8 rounded-2xl h-full border-l-4 border-${tech.color} hover:glow-${tech.color.replace('-', '-neon-')} transition-all duration-300`}>
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-${tech.color}/10 mr-4 group-hover:bg-${tech.color}/20 transition-colors duration-300`}>
                      <Icon className={`h-8 w-8 text-${tech.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-blue transition-all duration-300">
                      {tech.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${tech.color} mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`mt-6 h-1 w-0 bg-${tech.color} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient-blue mb-6">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Code, label: "Full-Stack Development" },
                { icon: Database, label: "Database Design" },
                { icon: Zap, label: "Performance Optimization" },
                { icon: Shield, label: "Cybersecurity" }
              ].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-secondary/20 transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-neon-green mb-2" />
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};