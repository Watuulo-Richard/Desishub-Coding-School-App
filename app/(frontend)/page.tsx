import FeaturedWorkSection from '@/components/frontend/Featured-Work-Section';
import FeaturesSection from '@/components/frontend/Features-Section';
import HeroSection from '@/components/HeroSection';
import InteractiveServices from '@/components/InteractiveServices';
import PricingSection from '@/components/Pricing-section';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ProcessSection from '@/components/frontend/Process-Section';
import TechnologyStackSection from '@/components/frontend/Technology-Stack-Section';
import WhyChooseUsSection from '@/components/frontend/Why-Choose-Us-Section';
import React from 'react';

export default function page() {
  return (
    <>
      <div className="bg-dark text-white min-h-screen">
        {/* <!-- 3D Background --> */}
        <div className="bg-3d"></div>
        <HeroSection/>
        <ServicesSection/>
        <InteractiveServices/>
        <FeaturesSection />
        <PricingSection/>
        <WorkSection/>
        <WhyChooseUsSection />
        <ProcessSection />
        <FeaturedWorkSection />
        <TechnologyStackSection />
      </div>
    </>
  );
}
