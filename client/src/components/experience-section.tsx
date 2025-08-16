import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Building,
  GraduationCap,
  Shield,
  BarChart3,
  Github,
} from "lucide-react"; // Keep lucide-react for other icons if needed
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Import react-vertical-timeline-component and its styles
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import Material-UI icons for the timeline elements
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const experiences = [
  {
    title: "Website Developer",
    company: "Climateverse",
    description:
      "Developed interactive Python learning platform using React and Firebase with comprehensive course modules and user progress tracking.",
    icon: Building,
    githubUrl: "https://github.com/Safrinakbar/Python_learn_platform.git",
  },
  {
    title: "Consultancy Project",
    company: "SriPriya Textiles",
    description:
      "Built comprehensive e-commerce platform with payment integration, inventory management, and sales analytics for textile business.",
    icon: Building,
    githubUrl: "https://github.com/Safrinakbar/E-commerce-website.git",
  },
  {
    title: "Machine Learning Engineer (beginner level)",
    company: "SystimaNX IT Solutions Private Limited",
    description:
      "Developed Python-based ML applications and contributed to AI/ML documentation. Gained hands-on experience in real-world machine learning projects and workflows.",
    icon: Building,
    githubUrl:
      "https://github.com/Safrinakbar/Patient-Re-Admission-Prediction.git",
  },
];

const achievements = [
  {
    title: "Academic Excellence Award",
    period: "2024-2025",
    description: "Recognized for outstanding academic performance",
    icon: Trophy,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    title: "TBI Hackathon Winner",
    period: "First Place - Software Edition",
    description: "Secured first place in Technology Business Incubator Hackathon",
    icon: Medal,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Ideathon Finalist",
    period: "2k24",
    description:
      "Finalist of Ideathon 2k24 for developing a Life-Saving App",
    icon: Award,
    color: "text-red-600 bg-red-100",
  },
  {
    title: "Ideathon Finalist",
    period: "2k23",
    description:
      "Finalist of Ideathon 2k23 for Smart Agriculture Project and showcased at the Science Expo",
    icon: Award,
    color: "text-orange-600 bg-orange-100",
  },
  {
    title: "Paper Presentation",
    period: "VISTA - 2k23 (KEC)",
    description: "First place in technical paper presentation competition",
    icon: Award,
    color: "text-green-600 bg-green-100",
  },
];

const certifications = [
  {
    title: "MongoDB Certified",
    subtitle: "Associate Developer",
    icon: GraduationCap,
    color: "text-green-600 bg-green-100",
  },
  {
    title: "Cybersecurity Foundation",
    subtitle: "Coursera Certified",
    icon: Shield,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Data Science Certified",
    subtitle: "Infosys Springboard",
    icon: BarChart3,
    color: "text-purple-600 bg-purple-100",
  },
];

export default function ExperienceSection() {
  const { ref: experienceRef, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="py-20 min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, hsl(210, 40%, 98%) 0%, hsl(221, 83%, 95%) 100%)",
      }}
      data-testid="experience-section"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            data-testid="experience-title"
          >
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        {/* Professional Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VerticalTimeline>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                  color: "#fff",
                  boxShadow: "0 6px 32px 0 rgba(56,189,248,0.18)",
                  borderRadius: "1.5rem",
                  border: "2px solid #e0e7ff"
                }}
                contentArrowStyle={{ borderRight: "7px solid #6366f1" }}
                date={exp.period}
                iconStyle={{
                  background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                  color: "#fff",
                  boxShadow: "0 0 0 6px #e0e7ff",
                  borderRadius: "50%"
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                  {exp.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg font-semibold mb-2">
                  {exp.company}
                </h4>
                <p className="mb-2">{exp.description}</p>
                {exp.githubUrl && (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 transition mt-2"
                  >
                    <Github className="w-4 h-4 mr-1 inline" />
                    GitHub
                  </a>
                )}
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{ background: "#6366f1", color: "#fff", borderRadius: "50%" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-8 rounded-2xl shadow-xl min-w-[260px] max-w-xs flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${achievement.color} shadow-lg border-4 border-white`}
                >
                  <achievement.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1 text-center">
                  {achievement.title}
                </h4>
                <p className="text-sm text-slate-600 mb-2 text-center">
                  {achievement.period}
                </p>
                <p className="text-slate-700 text-center">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-100 via-purple-100 to-blue-100 p-8 rounded-2xl shadow-xl min-w-[220px] max-w-xs flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cert.color} shadow-lg border-4 border-white`}
                >
                  <cert.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-1 text-center">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-600 mb-2 text-center">
                  {cert.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
