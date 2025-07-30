'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const faqData = [
  {
    question: 'What services does DesishHub offer?',
    answer:
      'We offer comprehensive digital solutions including web development, mobile app development, enterprise systems, web design, developer training, and digital strategy. Our team specializes in modern technologies like React, Next.js, React Native, and Node.js.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the process.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, while we’re based in Uganda, we work with clients globally. We have experience collaborating with teams across different time zones and use modern communication tools to ensure smooth project delivery regardless of location.',
  },
  {
    question: 'What is your development process?',
    answer:
      'Our process includes six key phases: Discovery (understanding your needs), Strategy (planning the solution), Design (creating user interfaces), Development (building the solution), Launch (deployment and testing), and Growth (ongoing support and optimization).',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Absolutely! We offer comprehensive post-launch support including maintenance, updates, performance monitoring, and feature enhancements. Our support packages are tailored to your specific needs and can include 24/7 monitoring for critical applications.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud platforms like Vercel and Railway. For mobile development, we use React Native and Expo. We also work with design tools like Figma and Framer.',
  },
  {
    question: 'How do you handle project pricing?',
    answer:
      'We offer transparent, project-based pricing tailored to your specific requirements. After understanding your needs during our discovery phase, we provide a detailed proposal with clear deliverables and timelines. We also offer flexible payment schedules to accommodate different budgets.',
  },
  {
    question: 'Can you help with existing projects or only new ones?',
    answer:
      'We can definitely help with existing projects! Whether you need to modernize legacy systems, add new features, fix bugs, or improve performance, our team can assess your current setup and provide solutions to enhance your existing digital assets.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about working with DesishHub
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="glass-effect rounded-2xl overflow-hidden faq-item"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-white pr-4">
                {faq.question}
              </h3>
              <div
                className="flex-shrink-0 text-white transform transition-transform duration-300"
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <ChevronDown className="w-5 h-5"/>
              </div>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <div className="border-t border-white border-opacity-10 pt-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <div className="glass-effect rounded-2xl p-8">
          <h3 className="text-xl font-medium text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Please chat with our
            friendly team.
          </p>
          <button className="btn-primary px-6 py-3 rounded-full font-medium">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
