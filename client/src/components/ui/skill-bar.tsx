import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  isVisible?: boolean;
}

export default function SkillBar({ name, isVisible = false }: SkillBarProps) {
  return (
    <motion.div 
      data-testid={`skill-bar-${name.toLowerCase().replace(/\./g, '')}`}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glassmorphism p-4 rounded-xl"
    >
      <span className="text-slate-700 font-semibold" data-testid={`skill-name-${name.toLowerCase().replace(/\./g, '')}`}>
        {name}
      </span>
    </motion.div>
  );
}
