'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Palette,
  Database,
  Search,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Settings,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ServiceDetailComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Custom Web Development',
      description:
        'Tailored websites built from scratch using modern technologies and best practices.',
      features: [
        'React & Next.js',
        'Custom Design',
        'SEO Optimized',
        'Mobile Responsive',
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile-First Design',
      description:
        'Responsive designs that look perfect on all devices and screen sizes.',
      features: [
        'Progressive Web Apps',
        'Touch Optimization',
        'Fast Loading',
        'Cross-Platform',
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Full-Stack Solutions',
      description:
        'Complete web applications with robust backend systems and databases.',
      features: [
        'API Development',
        'Database Design',
        'Cloud Integration',
        'Real-time Features',
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description:
        'Lightning-fast websites optimized for speed and user experience.',
      features: [
        'Core Web Vitals',
        'Image Optimization',
        'Code Splitting',
        'CDN Integration',
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Maintenance',
      description:
        'Secure, reliable websites with ongoing support and maintenance.',
      features: [
        'SSL Certificates',
        'Regular Updates',
        'Backup Systems',
        '24/7 Monitoring',
      ],
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO & Analytics',
      description:
        'Search engine optimization and detailed analytics to grow your online presence.',
      features: [
        'Technical SEO',
        'Google Analytics',
        'Performance Tracking',
        'Conversion Optimization',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We start by understanding your business goals, target audience, and project requirements.',
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Creating wireframes and interactive prototypes to visualize your website before development.',
      icon: <Palette className="h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'Building your website with clean, scalable code and thorough testing across all devices.',
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description:
        'Deploying your website and continuously optimizing for performance and user experience.',
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Vercel',
    'Docker',
    'GraphQL',
    'REST APIs',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content:
        'The team delivered an exceptional website that exceeded our expectations. The attention to detail and technical expertise was outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      content:
        'Our new website has increased conversions by 40%. The performance optimization and user experience improvements were game-changing.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      content:
        'Professional, responsive, and delivered on time. The ongoing support has been invaluable for our growing business.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      {/* 3D Background */}
      <div className="bg-3d" />

      {/* Geometric Shape */}
      <div className="geometric-shape hidden lg:block" />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="glass-effect text-white border-white/30 hover:bg-white/10">
                  Professional Web Development
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight hero-title">
                  Build Your Digital
                  <span className="block gradient-text-enhanced">
                    Success Story
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Transform your ideas into powerful, scalable web solutions
                  that drive growth and engage your audience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="btn-secondary">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold gradient-text-enhanced">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-3xl p-8">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Modern+Web+Development+Workspace"
                  alt="Web Development Workspace"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-effect text-white border-white/30">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Web Development Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end web development
              services that help businesses thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card glass-effect border-white/10 card-hover"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 glass-effect">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-effect text-white border-white/30">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven development process ensures your project is delivered
              on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center glass-effect rounded-2xl p-6 card-hover">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-white mx-auto mb-6 glass-effect">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold gradient-text-enhanced mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-blue-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-effect text-white border-white/30">
              Technology Stack
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build
              scalable, maintainable, and high-performance web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg mx-auto mb-3 flex items-center justify-center glass-effect">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-effect text-white border-white/30">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-effect border-white/10 card-hover"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center glass-effect">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 glass-effect text-white border-white/30">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible pricing options to suit businesses of all sizes. All
              plans include our commitment to quality and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="pricing-card glass-effect border-white/10">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4 glass-effect">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  Starter
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Perfect for small businesses and startups
                </CardDescription>
                <div className="text-4xl font-bold gradient-text-enhanced mt-4">
                  $2,999
                </div>
                <div className="text-gray-400">One-time payment</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    '5-page responsive website',
                    'Mobile-first design',
                    'Basic SEO optimization',
                    'Contact form integration',
                    '3 months support',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-8 btn-primary">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="pricing-card featured glass-effect border-blue-400/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 glass-effect">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  Professional
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Ideal for growing businesses
                </CardDescription>
                <div className="text-4xl font-bold gradient-text-enhanced mt-4">
                  $5,999
                </div>
                <div className="text-gray-400">One-time payment</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    '10-page responsive website',
                    'Custom design & branding',
                    'Advanced SEO optimization',
                    'CMS integration',
                    'E-commerce functionality',
                    '6 months support',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-8 btn-primary">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="pricing-card glass-effect border-white/10">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 glass-effect">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-gray-400">
                  For large-scale applications
                </CardDescription>
                <div className="text-4xl font-bold gradient-text-enhanced mt-4">
                  Custom
                </div>
                <div className="text-gray-400">Contact for pricing</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Unlimited pages',
                    'Custom web application',
                    'Advanced integrations',
                    'Performance optimization',
                    'Dedicated support team',
                    '12 months support',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
              Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" className="btn-secondary">
                <Settings className="mr-2 h-5 w-5" />
                Get Project Estimate
              </Button>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="text-sm">
                ✓ Free consultation • ✓ No obligation • ✓ Quick response within
                24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 glass-effect text-white border-white/30">
                Get In Touch
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Let's Start Building Your Success Story
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to take your business to the next level? Contact us today
                for a free consultation and let's discuss how we can help you
                achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Quick Response
                    </div>
                    <div className="text-gray-400">
                      We respond within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Secure & Confidential
                    </div>
                    <div className="text-gray-400">
                      Your information is always protected
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Expert Team</div>
                    <div className="text-gray-400">
                      Work directly with experienced developers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Start Your Project
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="text-sm font-medium text-gray-300 mb-2 block">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      className="w-full px-3 py-2 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    >
                      <option className="bg-gray-800">Select a service</option>
                      <option className="bg-gray-800">
                        Custom Web Development
                      </option>
                      <option className="bg-gray-800">
                        E-commerce Website
                      </option>
                      <option className="bg-gray-800">Web Application</option>
                      <option className="bg-gray-800">Website Redesign</option>
                      <option className="bg-gray-800">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <Button className="w-full btn-primary">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
