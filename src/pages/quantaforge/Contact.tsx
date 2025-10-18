import { QuantaForgeNavigation } from "@/components/quantaforge/navigation";
import { QuantaForgeFooter } from "@/components/quantaforge/footer";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
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

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="glassmorphism p-8 rounded-xl border border-quantaforge-secondary/20">
                  <h2 className="text-2xl font-bold mb-8 text-quantaforge-light">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-quantaforge-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold text-quantaforge-light mb-1">Email</div>
                        <a href="mailto:info@adyaksharlabs.com" className="text-quantaforge-light/70 hover:text-quantaforge-secondary">
                          info@alabs-quantum.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-quantaforge-secondary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-quantaforge-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold text-quantaforge-light mb-1">Visit Us</div>
                        <div className="text-quantaforge-light/70 space-y-1">
                          <div>San Francisco, CA</div>
                          <div>Austin, TX</div>
                          <div>Kolkata, India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <QuantaForgeFooter />
    </div>
  );
};

export default Contact;
