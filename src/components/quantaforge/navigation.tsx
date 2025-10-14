import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Atom, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const QuantaForgeNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === "/" || location.pathname === "/quantumlabs" || location.pathname === "/quantumlabs/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Industries", href: "/quantumlabs/industries" },
    { name: "Technology", href: "/quantumlabs/technologies" },
    { name: "Pricing", href: "#pricing-section" },
    { name: "Resources", href: "#resources-section" },
    { name: "About", href: "/quantumlabs/about" },
  ];
  
  const solutionItems = [
      { name: "Quantum Compiler Studio", href: "/quantumlabs/compiler"},
      { name: "Quantum-Secure Tokenization", href: "/quantumlabs/tokenization"},
      { name: "Quantum Simulation & AI", href: "/quantumlabs/simulation"},
      { name: "Research & Development", href: "/quantumlabs/research"},
  ]

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
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-quantaforge-secondary/20 blur-xl rounded-full group-hover:bg-quantaforge-secondary/40 transition-all duration-500" />
              <Atom className="h-10 w-10 text-quantaforge-secondary group-hover:rotate-180 group-hover:scale-110 transition-all duration-700 relative z-10 drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold quantaforge-text-gradient tracking-tight leading-none">Quantum Labs</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors focus:outline-none">
                Solutions <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-quantaforge-dark border-quantaforge-light/10 text-quantaforge-light">
                {solutionItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-quantaforge-light/10" />
                <DropdownMenuItem asChild>
                  <a href="#solutions-section" onClick={(e) => handleLinkClick(e, 'solutions-section')}>All Solutions</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href.substring(1))}
                  className="text-sm font-medium text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-quantaforge-light/80 hover:text-quantaforge-secondary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/adyakshar">
              <Button variant="outline" size="sm" className="border-quantaforge-secondary/50 text-quantaforge-secondary hover:bg-quantaforge-secondary/10">
                ← Adyakshar Labs
              </Button>
            </Link>
            <Link to="/quantumlabs/contact">
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
            className="md:hidden pb-6 bg-quantaforge-dark/98 backdrop-blur-lg border-t border-quantaforge-secondary/20 rounded-b-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {/* Mobile menu needs update too */}
            <a href="#solutions-section" className="block py-3 text-quantaforge-light/80 hover:text-quantaforge-secondary" onClick={(e) => handleLinkClick(e, 'solutions-section')}>Solutions</a>
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-quantaforge-light/80 hover:text-quantaforge-secondary"
                  onClick={(e) => handleLinkClick(e, item.href.substring(1))}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-quantaforge-light/80 hover:text-quantaforge-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/adyakshar">
              <Button variant="outline" className="w-full mt-3 border-quantaforge-secondary/50 text-quantaforge-secondary">
                ← Adyakshar Labs
              </Button>
            </Link>
            <Link to="/quantumlabs/contact">
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
