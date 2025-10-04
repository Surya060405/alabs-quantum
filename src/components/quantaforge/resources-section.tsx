import { FileText, BarChart2, BookOpen, HelpCircle, ArrowRight } from "lucide-react";

const resources = {
  whitepapers: [
    { title: "Designing Noise-Aware Quantum Compilers", href: "#" },
    { title: "Crypto-Agile Tokenization: A PQC Migration Playbook", href: "#" },
    { title: "Benchmarking VQE Workflows across Backends", href: "#" },
  ],
  benchmarks: {
    description: "Methodology, data, and reproducible code links for our performance benchmarks.",
    href: "#",
  },
  playbooks: [
    { title: "Compiler Sprint Checklist", href: "#" },
    { title: "PQC Rollout Checklist", href: "#" },
  ],
  faq: {
    description: "Explore answers to over 20 common questions about quantum software, security, and our services.",
    href: "#",
  },
};

export const ResourcesSection = () => {
  return (
    <section id="resources-section" className="py-24 sm:py-32 bg-quantaforge-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl quantaforge-text-gradient">
            Resources
          </h2>
          <p className="mt-6 text-lg leading-8 text-quantaforge-light/70">
            Dive deeper into our technology, methodologies, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
            <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-quantaforge-secondary" />
                <h3 className="text-2xl font-bold text-quantaforge-light">Whitepapers</h3>
            </div>
            <ul className="space-y-3">
              {resources.whitepapers.map((paper) => (
                <li key={paper.title}>
                  <a href={paper.href} className="flex items-center justify-between group text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors">
                    <span>{paper.title}</span>
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
            <div className="flex items-center gap-4 mb-4">
                <BarChart2 className="h-8 w-8 text-quantaforge-secondary" />
                <h3 className="text-2xl font-bold text-quantaforge-light">Benchmarks</h3>
            </div>
            <p className="text-quantaforge-light/80 mb-4">{resources.benchmarks.description}</p>
            <a href={resources.benchmarks.href} className="flex items-center group text-quantaforge-secondary font-semibold">
              Explore Data <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
            <div className="flex items-center gap-4 mb-4">
                <BookOpen className="h-8 w-8 text-quantaforge-secondary" />
                <h3 className="text-2xl font-bold text-quantaforge-light">Playbooks</h3>
            </div>
            <ul className="space-y-3">
              {resources.playbooks.map((playbook) => (
                <li key={playbook.title}>
                  <a href={playbook.href} className="flex items-center justify-between group text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors">
                    <span>{playbook.title}</span>
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
            <div className="flex items-center gap-4 mb-4">
                <HelpCircle className="h-8 w-8 text-quantaforge-secondary" />
                <h3 className="text-2xl font-bold text-quantaforge-light">FAQ</h3>
            </div>
            <p className="text-quantaforge-light/80 mb-4">{resources.faq.description}</p>
            <a href={resources.faq.href} className="flex items-center group text-quantaforge-secondary font-semibold">
              View FAQ <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};