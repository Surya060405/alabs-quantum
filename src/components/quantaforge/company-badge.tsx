import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CompanyBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quantaforge-secondary/10 border border-quantaforge-secondary/30 backdrop-blur-sm mb-6"
    >
      <span className="text-sm text-quantaforge-secondary font-medium">
        An Initiative of{" "}
        <Link 
          to="/" 
          className="underline hover:text-quantaforge-accent transition-colors"
        >
          Adyakshar Laboratories, Inc.
        </Link>
      </span>
    </motion.div>
  );
};
