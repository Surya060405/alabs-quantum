import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { FileText, BarChart3, BookOpen, HelpCircle, Download, ExternalLink } from "lucide-react";

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whitepapers = [
    {
      title: "Noise-Aware Routing for NISQ Devices",
      description: "Deep dive into our compiler techniques that achieve 3x+ circuit depth reduction on real hardware.",
      downloadLink: "#"
    },
    {
      title: "Post-Quantum Cryptography: A Practical Guide",
      description: "How to prepare your organization for quantum-safe security with hybrid certificates and zero-downtime migration.",
      downloadLink: "#"
    },
    {
      title: "GPU-Accelerated Quantum Simulation",
      description: "Leveraging classical hardware to prototype quantum algorithms faster and cheaper.",
      downloadLink: "#"
    }
  ];

  const benchmarks = [
    {
      title: "Quantum Compiler Benchmarks 2025",
      description: "Comprehensive performance comparison across neutral-atom, superconducting, and ion-trap platforms.",
      viewLink: "#"
    },
    {
      title: "VQE Performance Analysis",
      description: "ADAPT-VQE vs. traditional VQE: convergence speed, accuracy, and resource requirements.",
      viewLink: "#"
    }
  ];

  const playbooks = [
    {
      title: "Quantum Migration Playbook",
      description: "Step-by-step guide to adopting quantum solutions in your organization.",
      readLink: "#"
    },
    {
      title: "Security Audit Checklist",
      description: "Comprehensive checklist for evaluating quantum-safe cryptography implementations.",
      readLink: "#"
    }
  ];

  const faqs = [
    {
      question: "What quantum hardware do you support?",
      answer: "We support all major quantum computing platforms including neutral-atom systems, superconducting qubits, and ion-trap devices. Our compiler framework is hardware-agnostic, enabling easy portability."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Most projects range from 6-12 weeks for initial deployment. We've achieved hardware portability in as little as 6 weeks for compiler migrations."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including training, optimization services, and regular updates to keep your quantum infrastructure at peak performance."
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in pharma & biotech, financial services, semiconductor & hardware, and government & research labs - any organization ready to leverage quantum computing."
    }
  ];

  return (
    <div className="min-h-screen bg-quantaforge-dark text-quantaforge-light">
      <QuantaForgeNavigation />
      
      <main className="container mx-auto px-4 py-24 sm:py-32">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            className="text-5xl font-bold tracking-tight sm:text-6xl quantaforge-text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Resources & Knowledge
          </motion.h1>
          <motion.p 
            className="text-xl text-quantaforge-light/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of whitepapers, benchmarks, playbooks, and guides to accelerate your quantum journey.
          </motion.p>
        </div>

        {/* Whitepapers */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-quantaforge-secondary" />
            <h2 className="text-3xl font-bold text-quantaforge-light">Whitepapers</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                className="p-6 rounded-2xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10 hover:ring-quantaforge-secondary/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-quantaforge-light mb-3 group-hover:text-quantaforge-secondary transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-quantaforge-light/60 mb-4">
                  {paper.description}
                </p>
                <a 
                  href={paper.downloadLink}
                  className="inline-flex items-center gap-2 text-sm text-quantaforge-secondary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benchmarks */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="h-8 w-8 text-quantaforge-secondary" />
            <h2 className="text-3xl font-bold text-quantaforge-light">Benchmarks</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benchmarks.map((benchmark, index) => (
              <motion.div
                key={benchmark.title}
                className="p-6 rounded-2xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10 hover:ring-quantaforge-secondary/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-quantaforge-light mb-3 group-hover:text-quantaforge-secondary transition-colors">
                  {benchmark.title}
                </h3>
                <p className="text-sm text-quantaforge-light/60 mb-4">
                  {benchmark.description}
                </p>
                <a 
                  href={benchmark.viewLink}
                  className="inline-flex items-center gap-2 text-sm text-quantaforge-secondary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Results
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Playbooks */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-quantaforge-secondary" />
            <h2 className="text-3xl font-bold text-quantaforge-light">Playbooks & Guides</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {playbooks.map((playbook, index) => (
              <motion.div
                key={playbook.title}
                className="p-6 rounded-2xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10 hover:ring-quantaforge-secondary/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-quantaforge-light mb-3 group-hover:text-quantaforge-secondary transition-colors">
                  {playbook.title}
                </h3>
                <p className="text-sm text-quantaforge-light/60 mb-4">
                  {playbook.description}
                </p>
                <a 
                  href={playbook.readLink}
                  className="inline-flex items-center gap-2 text-sm text-quantaforge-secondary hover:underline"
                >
                  <BookOpen className="h-4 w-4" />
                  Read Guide
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-quantaforge-secondary" />
            <h2 className="text-3xl font-bold text-quantaforge-light">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="p-6 rounded-2xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-quantaforge-secondary mb-3">
                  {faq.question}
                </h3>
                <p className="text-quantaforge-light/70">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default ResourcesPage;