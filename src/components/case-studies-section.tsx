import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    title: "Krishi",
    subtitle: "Smart Agriculture Platform",
    description: "AI-powered crop monitoring and yield optimization system that increased farmer productivity by 45%",
    image: "/api/placeholder/400/250",
    stats: [
      { icon: Users, value: "10K+", label: "Farmers Served" },
      { icon: TrendingUp, value: "45%", label: "Yield Increase" },
      { icon: Award, value: "3", label: "Awards Won" }
    ],
    technologies: ["AI/ML", "IoT", "Mobile App", "Cloud Analytics"],
    color: "neon-green",
    impact: "Revolutionized agriculture practices across 50+ villages in rural India"
  },
  {
    id: 2,
    title: "Bhojan",
    subtitle: "Food Security Network",
    description: "Blockchain-based food supply chain tracking system reducing waste by 30% and ensuring quality",
    image: "/api/placeholder/400/250",
    stats: [
      { icon: Users, value: "500+", label: "Suppliers Connected" },
      { icon: TrendingUp, value: "30%", label: "Waste Reduction" },
      { icon: Award, value: "99.8%", label: "Traceability" }
    ],
    technologies: ["Blockchain", "Smart Contracts", "Supply Chain", "Web3"],
    color: "neon-blue",
    impact: "Enhanced food safety and transparency for millions of consumers"
  },
  {
    id: 3,
    title: "Snayu",
    subtitle: "Neural Health Platform",
    description: "Advanced EEG analysis system for early detection of neurological disorders using deep learning",
    image: "/api/placeholder/400/250",
    stats: [
      { icon: Users, value: "1M+", label: "Scans Processed" },
      { icon: TrendingUp, value: "95%", label: "Accuracy Rate" },
      { icon: Award, value: "24/7", label: "Monitoring" }
    ],
    technologies: ["Deep Learning", "Medical AI", "VLSI", "Real-time Processing"],
    color: "neon-purple",
    impact: "Enabling early intervention and improving patient outcomes worldwide"
  }
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-green/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-purple">Success</span>{" "}
            <span className="text-foreground">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world impact through innovative solutions. Discover how we've transformed 
            ideas into breakthrough technologies that make a difference.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className={`glassmorphism border-l-4 border-${study.color} hover:glow-${study.color.replace('-', '-neon-')} transition-all duration-300 h-full`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-gradient-blue mb-2">
                          {study.title}
                        </CardTitle>
                        <p className="text-lg font-medium text-muted-foreground">
                          {study.subtitle}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-3 rounded-lg bg-${study.color}/10`}
                      >
                        <ArrowRight className={`h-6 w-6 text-${study.color}`} />
                      </motion.div>
                    </div>
                    
                    <p className="text-foreground/90 leading-relaxed">
                      {study.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.stats.map((stat, statIndex) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={statIndex}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-3 glassmorphism rounded-lg"
                          >
                            <Icon className={`h-5 w-5 text-${study.color} mx-auto mb-2`} />
                            <div className="text-lg font-bold text-foreground">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 text-sm rounded-full glassmorphism border border-${study.color}/20 text-${study.color} hover:bg-${study.color}/10 transition-colors cursor-pointer`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className={`p-4 rounded-lg bg-${study.color}/5 border border-${study.color}/20`}>
                      <h4 className="font-semibold text-foreground mb-2">Impact:</h4>
                      <p className="text-muted-foreground text-sm">{study.impact}</p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-lg border-2 border-${study.color}/30 text-${study.color} font-semibold hover:bg-${study.color}/10 transition-all duration-300 group`}
                    >
                      <span className="flex items-center justify-center">
                        Learn More About {study.title}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </CardContent>
                </Card>
              </div>

              {/* Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} relative`}
              >
                <div className="glassmorphism p-8 rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for actual project image */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${study.color}/20 via-transparent to-${study.color}/10`} />
                  
                  {/* Project visualization */}
                  <div className="relative z-10 text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-${study.color}/20 flex items-center justify-center border-2 border-${study.color}/30 animate-pulse-glow`}>
                      <span className={`text-2xl font-bold text-${study.color}`}>
                        {study.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold text-gradient-${study.color.split('-')[1]} mb-4`}>
                      {study.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {study.stats.slice(0, 2).map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-xl font-bold text-${study.color}`}>{stat.value}</div>
                          <div className="text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-neon-blue/60 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-green/60 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 right-6 w-1 h-8 bg-neon-purple/40 rounded-full animate-bounce" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient-blue mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the ranks of innovative companies that have transformed their industries 
              with our cutting-edge solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-neon-blue hover:bg-primary/90 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};