import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getTechnologyColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800", 
      "MongoDB": "bg-green-100 text-green-800",
      "Express.js": "bg-gray-100 text-gray-800",
      "JavaScript": "bg-yellow-100 text-yellow-800",
      "WebSocket": "bg-red-100 text-red-800",
      "Canvas API": "bg-blue-100 text-blue-800",
      "MERN Stack": "bg-purple-100 text-purple-800",
      "Payment Gateway": "bg-green-100 text-green-800",
      "Analytics": "bg-purple-100 text-purple-800",
      "Firebase": "bg-orange-100 text-orange-800",
      "Education": "bg-green-100 text-green-800"
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <motion.div
      className="project-card glassmorphism p-6 rounded-2xl group"
      whileHover={{ 
        scale: 1.03,
        rotateY: 8,
        rotateX: 3
      }}
      transition={{ duration: 0.5 }}
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img 
          src={project.image} 
          alt={`${project.title} interface`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3" data-testid={`project-title-${project.id}`}>
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`project-description-${project.id}`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-technologies-${project.id}`}>
        {project.technologies.map((tech) => (
          <Badge 
            key={tech}
            variant="secondary"
            className={`${getTechnologyColor(tech)} text-xs`}
          >
            {tech}
          </Badge>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          asChild
        >
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid={`project-github-${project.id}`}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
        
        {project.liveUrl && (
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            asChild
          >
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid={`project-live-${project.id}`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
