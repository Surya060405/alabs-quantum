import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/adyakshar" && href.startsWith("/adyakshar#")) {
      e.preventDefault();
      const id = href.replace("/adyakshar#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient-blue mb-4">
              Adyakshar Labs
            </h3>
            <p className="text-muted-foreground mb-4">
              Turning cutting-edge research into real-world innovation. 
              Your partner in technological transformation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/adyakshar-labs-innovations/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg glassmorphism hover:bg-neon-blue/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-neon-blue" />
              </motion.a>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/adyakshar#about" onClick={(e) => handleNavClick(e, "/adyakshar#about")} className="hover:text-neon-purple transition-colors">About Us</Link></li>
              <li><Link to="/adyakshar#our-team" onClick={(e) => handleNavClick(e, "/adyakshar#our-team")} className="hover:text-neon-purple transition-colors">Our Team</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Francisco, CA</li>
              <li>Austin, TX</li>
              <li>Kolkata, India</li>
              <li className="pt-2">
                info@adyaksharlabs.com
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border/20"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Adyakshar Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
