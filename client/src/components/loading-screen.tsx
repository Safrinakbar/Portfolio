import { motion, AnimatePresence } from "framer-motion";
import { Bird, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [showContent, setShowContent] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const particles = Array.from({ length: 15 }, (_, i) => i);
  const birds = Array.from({ length: 3 }, (_, i) => i);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentPhase(1), 500);
    const timer2 = setTimeout(() => setCurrentPhase(2), 1500);
    const timer3 = setTimeout(() => setCurrentPhase(3), 3000);
    const timer4 = setTimeout(() => setShowContent(true), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 z-[9999] flex items-center justify-center flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #8b5a3c 75%, #ffd700 100%)',
        backgroundSize: '400% 400%'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        backgroundPosition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      initial={{ opacity: 1 }}
      exit={{ 
        scale: 1.1,
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      data-testid="loading-screen"
    >
      {/* Multiple Birds Flying */}
      <AnimatePresence>
        {birds.map((birdIndex) => (
          <motion.div
            key={birdIndex}
            className="absolute"
            initial={{ 
              x: -150, 
              y: window.innerHeight / 2 + (birdIndex * 80 - 80),
              opacity: 0,
              scale: 0.8 + (birdIndex * 0.1)
            }}
            animate={{ 
              x: window.innerWidth + 150,
              y: [
                window.innerHeight / 2 + (birdIndex * 80 - 80),
                window.innerHeight / 2 + (birdIndex * 80 - 80) - 50,
                window.innerHeight / 2 + (birdIndex * 80 - 80) + 30,
                window.innerHeight / 2 + (birdIndex * 80 - 80)
              ],
              opacity: [0, 1, 1, 1, 0],
              rotate: [0, -5, 5, -3, 0]
            }}
            transition={{ 
              duration: 5 + (birdIndex * 0.5),
              delay: birdIndex * 0.3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1]
            }}
          >
            <Bird className="text-white drop-shadow-lg" style={{ 
              width: `${48 + birdIndex * 8}px`, 
              height: `${48 + birdIndex * 8}px`,
              filter: `brightness(${1.2 - birdIndex * 0.1})`
            }} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-yellow-300" style={{
              width: `${12 + Math.random() * 8}px`,
              height: `${12 + Math.random() * 8}px`
            }} />
          </motion.div>
        ))}
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Initial Animation */}
        <AnimatePresence>
          {currentPhase >= 1 && (
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                  <motion.span
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                    animate={{ 
                      backgroundPosition: ['0%', '100%', '0%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    SB
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name Animation */}
        <AnimatePresence>
          {currentPhase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="mb-4"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200"
                initial={{ letterSpacing: "0.5em" }}
                animate={{ letterSpacing: "0.1em" }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                SAFRIN BARGANA
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence>
          {currentPhase >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.p
                className="text-lg md:text-xl text-slate-300 font-light"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Full Stack Developer
              </motion.p>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Progress */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <motion.div
                className="w-64 h-1 mx-auto bg-slate-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.p
                className="text-slate-400 text-sm mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Preparing your experience...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient Light Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
