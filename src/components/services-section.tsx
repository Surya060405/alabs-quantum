import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  Settings, 
  Wifi, 
  Code, 
  Cloud, 
  Bitcoin
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI, GenAI & Computer Vision",
    description: "Advanced machine learning, natural language processing, and generative AI solutions for next-generation applications",
    color: "neon-blue",
    features: [
      "AI, ML/DL, NLP, Generative AI",
      "Chatbots, Conversational AI",
      "Image, Video, Audio Analytics",
      "Pattern Recognition",
      "PyTorch, TensorFlow, Keras",
      "Scikit-learn, H2O.ai, ONNX",
      "RASA, BERT, GPT-3, OCR, Korean",
      "Bioinformatics, BioPython, Genomics",
      "Biomedical Imaging",
      "AI Training & Inference Chips, DLAs, NPUs"
    ]
  },
  {
    icon: Cpu,
    title: "Full Cycle VLSI IC Design, EDA/CAD",
    description: "Complete integrated circuit design solutions from concept to silicon, including smart chip development",
    color: "neon-purple",
    features: [
      "Advanced CPU, GPU, NPU Architecture",
      "Low power high performance design strategies",
      "ASIC, Semiconductor Process",
      "Digital/Analog and Mixed-signal design",
      "AI-powered chips, DLA",
      "Custom, Memory, Digital/Analog RF, Std. Cell",
      "CPU/SOC/ASIC, RTL, Func/Formal Verification",
      "Synthesis, PD (RTL2GDS-II), Sign off",
      "Timing & Power, LPD, Process corners"
    ]
  },
  {
    icon: Settings,
    title: "EDA Software & CAD Flows",
    description: "Electronic design automation tools and custom CAD flows for efficient chip design and verification",
    color: "neon-green",
    features: [
      "Vendor SW (Synopsys, Cadence, Mentor)",
      "FE, RTL, Func/Formal/AMS, Ckt Sim, Synth",
      "BE, FP, P&R, CTS, ParExt, STA, Power, LVS/DRC",
      "Math/Stat optim, C/C++, Perl, Python, TCL"
    ]
  },
  {
    icon: Wifi,
    title: "IoT, Embedded & Robotics",
    description: "Connected devices, sensor networks, and robotic systems for industrial and consumer applications",
    color: "neon-blue",
    features: [
      "Industrial IoT (IIoT), Networking",
      "UAVs (Drones), Sensors, Actuators",
      "Firmware Development, RF Communication",
      "FPGA Design, Embedded Systems",
      "Board-Level Hardware",
      "IoT/IIoT, Cloud Computing, AI/ML",
      "Data Mining, Edge Computing",
      "Streaming Analytics, Data Security"
    ]
  },
  {
    icon: Code,
    title: "Full Stack Mobile & Web",
    description: "End-to-end application development and deployment for web and mobile platforms with modern frameworks",
    color: "neon-purple",
    features: [
      "UI/UX/CX Design, API Development",
      "Database Architecture, DevOps, Security",
      "Information End-to-End Application Development & Deployment",
      "(Web & Mobile)",
      "Platforms: PWA, Hybrid, Native Apps (Android/iOS)",
      "Frameworks & Languages: Ionic, React (incl. Native)",
      "Angular, Vue, TypeScript, Flutter",
      "Backend: Node.js, GoLang, PHP, Rust",
      "Databases: MySQL, PostgreSQL, NoSQL, Firebase, GraphDB"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Big Data",
    description: "Scalable cloud infrastructure and comprehensive big data analytics solutions for enterprise needs",
    color: "neon-green",
    features: [
      "Multi-Cloud Platforms, Big Data Analytics",
      "PaaS, SaaS, Data Lakes, ETL Pipelines",
      "Hybrid Cloud: Azure, AWS, GCP",
      "Platform Models: PaaS, CaaS, SaaS, Stacks: MEAN, MERN, LAMP",
      "Microservices Architecture, Docker, Kubernetes, Kubeflow",
      "Programming: Scala, Ruby, Java, Python",
      "Frameworks: Apache Hadoop"
    ]
  },
  {
    icon: Bitcoin,
    title: "Blockchain & Quantum Computing",
    description: "Distributed ledger technologies and quantum computing solutions for future-ready applications",
    color: "neon-blue",
    features: [
      "Blockchain, Distributed Ledger Technology (DLT)",
      "Web3, Smart Contracts",
      "Tokens, NFTs, DeFi, Consensus Algorithms",
      "Cryptography",
      "Post-Quantum Cryptography, Quantum Resilience",
      "Quantum Key Distribution (QKD)",
      "Quantum Computing Fundamentals, Qubits",
      "Quantum Algorithms, Quantum Supremacy"
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient-blue">Our</span>{" "}
            <span className="text-foreground">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Team Adyakshar has got a successful track record of solving critical problems for clients in application 
            verticals such as precision farming, fintech, digital health, hrtech with AI and Data Science/Analytics 
            custom solutions ranging from conversational AI to risk management and from medical imaging to predictive analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group"
              >
                <div className={`glassmorphism p-8 rounded-2xl h-full border-l-4 border-${service.color} hover:glow-${service.color.replace('-', '-neon-')} transition-all duration-300`}>
                  {/* Icon Header */}
                  <div className="flex items-start mb-6">
                    <div className={`p-3 rounded-lg bg-${service.color}/10 mr-4 group-hover:bg-${service.color}/20 transition-colors duration-300 flex-shrink-0`}>
                      <Icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-gradient-blue transition-all duration-300 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-4">Key Capabilities:</h4>
                    <div className="grid gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mr-3 mt-2 flex-shrink-0`} />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`mt-6 h-1 w-0 bg-${service.color} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient-purple mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can bring your vision to life with cutting-edge technology solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold glow-neon-blue transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};