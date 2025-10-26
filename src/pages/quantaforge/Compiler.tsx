import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  GitBranch,
  Zap,
  Shield,
  Atom,
  Clock,
  Rocket,
  Briefcase,
  FileText,
  BarChart,
  HardHat,
  Code,
  Sliders,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
const Compiler = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatWeDeliver = [
    {
      icon: GitBranch,
      title: "Architecture & IR",
      description:
        "Design QIR and OpenQASM-compatible compiler pipelines that translate quantum programs into optimized, hardware-agnostic representations.\n• Develop custom compiler passes and dialects to enable fine-grained control over circuit transformations and intermediate optimizations.\n• Integrate seamlessly with heterogeneous quantum backends, ensuring extensibility, interoperability, and long-term compiler scalability and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Cpu,
      title: "Gate decomposition",
      description:
        "Convert high-level quantum operations into native gate sets through precision-optimized decomposition strategies.\n• Implement basis conversion techniques tailored to specific hardware to minimize depth and improve fidelity.\n• Enable adaptive compilation workflows that automatically select the most efficient gate representations for each backend and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Sliders,
      title: "Qubit mapping & routing",
      description:
        "Optimize qubit placement and routing using heuristic algorithms such as SABRE and A*, minimizing SWAP overheads and latency.\n• Incorporate real-time noise profiles for hardware-aware mapping that enhances circuit reliability.\n• Balance connectivity constraints with dynamic routing strategies to achieve optimal hardware utilization and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Clock,
      title: "Scheduling",
      description:
        "Implement advanced ASAP/ALAP scheduling to reduce idle times and improve quantum circuit throughput.\n• Design cross-talk aware schedulers that dynamically reorder operations to preserve coherence and reduce gate interference.\n• Integrate idle-time decoupling and concurrency optimization for consistent execution across variable device topologies and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Shield,
      title: "Error mitigation",
      description:
        "Incorporate dynamical decoupling, randomized compiling, and twirling techniques to suppress noise accumulation.\n• Utilize bias-aware transpilation strategies that adaptively tailor circuit structure to mitigate systematic errors.\n• Fuse calibration data with runtime adjustments for enhanced resilience against decoherence and gate drift and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Zap,
      title: "Pulse-level optimization",
      description:
        "Engineer drive-shape synthesis and parametric gate control for precise pulse-level quantum operations.\n• Utilizing closed-loop calibration hooks to iteratively refine pulse parameters for maximum gate fidelity.\n• Integrate compiler-aware pulse scheduling for hardware-specific timing synchronization and phase correction—and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Code,
      title: "Hybrid runtime",
      description:
        "Enable mid-circuit measurements and classical feedback for adaptive quantum execution.\n• Orchestrate parameter sweeping and branching logic for hybrid quantum-classical workflows at runtime.\n• Bridge quantum and classical computation layers for ultra-fast decision loops within dynamic experiments and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Atom,
      title: "QEC-ready design",
      description:
        "Compile logical operations compatible with error-corrected architectures and fault-tolerant protocols.\n• Coordinate syndrome extraction, correction, and decoder integration for next-generation quantum error correction stacks.\n• Build compiler pathways that future-proof quantum workloads for scalable, logical-qubit architectures and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
  ];
  const engagementModels = [
    {
      icon: Rocket,
      title: "Compiler Sprint (4–6 weeks)",
      description: "Target a single backend; deliver measurable depth/fidelity gains.",
    },
    {
      icon: Briefcase,
      title: "Multi-backend Portability (8–12 weeks)",
      description: "IR + adapters for ≥3 devices; portability suite & CI.",
    },
    {
      icon: HardHat,
      title: "Full-stack Residency (retainer)",
      description: "Ongoing passes, calibration hooks, and release engineering.",
    },
  ];
  const deliverablesList = [
    "Technical design doc",
    "Pass library",
    "Benchmarking report",
    "CI pipelines",
    "Integration SDK",
  ];
  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Hardware-aware quantum compiler services (routing, scheduling, error mitigation)</title>
      </Helmet>
      <QuantaForgeNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-secondary/20 text-quantaforge-secondary text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-quantaforge-secondary">
                Quantum Compiler Studio
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-6 text-quantaforge-light">
                Make any quantum device useful, faster.
              </p>
              <p className="text-lg text-quantaforge-light/70 mb-8 leading-relaxed">
                Transform raw quantum potential into practical performance. Make any quantum device useful and faster.
                Overcome hardware heterogeneity, constrained connectivity, and short coherence times through a compiler
                stack built for real-world scalability. Quantum Compiler Studio integrates advanced IR architectures,
                noise-aware routing, and precision gate decomposition with dynamic scheduling and pulse-level
                optimization. From logical-qubit compilation to QEC-ready design, it turns fragile circuits into
                production-grade quantum outcomes and more.
              </p>
              <Link to="/contact"></Link>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Deliver</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whatWeDeliver.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-dark/50"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                      <div className="text-quantaforge-light/70 space-y-2 whitespace-pre-line">{item.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Value Propositions</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "Converts fragile quantum circuits into hardware-ready, stable implementations.",
                "Reduces execution latency and noise effects through adaptive compilation.",
                "Provides deep control from high-level IR down to pulse execution.",
                "Future-proofs enterprise quantum workloads for the era of logical qubits.",
                "Automates mapping/routing/scheduling; reduce human gate‑level intervention.",
                "Cross‑platform portability lowers rework when switching vendors.",
                "Pulse‑level tooling lets a small team reach the desired performance level which was once limited to device specialists.",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-secondary/20"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-secondary flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application and Use Cases */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Application and Use Cases</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "Optimizing quantum circuits for chemistry, optimization, and cryptography workloads.",
                "Adapting algorithms to different quantum backends (e.g., IBM Q, IonQ, Rigetti).",
                "Automating error mitigation for near-term noisy devices.",
                "Supporting compiler research for quantum software engineering.",
                "Preparing industrial workloads for future error-corrected quantum computers.",
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-dark/50 border border-quantaforge-secondary/20"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-secondary flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Engagement Models</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {engagementModels.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-primary/50 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <p className="text-quantaforge-light/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Deliverables</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverablesList.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="p-4 rounded-lg border border-quantaforge-secondary/20 bg-quantaforge-dark/50 flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-quantaforge-success flex-shrink-0" />
                  <span className="text-lg text-quantaforge-light/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-quantaforge-dark relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="absolute top-1/4 right-3/4 w-96 h-96 bg-quantaforge-secondary/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 quantaforge-text-gradient">
                Success Stories
              </h2>
              <p className="text-xl text-quantaforge-light/70 max-w-3xl mx-auto">
                Real-world achievements in quantum compiler optimization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Architecture & IR",
                  content: "QIR / OpenQASM pipelines for hardware‑independent translation."
                },
                {
                  title: "Qubit Mapping & Routing",
                  content: "SABRE, A*; ASAP/ALAP scheduling with cross‑talk‑aware optimization techniques."
                },
                {
                  title: "Error Mitigation",
                  content: "Randomized compiling, twirling, bias‑aware transpilation."
                },
                {
                  title: "Pulse-Level Optimization",
                  content: "Drive‑shape synthesis, closed‑loop calibration; hybrid runtime with MCM and branching."
                },
                {
                  title: "QEC-Ready Design",
                  content: "For logical‑qubit architectures."
                },
                {
                  title: "Advanced Scheduling",
                  content: "Implemented advanced ASAP/ALAP scheduling and cross-talk-aware optimization for better throughput."
                }
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism bg-quantaforge-primary/30 backdrop-blur-xl border-quantaforge-light/10 rounded-xl p-8 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-quantaforge-secondary/20 border border-quantaforge-secondary/30 mb-6">
                    <CheckCircle className="h-7 w-7 text-quantaforge-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-quantaforge-light mb-4">
                    {story.title}
                  </h3>
                  <p className="text-quantaforge-light/80 text-base flex-grow">
                    {story.content}
                  </p>
                  <p className="text-quantaforge-secondary text-sm font-medium mt-6">
                    For more information, contact:{" "}
                    <a href="mailto:info@alabs-quantum.com" className="hover:underline">
                      info@alabs-quantum.com
                    </a>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot to Production */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 text-quantaforge-light">Pilot to Production</h2>
              <div className="space-y-6">
                {[
                  {
                    phase: "0–2 weeks",
                    description: "workload intake; IR standardization; baseline transpilation."
                  },
                  {
                    phase: "3–6 weeks",
                    description: "mapping/scheduling policy tuning; initial mitigation."
                  },
                  {
                    phase: "7–12 weeks",
                    description: "pulse‑level passes where applicable; KPI review; CI/CD integration."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-dark/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-quantaforge-secondary mb-2">{item.phase}</h3>
                        <p className="text-quantaforge-light/70">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};
export default Compiler;
