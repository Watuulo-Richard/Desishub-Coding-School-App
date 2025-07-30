'use client'
import { Code, Database, GraduationCap, Lightbulb, Paintbrush, Phone } from "lucide-react"
import React, { useEffect } from "react"

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with Next.js and React. Performance-optimized and conversion-focused.",
    price: "Starting at $2,500",
    tags: ["React", "Next.js", "Responsive"],
    icon: Code,
  },
  {
    title: "Mobile Applications",
    description:
      "Native iOS and Android apps using React Native. Seamless user experiences across all devices.",
    price: "Starting at $5,000",
    tags: ["React Native", "iOS", "Android"],
    icon: Phone,
  },
  {
    title: "Enterprise Systems",
    description:
      "Custom business solutions including management systems, e-commerce platforms, and integrations.",
    price: "Starting at $10,000",
    tags: ["Custom", "Scalable", "Enterprise"],
    icon: Database,
  },
  {
    title: "Web Design",
    description:
      "Minimalist, user-centered design that balances aesthetics with functionality and business goals.",
    price: "Starting at $2,000",
    tags: ["UI/UX", "Minimalist", "Figma"],
    icon: Paintbrush,
  },
  {
    title: "Developer Training",
    description:
      "Comprehensive coding education from fundamentals to full-stack mastery. Build Uganda's tech future.",
    price: "Starting at $500",
    tags: ["Training", "Mentorship", "Full-Stack"],
    icon: GraduationCap,
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic technology guidance for digital transformation and architecture decisions.",
    price: "Starting at $150/hr",
    tags: ["Strategy", "Architecture", "Consulting"],
    icon: Lightbulb,
  },
]

export default function ServicesSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".glass-effect")
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`
      card.classList.add("animate-fade-in")
    })
  }, [])

  return (
    // Services Section
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
          {services.map((service, index) => (
            <div key={index} className="service-card glass-effect rounded-2xl p-8">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="text-2xl font-light text-white mb-4">{service.price}</div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
