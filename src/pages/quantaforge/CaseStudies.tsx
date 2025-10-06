import { useEffect } from "react";
import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";

const caseStudies = [
  {
    id: "neutral-atom-startup",
    title: "Neutral-Atom Startup",
    summary: "3.1× depth reduction via noise-aware routing + DD; portability to 2nd vendor in 6 weeks.",
    problem: "A neutral-atom quantum computing startup needed to improve the performance and portability of their system.",
    approach: "We implemented a noise-aware routing algorithm and dynamical decoupling (DD) to mitigate errors and enhance circuit depth. We also developed a compiler backend that enabled portability to a second hardware vendor.",
    architecture: "The architecture involved a custom compiler pass for noise-aware routing and a flexible IR that could be targeted to different neutral-atom backends.",
    results: "Achieved a 3.1x reduction in circuit depth, leading to higher-fidelity results. The system was made portable to a second hardware vendor in just 6 weeks.",
    nextSteps: "Further optimize the compiler for specific algorithms and explore more advanced error mitigation techniques.",
    quote: "Quantum Solutions was instrumental in helping us achieve production-grade performance and a key strategic goal of hardware portability.",
  },
  {
    id: "pharma-randd",
    title: "Pharma R&D",
    summary: "ADAPT-VQE pipeline with GPU-accelerated simulator → lab backend; 30% compute cost savings.",
    problem: "A pharmaceutical research lab's drug discovery process was hampered by the high computational cost and slow speed of classical simulations.",
    approach: "We developed an ADAPT-VQE (Variational Quantum Eigensolver) pipeline that utilized a GPU-accelerated simulator for rapid prototyping and was transferable to their in-house lab backend.",
    architecture: "The solution featured a hybrid quantum-classical workflow, with the VQE algorithm running on a GPU-accelerated quantum simulator and classical optimization loops managed by a control server.",
    results: "The new pipeline resulted in a 30% reduction in compute costs and a significant speedup in simulation times, accelerating the drug discovery process.",
    nextSteps: "Integrate the pipeline with a larger-scale quantum device and explore more complex molecules.",
    quote: "The hybrid quantum-classical pipeline developed by Quantum Solutions has given us a significant competitive advantage in our R&D efforts.",
  },
  {
    id: "web3-custodian",
    title: "Web3 Custodian",
    summary: "PQC wallet with MPC; hybrid certificates; zero downtime migration; SOC 2 ready.",
    problem: "A Web3 custodian needed to secure their digital asset wallet against threats from both classical and quantum computers.",
    approach: "We designed and implemented a post-quantum cryptographic (PQC) wallet solution that incorporated multi-party computation (MPC) for enhanced security. We also managed a zero-downtime migration to the new system, which was built to be SOC 2 compliant.",
    architecture: "The architecture used a combination of PQC algorithms and MPC protocols to secure private keys. Hybrid certificates were used to ensure a smooth transition and backward compatibility.",
    results: "The custodian now has a quantum-resistant wallet solution that meets stringent security and compliance requirements. The migration was completed with zero downtime, ensuring business continuity.",
    nextSteps: "Conduct ongoing security audits and explore the integration of other quantum security technologies like QKD.",
    quote: "Quantum Solutions's expertise in PQC and MPC was invaluable in securing our platform for the future. The seamless migration was a huge success.",
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quantaforge-dark text-quantaforge-light">
      <QuantaForgeNavigation />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl quantaforge-text-gradient">Case Studies</h1>
          <p className="mt-6 text-lg leading-8 text-quantaforge-light/70">
            See how we've helped leading organizations achieve their quantum goals.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="p-8 rounded-3xl bg-quantaforge-dark/50 ring-1 ring-inset ring-quantaforge-light/10">
              <h2 className="text-2xl font-bold text-quantaforge-secondary">{study.title}</h2>
              <p className="mt-4 text-quantaforge-light/80">{study.summary}</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Problem</h3>
                  <p className="mt-2 text-sm text-quantaforge-light/70">{study.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Approach</h3>
                  <p className="mt-2 text-sm text-quantaforge-light/70">{study.approach}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Architecture</h3>
                  <p className="mt-2 text-sm text-quantaforge-light/70">{study.architecture}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Results (KPIs)</h3>
                  <p className="mt-2 text-sm text-quantaforge-light/70">{study.results}</p>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Next Steps</h3>
                  <p className="mt-2 text-sm text-quantaforge-light/70">{study.nextSteps}</p>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-quantaforge-light">Quote</h3>
                  <p className="mt-2 text-sm font-style: italic text-quantaforge-light/70">"{study.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <QuantaForgeFooter />
    </div>
  );
};

export default CaseStudiesPage;