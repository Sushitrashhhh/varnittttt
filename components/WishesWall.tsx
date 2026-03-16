'use client';

import { useState, useEffect, useRef } from 'react';

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const defaultWishes: Wish[] = [
    {
      id: '1',
      name: 'The Marauders',
      message: 'Mischief managed. Another year older, another year wiser! Here\'s to adventure and friendship. 🗡️',
      timestamp: 0,
    },
    {
      id: '2',
      name: 'Dumbledore\'s Army',
      message: 'You\'re a wizard, and today we celebrate the incredible wizard you\'ve become! May your year be filled with courage and magic. ⚡',
      timestamp: 0,
    },
    {
      id: '3',
      name: 'Moony, Wormtail, Padfoot & Prongs',
      message: 'Solemnly sworn you\'ll have an absolutely amazing birthday! Here\'s to 21 years of being extraordinary. 🌙',
      timestamp: 0,
    },
    {
      id: '4',
      name: 'The Order of the Phoenix',
      message: 'In unity, there is strength. Happy birthday to someone who embodies the true spirit of friendship and loyalty. Rise and shine! 🔥',
      timestamp: 0,
    },
  ];

  // Load wishes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wishes');
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      setWishes(defaultWishes);
    }

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

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem('wishes', JSON.stringify(wishes));
    }
  }, [wishes]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-charcoal)] opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-cinzel font-bold text-[var(--color-gold)] mb-2 flex items-center justify-center gap-3">
            <span>🪶</span>
            Owls Have Arrived
            <span>🪶</span>
          </h2>
          <p className="text-[var(--color-ash)] italic mt-4">Wishes from friends near and far</p>
        </div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {wishes.map((wish, index) => (
            <div
              key={wish.id}
              className="bg-[var(--color-ash)] text-[var(--color-charcoal)] rounded-lg p-6 shadow-lg transform hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-scale"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <p className="font-cinzel font-bold text-[var(--color-ember)] text-lg">
                  — {wish.name}
                </p>
                {wish.timestamp > 0 && (
                  <span className="text-xs text-[var(--color-navy)] opacity-60">
                    {new Date(wish.timestamp).toLocaleDateString()}
                  </span>
                )}
              </div>
              <p className="font-garamond text-base leading-relaxed text-[var(--color-navy)]">
                {wish.message}
              </p>
            </div>
          ))}
        </div>

        {/* Birthday Letter Section */}
        <div className="mt-16 pt-12 border-t-2 border-[var(--color-gold)] border-opacity-30">
          <h3 className="text-2xl font-cinzel font-bold text-[var(--color-gold)] mb-8 text-center flex items-center justify-center gap-3">
            <span>✨</span>
            A Special Letter
            <span>✨</span>
          </h3>

          <div className="bg-[var(--color-ash)] bg-opacity-90 rounded-lg p-8 sm:p-12 shadow-2xl relative overflow-hidden text-[var(--color-charcoal)]">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-ember)]" />
            
            <div className="relative z-10 space-y-6 font-garamond text-lg leading-relaxed">
              <p className="text-xl font-bold text-[var(--color-navy)]">
                Dearest Varnittttt,
              </p>
              
              <p>
                Happy 21st Birthday! On this magically brilliant day, I wanted to take a moment to celebrate you. You bring so much joy, laughter, and light into the lives of everyone around you. 
              </p>
              
              <p>
                May this year bring you closer to all your dreams, fill your days with unforgettable adventures, and remind you of how truly extraordinary you are. Keep shining bright, stay true to yourself, and never stop casting your wonderful spell on the world! And yes thanks for being on our side. We really LOVE YOUUUUUUUUUUUUUUUU. We are so lucky to have you in our lives and we can\'t wait to see all the amazing things you will accomplish in the years to come.
              </p>
              
              <div className="pt-6 text-right font-bold text-[var(--color-ember)]">
                With all OUR LOBBBB AND MAGIC, TOO COMFORTABLE <3
                <br />
                <span className="font-cinzel text-xl mt-2 block">Always.</span>
              </div>
            </div>

            {/* Decorative subtle background corner overlay */}
            <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 pointer-events-none">
              🪄
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
