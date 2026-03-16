'use client';

import { useEffect, useRef } from 'react';

export default function BirthdayMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-charcoal)] opacity-0"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(255, 215, 0, 0.05) 0px,
            rgba(255, 215, 0, 0.05) 2px,
            transparent 2px,
            transparent 4px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(255, 215, 0, 0.05) 0px,
            rgba(255, 215, 0, 0.05) 2px,
            transparent 2px,
            transparent 4px
          )
        `
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Parchment Card */}
        <div className="bg-[var(--color-ash)] text-[var(--color-charcoal)] rounded-lg shadow-2xl p-8 sm:p-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          {/* Content */}
          <p className="text-center font-garamond text-lg sm:text-2xl leading-relaxed mb-8">
            To a true wizard — may your <span className="font-bold text-[var(--color-ember)] text-3xl">21st</span> year be filled with more magic than even Dumbledore himself could conjure.
          </p>

          <p className="text-center font-garamond text-lg italic text-[var(--color-navy)] mb-8">
            Happy Birthday, Varnittttt!
          </p>

          {/* Wax Seal */}
          <div className="flex justify-end mt-8 mb-0 relative bottom-0 right-0">
            <div className="relative w-20 h-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-wobble"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wax circle */}
                <circle cx="50" cy="50" r="40" fill="var(--color-ember)" stroke="var(--color-gold)" strokeWidth="2" />

                {/* Decorative pattern */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" />

                {/* Lightning bolt */}
                <path d="M 50 25 L 45 45 L 55 45 L 42 70 L 55 50 L 45 50 Z" fill="var(--color-gold)" />

                {/* Text around seal */}
                <text x="50" y="90" textAnchor="middle" fill="var(--color-gold)" fontSize="7" fontFamily="serif" fontWeight="bold">
                  MAGIC
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Rune Symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-drift"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + i}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
