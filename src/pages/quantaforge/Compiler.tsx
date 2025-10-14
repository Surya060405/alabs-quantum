import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cpu, GitBranch, Zap, Shield, Atom, Clock, Rocket, Briefcase, FileText, BarChart, HardHat, Code, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
const Compiler = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatWeDeliver = [{
    icon: GitBranch,
    title: "Architecture & IR",
    description: "Design of QIR/OpenQASM-compatible pipelines; custom passes and dialects."
  }, {
    icon: Cpu,
    title: "Gate decomposition",
    description: "Basis conversion optimized for native gate sets."
  }, {
    icon: Sliders,
    title: "Qubit mapping & routing",
    description: "Heuristics (e.g., SABRE/A*), noise-aware placement, SWAP minimization."
  }, {
    icon: Clock,
    title: "Scheduling",
    description: "ASAP/ALAP scheduling, cross-talk avoidance, idle-time decoupling."
  }, {
    icon: Shield,
    title: "Error mitigation",
    description: "Dynamical decoupling, randomized compiling, twirling, bias-aware transpilation."
  }, {
    icon: Zap,
    title: "Pulse-level optimization",
    description: "Drive-shape synthesis, parametric gates, closed-loop calibration hooks."
  }, {
    icon: Code,
    title: "Hybrid runtime",
    description: "Mid-circuit measurement/branching, classical feedback, parameter sweeping."
  }, {
    icon: Atom,
    title: "QEC-ready design",
    description: "Logical op compilation, syndrome orchestration, decoder integration."
  }];
  const engagementModels = [{
    icon: Rocket,
    title: "Compiler Sprint (4–6 weeks)",
    description: "Target a single backend; deliver measurable depth/fidelity gains."
  }, {
    icon: Briefcase,
    title: "Multi-backend Portability (8–12 weeks)",
    description: "IR + adapters for ≥3 devices; portability suite & CI."
  }, {
    icon: HardHat,
    title: "Full-stack Residency (retainer)",
    description: "Ongoing passes, calibration hooks, and release engineering."
  }];
  const deliverablesList = ["Technical design doc", "Pass library", "Benchmarking report", "CI pipelines", "Integration SDK"];
  return <div className="min-h-screen bg-quantaforge-dark">
      <Helmet>
        <title>Hardware-aware quantum compiler services (routing, scheduling, error mitigation)</title>
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
              <div className="inline-block px-4 py-1 rounded-full bg-quantaforge-secondary/20 text-quantaforge-secondary text-sm font-semibold mb-6">
                Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-quantaforge-secondary">
                Quantum Compiler Studio
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-6 text-quantaforge-light">
                Make any quantum device useful, faster.
              </p>
              <p className="text-2xl text-quantaforge-light/70 mb-8">
                Hardware heterogeneity, constrained connectivity, short coherence times, and noisy gates make raw circuits impractical. The right compiler stack can be the difference between a failed experiment and production-ready results.
              </p>
              <Link to="/contact">
                
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Deliver */}
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
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">What We Deliver</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whatWeDeliver.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-dark/50">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                      <p className="text-quantaforge-light/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
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
          }} className="mb-16">
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Engagement Models</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {engagementModels.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-primary/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-quantaforge-light">{item.title}</h3>
                  <p className="text-quantaforge-light/70">{item.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Deliverables */}
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
              <h2 className="text-4xl font-bold mb-4 text-quantaforge-light">Deliverables</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverablesList.map((item, index) => <motion.div key={item} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.08
            }} className="p-4 rounded-lg border border-quantaforge-secondary/20 bg-quantaforge-dark/50 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-quantaforge-success flex-shrink-0" />
                  <span className="text-lg text-quantaforge-light/80">{item}</span>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
          }} className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-quantaforge-light">
                Ready to make your quantum device useful, faster?
              </h2>
              <p className="text-lg text-quantaforge-light/70 mb-8">
                Request a sample report | See benchmark methodology
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  
                </Link>
                <Link to="/benchmarks">
                  
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>;
};
export default Compiler;