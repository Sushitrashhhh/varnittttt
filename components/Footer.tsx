'use client';

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy)] border-t-2 border-[var(--color-gold)] py-12 px-4">
      {/* Hogwarts Crest - Simplified */}
      <div className="flex justify-center mb-8">
        <svg
          width="80"
          height="100"
          viewBox="0 0 80 100"
          className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield shape */}
          <path
            d="M 40 10 L 25 25 L 25 50 Q 40 80 40 80 Q 40 80 55 50 L 55 25 Z"
            stroke="var(--color-gold)"
            strokeWidth="2"
            fill="var(--color-charcoal)"
          />

          {/* Gryffindor Lion Head (simplified) */}
          <circle cx="40" cy="40" r="8" fill="var(--color-ember)" />
          <circle cx="35" cy="35" r="3" fill="var(--color-gold)" />
          <circle cx="45" cy="35" r="3" fill="var(--color-gold)" />

          {/* Lightning bolt */}
          <path
            d="M 40 20 L 38 32 L 43 32 L 35 48 L 42 36 L 37 36 Z"
            fill="var(--color-gold)"
          />

          {/* Text */}
          <text
            x="40"
            y="75"
            textAnchor="middle"
            fill="var(--color-gold)"
            fontSize="10"
            fontFamily="serif"
            fontWeight="bold"
          >
            MAGIC
          </text>
        </svg>
      </div>

      {/* Main Text */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-cinzel font-bold text-[var(--color-gold)] text-glow">
          Mischief Managed
        </h3>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto" />

        <p className="text-[var(--color-ash)] font-garamond">
          Made with ✨ and a little magic
        </p>

        <p className="text-xs text-[var(--color-ash)] opacity-70 max-w-md mx-auto">
          A magical celebration created to honor an extraordinary person on their 21st birthday
        </p>
      </div>

      {/* Floating Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animation: `floatParticle ${8 + i * 2}s linear infinite`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-[var(--color-gold)] border-opacity-30 text-center text-xs text-[var(--color-ash)] opacity-60">
        <p>March 17, 2005 - Always remembered, forever magical</p>
      </div>
    </footer>
  );
}
