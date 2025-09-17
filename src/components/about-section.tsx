import { motion } from "framer-motion";
import { MapPin, Users, Award, Zap } from "lucide-react";

const locations = [
  { city: "San Francisco", country: "USA", coords: { x: 20, y: 40 } },
  { city: "Austin", country: "USA", coords: { x: 35, y: 45 } },
  { city: "Kolkata", country: "India", coords: { x: 75, y: 55 } }
];

const stats = [
  { icon: Users, value: "50+", label: "Expert Researchers" },
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: Zap, value: "5+", label: "Years Innovation" },
  { icon: MapPin, value: "3", label: "Global Offices" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-blue">About</span>{" "}
            <span className="text-foreground">Adyakshar Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a global R&D and technology innovation lab dedicated to transforming 
            cutting-edge research into practical, world-changing solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient-purple mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to bridge the gap between academic research and 
                industry applications, Adyakshar Labs has become a catalyst for 
                technological advancement across multiple domains.
              </p>
              <p>
                Our multidisciplinary team of researchers, engineers, and innovators 
                work collaboratively to solve complex challenges in AI, blockchain, 
                IoT, VLSI design, and cloud technologies.
              </p>
              <p>
                From our offices in San Francisco, Austin, and Kolkata, we serve 
                clients globally, delivering solutions that drive digital transformation 
                and create measurable impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glassmorphism p-6 rounded-lg text-center hover:glow-neon-blue transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Global Presence Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient-blue mb-6 text-center">
                Global Presence
              </h3>
              
              {/* Simplified World Map Visualization */}
              <div className="relative w-full h-64 glassmorphism rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10" />
                
                {/* Location Markers */}
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute w-4 h-4 bg-neon-blue rounded-full animate-pulse-glow cursor-pointer group"
                    style={{
                      left: `${location.coords.x}%`,
                      top: `${location.coords.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Location Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glassmorphism p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <div className="font-semibold text-sm text-foreground">{location.city}</div>
                      <div className="text-xs text-muted-foreground">{location.country}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(var(--neon-purple))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--neon-green))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {locations.map((_, index) => {
                    if (index === locations.length - 1) return null;
                    const current = locations[index];
                    const next = locations[index + 1];
                    return (
                      <line
                        key={index}
                        x1={`${current.coords.x}%`}
                        y1={`${current.coords.y}%`}
                        x2={`${next.coords.x}%`}
                        y2={`${next.coords.y}%`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Location List */}
              <div className="mt-6 space-y-3">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-muted-foreground"
                  >
                    <MapPin className="h-4 w-4 text-neon-blue" />
                    <span>{location.city}, {location.country}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};