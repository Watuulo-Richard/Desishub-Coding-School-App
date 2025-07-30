import React from 'react';
import FeaturedWorkSection from '@/components/frontend/Featured-Work-Section';
import FeaturesSection from '@/components/frontend/Features-Section';
import HeroSection from '@/components/frontend/HeroSection';
import InteractiveServices from '@/components/frontend/InteractiveServices';
import PricingSection from '@/components/frontend/Pricing-section';
import ServicesSection from '@/components/frontend/ServicesSection';
import WorkSection from '@/components/frontend/WorkSection';
import TechnologyStackSection from '@/components/frontend/Technology-Stack-Section';
import WhyChooseUsSection from '@/components/frontend/Why-Choose-Us-Section';

import ProcessSection from '@/components/frontend/ProcessSection';
import CodingSectionSection from '@/components/frontend/Coding-Section-Section';
import BlogSection from '@/components/frontend/Blog-Section';
import FAQSection from '@/components/frontend/FAQ-Section';

import TestimonialsSection from '@/components/frontend/TestimonialsSection';
import AboutSection from '@/components/frontend/AboutSection';
import TeamSection from '@/components/frontend/TeamSection';
import MultiStepForm from '@/components/frontend/Multi-step-form';
export default function page() {
  return (
    <>
      <div className="bg-dark text-white min-h-screen relative">
        {/* <!-- 3D Background --> */}
        <div className="bg-3d"></div>
        <HeroSection />
        <ServicesSection />
        <InteractiveServices />
        <FeaturesSection />
        <PricingSection />
        <WorkSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <FeaturedWorkSection />
        <TechnologyStackSection />

        <CodingSectionSection />
        <BlogSection />
        <FAQSection />

        <TestimonialsSection />
        <AboutSection />
        <TeamSection />
        <MultiStepForm />
      </div>
    </>
  );
}
