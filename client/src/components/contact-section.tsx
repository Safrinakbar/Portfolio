import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { ref: contactRef, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon!",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's discuss how we can work together!
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Peaceful landscape with flying birds" 
            className="w-full h-64 object-cover rounded-2xl mb-8" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="contact-info">
            <motion.div
              className="glassmorphism p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary text-xl w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Email</h4>
              <p className="text-muted-foreground text-sm">safrinbarganaa.22cse@kongu.edu</p>
            </motion.div>

            <motion.div
              className="glassmorphism p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary text-xl w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Phone</h4>
              <p className="text-muted-foreground text-sm">+91 8825683458</p>
            </motion.div>

            <motion.div
              className="glassmorphism p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-primary text-xl w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">LinkedIn</h4>
              <p className="text-muted-foreground text-sm">Safrin Bargana</p>
            </motion.div>

            <motion.div
              className="glassmorphism p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-primary text-xl w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">GitHub</h4>
              <p className="text-muted-foreground text-sm">Safrinakbar</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
