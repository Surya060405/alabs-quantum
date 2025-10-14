import { Link } from "react-router-dom";
import { Atom } from "lucide-react";
export const QuantaForgeFooter = () => {
  const footerSections = [{
    title: "Solutions",
    links: [{
      name: "Quantum Compiler Studio",
      href: "/compiler"
    }, {
      name: "Quantum-Secure Tokenization",
      href: "/tokenization"
    }, {
      name: "Quantum Simulation & AI",
      href: "/simulation"
    }]
  }, {
    title: "Research",
    links: [{
      name: "Research & Development",
      href: "/quantumlabs/research"
    }, {
      name: "Quantum EDA",
      href: "/quantumlabs/research#rd-section"
    }, {
      name: "Quantum FPGA",
      href: "/quantumlabs/research#rd-section"
    }, {
      name: "Quantum Finance",
      href: "/quantumlabs/research#rd-section"
    }]
  }, {
    title: "Company",
    links: [{
      name: "About Us",
      href: "/quantumlabs/about"
    }, {
      name: "Technology",
      href: "/quantumlabs/technologies"
    }, {
      name: "Case Studies",
      href: "/quantumlabs/case-studies"
    }, {
      name: "Contact",
      href: "/quantumlabs/contact"
    }]
  }];
  return <footer className="bg-quantaforge-dark border-t border-quantaforge-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 mb-4">
              <Atom className="h-6 w-6 md:h-8 md:w-8 text-quantaforge-secondary" />
              <span className="text-xl md:text-2xl font-bold quantaforge-text-gradient">Quantum Labs</span>
            </Link>
            <p className="text-sm md:text-base text-quantaforge-light/60 mb-4 max-w-sm">
              Pioneering quantum computing solutions for the next generation
            </p>
            
          </div>

          {footerSections.map(section => <div key={section.title}>
              <h3 className="text-quantaforge-light font-semibold mb-3 md:mb-4 text-sm md:text-base">{section.title}</h3>
              <ul className="space-y-1.5 md:space-y-2">
                {section.links.map(link => <li key={link.name}>
                    <Link to={link.href} onClick={() => window.scrollTo(0, 0)} className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="border-t border-quantaforge-secondary/20 pt-8 text-center">
          <p className="text-quantaforge-light/50 text-sm">
            © 2025 Quantum Labs by Adyakshar Laboratories, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};