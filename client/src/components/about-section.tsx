import { motion } from "framer-motion";
import { GraduationCap, MapPin, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref: aboutRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="about-image"
          >
            <img 
              src="https://pixabay.com/get/g9ded0c1cb1c4d80d1f9fb14cef949e1c4c1b98dbd9aebfedd35bd480a8b4a1f7836bfd3b0a2da946014d69db1197491bb19740b9326d9d0d8c4dcc896068535a_1280.jpg" 
              alt="Modern tech workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6" data-testid="about-subtitle">
              Software Developer & Problem Solver
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description">
              Currently pursuing BE in Computer Science and Engineering at Kongu Engineering College 
              with an impressive CGPA of 9.11/10. I have a passion for creating innovative solutions 
              and working on diverse projects that enhance my programming and problem-solving skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="glassmorphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h4 className="font-semibold text-slate-800">Education</h4>
                </div>
                <p className="text-muted-foreground">BE - CSE</p>
                <p className="text-sm text-primary font-semibold">CGPA 9.11/10</p>
                <p className="text-sm text-muted-foreground">Kongu Engineering College</p>
              </motion.div>

              <motion.div
                className="glassmorphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h4 className="font-semibold text-slate-800">Location</h4>
                </div>
                <p className="text-muted-foreground">Tamil Nadu, India</p>
                <p className="text-sm text-muted-foreground">Available for Remote Work</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="glassmorphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-slate-800 mb-2">HSC Score</h4>
                <p className="text-2xl font-bold text-primary">93.6%</p>
                <p className="text-sm text-muted-foreground">Sri Vidya Mandir</p>
              </motion.div>

              <motion.div
                className="glassmorphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-slate-800 mb-2">SSLC Score</h4>
                <p className="text-2xl font-bold text-accent">98.6%</p>
                <p className="text-sm text-muted-foreground">Sri Vidya Mandir</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4" data-testid="social-links">
              <Button 
                variant="default" 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a href="https://www.linkedin.com/in/safrin-bargana-039567259/" target="_blank" rel="noopener noreferrer" data-testid="about-linkedin-link">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-gray-800 hover:bg-gray-900"
                asChild
              >
                <a href="https://github.com/Safrinakbar" target="_blank" rel="noopener noreferrer" data-testid="about-github-link">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600"
                asChild
              >
                <a href="https://leetcode.com/u/Safrinbargana/" target="_blank" rel="noopener noreferrer" data-testid="about-leetcode-link">
                  <Code className="w-4 h-4 mr-2" />
                  LeetCode
                </a>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-red-500 hover:bg-red-600"
                asChild
              >
                <a href="mailto:safrinbarganaa.22cse@kongu.edu" data-testid="about-email-link">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
