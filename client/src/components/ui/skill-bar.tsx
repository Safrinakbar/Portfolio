import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  isVisible?: boolean;
}

export default function SkillBar({ name, level, isVisible = false }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div data-testid={`skill-bar-${name.toLowerCase().replace(/\./g, '')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 font-semibold" data-testid={`skill-name-${name.toLowerCase().replace(/\./g, '')}`}>
          {name}
        </span>
        <span className="text-muted-foreground" data-testid={`skill-level-${name.toLowerCase().replace(/\./g, '')}`}>
          {level}%
        </span>
      </div>
      
      <div className="skill-bar w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="skill-progress h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut",
            delay: 0.2 
          }}
          style={{
            background: 'linear-gradient(90deg, hsl(221, 83%, 53%), hsl(173, 93%, 42%))'
          }}
        />
      </div>
    </div>
  );
}
