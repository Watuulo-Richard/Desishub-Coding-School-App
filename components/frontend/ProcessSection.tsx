import { Search, Lightbulb, Palette, Code, Rocket, TrendingUp } from "lucide-react"

import React from 'react'

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep analysis of your business needs, target audience, and competitive landscape.",
      icon: Search,
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting the optimal technical architecture and user experience strategy.",
      icon: Lightbulb,
    },
    {
      number: "03",
      title: "Design",
      description: "Creating intuitive interfaces that balance beauty with functionality.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Development",
      description: "Building robust, scalable solutions using modern technologies.",
      icon: Code,
    },
    {
      number: "05",
      title: "Launch",
      description: "Seamless deployment with comprehensive testing and optimization.",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Growth",
      description: "Ongoing support, maintenance, and performance enhancement.",
      icon: TrendingUp,
    },
  ]
  return (
    <section id="process" className="py-24 px-4 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-3xl mb-6 md:text-4xl lg:text-5xl font-light tracking-tight">
      <span className="gradient-text">How We Work</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
      A refined approach to digital excellence
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {steps.map((step, index) => {
      const Icon = step.icon
      return (
        <div key={index} className="glass-effect rounded-2xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-black font-bold">{step.number}</span>
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
          <p className="text-gray-400 leading-relaxed">{step.description}</p>
        </div>
      )
    })}
  </div>
</section>

  )
}
