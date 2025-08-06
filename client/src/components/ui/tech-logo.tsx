import { motion } from "framer-motion";
import { ComponentType } from "react";

interface TechLogoProps {
  name: string;
  color: string;
  Icon: ComponentType<any>;
}

export default function TechLogo({ name, color, Icon }: TechLogoProps) {
  return (
    <motion.div
      className="tech-logo bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer"
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        filter: "grayscale(0%)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ filter: "grayscale(70%)" }}
      transition={{ duration: 0.3 }}
      data-testid={`tech-logo-${name.toLowerCase().replace(/\./g, '')}`}
    >
      <div 
        className="text-4xl mb-2"
        style={{ color }}
      >
        <Icon />
      </div>
      <p className="text-sm font-semibold text-slate-700">{name}</p>
    </motion.div>
  );
}
