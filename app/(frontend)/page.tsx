import FeaturedWorkSection from '@/components/frontend/Featured-Work-Section';
import FeaturesSection from '@/components/frontend/Features-Section';
import InteractiveServicesSection from '@/components/frontend/Interactive-Services-Section';
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
        <InteractiveServicesSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <FeaturedWorkSection />
        <TechnologyStackSection />
      </div>
    </>
  );
}
