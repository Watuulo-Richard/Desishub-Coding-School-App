import React from 'react'

export default function HeroSection() {
  return (
    //Hero Section
    <section
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden mt-3"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <span
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 border border-white border-opacity-20"
        >
          Design Studio
        </span>

        <h1
          className="hero-title text-white text-5xl md:text-7xl font-bold tracking-tight mt-12 leading-tight mb-6"
        >
          Crafting digital experiences<br />
          <span
            className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            through purposeful design
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          We believe in the power of simplicity. Clean code, purposeful
          solutions, and thoughtful interactions that drive real business
          results.
        </p>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Uganda's premier web development studio. From startups to enterprises,
          we deliver cutting-edge digital solutions that scale with your
          ambitions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
