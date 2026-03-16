'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  onOpenLetter: () => void;
}

export default function Hero({ onOpenLetter }: HeroProps) {
  useEffect(() => {
    // Lightning flash effect starts on render via inline styles
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-navy)] to-[var(--color-charcoal)]">
      {/* Lightning Flash Effect */}
      <div 
        id="lightning-flash"
        className="absolute inset-0 pointer-events-none"
        style={{
          animation: 'lightningFlash 3s ease-out',
        }}
      />

      {/* Castle Silhouette SVG */}
      <svg 
        className="absolute top-12 w-96 h-96 opacity-20 drop-shadow-2xl"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Castle silhouette"
      >
        <path
          d="M80 300 L80 150 L120 120 L120 80 L160 70 L160 120 L200 100 L200 120 L240 80 L240 120 L280 70 L280 120 L320 150 L320 300 M100 180 L110 180 L110 200 L100 200 Z M190 150 L210 150 L210 180 L190 180 Z M140 220 L160 220 L160 250 L140 250 Z M240 220 L260 220 L260 250 L240 250 Z"
          stroke="var(--color-gold)"
          strokeWidth="2"
          fill="var(--color-charcoal)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Tagline */}
        <p className="text-xs sm:text-sm tracking-widest uppercase mb-4 text-[var(--color-gold)] animate-slide-up">
          THE HOGWARTS OWLERY ANNOUNCES
        </p>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl font-cinzel font-bold mb-2 animate-slide-up text-glow" style={{ animationDelay: '0.2s' }}>
          <span className="block">Varnittttt's</span>
          <span className="block text-[var(--color-gold)]">Birthday</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl italic text-[var(--color-ash)] mb-12 animate-slide-up font-garamond" style={{ animationDelay: '0.4s' }}>
          It's a magical day in the wizarding world
        </p>

        {/* Age Display */}
        <div className="mb-12 animate-fade-scale">
          <p className="text-6xl sm:text-8xl font-cinzel font-bold text-[var(--color-ember)] drop-shadow-lg">
            21
          </p>
          <p className="text-[var(--color-gold)] text-sm tracking-widest uppercase mt-2">
            Years of Magic
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenLetter}
          className="relative px-8 py-4 text-lg font-cinzel font-bold text-[var(--color-charcoal)] bg-[var(--color-gold)] rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-gold)] hover:scale-105 active:scale-95 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          ✨ Open Your Letter ✨
        </button>

        {/* Decorative Text */}
        <div className="mt-16 space-y-2 text-[var(--color-gold)] text-opacity-60">
          <p className="text-xs">✦ A letter sealed by magic ✦</p>
        </div>
      </div>

      {/* Floating Runes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-drift"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          >
            ⚡
          </div>
        ))}
      </div>
    </section>
  );
}
