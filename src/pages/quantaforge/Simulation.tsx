import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Atom, Beaker, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Simulation = () => {
  const capabilities = [
    {
      icon: Atom,
      title: "VQE/QAOA Solvers",
      description: "Variational quantum eigensolvers for ground state energy calculations and optimization",
    },
    {
      icon: Beaker,
      title: "Molecular Simulation",
      description: "Quantum chemistry workflows for drug discovery and materials research",
    },
    {
      icon: Layers,
      title: "Hybrid Quantum-Classical",
      description: "Seamless integration between quantum circuits and classical ML/HPC systems",
    },
    {
      icon: Cpu,
      title: "Workflow Orchestration",
      description: "End-to-end pipeline management from problem encoding to result analysis",
    },
  ];

  const sectors = [
    {
      name: "Pharma & Biotech",
      applications: ["Protein folding simulation", "Drug-target binding affinity", "Molecular dynamics acceleration"],
    },
    {
      name: "Materials Science",
      applications: ["Battery material optimization", "Catalyst discovery", "Polymer property prediction"],
    },
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
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-success/20 text-quantaforge-success text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                Quantum Simulation & AI
              </h1>
              <p className="text-2xl text-quantaforge-light/70 mb-8">
                Accelerate discovery with quantum-enhanced simulation.
              </p>
              <p className="text-lg text-quantaforge-light/60 mb-8 max-w-3xl">
                Classical computers struggle with molecular-scale simulations critical for drug discovery 
                and materials design. Our quantum simulation workflows combine variational algorithms, 
                hybrid quantum-classical approaches, and seamless HPC/ML integration to deliver 10× faster 
                property calculations.
              </p>
              <Link to="/quantaforge/contact">
                <Button className="bg-quantaforge-success text-quantaforge-dark hover:bg-quantaforge-success/90 shadow-lg shadow-quantaforge-success/30">
                  Explore Simulation Workflows
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Core Capabilities</h2>
              <p className="text-lg text-quantaforge-light/60 max-w-2xl">
                End-to-end quantum simulation infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-quantaforge-success/20 bg-quantaforge-dark/50 hover:border-quantaforge-success/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-success to-quantaforge-secondary flex items-center justify-center flex-shrink-0">
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

        {/* Target Sectors */}
        <section className="py-24 bg-quantaforge-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Target Sectors</h2>
              <p className="text-lg text-quantaforge-light/60 max-w-2xl">
                Industries where quantum simulation delivers immediate value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism p-8 rounded-xl border border-quantaforge-success/20"
                >
                  <h3 className="text-2xl font-bold mb-6 text-quantaforge-success">{sector.name}</h3>
                  <ul className="space-y-3">
                    {sector.applications.map((app) => (
                      <li key={app} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-quantaforge-success mt-2 flex-shrink-0" />
                        <span className="text-quantaforge-light/80">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-24 bg-quantaforge-primary/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-quantaforge-light">
                HPC/ML Workflow Integration
              </h2>
              <div className="glassmorphism p-8 rounded-xl border border-quantaforge-success/20">
                <p className="text-quantaforge-light/70 mb-6">
                  Our quantum simulation platform integrates seamlessly with your existing infrastructure:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-quantaforge-light mb-3">Classical HPC</h4>
                    <ul className="space-y-2 text-quantaforge-light/70">
                      <li>• SLURM/PBS job scheduling</li>
                      <li>• MPI parallelization</li>
                      <li>• GPU acceleration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-quantaforge-light mb-3">ML Frameworks</h4>
                    <ul className="space-y-2 text-quantaforge-light/70">
                      <li>• PyTorch/TensorFlow integration</li>
                      <li>• Automated hyperparameter tuning</li>
                      <li>• Result analysis pipelines</li>
                    </ul>
                  </div>
                </div>
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
                Ready to accelerate your research?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Explore how quantum simulation can transform your drug discovery or materials workflows
              </p>
              <Link to="/quantaforge/contact">
                <Button size="lg" className="bg-quantaforge-success text-quantaforge-dark hover:bg-quantaforge-success/90 shadow-lg shadow-quantaforge-success/30">
                  Explore Simulation Workflows
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
