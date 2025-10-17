import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Microchip, TrendingUp, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const RDSection = () => {
  const [activeTab, setActiveTab] = useState("eda");

  const domains = {
    eda: {
      title: "Quantum EDA",
      subtitle: "Electronic Design Automation",
      icon: Cpu,
      color: "quantaforge-secondary",
      description: "Pioneering tools and methodologies for quantum circuit design, verification, and physical implementation.",
      categories: [
        {
          name: "Front End",
          subtitle: "Functional Design, Verification & Early Estimation",
          topics: [
            "Quantum circuit synthesis and optimization algorithms",
            "Automated quantum gate decomposition",
            "Cross-platform quantum compiler design (Qiskit, Cirq, t|ket⟩ interoperability)",
            "Noise-aware circuit simulation and error modeling",
            "Quantum-classical co-design workflows",
            "Machine learning–based EDA optimization",
            "Quantum design verification and test automation",
            "Quantum RTL (Register Transfer Level) abstraction development",
            "Quantum-aware timing and resource estimation tools",
            "Quantum hardware-aware compiler pipelines",
            "Fault-tolerant quantum circuit synthesis",
            "Hybrid digital-analog quantum design frameworks"
          ]
        },
        {
          name: "Back End",
          subtitle: "Physical Design, Performance Verification & Optimization",
          topics: [
            "Quantum circuit mapping and routing on physical hardware",
            "Architecture-aware circuit layout optimization",
            "Design of scalable quantum interconnects",
            "Crosstalk and parasitic modeling in superconducting and ion-trap systems",
            "Quantum chip placement and routing automation",
            "Quantum packaging and interposer-level EDA integration",
            "Hardware–software co-simulation platforms for qubit control",
            "Yield analysis and manufacturability of quantum devices"
          ]
        }
      ]
    },
    fpga: {
      title: "Quantum FPGA",
      subtitle: "Field Programmable Gate Array",
      icon: Microchip,
      color: "quantaforge-accent",
      description: "Developing reconfigurable quantum computing architectures and classical control systems for quantum hardware.",
      categories: [
        {
          name: "Front End",
          subtitle: "Logic Synthesis & High-Level Design",
          topics: [
            "Quantum logic synthesis for reconfigurable architectures",
            "High-level synthesis (HLS) tools for quantum logic mapping",
            "Quantum instruction set architecture (QISA) development",
            "FPGA-based quantum gate emulation frameworks",
            "Resource scheduling and dynamic partial reconfiguration for quantum workloads",
            "Classical control and signal processing firmware for quantum hardware",
            "Compiler backends for FPGA–quantum hybrid systems",
            "Real-time quantum error correction on reconfigurable platforms"
          ]
        },
        {
          name: "Back End",
          subtitle: "Hardware Implementation & Control Systems",
          topics: [
            "FPGA-assisted qubit control systems",
            "FPGA-based cryogenic interface electronics",
            "Reconfigurable quantum control hardware design",
            "Integration of FPGA boards with superconducting/ion-trap control stacks",
            "FPGA-based pulse sequence generators for quantum gates",
            "Scalable FPGA–QPU interconnect protocols",
            "Low-latency feedback systems for quantum error correction",
            "FPGA hardware accelerators for quantum simulation and emulation"
          ]
        }
      ]
    },
    finance: {
      title: "Quantum Finance",
      subtitle: "Financial Computing & Risk Analysis",
      icon: TrendingUp,
      color: "quantaforge-success",
      description: "Revolutionizing financial modeling, risk assessment, and secure transactions using quantum computing.",
      categories: [
        {
          name: "Software Research",
          subtitle: "Algorithms & Applications",
          topics: [
            "Quantum algorithms for portfolio optimization (QAOA, VQE, QUBO mapping)",
            "Quantum Monte Carlo and amplitude estimation for risk modeling",
            "Quantum-enhanced option pricing models (Black Scholes, binomial)",
            "Quantum machine learning for financial forecasting",
            "Quantum generative models for market simulation",
            "Quantum anomaly detection in trading data",
            "Quantum data encoding for financial time series",
            "Hybrid quantum-classical optimization pipelines",
            "Quantum reinforcement learning for automated trading strategies",
            "Post-quantum cryptographic systems for secure financial transactions"
          ]
        },
        {
          name: "Hardware Research",
          subtitle: "Systems & Infrastructure",
          topics: [
            "FPGA/ASIC acceleration for quantum finance simulations",
            "Quantum random number generators for financial security systems",
            "Analog quantum simulation platforms for financial systems",
            "Hardware co-design for low-latency quantum trading algorithms",
            "Integration of quantum processors with financial data centers"
          ]
        }
      ]
    }
  };

  const tabConfig = [
    { id: "eda", label: "Quantum EDA", color: "text-quantaforge-secondary border-quantaforge-secondary" },
    { id: "fpga", label: "Quantum FPGA", color: "text-quantaforge-accent border-quantaforge-accent" },
    { id: "finance", label: "Quantum Finance", color: "text-quantaforge-success border-quantaforge-success" }
  ];

  return (
    <section id="rd-section" className="py-24 bg-quantaforge-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 quantum-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantaforge-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantaforge-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 quantaforge-text-gradient">
            Research & Development
          </h2>
          <p className="text-xl text-quantaforge-light/70 max-w-3xl mx-auto">
            Pioneering the Future of Quantum Computing Across Three Critical Domains
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-quantaforge-primary/50 border border-quantaforge-light/10 h-auto p-1">
            {tabConfig.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`data-[state=active]:bg-quantaforge-dark/80 data-[state=active]:${tab.color} text-quantaforge-light/70 data-[state=active]:text-quantaforge-light py-3 px-4 text-sm md:text-base font-medium transition-all duration-300`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(domains).map(([key, domain]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Domain Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-quantaforge-secondary/20 to-quantaforge-accent/20 border border-quantaforge-light/10 mb-6">
                      <domain.icon className={`h-10 w-10 text-${domain.color}`} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-quantaforge-light mb-3">
                      {domain.title}
                    </h3>
                    <p className="text-lg text-quantaforge-secondary mb-4">
                      {domain.subtitle}
                    </p>
                    <p className="text-quantaforge-light/70 max-w-2xl mx-auto">
                      {domain.description}
                    </p>
                  </div>

                  {/* Research Categories */}
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {domain.categories.map((category, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glassmorphism bg-quantaforge-primary/30 backdrop-blur-xl border-quantaforge-light/10 rounded-xl p-8"
                      >
                        <h4 className="text-2xl font-bold text-quantaforge-light mb-2">
                          {category.name}
                        </h4>
                        <p className="text-sm text-quantaforge-light/50 mb-6">
                          {category.subtitle}
                        </p>
                        <ul className="space-y-3">
                          {category.topics.map((topic, topicIdx) => (
                            <motion.li
                              key={topicIdx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + topicIdx * 0.05 }}
                              className="flex items-start gap-3 group"
                            >
                              <CheckCircle2 className={`h-5 w-5 text-${domain.color} mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                              <span className="text-quantaforge-light/80 text-sm leading-relaxed group-hover:text-quantaforge-light transition-colors">
                                {topic}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};