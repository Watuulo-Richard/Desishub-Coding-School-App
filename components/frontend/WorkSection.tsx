import { ChartBar, GraduationCap, HeartIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "EcoFarm Marketplace",
    year: "2024",
    description:
      "E-commerce platform connecting Ugandan farmers directly with consumers. Built with Next.js and integrated payment systems.",
    icon: ShoppingCartIcon,
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-purple-500/20",
    tags: ["Next.js", "E-commerce", "Payment Integration"],
  },
  {
    title: "HealthTrack Pro",
    year: "2024",
    description:
      "Comprehensive patient management system for medical centers with appointment booking and records management.",
    icon: HeartIcon,
    gradientFrom: "from-green-500/20",
    gradientTo: "to-teal-500/20",
    tags: ["React", "Healthcare", "Management System"],
  },
  {
    title: "EduConnect Uganda",
    year: "2023",
    description:
      "Learning management platform connecting students and educators across Uganda with interactive course delivery.",
    icon: GraduationCap,
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-pink-500/20",
    tags: ["Education", "LMS", "Interactive"],
  },
  {
    title: "FinTech Dashboard",
    year: "2023",
    description:
      "Real-time financial analytics dashboard for microfinance institutions with advanced reporting capabilities.",
    icon: ChartBar,
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-red-500/20",
    tags: ["FinTech", "Analytics", "Dashboard"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of our recent projects and digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-6 group-hover:scale-105 transition-transform duration-500`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}
                >
                  <project.icon className="text-8xl text-white"/>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
