import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/adyakshar" && href.startsWith("/adyakshar#")) {
      e.preventDefault();
      const id = href.replace("/adyakshar#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/adyakshar#home" },
    { name: "About", href: "/adyakshar#about" },
    { name: "Services", href: "/adyakshar#services" },
    { name: "Technologies", href: "/adyakshar#technologies" },
    { name: "Our Team", href: "/adyakshar#our-team" },
    { name: "Contact", href: "/adyakshar#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism border-b border-border/20 bg-white/95 dark:bg-background/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/adyakshar">
              <img src={logo} alt="Adyakshar Labs" className="h-14" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-foreground/80 hover:text-neon-blue transition-colors duration-300 relative group inline-block"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
                </motion.span>
              </Link>
            ))}
            <Link to="/adyakshar#contact" onClick={(e) => handleNavClick(e, "/adyakshar#contact")}>
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground glow-neon-blue">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glassmorphism rounded-lg p-4 bg-white/95 dark:bg-background/10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground/80 hover:text-neon-blue transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/adyakshar#contact" className="block mt-4" onClick={(e) => handleNavClick(e, "/adyakshar#contact")}>
              <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
