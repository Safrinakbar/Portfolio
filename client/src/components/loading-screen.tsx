import { motion } from "framer-motion";
import { Bird } from "lucide-react";

export default function LoadingScreen() {
  const particles = Array.from({ length: 9 }, (_, i) => i);

  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 z-[9999] flex items-center justify-center flex-col"
      style={{
        background: 'linear-gradient(135deg, hsl(222, 84%, 4.9%), hsl(217, 32%, 17%))'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="loading-screen"
    >
      <motion.div
        className="bird relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 'calc(100vw + 100px)', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <Bird className="text-white text-4xl w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="mt-8 text-white text-xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="gradient-text text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5,
              ease: "easeInOut",
              delay: 1.2
            }}
            style={{
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "2px solid #3B82F6"
            }}
          >
            SAFRIN BARGANA
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${10 + i * 10}%`,
              background: 'rgba(59, 130, 246, 0.6)'
            }}
            animate={{
              y: [window.innerHeight, -100],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
