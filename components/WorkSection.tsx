import React from 'react'

export default function WorkSection() {
  return (
    // Work Section
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of our recent projects and digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="group fade-in">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-6 group-hover:scale-105 transition-transform duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
              >
                <i className="fas fa-shopping-cart text-6xl text-white/30"></i>
              </div>
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">EcoFarm Marketplace</h3>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                E-commerce platform connecting Ugandan farmers directly with
                consumers. Built with Next.js and integrated payment systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Next.js</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >E-commerce</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Payment Integration</span>
              </div>
            </div>
          </div>

          {/* <!-- Project 2 */}
          <div className="group fade-in">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-6 group-hover:scale-105 transition-transform duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center"
              >
                <i className="fas fa-heartbeat text-6xl text-white/30"></i>
              </div>
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">HealthTrack Pro</h3>
                <span className="text-sm text-gray-400">2024</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive patient management system for medical centers with
                appointment booking and records management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >React</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Healthcare</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Management System</span>
              </div>
            </div>
          </div>

          {/* <!-- Project 3 */}
          <div className="group fade-in">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-6 group-hover:scale-105 transition-transform duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
              >
                <i className="fas fa-graduation-cap text-6xl text-white/30"></i>
              </div>
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">EduConnect Uganda</h3>
                <span className="text-sm text-gray-400">2023</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Learning management platform connecting students and educators
                across Uganda with interactive course delivery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Education</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >LMS</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Interactive</span>
              </div>
            </div>
          </div>

          {/* <!-- Project 4 */}
          <div className="group fade-in">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-6 group-hover:scale-105 transition-transform duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center"
              >
                <i className="fas fa-chart-line text-6xl text-white/30"></i>
              </div>
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">FinTech Dashboard</h3>
                <span className="text-sm text-gray-400">2023</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Real-time financial analytics dashboard for microfinance
                institutions with advanced reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >FinTech</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Analytics</span>
                <span
                  className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
