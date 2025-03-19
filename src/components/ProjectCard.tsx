'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <Card className="group overflow-hidden border rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-md">
      <CardHeader className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              Role: {role}
            </CardDescription>
          </div>
          {link && (
            <Button variant="ghost" size="icon" asChild className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={link} target="_blank" rel="noreferrer">
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">Visit project</span>
              </Link>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 