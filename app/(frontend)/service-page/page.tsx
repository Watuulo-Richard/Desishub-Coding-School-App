import { HeroVideoDialogDemoTopInBottomOut } from '@/components/frontend/Video-Dialog';
import ServiceHeroSection from '@/components/frontend/Hero-Service';
import React from 'react';
import ServicesOfferedSection from '@/components/frontend/Services-Offered-Section';

export default function page() {
  return (
    <>
    <div className="min-h-screen">
      <ServiceHeroSection />
      <ServicesOfferedSection />
    </div>
    </>
  );
}
