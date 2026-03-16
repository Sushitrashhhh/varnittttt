'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import BirthdayMessage from '@/components/BirthdayMessage';
import PhotoGallery from '@/components/PhotoGallery';
import WishesWall from '@/components/WishesWall';
import Footer from '@/components/Footer';
import PersonalizedLetter from '@/components/PersonalizedLetter';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [letterUnlocked, setLetterUnlocked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  return (
    <>
      <ParticleBackground />
      {showLetter ? (
        <PersonalizedLetter 
          onClose={() => {
            setShowLetter(false);
            setLetterUnlocked(false);
          }} 
        />
      ) : (
        <main className="relative min-h-screen bg-[var(--color-charcoal)]">
          <Hero onOpenLetter={() => setShowLetter(true)} />
          <BirthdayMessage />
          <PhotoGallery />
          <WishesWall />
          <Footer />
        </main>
      )}
    </>
  );
}
