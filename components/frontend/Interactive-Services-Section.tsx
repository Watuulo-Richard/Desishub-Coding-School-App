'use client'
import React, { useEffect, useState } from 'react';

type ServiceCardNumber = 1 | 2 | 3 | 4;

interface ServiceCardData {
  id: ServiceCardNumber;
  icon: string; // Font Awesome className, e.g., 'fa-leaf'
  category: string;
  title: string;
  description: string;
  metrics: string[];
  buttonText: string;
  features: string[];
}

export default function InteractiveServicesSection() {
  const [currentServiceCard, setCurrentServiceCard] = useState<ServiceCardNumber>(4);

  // Data for each service card
  const serviceCards: ServiceCardData[] = [
    {
      id: 1,
      icon: 'fa-leaf',
      category: 'Analytics',
      title: 'Data Intelligence',
      description:
        'Advanced analytics platform that processes complex data streams and provides actionable insights through machine learning algorithms.',
      metrics: ['98% accuracy', 'Real-time processing'],
      buttonText: 'Improve insights by 40%',
      features: [
        'Advanced machine learning algorithms',
        'Predictive analytics capabilities',
        'Real-time data processing',
        'Custom reporting dashboards',
      ],
    },
    {
      id: 2,
      icon: 'fa-bolt',
      category: 'Performance',
      title: 'System Optimization',
      description:
        'Intelligent performance monitoring that automatically optimizes system resources based on usage patterns and demand forecasting.',
      metrics: ['24/7 monitoring', 'Auto-scaling'],
      buttonText: 'Boost efficiency by 35%',
      features: [
        'Automated resource allocation',
        'Performance monitoring tools',
        'Scalable infrastructure design',
        'Load balancing optimization',
      ],
    },
    {
      id: 3,
      icon: 'fa-cogs',
      category: 'Automation',
      title: 'Process Automation',
      description:
        'Streamline workflows with intelligent automation. Connect systems, automate tasks, and create efficient operational processes.',
      metrics: ['Zero downtime', 'Smart workflows'],
      buttonText: 'Reduce costs by 50%',
      features: [
        'Workflow automation engine',
        'Integration with existing systems',
        'Custom business logic',
        'Process optimization tools',
      ],
    },
    {
      id: 4,
      icon: 'fa-chart-line',
      category: 'Reporting',
      title: 'Advanced Reporting',
      description:
        'Comprehensive reporting suite with customizable dashboards, real-time metrics, and automated insights for data-driven decisions.',
      metrics: ['Custom dashboards', 'Real-time data'],
      buttonText: 'Enhance visibility by 60%',
      features: [
        'AI-powered analytics platform',
        'Real-time optimization engine',
        'Intelligent automation tools',
        'Comprehensive reporting suite',
      ],
    },
  ];

  // Handle dot click
  const updateServiceCard = (cardNumber: ServiceCardNumber) => {
    setCurrentServiceCard(cardNumber);
  };

  // Auto-rotate service cards every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceCard((prevCard) =>
        prevCard === 4 ? 1 : (prevCard + 1) as ServiceCardNumber
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Get current card data
  const currentCard = serviceCards.find((card) => card.id === currentServiceCard);

  return (
    <section id="interactive-services" className="py-24 px-6">
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
                {serviceCards.map((card) => (
                  <button
                    key={card.id}
                    className={`service-dot w-2 h-2 rounded-full transition-all ${
                      currentServiceCard === card.id
                        ? 'bg-white scale-125'
                        : 'bg-gray-600 hover:bg-gray-300'
                    }`}
                    aria-label={`Show ${card.title}`}
                    onClick={() => updateServiceCard(card.id)}
                  ></button>
                ))}
              </div>

              <div className="space-y-4 text-sm text-gray-400" id="service-features">
                {currentCard?.features.map((feature, idx) => (
                  <div className="flex items-center gap-3" key={idx}>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-stack" id="services-container">
              <div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl">
                <div className="h-full flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-white/10 border border-white/20">
                      <i className={`fas ${currentCard?.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
                      {currentCard?.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 font-display">
                    {currentCard?.title}
                  </h3>

                  <p className="text-gray-300 mb-6 flex-1">
                    {currentCard?.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm mb-6">
                    {currentCard?.metrics.map((metric, idx) => (
                      <div className="flex items-center gap-2" key={idx}>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span className="text-gray-400">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 px-4 enhanced-glass rounded-lg text-white hover:bg-white/10 transition-colors">
                    {currentCard?.buttonText}
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
