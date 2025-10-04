import { motion } from "framer-motion";
import { TrendingUp, Zap, Shield } from "lucide-react";

const benchmarks = [
  {
    icon: TrendingUp,
    metric: "1.5-5×",
    label: "Effective fidelity",
    description: "Uplift on NISQ workloads (benchmark-backed)",
  },
  {
    icon: Zap,
    metric: "Hours → Mins",
    label: "Port algorithms",
    description: "Across devices via neutral IR",
  },
  {
    icon: Shield,
    metric: "PQC-ready",
    label: "Tokenization",
    description: "Zero-trust and post-quantum rollouts",
  },
];

export const BenchmarksSection = () => {
  return (
    <section className="py-24 bg-quantaforge-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-quantaforge-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            Performance That Matters
          </h2>
          <p className="text-lg text-quantaforge-light/60 max-w-2xl mx-auto">
            Real improvements measured on production quantum hardware
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benchmarks.map((benchmark, index) => (
            <motion.div
              key={benchmark.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center p-6 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-primary/30 hover:border-quantaforge-secondary/50 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                <benchmark.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-1 quantaforge-text-gradient">
                {benchmark.metric}
              </div>
              <div className="text-lg font-semibold mb-2 text-quantaforge-light">
                {benchmark.label}
              </div>
              <p className="text-quantaforge-light/60 text-sm">
                {benchmark.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
