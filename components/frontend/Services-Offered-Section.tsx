import {
    Cpu,
  Cuboid,
  MonitorCog,
  TabletSmartphone,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ServicesOfferedSection() {
  return (
    <div>
      {/* <!-- Work Section --> */}
      <section id="work" className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of our recent projects and digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* <!-- Project 1 --> */}
            <div className="group">
            <Link href=''>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <MonitorCog className="text-gradient-to-br from-blue-500/20 to-purple-500/20 text-6xl text-white/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">
                    <MonitorCog className="w-6 h-6 text-blue-400" />
                  </span>
                </div>
              </div>
            </Link>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Web Development</h3>
                  {/* <span className="text-sm text-gray-400">2024</span> */}
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Modern, responsive websites built with Next.js and React.
                  Performance-optimized and conversion-focused.
                </p>
                <div className="border-t border-white border-opacity-10 pt-4">
                  <span className="text-white font-medium">
                    Starting at $2,500
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="group">
                <Link href=''>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                  <TabletSmartphone className="text-6xl text-white/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">
                    <TabletSmartphone className="w-6 h-6 text-green-400" />
                  </span>
                </div>
              </div>
                </Link>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Mobile Applications</h3>
                  {/* <span className="text-sm text-gray-400">2024</span> */}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Native iOS and Android apps using React Native. Seamless user
                  experiences across all devices.
                </p>
                <div className="border-t border-white border-opacity-10 pt-4">
                  <span className="text-white font-medium">
                    Starting at $5,000
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div className="group">
                <Link href=''>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Cuboid className="text-6xl text-white/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">
                    <Cuboid className="w-6 h-6 text-blue-400" />
                  </span>
                </div>
              </div>
                </Link>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Enterprise Systems</h3>
                  {/* <span className="text-sm text-gray-400">2023</span> */}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Custom business solutions including management systems,
                  e-commerce platforms, and integrations.
                </p>
                <div className="border-t border-white border-opacity-10 pt-4">
                  <span className="text-white font-medium">
                    Starting at $10,000
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Project 4 --> */}
            <div className="group">
                <Link href=''>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-video group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Cpu className="text-6xl text-white/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </span>
                </div>
              </div>
                </Link>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">UI/UX Design</h3>
                  {/* <span className="text-sm text-gray-400">2023</span> */}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.
                </p>
                <div className="border-t border-white border-opacity-10 pt-4">
                  <span className="text-white font-medium">
                    Starting at $2,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
