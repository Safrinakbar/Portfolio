import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    id: 1,
    title: "Employee Management Website",
    description: "Full-stack web application for managing employee details, leave records, and salary information using MERN stack.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Safrinakbar/Employee_management.git",
    liveUrl: ""
  },
  {
    id: 2,
    title: "Online Movie Ticket Booking",
    description: "Complete movie ticket booking system with seat selection, payment integration, and user management features.",
    image: "https://pixabay.com/get/g093166fb7cc5d01787c7743fa0da38211f1e81272d5edc833fa2868a210f245e8c2899a1bcbc923d59152878aa717c7e67a769cd96022eaee0661433594352e1_1280.jpg",
    technologies: ["React", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/Safrinakbar/Movie_ticket_booking.git",
    liveUrl: ""
  },
  {
    id: 3,
    title: "Multiplayer Snake Game",
    description: "Interactive Snake game with real-time multiplayer functionality and room creation features built in JavaScript.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["JavaScript", "WebSocket", "Canvas API"],
    githubUrl: "https://github.com/Safrinakbar/Snake_game.git",
    liveUrl: ""
  },
  {
    id: 4,
    title: "SriPriya Textiles E-commerce",
    description: "Complete e-commerce solution with payment integration, sales reporting, and product management for textile business.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["MERN Stack", "Payment Gateway", "Analytics"],
    githubUrl: "https://github.com/Safrinakbar/E-commerce-website.git",
    liveUrl: ""
  },
  {
    id: 5,
    title: "Python Learning Platform",
    description: "Interactive learning platform for Python programming built with React and Firebase for Climateverse.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: ["React", "Firebase", "Education"],
    githubUrl: "https://github.com/Safrinakbar/Python_learn_platform.git",
    liveUrl: ""
  }
];

export default function ProjectsSection() {
  const { ref: projectsRef, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-white" data-testid="projects-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
