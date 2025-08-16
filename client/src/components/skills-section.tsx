import { motion } from "framer-motion";
import TechLogo from "@/components/ui/tech-logo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiExpress, 
  SiMysql, 
  SiCplusplus, 
  SiC,
  SiGit,
  SiGithub,
  SiCanva
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techLogos = [
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Python", color: "#3776AB", Icon: SiPython },
  { name: "Java", color: "#ED8B00", Icon: FaJava },
  { name: "HTML5", color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS3", color: "#1572B6", Icon: SiCss3 },
  { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { name: "TailwindCSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "Express.js", color: "#000000", Icon: SiExpress },
  { name: "SQL", color: "#4479A1", Icon: SiMysql },
  { name: "C++", color: "#00599C", Icon: SiCplusplus },
  { name: "C", color: "#A8B9CC", Icon: SiC },
  { name: "Git", color: "#F05032", Icon: SiGit },
  { name: "GitHub", color: "#181717", Icon: SiGithub },
  { name: "Canva", color: "#00C4CC", Icon: SiCanva }
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
            Modern web technologies and programming languages
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
                Icon={tech.Icon}
              />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
     
    