'use client';

import { useEffect } from 'react';

export default function ParticleBackground() {
  useEffect(() => {
    const container = document.body;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle animate-float-particle';
      
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 8 + 12;
      const tx = (Math.random() - 0.5) * 200;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, var(--color-gold) 0%, var(--color-ember) 100%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        bottom: 0;
        animation-duration: ${duration}s;
        --tx: ${tx}px;
        box-shadow: 0 0 ${size * 2}px var(--color-gold);
      `;
      
      container.appendChild(particle);
      
      setTimeout(() => particle.remove(), duration * 1000);
    };
    
    const interval = setInterval(createParticle, 200);
    
    // Create initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 100);
    }
    
    return () => clearInterval(interval);
  }, []);
  
  return null;
}
