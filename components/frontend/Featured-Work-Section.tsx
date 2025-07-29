import React from 'react';

export default function FeaturedWorkSection() {
  return (
    <>
      {/* <!-- Featured Work Section --> */}
      <section id="work" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            <span className="gradient-text">Selected Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real results for forward-thinking businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Project 1: Kyaja E-commerce --> */}
          <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i
                    data-lucide="shopping-cart"
                    className="w-8 h-8 text-black"
                  ></i>
                </div>
                <span className="text-gray-400 text-sm">Project Preview</span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  E-commerce
                </span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium ml-2">
                  2024
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-3">
                Kyaja E-commerce Platform
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Complete digital transformation resulting in 300% traffic
                increase and enhanced user experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  React
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                  Node.js
                </span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                  PostgreSQL
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-medium text-white">300%</div>
                  <div className="text-xs text-gray-400">Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">50%</div>
                  <div className="text-xs text-gray-400">Conversion Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>

              <button className="btn-secondary w-full py-2 rounded-lg text-sm font-medium">
                View Case Study
              </button>
            </div>
          </div>

          {/* <!-- Project 2: Agape Pharmacy POS --> */}
          <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i
                    data-lucide="heart-pulse"
                    className="w-8 h-8 text-black"
                  ></i>
                </div>
                <span className="text-gray-400 text-sm">Project Preview</span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Healthcare
                </span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium ml-2">
                  2024
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-3">
                Agape Pharmacy POS
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Mobile-first POS system that streamlined operations and improved
                transaction speed by 50%.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  React Native
                </span>
                <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">
                  Express
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                  MongoDB
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-medium text-white">50%</div>
                  <div className="text-xs text-gray-400">
                    Faster Transactions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">
                    Real-time
                  </div>
                  <div className="text-xs text-gray-400">Inventory</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">
                    Multi-location
                  </div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
              </div>

              <button className="btn-secondary w-full py-2 rounded-lg text-sm font-medium">
                View Case Study
              </button>
            </div>
          </div>

          {/* <!-- Project 3: Rwoma Ad Platform --> */}
          <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-purple-800 to-purple-900 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i data-lucide="megaphone" className="w-8 h-8 text-black"></i>
                </div>
                <span className="text-gray-400 text-sm">Project Preview</span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  AdTech
                </span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium ml-2">
                  2023
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-3">
                Rwoma Ad Platform
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Scalable advertising platform serving 1000+ active users with
                robust campaign management.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-black text-white px-2 py-1 rounded text-xs">
                  Next.js
                </span>
                <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs">
                  GraphQL
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                  Redis
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-medium text-white">1000+</div>
                  <div className="text-xs text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">
                    Real-time
                  </div>
                  <div className="text-xs text-gray-400">Analytics</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-white">Advanced</div>
                  <div className="text-xs text-gray-400">Targeting</div>
                </div>
              </div>

              <button className="btn-secondary w-full py-2 rounded-lg text-sm font-medium">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
