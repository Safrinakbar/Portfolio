import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="py-12 text-white"
      style={{ 
        background: 'hsl(222, 84%, 4.9%)' 
      }}
      data-testid="footer"
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="footer-title"
          >
            Safrin Bargana A
          </motion.h3>
          
          <motion.p
            className="text-slate-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="footer-subtitle"
          >
            Software Developer | Problem Solver | Innovator
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="footer-social-links"
          >
            <motion.a
              href="https://www.linkedin.com/in/safrin-bargana-039567259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="footer-linkedin-link"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Safrinakbar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="footer-github-link"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://leetcode.com/u/Safrinbargana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="footer-leetcode-link"
            >
              <Code className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:safrinbarganaa.22cse@kongu.edu"
              className="text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="footer-email-link"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            className="border-t border-slate-700 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400" data-testid="footer-copyright">
              &copy; 2024 Safrin Bargana. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
