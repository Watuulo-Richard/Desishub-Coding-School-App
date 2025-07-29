import React from 'react'

export default function FeaturesSection() {
  return (
    <>
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light tracking-tight mb-4 gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400 text-green-600"
          >
            Advanced Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge features that power modern digital solutions
          </p>
        </div>

        {/* <!-- Feature Row 1 --> */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* <!-- 1/3 Column --> */}
          <div className="w-full md:w-1/3 enhanced-glass rounded-2xl p-8">
            <div className="icon-circle mb-4">
              <i className="fas fa-brain text-blue-400"></i>
            </div>
            <h3 className="text-2xl text-white mb-3 font-display">
              AI-Powered Development
            </h3>
            <p className="text-white/70">
              Leverage machine learning and AI to create intelligent
              applications that adapt and improve over time.
            </p>
          </div>

          {/* <!-- 2/3 Column --> */}
          <div
            className="w-full md:w-2/3 enhanced-glass rounded-2xl p-8 flex flex-col md:flex-row items-center"
          >
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl text-white mb-3 font-display">
                Multi-Platform Solutions
              </h3>
              <p className="text-white/70">
                Build once, deploy everywhere. Our solutions work seamlessly
                across web, mobile, and desktop platforms.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-check text-blue-400 mr-3 w-4"></i>
                  <span>Cross-platform compatibility</span>
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-check text-blue-400 mr-3 w-4"></i>
                  <span>Progressive web applications</span>
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-check text-blue-400 mr-3 w-4"></i>
                  <span>Native mobile experiences</span>
                </li>
              </ul>
            </div>
            <div
              className="w-full md:w-64 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center"
            >
              <i className="fas fa-diagram-project text-5xl text-white/40"></i>
            </div>
          </div>
        </div>

        {/* <!-- Feature Row 2 --> */}
        <div className="flex flex-col md:flex-row-reverse gap-6 mb-6">
          {/* <!-- 1/3 Column --> */}
          <div className="w-full md:w-1/3 enhanced-glass rounded-2xl p-8">
            <div className="icon-circle mb-4">
              <i className="fas fa-shield-alt text-indigo-400"></i>
            </div>
            <h3 className="text-2xl text-white mb-3 font-display">
              Enterprise Security
            </h3>
            <p className="text-white/70">
              Bank-level security with end-to-end encryption, compliance
              certifications, and secure data handling.
            </p>
          </div>

          {/* <!-- 2/3 Column --> */}
          <div
            className="w-full md:w-2/3 enhanced-glass rounded-2xl p-8 flex flex-col md:flex-row items-center"
          >
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl text-white mb-3 font-display">
                Custom Integrations
              </h3>
              <p className="text-white/70">
                Seamlessly connect with your existing tools and workflows
                through our comprehensive API ecosystem.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-xl font-[300] text-white">99.9%</div>
                  <div className="text-xs text-white/60 mt-1">Uptime</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-xl font-[300] text-white">50ms</div>
                  <div className="text-xs text-white/60 mt-1">Response Time</div>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-64 h-48 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-xl flex items-center justify-center"
            >
              <i className="fas fa-sliders text-5xl text-white/40"></i>
            </div>
          </div>
        </div>

        {/* <!-- Feature Row 3 --> */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* <!-- 1/3 Column --> */}
          <div className="w-full md:w-1/3 enhanced-glass rounded-2xl p-8">
            <div className="icon-circle mb-4">
              <i className="fas fa-bolt text-blue-400"></i>
            </div>
            <h3 className="text-2xl text-white mb-3 font-display">
              Lightning Fast
            </h3>
            <p className="text-white/70">
              High-performance infrastructure with global CDN deployment for
              minimal latency and maximum speed.
            </p>
          </div>

          {/* <!-- 2/3 Column --> */}
          <div className="w-full md:w-2/3 enhanced-glass rounded-2xl p-8">
            <h3 className="text-2xl text-white mb-3 font-display">
              Technology Stack
            </h3>
            <p className="text-white/70 mb-6">
              We use the latest technologies and frameworks to build robust,
              scalable solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center"
              >
                <i className="fab fa-react text-2xl text-white/70 mb-2"></i>
                <span className="text-sm text-white/60">React</span>
              </div>
              <div
                className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center"
              >
                <i className="fab fa-node-js text-2xl text-white/70 mb-2"></i>
                <span className="text-sm text-white/60">Node.js</span>
              </div>
              <div
                className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center"
              >
                <i className="fab fa-python text-2xl text-white/70 mb-2"></i>
                <span className="text-sm text-white/60">Python</span>
              </div>
              <div
                className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center"
              >
                <i className="fas fa-cloud text-2xl text-white/70 mb-2"></i>
                <span className="text-sm text-white/60">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
