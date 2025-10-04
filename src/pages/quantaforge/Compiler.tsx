import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cpu, GitBranch, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Compiler = () => {
  const deliverables = [
    {
      icon: GitBranch,
      title: "Architecture & IR",
      description: "Design of QIR/OpenQASM-compatible pipelines; custom passes and dialects",
    },
    {
      icon: Cpu,
      title: "Gate decomposition",
      description: "Basis conversion optimized for native gate sets",
    },
    {
      icon: Zap,
      title: "Routing & Scheduling",
      description: "Topology-aware qubit mapping, SWAP minimization, time-optimal scheduling",
    },
    {
      icon: Shield,
      title: "Error mitigation",
      description: "ZNE, PEC, CDR strategies tuned to device noise profiles",
    },
  ];

  const benchmarks = [
    { metric: "Circuit depth", before: "~800 gates", after: "~320 gates", improvement: "60% reduction" },
    { metric: "Fidelity (VQE)", before: "0.65", after: "0.89", improvement: "37% increase" },
    { metric: "Compile time", before: "12 min", after: "45 sec", improvement: "93% faster" },
  ];

  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-secondary/20 text-quantaforge-secondary text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                Quantum Compiler Studio
              </h1>
              <p className="text-2xl text-quantaforge-light/70 mb-8">
                Make any quantum device useful, faster.
              </p>
              <p className="text-lg text-quantaforge-light/60 mb-8 max-w-3xl">
                Hardware heterogeneity, constrained connectivity, short coherence times, and noisy gates 
                make raw circuits impractical. The right compiler stack can be the difference between a 
                failed experiment and production-ready results.
              </p>
              <Link to="/quantaforge/contact">
                <Button className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow">
                  Request Architecture Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Deliver</h2>
              <p className="text-lg text-quantaforge-light/60 max-w-2xl">
                End-to-end compiler infrastructure tailored to your hardware
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-dark/50"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                      <p className="text-quantaforge-light/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Tech Stack Compatibility</h2>
              <div className="glassmorphism p-8 rounded-xl border border-quantaforge-secondary/20">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-quantaforge-secondary">Quantum Frameworks</h3>
                    <ul className="space-y-2 text-quantaforge-light/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Qiskit
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Cirq
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        PennyLane
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-quantaforge-secondary">IR Standards</h3>
                    <ul className="space-y-2 text-quantaforge-light/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        OpenQASM 3.0
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        QIR
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Custom dialects
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-quantaforge-secondary">Hardware Targets</h3>
                    <ul className="space-y-2 text-quantaforge-light/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Superconducting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Ion trap
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-quantaforge-success" />
                        Neutral atom
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benchmarks */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Performance Benchmarks</h2>
              <p className="text-lg text-quantaforge-light/60 mb-8">
                Real improvements on a 27-qubit superconducting device (QAOA, 12-node MaxCut)
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-quantaforge-secondary/20">
                      <th className="text-left py-4 px-4 text-quantaforge-light">Metric</th>
                      <th className="text-left py-4 px-4 text-quantaforge-light">Before</th>
                      <th className="text-left py-4 px-4 text-quantaforge-light">After</th>
                      <th className="text-left py-4 px-4 text-quantaforge-light">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.map((row) => (
                      <tr key={row.metric} className="border-b border-quantaforge-secondary/10">
                        <td className="py-4 px-4 text-quantaforge-light/80 font-medium">{row.metric}</td>
                        <td className="py-4 px-4 text-quantaforge-light/60">{row.before}</td>
                        <td className="py-4 px-4 text-quantaforge-light/60">{row.after}</td>
                        <td className="py-4 px-4 text-quantaforge-success font-semibold">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-quantaforge-light">
                Ready to optimize your quantum circuits?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Let's discuss your hardware, workloads, and compiler requirements
              </p>
              <Link to="/quantaforge/contact">
                <Button size="lg" className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow">
                  Request Architecture Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default Compiler;
