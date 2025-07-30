import React from 'react';

export default function CodingSectionSection() {
  return (
    <>
      {/* <!-- Coding School Section --> */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            <span className="gradient-text">DesishHub Coding School</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Master cutting-edge programming technologies with Uganda's premier
            coding bootcamp. From fundamentals to advanced frameworks, we're
            building the next generation of developers.
          </p>
        </div>

        {/* <!-- Hero Stats --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <div className="text-3xl font-light text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm">Students Trained</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <div className="text-3xl font-light text-white mb-2">95%</div>
            <div className="text-gray-400 text-sm">Job Placement Rate</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <div className="text-3xl font-light text-white mb-2">12</div>
            <div className="text-gray-400 text-sm">Week Programs</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center card-hover">
            <div className="text-3xl font-light text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Mentor Support</div>
          </div>
        </div>

        {/* <!-- Programs Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* <!-- Full-Stack Web Development --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                MOST POPULAR
              </span>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mr-4">
                <i data-lucide="code" className="w-8 h-8 text-blue-400"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Full-Stack Web Development
                </h3>
                <p className="text-gray-400 text-sm">
                  12 weeks • Beginner to Advanced
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Master modern web development with React, Node.js, and databases.
              Build real-world projects and deploy to production. Perfect for
              career changers and beginners.
            </p>

            {/* <!-- Curriculum Highlights --> */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">
                What You'll Learn:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  HTML, CSS, JavaScript
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  React & Next.js
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  Node.js & Express
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  MongoDB & PostgreSQL
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  Git & Deployment
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-blue-400 mr-2"
                  ></i>
                  Portfolio Projects
                </div>
              </div>
            </div>

            {/* <!-- Price and CTA --> */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-light text-white">
                  UGX 2,500,000
                </div>
                <div className="text-gray-400 text-sm">
                  Payment plans available
                </div>
              </div>
              <button className="btn-primary px-6 py-3 rounded-xl font-medium">
                Enroll Now
              </button>
            </div>
          </div>

          {/* <!-- Mobile App Development --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                NEW
              </span>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mr-4">
                <i
                  data-lucide="smartphone"
                  className="w-8 h-8 text-green-400"
                ></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Mobile App Development
                </h3>
                <p className="text-gray-400 text-sm">
                  10 weeks • Intermediate Level
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Build cross-platform mobile apps with React Native and Flutter.
              Learn to publish apps to App Store and Google Play. Ideal for web
              developers expanding to mobile.
            </p>

            {/* <!-- Curriculum Highlights --> */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">
                What You'll Learn:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  React Native
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  Flutter & Dart
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  Native Features
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  App Store Publishing
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  Push Notifications
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-green-400 mr-2"
                  ></i>
                  Real-time Features
                </div>
              </div>
            </div>

            {/* <!-- Price and CTA --> */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-light text-white">
                  UGX 2,000,000
                </div>
                <div className="text-gray-400 text-sm">
                  Payment plans available
                </div>
              </div>
              <button className="btn-secondary px-6 py-3 rounded-xl font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* <!-- Data Science & AI --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                ADVANCED
              </span>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                <i data-lucide="brain" className="w-8 h-8 text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Data Science & AI
                </h3>
                <p className="text-gray-400 text-sm">
                  16 weeks • Advanced Level
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Dive into machine learning, data analysis, and AI development.
              Work with Python, TensorFlow, and real datasets. Perfect for STEM
              graduates and data enthusiasts.
            </p>

            {/* <!-- Curriculum Highlights --> */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">
                What You'll Learn:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  Python & Pandas
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  Machine Learning
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  TensorFlow & PyTorch
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  Data Visualization
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  Deep Learning
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-purple-400 mr-2"
                  ></i>
                  AI Model Deployment
                </div>
              </div>
            </div>

            {/* <!-- Price and CTA --> */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-light text-white">
                  UGX 3,500,000
                </div>
                <div className="text-gray-400 text-sm">
                  Payment plans available
                </div>
              </div>
              <button className="btn-secondary px-6 py-3 rounded-xl font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* <!-- DevOps & Cloud --> */}
          <div className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                IN-DEMAND
              </span>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mr-4">
                <i data-lucide="cloud" className="w-8 h-8 text-orange-400"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  DevOps & Cloud Engineering
                </h3>
                <p className="text-gray-400 text-sm">
                  14 weeks • Intermediate to Advanced
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Master cloud infrastructure, CI/CD pipelines, and
              containerization. Learn AWS, Docker, and Kubernetes. High-demand
              skills with excellent career prospects.
            </p>

            {/* <!-- Curriculum Highlights --> */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">
                What You'll Learn:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  AWS & Azure
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  Docker & Kubernetes
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  CI/CD Pipelines
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  Infrastructure as Code
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  Monitoring & Logging
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <i
                    data-lucide="check"
                    className="w-4 h-4 text-orange-400 mr-2"
                  ></i>
                  Security Best Practices
                </div>
              </div>
            </div>

            {/* <!-- Price and CTA --> */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-light text-white">
                  UGX 3,000,000
                </div>
                <div className="text-gray-400 text-sm">
                  Payment plans available
                </div>
              </div>
              <button className="btn-secondary px-6 py-3 rounded-xl font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Why Choose Our School --> */}
        <div className="glass-effect rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-light text-white mb-8 text-center">
            Why Choose DesishHub Coding School?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i data-lucide="users" className="w-8 h-8 text-blue-400"></i>
              </div>
              <h4 className="text-white font-medium mb-2">
                Expert Instructors
              </h4>
              <p className="text-gray-400 text-sm">
                Learn from industry professionals with years of real-world
                experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i
                  data-lucide="briefcase"
                  className="w-8 h-8 text-green-400"
                ></i>
              </div>
              <h4 className="text-white font-medium mb-2">
                Job Placement Support
              </h4>
              <p className="text-gray-400 text-sm">
                Career guidance, interview prep, and connections to top tech
                companies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i data-lucide="laptop" className="w-8 h-8 text-purple-400"></i>
              </div>
              <h4 className="text-white font-medium mb-2">Hands-on Projects</h4>
              <p className="text-gray-400 text-sm">
                Build real applications and create an impressive portfolio
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Enrollment CTA --> */}
        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

            <div className="relative">
              <h3 className="text-3xl font-light text-white mb-4">
                Ready to Start Your Coding Journey?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Join hundreds of successful graduates who've transformed their
                careers with our intensive programs. Next cohort starts in 2
                weeks!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-4 rounded-xl font-medium text-lg">
                  Apply Now
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl font-medium text-lg">
                  Schedule a Call
                </button>
              </div>

              <div className="mt-6 text-gray-400 text-sm">
                <p>
                  💡 Free coding workshop every Saturday • 📞 Call +256 700 123
                  456 for more info
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
