import { motion } from "framer-motion";
import { Star } from "lucide-react";
export const SuccessStoriesSection = () => {
  const stories = [{
    title: "Circuits That Think",
    content: "While experimenting with our compiler stack, we managed to make even imperfect quantum hardware perform smarter. Seeing raw circuits turn stable after noise-aware routing and pulse optimization felt incredible. It wasn’t just debugging, it was like watching logic find rhythm through physics. That day, quantum felt real, not theoretical.",
    contact: "info@alabs-quantum.com"
  }, {
    title: "Locks for the Quantum Future",
    content: "During our PQC integration test, we built a tokenization system that secured blockchain transactions against future quantum threats without slowing anything down. What amazed us most was how smoothly it fit into existing systems. It proved that post-quantum security doesn’t have to break usability, it can strengthen trust seamlessly.",
    contact: "info@alabs-quantum.com"
  }, {
    title: "Simulating Tomorrow’s Chemistry",
    content: "In one project, we connected our AI-driven quantum simulation pipeline to model molecular reactions. Watching the algorithm evolve patterns we didn’t explicitly program was surreal. It felt like the machine was discovering with us, turning chemistry into a living conversation between physics and computation.",
    contact: "info@alabs-quantum.com"
  }];
  return <section id="success-stories-section" className="py-24 bg-quantaforge-dark relative overflow-hidden">
      {/* Background effects */}
      
      <div className="absolute top-1/4 left-3/4 w-96 h-96 bg-quantaforge-success/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-quantaforge-secondary/10 rounded-full blur-[120px]" />

      
    </section>;
};