import React from 'react'

export default function ProcessSection() {
  return (
    // Process Section
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured approach to delivering exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center fade-in">
            <div
              className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20"
            >
              <span className="text-2xl font-light">01</span>
            </div>
            <h3 className="text-xl font-medium mb-4">Discovery</h3>
            <p className="text-gray-400 leading-relaxed">
              We start by understanding your business goals, target audience,
              and technical requirements through detailed consultation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center fade-in">
            <div
              className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20"
            >
              <span className="text-2xl font-light">02</span>
            </div>
            <h3 className="text-xl font-medium mb-4">Strategy</h3>
            <p className="text-gray-400 leading-relaxed">
              We develop a comprehensive strategy including user experience
              design, technical architecture, and project timeline.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center fade-in">
            <div
              className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20"
            >
              <span className="text-2xl font-light">03</span>
            </div>
            <h3 className="text-xl font-medium mb-4">Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Our team builds your solution using modern technologies and best
              practices, with regular updates and feedback sessions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center fade-in">
            <div
              className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20"
            >
              <span className="text-2xl font-light">04</span>
            </div>
            <h3 className="text-xl font-medium mb-4">Launch</h3>
            <p className="text-gray-400 leading-relaxed">
              We deploy your solution and provide ongoing support to ensure
              optimal performance and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    <div id="process" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-3xl mb-6 md:text-4xl lg:text-5xl font-light tracking-tight"
        >
          <span className="gradient-text">How We Work</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          A refined approach to digital excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Discovery */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">01</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="search" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Discovery</h3>
          <p className="text-gray-400 leading-relaxed">
            Deep analysis of your business needs, target audience, and
            competitive landscape.
          </p>
        </div>

        {/* Strategy */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">02</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="lightbulb" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Strategy</h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting the optimal technical architecture and user experience
            strategy.
          </p>
        </div>

        {/* Design */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">03</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="palette" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Design</h3>
          <p className="text-gray-400 leading-relaxed">
            Creating intuitive interfaces that balance beauty with
            functionality.
          </p>
        </div>

       {/* Development */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">04</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="code" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Development</h3>
          <p className="text-gray-400 leading-relaxed">
            Building robust, scalable solutions using modern technologies.
          </p>
        </div>

        {/* Launch */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">05</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="rocket" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Launch</h3>
          <p className="text-gray-400 leading-relaxed">
            Seamless deployment with comprehensive testing and optimization.
          </p>
        </div>

        {/* Growth */}
        <div className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4"
            >
              <span className="text-black font-bold">06</span>
            </div>
            <div
              className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
            >
              <i data-lucide="trending-up" className="w-4 h-4 text-white"></i>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Growth</h3>
          <p className="text-gray-400 leading-relaxed">
            Ongoing support, maintenance, and performance enhancement.
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}
