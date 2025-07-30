import React from 'react';

export default function BlogSection() {
  return (
    <>
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from
            the world of technology and development
          </p>
        </div>

        {/* <!-- Featured Article --> */}
        <div className="mb-16">
          <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="md:flex">
              {/* <!-- Image --> */}
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <i
                      data-lucide="code-2"
                      className="w-16 h-16 text-blue-400 mx-auto mb-4"
                    ></i>
                    <div className="text-white text-lg font-medium">
                      Featured Article
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    FEATURED
                  </span>
                </div>
              </div>

              {/* <!-- Content --> */}
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="text-blue-400 text-sm font-medium">
                    Web Development
                  </span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">
                    December 15, 2024
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  The Future of Web Development: React 19 and Beyond
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Explore the latest features in React 19, including Server
                  Components, improved hydration, and new hooks that are
                  revolutionizing how we build modern web applications. Learn
                  how these changes will impact your development workflow.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      AM
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        Alex Mukisa
                      </div>
                      <div className="text-gray-400 text-xs">
                        Lead Developer
                      </div>
                    </div>
                  </div>

                  <button className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Article Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Article 1 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center relative">
              <i
                data-lucide="smartphone"
                className="w-12 h-12 text-green-400"
              ></i>
              <div className="absolute top-3 right-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  MOBILE
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-green-400 text-sm font-medium">
                  Mobile Development
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Dec 10, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                Building Cross-Platform Apps with React Native
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                A comprehensive guide to creating mobile applications that work
                seamlessly on both iOS and Android platforms using React Native.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    DS
                  </div>
                  <span className="text-gray-400 text-sm">David Ssemakula</span>
                </div>
                <span className="text-gray-500 text-xs">5 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Article 2 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
              <i
                data-lucide="palette"
                className="w-12 h-12 text-purple-400"
              ></i>
              <div className="absolute top-3 right-3">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  DESIGN
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-purple-400 text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Dec 8, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Design Systems That Scale: A Practical Approach
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Learn how to create and maintain design systems that grow with
                your product and team, ensuring consistency across all
                touchpoints.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    SN
                  </div>
                  <span className="text-gray-400 text-sm">Sarah Namukasa</span>
                </div>
                <span className="text-gray-500 text-xs">7 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Article 3 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center relative">
              <i data-lucide="cloud" className="w-12 h-12 text-orange-400"></i>
              <div className="absolute top-3 right-3">
                <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  DEVOPS
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-orange-400 text-sm font-medium">
                  DevOps
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Dec 5, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Kubernetes in Production: Lessons Learned
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Real-world insights from deploying and managing Kubernetes
                clusters in production environments, including common pitfalls
                and solutions.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    AM
                  </div>
                  <span className="text-gray-400 text-sm">Alex Mukisa</span>
                </div>
                <span className="text-gray-500 text-xs">10 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Article 4 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center relative">
              <i data-lucide="brain" className="w-12 h-12 text-indigo-400"></i>
              <div className="absolute top-3 right-3">
                <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  AI/ML
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-indigo-400 text-sm font-medium">
                  Artificial Intelligence
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Dec 3, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Getting Started with Machine Learning in JavaScript
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Explore TensorFlow.js and other ML libraries that bring machine
                learning capabilities directly to the browser and Node.js
                applications.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    AM
                  </div>
                  <span className="text-gray-400 text-sm">Alex Mukisa</span>
                </div>
                <span className="text-gray-500 text-xs">8 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Article 5 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center relative">
              <i data-lucide="database" className="w-12 h-12 text-teal-400"></i>
              <div className="absolute top-3 right-3">
                <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  DATABASE
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-teal-400 text-sm font-medium">
                  Backend Development
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Dec 1, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                PostgreSQL vs MongoDB: Choosing the Right Database
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                A detailed comparison of relational and document databases,
                helping you make informed decisions for your next project.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    AM
                  </div>
                  <span className="text-gray-400 text-sm">Alex Mukisa</span>
                </div>
                <span className="text-gray-500 text-xs">6 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Article 6 --> */}
          <article className="glass-effect rounded-2xl overflow-hidden card-hover group">
            <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center relative">
              <i
                data-lucide="trending-up"
                className="w-12 h-12 text-yellow-400"
              ></i>
              <div className="absolute top-3 right-3">
                <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  BUSINESS
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-yellow-400 text-sm font-medium">
                  Project Management
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Nov 28, 2024</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                Agile Project Management for Development Teams
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Best practices for implementing agile methodologies in software
                development projects, from sprint planning to retrospectives.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                    GN
                  </div>
                  <span className="text-gray-400 text-sm">Grace Nakato</span>
                </div>
                <span className="text-gray-500 text-xs">9 min read</span>
              </div>
            </div>
          </article>
        </div>

        {/* <!-- Newsletter Subscription --> */}
        <div className="mt-16">
          <div className="glass-effect rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

            <div className="relative">
              <h3 className="text-2xl font-light text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest articles,
                tutorials, and insights delivered directly to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
                <button className="btn-primary px-6 py-3 rounded-xl font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>

              <p className="text-gray-500 text-xs mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- View All Articles CTA --> */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3 rounded-xl font-medium">
            View All Articles
          </button>
        </div>
      </section>
    </>
  );
}
