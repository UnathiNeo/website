import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('bonzonateTheme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
      document.body.classList.toggle('theme-light', savedTheme !== 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDark);
      document.body.classList.toggle('theme-light', !prefersDark);
    }
  }, []);

  // Theme toggling function
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('theme-light', newTheme);
    localStorage.setItem('bonzonateTheme', newTheme ? 'light' : 'dark');
  };

  return (
    <motion.div
      className={`theme-toggle ${!isDarkTheme ? 'light' : ''}`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      role="button"
      aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
    >
      <span role="img" aria-label="Moon">🌙</span>
      <span role="img" aria-label="Sun">☀️</span>
    </motion.div>
  );
};

export default ThemeToggle;