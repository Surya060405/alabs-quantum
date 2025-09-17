import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-green">Get In</span>{" "}
            <span className="text-foreground">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into innovative solutions? 
            Let's discuss your next breakthrough project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphism p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-gradient-blue mb-8">
                Let's Start a Conversation
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-lg bg-neon-blue/10">
                    <Mail className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Us</div>
                    <div className="text-muted-foreground">contact@adyaksharlabs.com</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-lg bg-neon-green/10">
                    <Phone className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-lg bg-neon-purple/10">
                    <MapPin className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Visit Us</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>San Francisco, CA</div>
                      <div>Austin, TX</div>
                      <div>Kolkata, India</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-border/20">
                <h4 className="font-semibold text-foreground mb-4">Why Choose Adyakshar Labs?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-neon-blue mr-3" />
                    Global expertise, local understanding
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple mr-3" />
                    Cutting-edge research & development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-neon-green mr-3" />
                    Proven track record of success
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gradient-purple mb-6">
                Send Us a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glassmorphism border-border/20 focus:border-neon-blue/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glassmorphism border-border/20 focus:border-neon-blue/50 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="glassmorphism border-border/20 focus:border-neon-blue/50 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glassmorphism border-border/20 focus:border-neon-blue/50 transition-colors resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-neon-blue group"
              >
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll get back to you within 24 hours. Your information is secure and confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};