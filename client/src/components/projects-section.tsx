import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
	{
		id: 1,
		title: "Employee Management Website",
		description:
			"Full-stack web application for managing employee details, leave records, and salary information using MERN stack.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
		technologies: ["React", "Node.js", "MongoDB"],
		githubUrl: "https://github.com/Safrinakbar/Employee_management.git",
		liveUrl: "",
	},
	{
		id: 2,
		title: "Online Movie Ticket Booking",
		description:
			"Complete movie ticket booking system with seat selection, payment integration, and user management features.",
		image:
			"https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80",
		technologies: ["React", "Express.js", "MongoDB"],
		githubUrl: "https://github.com/Safrinakbar/Movie_ticket_booking.git",
		liveUrl: "",
	},
	{
		id: 3,
		title: "Multiplayer Snake Game",
		description:
			"Interactive Snake game with real-time multiplayer functionality and room creation features built in JavaScript.",
		image:
			"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
		technologies: ["JavaScript", "WebSocket", "HTML"],
		githubUrl: "https://github.com/Safrinakbar/Snake_game.git",
		liveUrl: "",
	},
];

export default function ProjectsSection() {
	const { ref: projectsRef, isVisible } = useScrollReveal();

	return (
		<section
			id="projects"
			className="py-20 bg-white"
			data-testid="projects-section"
		>
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					ref={projectsRef}
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
				>
					<h2
						className="text-4xl md:text-5xl font-bold gradient-text mb-6"
						data-testid="projects-title"
					>
						Projects
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Showcasing innovative solutions and technical expertise through
						real-world applications
					</p>
				</motion.div>

				<div
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					data-testid="projects-grid"
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="bg-blue-50 rounded-xl p-6"
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
		