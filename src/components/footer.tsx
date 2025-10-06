import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
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
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg glassmorphism hover:bg-neon-blue/10 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-neon-blue" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/#services" className="hover:text-neon-blue transition-colors">AI/ML Development</Link></li>
              <li><Link to="/#services" className="hover:text-neon-blue transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/#services" className="hover:text-neon-blue transition-colors">IoT Systems</Link></li>
              <li><Link to="/#services" className="hover:text-neon-blue transition-colors">VLSI Design</Link></li>
            </ul>
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
              <li><Link to="/#about" className="hover:text-neon-purple transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-neon-purple transition-colors">Research</Link></li>
              <li><Link to="#" className="hover:text-neon-purple transition-colors">Publications</Link></li>
              <li><Link to="/our-team" className="hover:text-neon-purple transition-colors">Our Team</Link></li>
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
                <a href="mailto:contact@adyaksharlabs.com" className="hover:text-neon-green transition-colors">
                  contact@adyaksharlabs.com
                </a>
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
            © 2024 Adyakshar Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
