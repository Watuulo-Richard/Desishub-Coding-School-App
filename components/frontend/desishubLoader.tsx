// components/DesishubLoader.tsx
"use client"; // Required for animations and useEffect

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

const DesishubLoader = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const colors = ['#6e45e2', '#88d3ce', '#ff7e5f'];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      
      // Random properties
      const size = Math.random() * 8 + 2;
      const posX = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = 'particle absolute rounded-full opacity-0';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.bottom = `-${size}px`;
      particle.style.animation = `particle-float ${duration}s ${delay}s infinite`;
      particle.style.background = color;
      
      particlesRef.current.appendChild(particle);
    }

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  const letters = [
    { char: 'D', color: '#6e45e2' },
    { char: 'E', color: '#7a52e6' },
    { char: 'S', color: '#865fea' },
    { char: 'I', color: '#926cee' },
    { char: 'S', color: '#9e79f2' },
    { char: 'H', color: '#aa86f6' },
    { char: 'U', color: '#b693fa' },
    { char: 'B', color: '#c2a0fe' },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="relative w-full h-screen flex justify-center items-center bg-[#0f0f13] overflow-hidden perspective-1000">
        {/* Particles container */}
        <div ref={particlesRef} className="absolute inset-0 -z-10" />
        
        {/* Letters */}
        <div className="flex gap-6 md:gap-8 transform-style-preserve-3d">
          {letters.map((letter, index) => (
            <div 
              key={index}
              className="relative font-bold text-4xl md:text-7xl uppercase animate-float"
              style={{
                color: letter.color,
                animationDelay: `${0.1 * (index + 1)}s`,
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 10px 20px rgba(110, 69, 226, 0.3)',
                transformStyle: 'preserve-3d',
              }}
            >
              {letter.char}
              <div 
                className="absolute bottom-[-15px] left-0 w-full h-2 rounded-full opacity-70 scale-x-80 blur-md animate-shadow-pulse"
                style={{
                  background: `linear-gradient(90deg, ${letter.color}, #88d3ce)`,
                  animationDelay: `${0.1 * (index + 1)}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotateX(0) scale(1);
            color: var(--primary);
            text-shadow: 0 10px 20px rgba(110, 69, 226, 0.3);
          }
          25% {
            transform: translateY(-20px) rotateX(15deg) scale(1.1);
            color: #ff7e5f;
            text-shadow: 0 15px 30px rgba(255, 126, 95, 0.5);
          }
          50% {
            transform: translateY(0) rotateX(0) scale(1);
            color: #88d3ce;
            text-shadow: 0 10px 20px rgba(136, 211, 206, 0.3);
          }
          75% {
            transform: translateY(-10px) rotateX(-10deg) scale(1.05);
            color: #ff7e5f;
            text-shadow: 0 12px 24px rgba(255, 126, 95, 0.4);
          }
        }
        
        @keyframes shadow-pulse {
          0%, 100% {
            transform: scaleX(0.8);
            opacity: 0.7;
            background: linear-gradient(90deg, var(--primary), #88d3ce);
          }
          25% {
            transform: scaleX(1.1);
            opacity: 0.9;
            background: linear-gradient(90deg, #ff7e5f, var(--primary));
          }
          50% {
            transform: scaleX(0.8);
            opacity: 0.7;
            background: linear-gradient(90deg, #88d3ce, #ff7e5f);
          }
          75% {
            transform: scaleX(1);
            opacity: 0.8;
            background: linear-gradient(90deg, var(--primary), #ff7e5f);
          }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        
        .animate-shadow-pulse {
          animation: shadow-pulse 3.5s ease-in-out infinite;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};

export default DesishubLoader;