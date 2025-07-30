import React from 'react'

export default function HeroSection() {
  return (
    // Hero Section with Top Grid Background
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Animation Card (Geometric Shape) */}
      <div className="geometric-shape hidden lg:block absolute z-0" />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="hero-title text-white text-5xl md:text-7xl font-bold tracking-tight mt-12 leading-tight mb-6">
          Crafting digital experiences<br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
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
