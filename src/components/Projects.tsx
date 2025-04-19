'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import { staggerContainer } from "@/lib/animations";

// Project data
const projects = [
  {
    id: "wally",
    title: "Wally - Consumer App",
    role: "Lead Front-end Developer",
    description: "Developed a dynamic consumer app using Next.js, App Router, Tailwind, featuring Geo-location based personalized offers, wallet functionality, event booking with coupon redemption and E-bill management.",
    technologies: ["Next.js", "Tailwind CSS", "Styled Components", "Shadcn", "Prisma ORM"],
    category: "web"
  },
  {
    id: "pipli",
    title: "Pipli - Retailer Portal",
    role: "Frontend Developer",
    description: "Built a responsive retailer portal with order management, inventory tracking, and analytics dashboard using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Redux", "Chart.js"],
    category: "web"
  },
  {
    id: "streaming",
    title: "Video Live Streaming Platform",
    role: "Full-Stack Developer",
    description: "Created a live streaming platform with real-time chat, video processing, and user authentication.",
    technologies: ["Next.js", "WebRTC", "Firebase", "FFMPEG", "Jitsi API"],
    category: "web"
  },
  {
    id: "mpos",
    title: "MPos (React Native)",
    role: "Frontend Developer",
    description: "Developed a mobile point-of-sale application with payment processing, inventory management, and sales analytics.",
    technologies: ["React Native", "Expo", "TypeScript", "Redux"],
    category: "mobile"
  },
  {
    id: "admin",
    title: "Admin Portal",
    role: "Frontend Developer",
    description: "Built a comprehensive admin portal with user management, content moderation, and analytics dashboards.",
    technologies: ["React", "Material UI", "Redux", "Chart.js"],
    category: "web"
  },
  {
    id: "file",
    title: "File Converter Application",
    role: "Frontend Developer",
    description: "Created a file conversion tool supporting multiple formats with drag-and-drop interface and batch processing.",
    technologies: ["React", "Node.js", "Express", "FFMPEG"],
    category: "tools"
  },
  {
    id: "pwa",
    title: "PWA Wrapper for Android",
    role: "Android Developer",
    description: "Developed an Android wrapper for Progressive Web Apps with native functionality integration and offline support.",
    technologies: ["Android", "Java", "WebView", "PWA"],
    category: "mobile"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                A collection of my recent work, showcasing my skills and expertise in web and mobile development.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <Tabs defaultValue="all" className="mx-auto mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4 h-12 rounded-full p-1">
                <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
                <TabsTrigger value="web" className="rounded-full">Web</TabsTrigger>
                <TabsTrigger value="mobile" className="rounded-full">Mobile</TabsTrigger>
                <TabsTrigger value="tools" className="rounded-full">Tools</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          duration: 0.5,
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      role={project.role}
                      description={project.description}
                      technologies={project.technologies}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="web" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          duration: 0.5,
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      role={project.role}
                      description={project.description}
                      technologies={project.technologies}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="mobile" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          duration: 0.5,
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      role={project.role}
                      description={project.description}
                      technologies={project.technologies}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="tools" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          duration: 0.5,
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      role={project.role}
                      description={project.description}
                      technologies={project.technologies}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
} 