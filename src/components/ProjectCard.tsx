'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cardHoverVariants } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  technologies,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardHoverVariants}
    >
      <Card className="group overflow-hidden border rounded-xl transition-all duration-300 h-full hover:border-primary/50">
        <CardHeader className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                Role: {role}
              </CardDescription>
            </div>
            {link && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="z-10"
              >
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href={link} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">Visit project</span>
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Badge variant="secondary" className="px-2 py-1 text-xs font-medium">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 