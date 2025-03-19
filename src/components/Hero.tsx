'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="inline-flex items-center rounded-md border border-muted bg-muted/50 px-3 py-1 text-sm font-medium">
                Software Developer based in Gujarat, India
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforming complex ideas into <span className="text-primary">elegant</span> web and mobile applications
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hi, I&apos;m Yash, an experienced Software Developer with over 3 years of experience crafting beautiful and functional web and mobile applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/#projects">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/#contact">
                  Get in touch
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-b from-primary/20 to-muted p-8 md:p-14">
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#circleGradient)" />
                  <path
                    d="M50 10 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-background p-8">
                <code className="text-sm font-mono text-muted-foreground">
                  <pre className="leading-relaxed">
                    <span className="text-primary">const</span> developer = {`{`}
                    {'\n  '}name: <span className="text-green-500">&apos;Yash Mahajan&apos;</span>,
                    {'\n  '}title: <span className="text-green-500">&apos;Software Developer&apos;</span>,
                    {'\n  '}skills: [<span className="text-green-500">&apos;Next.js&apos;</span>, <span className="text-green-500">&apos;React&apos;</span>, <span className="text-green-500">&apos;JS&apos;</span>, <span className="text-green-500">&apos;TS&apos;</span>],
                    {'\n  '}loves: <span className="text-green-500">&apos;Elegant UI/UX&apos;</span>
                    {'\n'}{`}`};
                  </pre>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-12">
          <Link href="/#projects" className="flex flex-col items-center justify-center text-sm font-medium transition-colors hover:text-primary">
            <span className="mb-2">Scroll to explore</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
} 