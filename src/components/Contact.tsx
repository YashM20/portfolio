'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have a project in mind or want to discuss collaboration opportunities? Reach out to me.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <ScrollReveal direction="left" delay={0.2}>
            <Card className="border rounded-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="rounded-full p-2 bg-muted">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:yashsecond606@gmail.com" 
                        className="hover:text-primary transition-colors underline underline-offset-4"
                      >
                        yashsecond606@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="rounded-full p-2 bg-muted">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors underline underline-offset-4"
                      >
                        Connect with me on LinkedIn
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="rounded-full p-2 bg-muted">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">GitHub</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors underline underline-offset-4"
                      >
                        Check out my code on GitHub
                      </a>
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <Card className="border rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Work Inquiry</CardTitle>
                <CardDescription>Let's discuss your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and exciting collaborations. If you have a project that needs expertise in web or mobile development, I'd love to hear about it.
                </p>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What I can help with:</h3>
                  <motion.ul 
                    className="space-y-2 text-muted-foreground"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    <motion.li 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="mr-2 text-primary">•</span> 
                      Web application development with Next.js, React, and other modern frameworks
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="mr-2 text-primary">•</span> 
                      Mobile app development with React Native
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="mr-2 text-primary">•</span> 
                      UI/UX design and implementation
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="mr-2 text-primary">•</span> 
                      Performance optimization and code reviews
                    </motion.li>
                  </motion.ul>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button asChild size="lg" className="w-full rounded-full">
                    <a href="mailto:yashsecond606@gmail.com">
                      Send Email Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 