import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Atom, Beaker, BrainCircuit, Blend, Server, CheckCircle, Notebook, GitCommit, Database, BarChart, GraduationCap } from "lucide-react";
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
      description: "Electronic structure (VQE, ADAPT-VQE), excited states, unitary coupled-cluster, problem mapping (Jordan-Wigner/Bravyi-Kitaev), ansätze libraries.",
    },
    {
      icon: Atom,
      title: "Materials & catalysis",
      description: "Lattice models, time evolution (Trotter/LCU), variational dynamics, error-aware approximations.",
    },
    {
      icon: BrainCircuit,
      title: "Hybrid ML",
      description: "Kernel methods, QAOA for optimization, quantum feature maps, classical-quantum loops with PyTorch/JAX bridges.",
    },
    {
      icon: Blend,
      title: "Experiment orchestration",
      description: "Batch sweepers, parameter servers, active-learning loops, surrogate models.",
    },
    {
      icon: Server,
      title: "HPC integration",
      description: "GPU simulators, tensor-network back-ends, CUDA-Quantum bridges, Slurm/K8s runtimes.",
    },
  ];

  const deliverables = [
      { icon: Notebook, text: "Reproducible notebooks" },
      { icon: GitCommit, text: "Workflow DAGs" },
      { icon: Database, text: "Data packs" },
      { icon: BarChart, text: "Benchmark baselines" },
      { icon: GraduationCap, text: "Handoff training" },
  ]

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-success/20 text-quantaforge-success text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-success">
                Quantum Simulation and AI
              </h1>
              
              <Link to="/quantumlabs/contact">
                <Button className="bg-quantaforge-success text-quantaforge-dark hover:bg-quantaforge-success/90 shadow-lg shadow-quantaforge-success/30">
                  Explore sample molecules & benchmarks
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-lg text-quantaforge-light/70 mt-4">Faster insights in chemistry, materials, and design.</p>
            </motion.div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Build</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeBuild.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-quantaforge-success/20 bg-quantaforge-dark/50 hover:border-quantaforge-success/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-success to-quantaforge-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <p className="text-quantaforge-light/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Deliverables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {deliverables.map((item, index) => (
                      <motion.div 
                          key={index} 
                          className="p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-success/20 flex items-center gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                      >
                          <item.icon className="h-6 w-6 text-quantaforge-success flex-shrink-0" />
                          <span className="text-lg text-quantaforge-light/80">{item.text}</span>
                      </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-quantaforge-light">
                Ready to accelerate your R&D?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                See how our quantum simulation workflows can give you a competitive edge.
              </p>
              <Link to="/quantumlabs/contact">
                <Button size="lg" className="bg-quantaforge-success text-quantaforge-dark hover:bg-quantaforge-success/90 shadow-lg shadow-quantaforge-success/30">
                  Explore sample molecules & benchmarks
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

export default Simulation;
