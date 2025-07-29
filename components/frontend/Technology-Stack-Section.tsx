import React from 'react';

export default function TechnologyStackSection() {
  return (
    <>
      {/* <!-- Technology Stack Section --> */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies that power modern digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <!-- Frontend Technologies --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <i data-lucide="monitor" className="w-6 h-6 text-blue-400"></i>
              </div>
              <h3 className="ml-4 text-2xl font-medium text-white">Frontend</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i data-lucide="code" className="w-4 h-4 text-blue-400"></i>
                  </div>
                  <span className="text-white font-medium">React</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Modern component-based UI library
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="layout"
                      className="w-4 h-4 text-green-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Next.js</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Full-stack React framework
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="palette"
                      className="w-4 h-4 text-purple-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Utility-first CSS framework
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="zap"
                      className="w-4 h-4 text-yellow-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">TypeScript</span>
                </div>
                <p className="text-gray-400 text-sm">Type-safe JavaScript</p>
              </div>
            </div>
          </div>

          {/* <!-- Mobile Technologies --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                <i
                  data-lucide="smartphone"
                  className="w-6 h-6 text-green-400"
                ></i>
              </div>
              <h3 className="ml-4 text-2xl font-medium text-white">Mobile</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="smartphone"
                      className="w-4 h-4 text-blue-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">React Native</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Cross-platform mobile apps
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="layers"
                      className="w-4 h-4 text-cyan-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Flutter</span>
                </div>
                <p className="text-gray-400 text-sm">Google's UI toolkit</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="tablet"
                      className="w-4 h-4 text-orange-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Swift</span>
                </div>
                <p className="text-gray-400 text-sm">Native iOS development</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="android"
                      className="w-4 h-4 text-green-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Kotlin</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Modern Android development
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Backend Technologies --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <i data-lucide="server" className="w-6 h-6 text-purple-400"></i>
              </div>
              <h3 className="ml-4 text-2xl font-medium text-white">Backend</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="hexagon"
                      className="w-4 h-4 text-green-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Node.js</span>
                </div>
                <p className="text-gray-400 text-sm">
                  JavaScript runtime environment
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="code-2"
                      className="w-4 h-4 text-blue-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Python</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Versatile programming language
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i data-lucide="gem" className="w-4 h-4 text-red-400"></i>
                  </div>
                  <span className="text-white font-medium">Ruby</span>
                </div>
                <p className="text-gray-400 text-sm">Elegant web development</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="coffee"
                      className="w-4 h-4 text-indigo-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Java</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade applications
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Cloud & DevOps --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center">
                <i data-lucide="cloud" className="w-6 h-6 text-orange-400"></i>
              </div>
              <h3 className="ml-4 text-2xl font-medium text-white">
                Cloud & DevOps
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="cloud"
                      className="w-4 h-4 text-orange-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">AWS</span>
                </div>
                <p className="text-gray-400 text-sm">Amazon Web Services</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i data-lucide="box" className="w-4 h-4 text-blue-400"></i>
                  </div>
                  <span className="text-white font-medium">Docker</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Containerization platform
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="git-branch"
                      className="w-4 h-4 text-purple-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">Kubernetes</span>
                </div>
                <p className="text-gray-400 text-sm">Container orchestration</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i
                      data-lucide="activity"
                      className="w-4 h-4 text-green-400"
                    ></i>
                  </div>
                  <span className="text-white font-medium">CI/CD</span>
                </div>
                <p className="text-gray-400 text-sm">Automated deployment</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Additional Tech Info --> */}
        <div className="mt-16">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-medium text-white mb-4">
              Always Evolving
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We continuously evaluate and adopt emerging technologies to ensure
              our solutions remain at the forefront of innovation. Our team
              stays current with the latest frameworks, tools, and best
              practices to deliver cutting-edge digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                GraphQL
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                WebAssembly
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                Serverless
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                Microservices
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                AI/ML
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                Blockchain
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
