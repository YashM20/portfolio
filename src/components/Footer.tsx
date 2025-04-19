'use client';

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <Link href="/" className="font-mono text-xl font-bold inline-block mb-6">
                Yash<span className="text-primary">.</span>
              </Link>
              <p className="text-muted-foreground max-w-md">
                Software Developer based in Gujarat, India, specializing in creating elegant and functional web and mobile applications.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6 lg:space-y-8">
              <div className="flex justify-start lg:justify-end space-x-6">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:yashsecond606@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <Link
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <nav className="text-sm flex flex-wrap gap-x-6 gap-y-3 justify-start lg:justify-end">
                {["Home", "Projects", "About", "Skills", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                  >
                    <Link 
                      href={`/#${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </ScrollReveal>
        </div>
        
        <Separator className="my-8" />
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>© {currentYear} Yash Mahajan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 