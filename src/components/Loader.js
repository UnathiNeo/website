import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  // Container animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  // Logo animation
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };
  
  // Ring animations
  const ringVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (custom) => ({
      opacity: [0, 0.5, 0],
      scale: [0.5, 1.5, 2],
      transition: {
        duration: 2,
        delay: custom * 0.3,
        repeat: Infinity,
        repeatDelay: 0.5
      }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative">
        {/* Animated rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-light opacity-20"
          variants={ringVariants}
          initial="initial"
          animate="animate"
          custom={0}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-light opacity-20"
          variants={ringVariants}
          initial="initial"
          animate="animate"
          custom={1}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-light opacity-20"
          variants={ringVariants}
          initial="initial"
          animate="animate"
          custom={2}
        />
        
        {/* Logo */}
        <motion.div
          className="relative z-10 flex items-center"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-3">
            <div className="text-silver-100">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                <path opacity="0.8" d="M7.5 7.5L12 12M12 12L16.5 16.5M12 12L16.5 7.5M12 12L7.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                <circle cx="12" cy="16.5" r="1" fill="currentColor"/>
                <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
                <circle cx="16.5" cy="12" r="1" fill="currentColor"/>
                <circle cx="7.5" cy="12" r="1" fill="currentColor"/>
                <circle cx="16.5" cy="16.5" r="1" fill="currentColor"/>
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
                <circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>
                <circle cx="7.5" cy="16.5" r="1" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-3xl font-semibold text-silver-100">Bonzonate <span className="text-neon-purple">AI</span></span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;