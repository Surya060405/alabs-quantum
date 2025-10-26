import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  Beaker,
  BrainCircuit,
  Blend,
  Server,
  CheckCircle,
  Notebook,
  GitCommit,
  Database,
  BarChart,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
const Simulation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatWeBuild = [
    {
      icon: Beaker,
      title: "Chemistry pipelines",
      description:
        "Simulate complex molecular systems using adaptive variational solvers that capture electronic correlations with quantum precision.\n• Utilize automated ansatz selection and hybrid optimization to model ground and excited states through scalable VQE and ADAPT-VQE frameworks.\n• Integrate problem mappings via Jordan Wigner and Bravyi Kitaev transformations, enabling efficient encoding of molecular Hamiltonians on quantum hardware and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Atom,
      title: "Materials & catalysis",
      description:
        "Model quantum materials and catalytic reactions through lattice-based Hamiltonians that reveal emergent physical behaviors.\n• Simulate dynamic evolution using Trotterization and Linear Combination of Unitaries (LCU) methods for precision-controlled time propagation.\n• Employ variational dynamics and error-aware approximations to achieve scalable, noise-resilient simulations across real-world material systems and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: BrainCircuit,
      title: "Hybrid ML",
      description:
        "Fuse quantum and classical intelligence through kernel-based learning and variational optimization frameworks.\n• Implement QAOA-driven optimization and quantum feature maps that amplify representational power beyond classical limits.\n• Bridge quantum circuits with PyTorch and JAX for seamless classical–quantum co-training loops, enabling adaptive and data-efficient learning and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Blend,
      title: "Experiment orchestration",
      description:
        "Automate experimental workflows through intelligent batch sweepers and distributed parameter servers for high-throughput exploration.\n• Integrate active-learning loops that dynamically guide experiments toward optimal configurations using real-time feedback.\n• Employ surrogate modeling to predict outcomes, reduce computational overhead, and accelerate quantum–AI co-design cycles and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
    {
      icon: Server,
      title: "HPC integration",
      description:
        "Unify large-scale quantum simulations with GPU-accelerated and tensor-network backends for unparalleled computational efficiency.\n• Implement CUDA-Quantum bridges and hybrid HPC workflows to seamlessly integrate classical acceleration with quantum runtimes.\n• Deploy scalable execution environments across Slurm and Kubernetes clusters, enabling adaptive, enterprise-grade quantum workloads and more.\n\nFor more information, please contact\ninfo@adyaksharlabs.com",
    },
  ];
  const deliverables = [
    {
      icon: Notebook,
      text: "Reproducible notebooks",
    },
    {
      icon: GitCommit,
      text: "Workflow DAGs",
    },
    {
      icon: Database,
      text: "Data packs",
    },
    {
      icon: BarChart,
      text: "Benchmark baselines",
    },
    {
      icon: GraduationCap,
      text: "Handoff training",
    },
  ];
  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Quantum simulation for drug discovery and materials + Quantum-AI workflows</title>
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
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-success/20 text-quantaforge-success text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-success">
                Quantum Simulation and AI
              </h1>

              <Link to="/quantumlabs/contact"></Link>
              <p className="text-lg text-quantaforge-light/70 mt-4 leading-relaxed">
                Accelerate the discovery frontier in chemistry, materials, and intelligent design through
                quantum-enhanced simulation pipelines. Harness hybrid variational solvers for electronic structure,
                lattice dynamics, and catalysis bridged seamlessly with adaptive AI models. By coupling quantum kernels
                with classical accelerators, our platform orchestrates experiments, optimizes workflows, and fuses
                HPC-scale precision with active-learning autonomy for exponential insight generation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Build */}
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
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Build</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeBuild.map((item, index) => (
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
                  className="p-6 rounded-xl border border-quantaforge-success/20 bg-quantaforge-dark/50 hover:border-quantaforge-success/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-success to-quantaforge-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <div className="text-quantaforge-light/70 space-y-2 whitespace-pre-line">{item.description}</div>
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
                "Bridges quantum level precision with classical computing speed for realistic, noise-resilient modeling.",
                "Reduces simulation costs and time through intelligent automation and adaptive learning.",
                "Provides modular integration and supports cloud as well as on-prem interoperability with leading ML frameworks like PyTorch, JAX, HPC schedulers etc.",
                "Offers scalable, HPC-compatible execution for enterprise and academic research.",
                "Fosters interdisciplinary R&D between quantum computing, materials science, and AI.",
                "Replace manual sweep/tuning with active‑learning; reduce expensive wet‑lab or long HPC queues via pre‑deployment simulation.",
                "Standardize workflows to use pipelines across projects instead of one‑off scripts.",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-success/20"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-success flex-shrink-0 mt-1" />
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
                "Electronic structure & reaction mechanisms; lattice models and emergent phenomena.",
                "Exploring lattice models in quantum materials and studying emergent phenomena.",
                "AI‑assisted quantum chemistry workflows and methodologies for drug/catalyst discovery; large‑scale parameter optimization.",
                "Accelerating parameter tuning and optimization in large-scale simulation environments.",
                "Supporting hybrid quantum–classical co-design experiments.",
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-quantaforge-dark/50 border border-quantaforge-success/20"
                >
                  <CheckCircle className="h-6 w-6 text-quantaforge-success flex-shrink-0 mt-1" />
                  <p className="text-quantaforge-light/80">{useCase}</p>
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
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Deliverables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-success/20 flex items-center gap-4"
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
                  >
                    <item.icon className="h-6 w-6 text-quantaforge-success flex-shrink-0" />
                    <span className="text-lg text-quantaforge-light/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-quantaforge-primary/50 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantaforge-success/10 rounded-full blur-[120px]" />
          
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
                Real-world achievements in quantum simulation and AI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Hybrid Variational Solvers",
                  content: "Hybrid variational solvers (VQE, ADAPT‑VQE) for ground/excited states; Jordan‑Wigner/Bravyi‑Kitaev encodings."
                },
                {
                  title: "Quantum–AI Fusion",
                  content: "Quantum–AI fusion for data‑driven refinement; active‑learning loops + intelligent batch scheduling."
                },
                {
                  title: "HPC Integration",
                  content: "HPC integration via CUDA–Quantum bridges; GPU/tensor‑network backends for scale."
                }
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism bg-quantaforge-dark/30 backdrop-blur-xl border-quantaforge-light/10 rounded-xl p-8 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-quantaforge-success/20 border border-quantaforge-success/30 mb-6">
                    <CheckCircle className="h-7 w-7 text-quantaforge-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-quantaforge-light mb-4">
                    {story.title}
                  </h3>
                  <p className="text-quantaforge-light/80 text-base flex-grow">
                    {story.content}
                  </p>
                  <p className="text-quantaforge-success text-sm font-medium mt-6">
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
        <section className="py-24 bg-quantaforge-dark">
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
                    description: "problem framing + dataset/hamiltonian prep; success metrics."
                  },
                  {
                    phase: "3–6 weeks",
                    description: "hybrid solver baselines; AI‑assisted tuning; HPC sizing."
                  },
                  {
                    phase: "7–12 weeks",
                    description: "validation + report; hand‑off with reproducible pipelines."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 rounded-xl border border-quantaforge-success/20 bg-quantaforge-primary/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantaforge-success to-quantaforge-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-quantaforge-success mb-2">{item.phase}</h3>
                        <p className="text-quantaforge-light/70">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
      </main>

      <QuantaForgeFooter />
    </div>
  );
};
export default Simulation;
