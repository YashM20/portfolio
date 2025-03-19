'use client';

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Link href="/" className="font-mono text-xl font-bold inline-block mb-6">
              Yash<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Software Developer based in Gujarat, India, specializing in creating elegant and functional web and mobile applications.
            </p>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            <div className="flex justify-start lg:justify-end space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:yashsecond606@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            
            <nav className="text-sm flex flex-wrap gap-x-6 gap-y-3 justify-start lg:justify-end">
              <Link href="/#" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Yash Mahajan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 