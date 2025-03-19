'use client';

import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Software Engineer with 4+ years of experience developing elegant web and mobile applications.
            </p>
          </div>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-[1fr_1px_1fr] items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Professional Journey</h3>
              <p className="text-muted-foreground">
                I'm a Software Developer with 4+ years of experience in all phases of software development. I've been developing web and mobile applications using JavaScript frameworks and libraries, including Next.js, React JS, React Native & Expo CLI. I'm passionate about staying up to date with modern frontend development trends & the React community.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Design Philosophy</h3>
              <p className="text-muted-foreground">
                I approach software development with a design-first mindset, focusing on creating intuitive, accessible, and visually appealing user interfaces. I believe that great software should not only function well but also provide a delightful user experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                <li>English (Professional Working)</li>
                <li>Hindi (Native)</li>
                <li>Gujarati (Native)</li>
                <li>Marathi (Native)</li>
              </ul>
            </div>
          </div>
          
          <Separator orientation="vertical" className="h-full hidden lg:block" />
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Development Expertise</h3>
              <p className="text-muted-foreground">
                I specialize in developing responsive designs using HTML/HTML5, CSS3 Media Queries, Bootstrap, and Tailwind. I have extensive experience with JavaScript, React, Next.js, TypeScript, and React Native for cross-platform mobile development.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Additional Skills</h3>
              <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                <li>Figma / Adobe XD</li>
                <li>Github / Bitbucket / JIRA</li>
                <li>ShadCn / Prime React</li>
                <li>FFmpeg</li>
                <li>AWS S3 / Lambda</li>
                <li>Chart.js Data Visualization</li>
                <li>Facebook Graph API</li>
                <li>YouTube Data API</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                I'm committed to continuous improvement and currently expanding my skill-set with TypeScript, React server components/actions, and UI libraries like Shadcn UI. I've recently adopted tools like PNPM and libraries like React Query and Zod for robust validations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 