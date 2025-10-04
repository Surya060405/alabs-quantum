import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuantaForgeNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Solutions", href: "/quantaforge/solutions" },
    { name: "Industries", href: "/quantaforge/industries" },
    { name: "Technology", href: "/quantaforge/technology" },
    { name: "Resources", href: "/quantaforge/resources" },
    { name: "About", href: "/quantaforge/about" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-quantaforge-dark/95 backdrop-blur-lg border-b border-quantaforge-secondary/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/quantaforge" className="flex items-center gap-2 group">
            <Atom className="h-8 w-8 text-quantaforge-secondary group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-2xl font-bold quantaforge-text-gradient">QuantaForge Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/">
              <Button variant="outline" size="sm" className="border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10">
                ← Adyakshar Labs
              </Button>
            </Link>
            <Link to="/quantaforge/contact">
              <Button className="bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow">
                Book a Scoping
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-quantaforge-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-quantaforge-light/80 hover:text-quantaforge-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/">
              <Button variant="outline" className="w-full mt-3 border-quantaforge-secondary/50 text-quantaforge-secondary">
                ← Adyakshar Labs
              </Button>
            </Link>
            <Link to="/quantaforge/contact">
              <Button className="w-full mt-2 bg-quantaforge-secondary text-quantaforge-dark">
                Book a Scoping
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
