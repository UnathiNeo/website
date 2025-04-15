import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Platforms from './components/Platforms';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import GlowParticles from './components/GlowParticles';
import { useTheme } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { isDarkTheme } = useTheme();
  
  useEffect(() => {
    // Simulate loading time for initial animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="font-sans min-h-screen">
      {/* Background gradient and glow effects - only visible in dark theme */}
      <div className={`fixed inset-0 bg-purple-radial z-0 ${!isDarkTheme ? 'opacity-0' : ''}`}></div>
      
      {/* Animated glow particles - only visible in dark theme */}
      <div className={`fixed inset-0 z-0 opacity-60 ${!isDarkTheme ? 'opacity-0' : ''}`}>
        <GlowParticles />
      </div>
      
      {/* Initial loading animation */}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="relative z-10"
          >
            <Navbar />
            <Hero />
            
            <main>
              <Services />
              <Stats />
              <Platforms />
              <Team />
              <Contact />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;