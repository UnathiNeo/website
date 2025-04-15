import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
});

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check if user has a preferred theme stored
    const savedTheme = localStorage.getItem('bonzonateTheme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to body element
    document.body.classList.toggle('theme-light', !isDarkTheme);
    // Save theme preference
    localStorage.setItem('bonzonateTheme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Provide the theme context to its children
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;