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
  const whatWeBuild = [{
    icon: Beaker,
    title: "Chemistry pipelines",
    description: "Simulate complex molecular systems using adaptive variational solvers that capture electronic correlations with quantum precision.\n• Utilize automated ansatz selection and hybrid optimization to model ground and excited states through scalable VQE and ADAPT-VQE frameworks.\n• Integrate problem mappings via Jordan Wigner and Bravyi Kitaev transformations, enabling efficient encoding of molecular Hamiltonians on quantum hardware and more.\n\nFor more information, please contact info@adyaksharlabs.com"
  }, {
    icon: Atom,
    title: "Materials & catalysis",
    description: "Model quantum materials and catalytic reactions through lattice-based Hamiltonians that reveal emergent physical behaviors.\n• Simulate dynamic evolution using Trotterization and Linear Combination of Unitaries (LCU) methods for precision-controlled time propagation.\n• Employ variational dynamics and error-aware approximations to achieve scalable, noise-resilient simulations across real-world material systems and more.\n\nFor more information, please contact info@adyaksharlabs.com"
  }, {
    icon: BrainCircuit,
    title: "Hybrid ML",
    description: "Fuse quantum and classical intelligence through kernel-based learning and variational optimization frameworks.\n• Implement QAOA-driven optimization and quantum feature maps that amplify representational power beyond classical limits.\n• Bridge quantum circuits with PyTorch and JAX for seamless classical–quantum co-training loops, enabling adaptive and data-efficient learning and more.\n\nFor more information, please contact info@adyaksharlabs.com"
  }, {
    icon: Blend,
    title: "Experiment orchestration",
    description: "Automate experimental workflows through intelligent batch sweepers and distributed parameter servers for high-throughput exploration.\n• Integrate active-learning loops that dynamically guide experiments toward optimal configurations using real-time feedback.\n• Employ surrogate modeling to predict outcomes, reduce computational overhead, and accelerate quantum–AI co-design cycles and more.\n\nFor more information, please contact info@adyaksharlabs.com"
  }, {
    icon: Server,
    title: "HPC integration",
    description: "Unify large-scale quantum simulations with GPU-accelerated and tensor-network backends for unparalleled computational efficiency.\n• Implement CUDA-Quantum bridges and hybrid HPC workflows to seamlessly integrate classical acceleration with quantum runtimes.\n• Deploy scalable execution environments across Slurm and Kubernetes clusters, enabling adaptive, enterprise-grade quantum workloads and more.\n\nFor more information, please contact info@adyaksharlabs.com"
  }];
  const deliverables = [{
    icon: Notebook,
    text: "Reproducible notebooks"
  }, {
    icon: GitCommit,
    text: "Workflow DAGs"
  }, {
    icon: Database,
    text: "Data packs"
  }, {
    icon: BarChart,
    text: "Benchmark baselines"
  }, {
    icon: GraduationCap,
    text: "Handoff training"
  }];
  return <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Quantum simulation for drug discovery and materials + Quantum-AI workflows</title>
      </Helmet>
      <QuantaForgeNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="max-w-4xl">
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-success/20 text-quantaforge-success text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-success">
                Quantum Simulation and AI
              </h1>
              
              <Link to="/quantumlabs/contact">
                
              </Link>
              <p className="text-lg text-quantaforge-light/70 mt-4 leading-relaxed">
                Accelerate the discovery frontier in chemistry, materials, and intelligent design through quantum-enhanced simulation pipelines. Harness hybrid variational solvers for electronic structure, lattice dynamics, and catalysis bridged seamlessly with adaptive AI models. By coupling quantum kernels with classical accelerators, our platform orchestrates experiments, optimizes workflows, and fuses HPC-scale precision with active-learning autonomy for exponential insight generation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="mb-16">
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Build</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeBuild.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="p-6 rounded-xl border border-quantaforge-success/20 bg-quantaforge-dark/50 hover:border-quantaforge-success/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-success to-quantaforge-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <div className="text-quantaforge-light/70 space-y-2 whitespace-pre-line">
                    {item.description}
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">Deliverables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {deliverables.map((item, index) => <motion.div key={index} className="p-4 rounded-lg bg-quantaforge-primary/50 border border-quantaforge-success/20 flex items-center gap-4" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                          <item.icon className="h-6 w-6 text-quantaforge-success flex-shrink-0" />
                          <span className="text-lg text-quantaforge-light/80">{item.text}</span>
                      </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        
      </main>

      <QuantaForgeFooter />
    </div>;
};
export default Simulation;