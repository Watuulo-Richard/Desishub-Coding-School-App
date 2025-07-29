import FeaturesSection from '@/components/frontend/Features-Section';
import InteractiveServicesSection from '@/components/frontend/Interactive-Services-Section';
import HeroSection from '@/components/HeroSection';
import InteractiveServices from '@/components/InteractiveServices';
import PricingSection from '@/components/Pricing-section';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import React from 'react';
export default function page() {
  return (
    <>
      <div className="bg-dark text-white min-h-screen">
        {/* <!-- 3D Background --> */}
        <div className="bg-3d"></div>
        <HeroSection/>
        <ServicesSection/>
        <InteractiveServicesSection />
        <FeaturesSection />
        <PricingSection/>
        <WorkSection/>
        <InteractiveServices/>
      </div>
    </>
  );
}
