import React from 'react'

export default function TeamSection() {
  return (
    // Team Section
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          <span className="gradient-text">Meet Our Team</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Passionate professionals dedicated to bringing your digital vision to
          life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <!-- Alex Mukisa --> */}
        <div
          className="glass-effect rounded-2xl p-8 card-hover group text-center relative overflow-hidden"
        >
          {/* <!-- Background gradient --> */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          {/* <!-- Profile Image --> */}
          <div className="relative mb-6">
            <div
              className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              AM
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Alex Mukisa</h3>
          <p className="text-blue-400 text-sm font-medium mb-4">
            Lead Developer & Founder
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Full-stack developer with 8+ years of experience building scalable
            web applications. Passionate about clean code and innovative
            solutions.
          </p>

          {/* <!-- Skills --> */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span
              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >React</span>
            <span
              className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
              >Node.js</span>
            <span
              className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >TypeScript</span>
            <span
              className="px-3 py-1 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
              >AWS</span>
          </div>

          {/* <!-- Social Links --> */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="github"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="linkedin"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="twitter"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
          </div>
        </div>

        {/* <!-- Sarah Namukasa --> */}
        <div
          className="glass-effect rounded-2xl p-8 card-hover group text-center relative overflow-hidden"
        >
          {/* <!-- Background gradient --> */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          {/* <!-- Profile Image --> */}
          <div className="relative mb-6">
            <div
              className="w-32 h-32 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              SN
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Sarah Namukasa</h3>
          <p className="text-pink-400 text-sm font-medium mb-4">
            Senior UI/UX Designer
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Creative designer with a passion for user-centered design.
            Specializes in creating intuitive interfaces and seamless user
            experiences.
          </p>

          {/* <!-- Skills --> */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span
              className="px-3 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30"
              >Figma</span>
            <span
              className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >Adobe XD</span>
            <span
              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >Prototyping</span>
            <span
              className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
              >User Research</span>
          </div>

          {/* <!-- Social Links --> */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="dribbble"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="linkedin"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="instagram"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
          </div>
        </div>

        {/* <!-- David Ssemakula --> */}
        <div
          className="glass-effect rounded-2xl p-8 card-hover group text-center relative overflow-hidden"
        >
          {/* <!-- Background gradient --> */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          {/* <!-- Profile Image --> */}
          <div className="relative mb-6">
            <div
              className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              DS
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">David Ssemakula</h3>
          <p className="text-green-400 text-sm font-medium mb-4">
            Mobile App Developer
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            React Native specialist with expertise in cross-platform mobile
            development. Creates high-performance apps for iOS and Android.
          </p>

          {/* <!-- Skills --> */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span
              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >React Native</span>
            <span
              className="px-3 py-1 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
              >Swift</span>
            <span
              className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
              >Kotlin</span>
            <span
              className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30"
              >Firebase</span>
          </div>

          {/* <!-- Social Links --> */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="github"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="linkedin"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="smartphone"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
          </div>
        </div>

        {/* <!-- Grace Nakato --> */}
        <div
          className="glass-effect rounded-2xl p-8 card-hover group text-center relative overflow-hidden"
        >
          {/* <!-- Background gradient --> */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          {/* <!-- Profile Image --> */}
          <div className="relative mb-6">
            <div
              className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              GN
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Grace Nakato</h3>
          <p className="text-indigo-400 text-sm font-medium mb-4">
            Project Manager
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Experienced project manager ensuring seamless delivery of complex
            projects. Expert in agile methodologies and client communication.
          </p>

          {/* <!-- Skills --> */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span
              className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
              >Agile</span>
            <span
              className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >Scrum</span>
            <span
              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >Planning</span>
            <span
              className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
              >Leadership</span>
          </div>

          {/* <!-- Social Links --> */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="briefcase"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="linkedin"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all duration-300 group/social"
            >
              <i
                data-lucide="mail"
                className="w-5 h-5 group-hover/social:scale-110 transition-transform"
              ></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Team Stats --> */}
      <div className="mt-16">
        <div className="glass-effect rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div
                className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                50+
              </div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                5+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                98%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                24/7
              </div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Join Team CTA --> */}
      <div className="mt-16 text-center">
        <div
          className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* <!-- Background animation --> */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"
          ></div>

          <div className="relative">
            <h3 className="text-2xl font-light text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals who share our
              passion for creating exceptional digital experiences. Join us in
              building the future of technology in Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-full font-medium">
                View Open Positions
              </button>
              <button className="btn-secondary px-6 py-3 rounded-full font-medium">
                Send Your CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
