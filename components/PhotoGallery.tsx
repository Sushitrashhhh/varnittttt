'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
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

  const photos = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MtqBpPrNUfemRzkcuAdVo8SakpPUiY.png',
      caption: 'Squad Goals at Hogwarts',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZmmqUNRtnnU72xDQNOmt4GiZnBQN5r.png',
      caption: 'A Wizard\'s Portrait',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mspy2P8Zn7tYzlM6b7wVr8xf1O9516.png',
      caption: 'Magical Moments',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qQCYaQyXi9S5h1sW5RXZuB9oAyyOVq.png',
      caption: 'In the Wizarding World',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IYqBI46wOcnxle2POsbUBX5jd6m42r.png',
      caption: 'Reflections & Memories',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-navy)] opacity-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-cinzel font-bold text-[var(--color-gold)] mb-2">
            Memories from the Wizarding World
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-ember)] mx-auto mt-4 animate-pulse" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Frame Border */}
              <div className="absolute inset-0 border-8 border-[var(--color-stone)] rounded-lg bg-[var(--color-charcoal)] shadow-2xl overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden group-hover:grayscale-0 transition-all duration-300 grayscale group-hover:sepia-0 sepia-[30%]">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Golden Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-gold)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-charcoal)] to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[var(--color-gold)] font-garamond italic text-center">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Floating effect on hover */}
              <div className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_30px_var(--color-gold)] transition-shadow duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
