import { ArrowRight, Check } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { HeroVideoDialogDemoTopInBottomOut } from './Video-Dialog';
import { Cover } from '../magicui/cover';
export default function ServiceHeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              Launching Soon
            </Badge>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-white bg-gradient-to-r from-foreground to-foreground/70">
              Elevate Your Workflow with SaaSify
            </h1> */}
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white/10 dark:to-white/10">
              Elevate Your Workflow <br /> with{' '}
              <Cover>DesisHub Coding School</Cover>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The all-in-one platform that helps teams collaborate, automate,
              and deliver exceptional results. Streamline your processes and
              focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 text-base">
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base"
              >
                Book a Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>14-day trial</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
              <Image
                src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                width={1280}
                height={720}
                alt="SaaSify dashboard"
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div> */}
            <HeroVideoDialogDemoTopInBottomOut />
            <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>
    </>
  );
}
