import React from 'react';

export default function WhyChooseUsSection() {
  return (
    <>
      {/* <!-- Why Choose Us Section --> */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            <span className="gradient-text">Why Partner With Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference of working with Uganda's premier
            development studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Proven Excellence --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover group">
            <div className="flex items-start space-x-6">
              <div className="text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i data-lucide="award" className="w-8 h-8"></i>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">
                    Proven Excellence
                  </h3>
                  <span className="text-sm text-gray-400 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                    100+ Projects
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  100+ successful projects across diverse industries with 95%
                  client satisfaction rate.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Full-Stack Mastery --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover group">
            <div className="flex items-start space-x-6">
              <div className="text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i data-lucide="layers" className="w-8 h-8"></i>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">
                    Full-Stack Mastery
                  </h3>
                  <span className="text-sm text-gray-400 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                    Full-Stack
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  End-to-end expertise from design to deployment, mobile to
                  enterprise systems.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Transparent Process --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover group">
            <div className="flex items-start space-x-6">
              <div className="text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i data-lucide="eye" className="w-8 h-8"></i>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">
                    Transparent Process
                  </h3>
                  <span className="text-sm text-gray-400 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                    100% Transparent
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Clear communication, detailed progress reports, and honest
                  timelines throughout.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Local Expertise --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover group">
            <div className="flex items-start space-x-6">
              <div className="text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i data-lucide="map-pin" className="w-8 h-8"></i>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">
                    Local Expertise
                  </h3>
                  <span className="text-sm text-gray-400 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                    Uganda Based
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Deep understanding of the Ugandan market combined with
                  international best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Stats Section --> */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                100+
              </div>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                95%
              </div>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                5+
              </div>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                24/7
              </div>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
