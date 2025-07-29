import FeaturesSection from '@/components/frontend/Features-Section';
import InteractiveServicesSection from '@/components/frontend/Interactive-Services-Section';
import React from 'react';
export default function page() {
  return (
    <>
      <div className="bg-dark text-white min-h-screen">
        {/* <!-- 3D Background --> */}
        <div className="bg-3d"></div>
        <InteractiveServicesSection />
        <FeaturesSection />
      </div>
    </>
  );
}
