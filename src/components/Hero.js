import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Main content container */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main glass card */}
        <motion.div
          className="glass-card w-full p-8 md:p-12 lg:p-16 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center mb-8 text-silver-100 text-shadow"
            variants={itemVariants}
          >
            AI Consulting
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-center mb-12 text-silver-300 max-w-3xl"
            variants={itemVariants}
          >
            Specialising in AI agent solutions across Google, Microsoft, and Amazon platforms for the South African market.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="glass-button-highlight text-xl py-4 px-12"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Platform logos section */}
        <motion.div 
          className="glass-card w-full mt-10 p-8 md:p-10 flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Google logo */}
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24" className="w-12 h-12">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </g>
            </svg>
          </motion.div>
          
          {/* Microsoft logo */}
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-1 w-12 h-12">
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
            </div>
          </motion.div>
          
          {/* Amazon logo */}
          <motion.div
            className="w-28 h-12 md:w-32 md:h-12 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-white text-2xl font-medium">amazon</div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Background decorative glass panels*/}
      <div className="absolute top-40 -left-10 w-32 h-32 glass-card opacity-30 blur-sm"></div>
      <div className="absolute bottom-20 -right-10 w-40 h-40 glass-card opacity-30 blur-sm"></div>
    </section>
  );
};

export default Hero;