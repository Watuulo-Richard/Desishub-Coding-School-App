import React from 'react'

export default function ServicesSection() {
  function addLoadingAnimation() {
    const cards = document.querySelectorAll(".glass-effect");
  
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      card.classList.add("animate-fade-in");
    });
  }
  return (
    //Services Section
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            What We Create
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed with intention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="service-card glass-effect rounded-2xl p-8 ">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-code text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Web Development</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern, responsive websites built with Next.js and React.
              Performance-optimized and conversion-focused.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $2,500
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >React</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Next.js</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Responsive</span>
            </div>
          </div>

          {/* Mobile Applications */}
          <div className="service-card glass-effect rounded-2xl p-8 ">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-mobile-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Mobile Applications</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Native iOS and Android apps using React Native. Seamless user
              experiences across all devices.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $5,000
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >React Native</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >iOS</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Android</span>
            </div>
          </div>

          {/* Enterprise Systems */}
          <div className="service-card glass-effect rounded-2xl p-8">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-database text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Enterprise Systems</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Custom business solutions including management systems, e-commerce
              platforms, and integrations.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $10,000
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Custom</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Scalable</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Enterprise</span>
            </div>
          </div>

          {/* Web Design */}
          <div className="service-card glass-effect rounded-2xl p-8">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-paint-brush text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Web Design</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Minimalist, user-centered design that balances aesthetics with
              functionality and business goals.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $2,000
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >UI/UX</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Minimalist</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Figma</span>
            </div>
          </div>

          {/* Developer Training */}
          <div className="service-card glass-effect rounded-2xl p-8">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Developer Training</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Comprehensive coding education from fundamentals to full-stack
              mastery. Build Uganda's tech future.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $500
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Training</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Mentorship</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Full-Stack</span>
            </div>
          </div>

          {/* Consulting */}
          <div className="service-card glass-effect rounded-2xl p-8">
            <div
              className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6"
            >
              <i className="fas fa-lightbulb text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-medium mb-4">Technical Consulting</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Strategic technology guidance for digital transformation and
              architecture decisions.
            </p>
            <div className="text-2xl font-light text-white mb-4">
              Starting at $150/hr
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Strategy</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Architecture</span>
              <span
                className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                >Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
