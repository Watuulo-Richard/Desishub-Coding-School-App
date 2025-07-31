import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FloatingNavigation() {
  return (
    //Floating Navigation
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 nav-pill rounded-full px-6 py-3"
    >
      <div className="flex items-center justify-between">
        <Link href={`/`} className="flex items-center gap-3">
              <Image className='w-10 h-10' src={"/desishublogo.png"} alt="Logo" width={200} height={200} />
          <span className="text-white font-medium">DesishHub</span>
        </Link>
        <div
          className="hidden md:flex items-center space-x-6 text-sm text-gray-300 ml-8"
        >
          <Link href="/service-page" className="hover:text-white transition-colors"
            >Services</Link>
          <Link
            href="#interactive-services"
            className="hover:text-white transition-colors"
            >Solutions</Link>

          <Link href="#pricing" className="hover:text-white transition-colors"
            >Pricing</Link>
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex flex-shrink-0 items-center space-x-3 ml-8">
          <Link
            href="#contact"
            className="bg-white btn-primary text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
