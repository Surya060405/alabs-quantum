import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Atom, Github, Linkedin, Twitter, Mail } from "lucide-react";

export const QuantaForgeFooter = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Quantum Compiler Studio", href: "/quantaforge/compiler" },
        { name: "Quantum-Secure Tokenization", href: "/quantaforge/tokenization" },
        { name: "Quantum Simulation & AI", href: "/quantaforge/simulation" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "Pharma & Biotech", href: "/quantaforge/industries#pharma" },
        { name: "Financial Services", href: "/quantaforge/industries#finance" },
        { name: "Semiconductor & Hardware", href: "/quantaforge/industries#semiconductor" },
        { name: "Government & Labs", href: "/quantaforge/industries#government" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/quantaforge/about" },
        { name: "Technology", href: "/quantaforge/technology" },
        { name: "Case Studies", href: "/quantaforge/case-studies" },
        { name: "Resources", href: "/quantaforge/resources" },
        { name: "Contact", href: "/quantaforge/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-quantaforge-dark border-t border-quantaforge-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/quantaforge" className="flex items-center gap-2 mb-4">
              <Atom className="h-8 w-8 text-quantaforge-secondary" />
              <span className="text-2xl font-bold quantaforge-text-gradient">Quantum Solutions</span>
            </Link>
            <p className="text-quantaforge-light/60 mb-6 max-w-sm">
              Build. Secure. Accelerate. Quantum software for real hardware.
            </p>
            <p className="text-sm text-quantaforge-light/50 mb-4">
              A specialized division of <Link to="/" className="text-quantaforge-secondary hover:underline">Adyakshar Labs</Link>
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-quantaforge-light font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-quantaforge-light/60 hover:text-quantaforge-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-quantaforge-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-quantaforge-light/50 text-sm">
            © 2025 Quantum Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/quantaforge/privacy" className="text-quantaforge-light/60 hover:text-quantaforge-secondary">
              Privacy Policy
            </Link>
            <Link to="/quantaforge/terms" className="text-quantaforge-light/60 hover:text-quantaforge-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
