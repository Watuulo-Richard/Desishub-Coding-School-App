import React from 'react'

export default function AboutSection() {
  return (
    // About Section
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              About DesishHub
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fou 2020, DesishHub has grown to become Uganda's premier
              web development studio, serving clients from startups to
              enterprises across East Africa.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We bel the power of purposeful design and clean code. Our
              team combines technical expertise with deep understanding of local
              markets to deliver solutions that drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-light mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">4</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">30+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">15+</div>
                <div className="text-gray-400 text-sm">Team Members</div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 aspect-square flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"
              ></div>
              <div className="text-center z-10">
                <i className="fas fa-users text-6xl text-white/30 mb-4"></i>
                <h3 className="text-xl font-medium mb-2">Our Team</h3>
                <p className="text-gray-400">
                  Passionate developers, designers, and strategists working
                  together to create exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
