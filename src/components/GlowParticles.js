import React, { useRef, useEffect } from 'react';

const GlowParticles = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize particles when canvas is resized
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      
      for (let i = 0; i < 80; i++) {
        const size = Math.random() * 3 + 1;
        
        // Determine color
        const colorChance = Math.random();
        let color;
        
        if (colorChance < 0.7) {
          // Purple/blue glow
          color = '#8b5cf6';
        } else if (colorChance < 0.9) {
          // Pink/purple glow
          color = '#c026d3';
        } else {
          // Lighter blue
          color = '#4f46e5';
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          color: color,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 5
        );
        
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16)}`);
        gradient.addColorStop(1, `${particle.color}00`);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    // Initialize canvas
    resizeCanvas();
    drawParticles();
    
    // Handle resize events
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default GlowParticles;