import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We analyze your quantum hardware, workloads, and requirements",
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Custom compiler stack, security protocols, or simulation workflows",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description: "Seamless deployment into your existing infrastructure",
  },
  {
    number: "04",
    title: "Optimization & Support",
    description: "Continuous benchmarking, tuning, and technical partnership",
  },
];

export const HowWeWork = () => {
  return (
    <section className="py-24 bg-quantaforge-primary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-quantaforge-light">
            How We Work
          </h2>
          <p className="text-lg text-quantaforge-light/60 max-w-2xl mx-auto">
            From first call to production deployment
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-quantaforge-secondary to-quantaforge-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-quantaforge-light">
                  {step.title}
                </h3>
                <p className="text-quantaforge-light/70 text-lg">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 hidden md:block">
                  <ArrowRight className="h-6 w-6 text-quantaforge-secondary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
