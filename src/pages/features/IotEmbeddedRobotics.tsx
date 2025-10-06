import { motion } from "framer-motion";
import { Wifi, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const IotEmbeddedRobotics = () => {
  const capabilities = [
    "Industrial IoT (IIoT), Networking",
    "UAVs (Drones), Sensors, Actuators",
    "Firmware Development, RF Communication",
    "FPGA Design, Embedded Systems",
    "Board-Level Hardware",
    "IoT/IIoT, Cloud Computing, AI/ML",
    "Data Mining, Edge Computing",
    "Streaming Analytics, Data Security"
  ];

  const technologies = [
    "Industrial IoT", "Embedded C/C++", "RTOS", "FreeRTOS", "ARM Cortex",
    "FPGA", "Verilog", "VHDL", "RF Communication", "BLE", "LoRa",
    "MQTT", "Edge Computing", "Sensors", "Actuators", "Robotics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-neon-blue transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block p-4 rounded-2xl bg-neon-blue/10 mb-6">
              <Wifi className="w-16 h-16 text-neon-blue" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-blue">IoT, Embedded & Robotics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connected devices, sensor networks, and robotic systems for industrial and consumer applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism p-10 rounded-2xl max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gradient-blue mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We design and develop sophisticated IoT ecosystems that connect the physical and digital worlds. 
              From industrial IoT (IIoT) networks to consumer smart devices, our solutions enable real-time 
              monitoring, control, and automation across diverse applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our embedded systems expertise spans firmware development, FPGA design, and board-level hardware 
              engineering. We create intelligent robotic systems including UAVs (drones) with advanced sensor 
              integration, combining edge computing, AI/ML, and cloud connectivity for complete end-to-end solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-blue">Technologies & Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Embedded and IoT development tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism px-6 py-3 rounded-full border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-green">Key Capabilities</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-xl flex items-start gap-4 hover:glow-neon-blue transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-neon-blue" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphism p-12 rounded-2xl text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gradient-blue mb-6">
              Connect Your Physical World
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build intelligent IoT and robotics solutions that transform your operations
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg glow-neon-blue transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IotEmbeddedRobotics;
