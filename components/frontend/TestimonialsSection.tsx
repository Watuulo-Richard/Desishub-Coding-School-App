"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "DesishHub's custom POS solution transformed our operations. The team's expertise in both healthcare workflows and mobile development is exceptional.",
    name: "Sarah Nakimuli",
    position: "CEO, Agape Pharmacy",
    company: "Agape Pharmacy",
    avatar: "SN",
    project: "Healthcare POS System",
    rating: 5,
  },
  {
    quote:
      "Working with DesishHub was a game-changer for our e-commerce platform. They delivered a solution that exceeded our expectations and drove real business results.",
    name: "James Okello",
    position: "Founder, Kyaja",
    company: "Kyaja E-commerce",
    avatar: "JO",
    project: "E-commerce Platform",
    rating: 5,
  },
  {
    quote:
      "The advertising platform DesishHub built for us handles thousands of users seamlessly. Their technical expertise and attention to detail is outstanding.",
    name: "Mary Asiimwe",
    position: "CTO, Rwoma",
    company: "Rwoma Ad Platform",
    avatar: "MA",
    project: "AdTech Platform",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          <span className="gradient-text">Client Voices</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Hear from the businesses we've helped transform
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div
          className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden transition-opacity duration-500"
          id="testimonial-card"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white to-white transform scale-[0.80] rounded-full blur-3xl opacity-5"></div>

          <div className="relative z-10 mb-8">
            <i data-lucide="quote" className="w-12 h-12 text-white opacity-60"></i>
          </div>

          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed">
              "{t.quote}"
            </blockquote>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mb-8"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center mr-4 text-black font-semibold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.position}</p>
                  <p className="text-gray-500 text-xs">{t.company}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex space-x-1 mb-2 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{t.project}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 hover:w-8 hover:h-8 transition-all"/>
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full bg-white ${
                  current === index ? "" : "bg-opacity-30"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 hover:w-8 hover:h-8 transition-all"/>
          </button>
        </div>
      </div>
    </section>
  );
}
