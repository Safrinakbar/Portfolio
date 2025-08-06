import { motion } from "framer-motion";
import { Trophy, Medal, Award, Building, GraduationCap, Shield, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    title: "Website Developer",
    company: "Climateverse",
    period: "Present",
    description: "Developed interactive Python learning platform using React and Firebase with comprehensive course modules and user progress tracking.",
    icon: Building
  },
  {
    title: "Consultancy Project",
    company: "SriPriya Textiles",
    period: "2024",
    description: "Built comprehensive e-commerce platform with payment integration, inventory management, and sales analytics for textile business.",
    icon: Building
  }
];

const achievements = [
  {
    title: "Academic Excellence Award",
    period: "2024-2025",
    description: "Recognized for outstanding academic performance with CGPA 9.11/10",
    icon: Trophy,
    color: "text-yellow-600 bg-yellow-100"
  },
  {
    title: "TBI Hackathon Winner",
    period: "First Place - Software Edition",
    description: "Secured first place in Technology Business Incubator Hackathon",
    icon: Medal,
    color: "text-blue-600 bg-blue-100"
  },
  {
    title: "Paper Presentation",
    period: "VISTA - 2k23 (KEC)",
    description: "First place in technical paper presentation competition",
    icon: Award,
    color: "text-green-600 bg-green-100"
  }
];

const certifications = [
  {
    title: "MongoDB Certified",
    subtitle: "Associate Developer",
    icon: GraduationCap,
    color: "text-green-600 bg-green-100"
  },
  {
    title: "Cybersecurity Foundation",
    subtitle: "Coursera Certified",
    icon: Shield,
    color: "text-blue-600 bg-blue-100"
  },
  {
    title: "Data Science Certified",
    subtitle: "Infosys Springboard",
    icon: BarChart3,
    color: "text-purple-600 bg-purple-100"
  }
];

export default function ExperienceSection() {
  const { ref: experienceRef, isVisible } = useScrollReveal();

  return (
    <section 
      id="experience" 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(210, 40%, 98%) 0%, hsl(221, 83%, 95%) 100%)'
      }}
      data-testid="experience-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="experience-title">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8" data-testid="professional-experience-title">
              Professional Experience
            </h3>
            <div className="space-y-8" data-testid="experience-timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="glassmorphism p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <exp.icon className="w-6 h-6 text-primary mr-3" />
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">{exp.title}</h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <div className="text-sm text-muted-foreground">{exp.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8" data-testid="key-achievements-title">
              Key Achievements
            </h3>
            <div className="space-y-6" data-testid="achievements-list">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6 rounded-xl hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${achievement.color}`}>
                      <achievement.icon className="text-xl w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center" data-testid="certifications-title">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6" data-testid="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${cert.color}`}>
                  <cert.icon className="text-2xl w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h4>
                <p className="text-muted-foreground">{cert.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
