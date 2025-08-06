import { useState, useEffect } from "react";

export function useTypingAnimation(
  texts: string[], 
  typingSpeed: number = 100, 
  deletingSpeed: number = 50, 
  pauseDuration: number = 2000
) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (charIndex < current.length) {
          setCurrentText(current.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(current.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [texts, currentIndex, isDeleting, charIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}
