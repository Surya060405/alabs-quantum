import { motion } from "framer-motion";
import { TrendingUp, Zap, Shield } from "lucide-react";

const benchmarks = [
  {
    icon: TrendingUp,
    metric: "2-10×",
    label: "Effective fidelity uplift",
    description: "On NISQ workloads (benchmark-backed)",
  },
  {
    icon: Zap,
    metric: "Weeks → Days",
    label: "Port algorithms across devices",
    description: "Via neutral IR",
  },
  {
    icon: Shield,
    metric: "Zero-trust",
    label: "By default tokenization",
    description: "And post-quantum rollouts",
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
              className="text-center p-8 rounded-xl border border-quantaforge-secondary/20 bg-quantaforge-primary/30 hover:border-quantaforge-secondary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                <benchmark.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2 quantaforge-text-gradient">
                {benchmark.metric}
              </div>
              <div className="text-xl font-semibold mb-2 text-quantaforge-light">
                {benchmark.label}
              </div>
              <p className="text-quantaforge-light/60">
                {benchmark.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
