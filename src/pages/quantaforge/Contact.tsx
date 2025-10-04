import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", interest: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-quantaforge-dark">
      <QuantaForgeNavigation />
      
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 quantum-grid opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-quantaforge-light">
                  Get In Touch
                </h1>
                <p className="text-xl text-quantaforge-light/70">
                  Let's discuss how quantum computing can transform your operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glassmorphism p-8 rounded-xl border border-quantaforge-secondary/20"
                >
                  <h2 className="text-2xl font-bold mb-6 text-quantaforge-light">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-quantaforge-light/80 mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-quantaforge-primary/50 border-quantaforge-secondary/30 text-quantaforge-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-quantaforge-light/80 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-quantaforge-primary/50 border-quantaforge-secondary/30 text-quantaforge-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-quantaforge-light/80 mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-quantaforge-primary/50 border-quantaforge-secondary/30 text-quantaforge-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-quantaforge-light/80 mb-2">
                        Interested in
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange as any}
                        className="w-full px-3 py-2 rounded-md bg-quantaforge-primary/50 border border-quantaforge-secondary/30 text-quantaforge-light"
                      >
                        <option value="">Select a solution</option>
                        <option value="compiler">Quantum Compiler Studio</option>
                        <option value="tokenization">Quantum-Secure Tokenization</option>
                        <option value="simulation">Quantum Simulation & AI</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-quantaforge-light/80 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-quantaforge-primary/50 border-quantaforge-secondary/30 text-quantaforge-light"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-quantaforge-secondary text-quantaforge-dark hover:bg-quantaforge-secondary/90 quantaforge-glow"
                    >
                      Send Message
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-quantaforge-light">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-quantaforge-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-quantaforge-light mb-1">Email</div>
                          <a href="mailto:contact@quantaforge.com" className="text-quantaforge-light/70 hover:text-quantaforge-secondary">
                            contact@quantaforge.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-quantaforge-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-quantaforge-light mb-1">Location</div>
                          <p className="text-quantaforge-light/70">
                            Global operations<br />
                            Remote-first team
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-quantaforge-light">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center hover:bg-quantaforge-secondary/30 transition-colors">
                        <Github className="h-5 w-5 text-quantaforge-secondary" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center hover:bg-quantaforge-secondary/30 transition-colors">
                        <Linkedin className="h-5 w-5 text-quantaforge-secondary" />
                      </a>
                    </div>
                  </div>

                  <div className="glassmorphism p-6 rounded-xl border border-quantaforge-secondary/20">
                    <h3 className="text-xl font-bold mb-3 text-quantaforge-light">
                      Office Hours
                    </h3>
                    <p className="text-quantaforge-light/70 mb-4">
                      Monday - Friday: 9:00 AM - 6:00 PM (UTC)<br />
                      Weekend: By appointment
                    </p>
                    <p className="text-sm text-quantaforge-light/60">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default Contact;
