import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar shadow-glass' : 'glass-navbar bg-opacity-50'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo - Positioned at the top left */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link 
            to="home" 
            smooth={true} 
            duration={1200}
            delay={100}
            offset={0}
            spy={true}
            className="cursor-pointer flex items-center"
          >
            <img 
              src="/images/bonzonate-logo.png" 
              alt="Bonzonate AI Logo" 
              className="h-10 mr-2 glow" 
            />
            <span className="text-xl font-semibold">
              Bonzonate<span className="text-purple-400 glow-text">AI</span>
            </span>
          </Link>
        </motion.div>
        
        {/* Navigation Links - Positioned at the top right */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="services" title="Services" />
          <NavLink to="platforms" title="Platforms" />
          <NavLink to="team" title="Team" />
          <NavLink to="contact" title="Contact" />
          
          <ThemeToggle />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={1200}
              delay={100}
              offset={0}
              spy={true}
              className="glass-button-highlight"
            >
              Get Started
            </Link>
          </motion.div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          
          <motion.button 
            className="p-2 rounded-full glass-border"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-card mx-4 mb-4 p-4 absolute top-full left-0 right-0 shadow-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-3">
            <MobileNavLink to="services" title="Services" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="platforms" title="Platforms" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="team" title="Team" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="contact" title="Contact" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div 
              className="pt-2 mt-2 border-t glass-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={1200}
                delay={100}
                offset={0}
                spy={true}
                className="glass-button-highlight w-full block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

const NavLink = ({ to, title }) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      smooth={true}
      duration={1200}
      delay={100}
      offset={0}
      spy={true}
      className="glass-nav-link hover:glow-text transition-all duration-300 px-3 py-2"
    >
      {title}
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, title, onClick }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2 }}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      smooth={true}
      duration={1200}
      delay={100}
      offset={0}
      spy={true}
      className="block p-3 hover:bg-glass-200/70 rounded-lg transition-all duration-300 glass-nav-link"
      onClick={onClick}
    >
      {title}
    </Link>
  </motion.div>
);

export default Navbar;