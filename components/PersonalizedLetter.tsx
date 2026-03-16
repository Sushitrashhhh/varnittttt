'use client';

import { useState, useEffect } from 'react';

interface PersonalizedLetterProps {
  onClose: () => void;
}

export default function PersonalizedLetter({ onClose }: PersonalizedLetterProps) {
  const [step, setStep] = useState<'input' | 'letter'>('input');
  const [dateInput, setDateInput] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctDOB = '17032005'; // 17/3/2005 without slashes

  const validateAndUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Remove any non-numeric characters
    const cleanInput = dateInput.replace(/\D/g, '');

    if (cleanInput === correctDOB) {
      setIsUnlocked(true);
      setTimeout(() => setStep('letter'), 300);
    } else {
      setError('❌ The date doesn\'t match the magic. Try again, wizard!');
      setDateInput('');
    }
  };

  const letterContent = `Dear Varnittttt,

By now, you've unlocked this letter using the most sacred date in the wizarding world - your birthday. What a magnificent day it is to celebrate you!

At 21 years old, you've grown into a true wizard - skilled, wise, and full of that unmistakable magic that makes you extraordinary. Just like Harry facing his greatest challenges, you've shown the courage to face your own, and the wisdom to grow from every moment.

This year, like all the magical years before it, is yours to command. May it be filled with:
✨ Adventures that take your breath away
✨ Friends who stand by your side through everything
✨ Moments of pure joy and laughter
✨ Dreams that you have the power to make reality
✨ Magic in every single day

You are surrounded by people who believe in you - your friends, your family, everyone who cares. The future is unwritten, full of infinite possibility, and you have the power to shape it into something truly spectacular.

So here's to you - to the wizard, the friend, the person who makes the world brighter simply by being in it.

Happy 21st Birthday, Varnittttt.

May the magic be ever in your favor.

With warmest wishes and highest expectations,
The Hogwarts Owlery

⚡ Mischief Managed ⚡`;

  if (step === 'letter' && isUnlocked) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-[var(--color-ash)] text-[var(--color-charcoal)] rounded-lg shadow-2xl max-w-2xl w-full my-8 animate-fade-scale">
          {/* Letter Header */}
<div className="bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-ember)] p-4 sm:p-6 text-center">
              <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold">A Letter from Hogwarts</h2>
              <p className="text-xs sm:text-sm mt-2 opacity-80">Sealed with Magic • March 17, 2005</p>
          </div>

          {/* Letter Content */}
            <div className="p-4 sm:p-8 md:p-12">
              <div className="font-garamond text-base sm:text-lg leading-relaxed whitespace-pre-line mb-8">
            </div>

            {/* Wax Seal */}
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Wax circle */}
                  <circle cx="50" cy="50" r="45" fill="var(--color-ember)" stroke="var(--color-gold)" strokeWidth="2" />

                  {/* Lion (Gryffindor) */}
                  <circle cx="50" cy="35" r="8" fill="var(--color-gold)" />
                  <path d="M 42 45 Q 50 55 58 45" stroke="var(--color-gold)" strokeWidth="2" fill="none" />
                  <circle cx="40" cy="50" r="3" fill="var(--color-gold)" />
                  <circle cx="60" cy="50" r="3" fill="var(--color-gold)" />

                  {/* Lightning bolt */}
                  <path d="M 50 20 L 48 35 L 54 35 L 45 65 L 52 45 L 46 45 Z" fill="var(--color-gold)" />

                  {/* Text around seal */}
                  <text x="50" y="95" textAnchor="middle" fill="var(--color-gold)" fontSize="8" fontFamily="serif">
                    21 • MAGIC • 2026
                  </text>
                </svg>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[var(--color-charcoal)] text-[var(--color-gold)] font-cinzel font-bold rounded-lg hover:bg-[var(--color-stone)] transition-all duration-300 hover:shadow-lg"
              >
                Close Letter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-[var(--color-ash)] text-[var(--color-charcoal)] rounded-lg shadow-2xl max-w-md w-full animate-fade-scale">
        {/* Header */}
          <div className="bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-ember)] p-4 sm:p-6 text-center">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold">🔐 Unlock Your Letter</h2>
            <p className="text-xs sm:text-sm mt-2 opacity-80">Enter your date of birth to reveal the magic</p>

        {/* Content */}
        <div className="p-8">
          <form onSubmit={validateAndUnlock} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[var(--color-charcoal)]">
                Date of Birth (DD/MM/YYYY)
              </label>
              <input
                type="text"
                placeholder="17/03/2005"
                value={dateInput}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length >= 2 && value.length <= 4) {
                    value = value.slice(0, 2) + '/' + value.slice(2);
                  } else if (value.length > 4) {
                    value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
                  }
                  setDateInput(value);
                  setError('');
                }}
                maxLength="10"
                className="w-full px-4 py-2 bg-white text-[var(--color-charcoal)] border-2 border-[var(--color-gold)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-ember)] text-center text-lg font-semibold"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">Format: DD/MM/YYYY</p>
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--color-gold)] text-[var(--color-charcoal)] font-cinzel font-bold rounded-lg hover:bg-[var(--color-ember)] transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              ✨ Unlock with Magic ✨
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-6">
            Hint: The date you were born into this magical world
          </p>
        </div>
      </div>
    </div>
  );
}
