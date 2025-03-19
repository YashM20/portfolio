'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "React Native",
        "Tailwind CSS", "Bootstrap", "Styled Components", "Redux", "Zustand", "Shadcn UI",
        "Framer Motion", "CSS Modules"
      ]
    },
    {
      id: "backend",
      title: "Backend & Tools",
      skills: [
        "Node.js", "Express", "Prisma ORM", "AWS S3", "Lambda", "Git", "GitHub", "BitBucket",
        "JIRA", "REST API", "Firebase", "WebRTC", "TRPC", "Zod"
      ]
    },
    {
      id: "design",
      title: "Design & UI/UX",
      skills: [
        "Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Mobile-First Design", 
        "Accessible UI", "Design Systems", "Wireframing", "Prototyping"
      ]
    },
    {
      id: "other",
      title: "Other Technologies",
      skills: [
        "FFMPEG", "Android WebView", "Chart.js", "Facebook Graph API", "YouTube Data API",
        "Jitsi API", "PWA", "SEO Techniques", "Web Accessibility", "Performance Optimization"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              My technical toolkit and specialized knowledge areas.
            </p>
          </div>
        </div>

        <Tabs defaultValue="frontend" className="mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid max-w-[600px] grid-cols-2 md:grid-cols-4 h-12 rounded-full p-1">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="rounded-full">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <Card className="border rounded-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{category.title} Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Tools & Workflow</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm">
                      I leverage powerful development tools and follow efficient workflows to ensure high-quality code and seamless collaboration.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Git Version Control
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Agile Methodology
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Component Libraries
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Design Systems
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Design & Development Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm">
                      My approach to building products combines technical expertise with a strong focus on user experience and clean design principles.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Mobile-First Design
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Accessible Interfaces
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Performance Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Iterative Refinement
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
} 