'use client'
import React, { useEffect, useState } from 'react'

type CardNumber = 1 | 2 | 3 | 4;

const featureTexts: Record<CardNumber, string[]> = {
  1: [
    "Advanced machine learning algorithms",
    "Predictive analytics capabilities",
    "Real-time data processing",
    "Custom reporting dashboards",
  ],
  2: [
    "Automated resource allocation",
    "Performance monitoring tools",
    "Scalable infrastructure design",
    "Load balancing optimization",
  ],
  3: [
    "Workflow automation engine",
    "Integration with existing systems",
    "Custom business logic",
    "Process optimization tools",
  ],
  4: [
    "AI-powered analytics platform",
    "Real-time optimization engine",
    "Intelligent automation tools",
    "Comprehensive reporting suite",
  ],
};

export default function InteractiveServices() {
  const [currentServiceCard, setCurrentServiceCard] = useState<CardNumber>(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceCard(prev =>
        prev === 4 ? 1 : ((prev + 1) as CardNumber)
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="enhanced-glass rounded-3xl p-8 md:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 max-w-lg">
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="uppercase text-xs font-medium tracking-wide">
                  DesishHub Solutions
                </span>
              </div>
              <h2 className="text-4xl font-light tracking-tight mb-6 font-display">
                Technology Stack
              </h2>
              <p className="text-base text-gray-400 mb-8">
                Drag cards to explore our technology solutions and discover how
                we're building innovative platforms.
              </p>

              <div className="flex gap-3 mb-8" id="service-dots">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className={`service-dot w-2 h-2 rounded-full transition-all ${
                      currentServiceCard === num
                        ? "bg-white scale-125"
                        : "bg-gray-600 hover:bg-gray-300"
                    }`}
                    data-card={num}
                    onClick={() => setCurrentServiceCard(num as CardNumber)}
                  ></button>
                ))}
              </div>

              <div className="space-y-4 text-sm text-gray-400" id="service-features">
                {featureTexts[currentServiceCard].map((text, idx) => (
                  <div className="flex items-center gap-3" key={idx}>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`services-stack card-${currentServiceCard}-active`} id="services-container">
              <div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl">
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <i className="fas fa-leaf text-white text-xl"></i>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
                      Analytics
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display">
                    Data Intelligence
                  </h3>
                  <p className="text-gray-300 mb-6 flex-1">
                    Advanced analytics platform that processes complex data
                    streams and provides actionable insights through machine
                    learning algorithms.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">98% accuracy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Real-time processing</span>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 enhanced-glass rounded-lg text-white hover:bg-white/10 transition-colors">
                    Improve insights by 40%
                  </button>
                </div>
              </div>

              <div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl">
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <i className="fas fa-bolt text-white text-xl"></i>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
                      Performance
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display">
                    System Optimization
                  </h3>
                  <p className="text-gray-300 mb-6 flex-1">
                    Intelligent performance monitoring that automatically
                    optimizes system resources based on usage patterns and
                    demand forecasting.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">24/7 monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Auto-scaling</span>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 enhanced-glass rounded-lg text-white hover:bg-white/10 transition-colors">
                    Boost efficiency by 35%
                  </button>
                </div>
              </div>

              <div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl">
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <i className="fas fa-cogs text-white text-xl"></i>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
                      Automation
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display">
                    Process Automation
                  </h3>
                  <p className="text-gray-300 mb-6 flex-1">
                    Streamline workflows with intelligent automation. Connect
                    systems, automate tasks, and create efficient operational
                    processes.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Zero downtime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Smart workflows</span>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 enhanced-glass rounded-lg text-white hover:bg-white/10 transition-colors">
                    Reduce costs by 50%
                  </button>
                </div>
              </div>

              <div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl">
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
                      Reporting
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display">
                    Advanced Reporting
                  </h3>
                  <p className="text-gray-300 mb-6 flex-1">
                    Comprehensive reporting suite with customizable dashboards,
                    real-time metrics, and automated insights for data-driven
                    decisions.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Custom dashboards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-400">Real-time data</span>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 enhanced-glass rounded-lg text-white hover:bg-white/10 transition-colors">
                    Enhance visibility by 60%
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
