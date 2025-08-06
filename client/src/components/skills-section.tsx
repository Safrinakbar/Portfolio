import { motion } from "framer-motion";
import TechLogo from "@/components/ui/tech-logo";
import SkillBar from "@/components/ui/skill-bar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const techLogos = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Node.js", color: "#339933", icon: "🟢" },
  { name: "MongoDB", color: "#47A248", icon: "🍃" },
  { name: "Python", color: "#3776AB", icon: "🐍" },
  { name: "Java", color: "#ED8B00", icon: "☕" },
  { name: "HTML5", color: "#E34F26", icon: "📄" },
  { name: "CSS3", color: "#1572B6", icon: "🎨" },
  { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
  { name: "TailwindCSS", color: "#06B6D4", icon: "🌊" },
  { name: "Express.js", color: "#000000", icon: "🚀" },
  { name: "SQL", color: "#4479A1", icon: "🗃️" },
  { name: "C++", color: "#00599C", icon: "⚙️" }
];

const programmingSkills = [
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "C++", level: 75 }
];

const webTechSkills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "TailwindCSS", level: 88 }
];

export default function SkillsSection() {
  const { ref: skillsRef, isVisible } = useScrollReveal();

  return (
    <section 
      id="skills" 
      className="py-20" 
      style={{
        background: 'linear-gradient(135deg, hsl(210, 40%, 98%) 0%, hsl(221, 83%, 95%) 100%)'
      }}
      data-testid="skills-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and programming languages
          </p>
        </motion.div>

        {/* Technology Logos */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="tech-logos"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <TechLogo 
                name={tech.name}
                color={tech.color}
                icon={tech.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8" data-testid="programming-languages-title">
              Programming Languages
            </h3>
            <div className="space-y-6" data-testid="programming-skills">
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <SkillBar 
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8" data-testid="web-technologies-title">
              Web Technologies
            </h3>
            <div className="space-y-6" data-testid="web-tech-skills">
              {webTechSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <SkillBar 
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
