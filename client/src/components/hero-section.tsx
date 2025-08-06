import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import profileImage from "@assets/safr_1754508454976.jpg";

export default function HeroSection() {
  const typingText = useTypingAnimation([
    "Software Developer",
    "MERN Stack Expert", 
    "Problem Solver",
    "Innovation Enthusiast"
  ]);

  const { ref: heroRef, isVisible } = useScrollReveal();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(210, 40%, 98%) 0%, hsl(221, 83%, 95%) 100%)'
      }}
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Developer workspace background" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          ref={heroRef}
          className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img 
              src={profileImage} 
              alt="Safrin Bargana profile" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white shadow-xl animate-float object-cover"
              data-testid="profile-image"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            data-testid="main-title"
          >
            <span className="gradient-text">SAFRIN BARGANA A</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span 
              className="border-r-2 border-primary animate-pulse"
              data-testid="typing-text"
            >
              {typingText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            data-testid="hero-description"
          >
            Creative and determined Software Developer specializing in MERN stack development. 
            I strive to continuously learn and contribute to innovative, user-centric solutions 
            in dynamic environments.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full animate-glow"
              onClick={() => scrollToSection("#projects")}
              data-testid="view-work-button"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glassmorphism text-primary border-primary/20 hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => scrollToSection("#contact")}
              data-testid="get-in-touch-button"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/safrin-bargana-039567259/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="linkedin-link"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/Safrinakbar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="github-link"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Safrinbargana/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="leetcode-link"
            >
              <Code className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:safrinbarganaa.22cse@kongu.edu"
              className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="email-link"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          data-testid="scroll-indicator"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
}
