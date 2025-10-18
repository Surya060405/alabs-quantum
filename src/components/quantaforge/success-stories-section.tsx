import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "Circuits That Think",
      content:
        "While experimenting with our compiler stack, we managed to make even imperfect quantum hardware perform smarter. Seeing raw circuits turn stable after noise-aware routing and pulse optimization felt incredible. It wasn’t just debugging—it was like watching logic find rhythm through physics. That day, quantum felt real, not theoretical.",
      contact: "info@alabs-quantum.com",
    },
    {
      title: "Locks for the Quantum Future",
      content:
        "During our PQC integration test, we built a tokenization system that secured blockchain transactions against future quantum threats without slowing anything down. What amazed us most was how smoothly it fit into existing systems. It proved that post-quantum security doesn’t have to break usability—it can strengthen trust seamlessly.",
      contact: "info@alabs-quantum.com",
    },
    {
      title: "Simulating Tomorrow’s Chemistry",
      content:
        "In one project, we connected our AI-driven quantum simulation pipeline to model molecular reactions. Watching the algorithm evolve patterns we didn’t explicitly program was surreal. It felt like the machine was discovering with us, turning chemistry into a living conversation between physics and computation.",
      contact: "info@alabs-quantum.com",
    },
  ];

  return (
    <section id="success-stories-section" className="py-24 bg-quantaforge-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 quantum-grid opacity-20" />
      <div className="absolute top-1/4 left-3/4 w-96 h-96 bg-quantaforge-success/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-quantaforge-secondary/10 rounded-full blur-[120px]" />

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
            Real-world impact of our quantum innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism bg-quantaforge-primary/30 backdrop-blur-xl border-quantaforge-light/10 rounded-xl p-8 flex flex-col items-start"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-quantaforge-success/20 border border-quantaforge-success/30 mb-6">
                <Star className="h-7 w-7 text-quantaforge-success" />
              </div>
              <h3 className="text-2xl font-bold text-quantaforge-light mb-4">
                {story.title}
              </h3>
              <p className="text-quantaforge-light/80 text-base mb-6 flex-grow">
                {story.content}
              </p>
              <p className="text-quantaforge-secondary text-sm font-medium">
                For more information, contact:{" "}
                <a href={`mailto:${story.contact}`} className="hover:underline">
                  {story.contact}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
