"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "#",
  },
  {
    title: "Project 2",
    description: "Another project description",
    techStack: ["Python", "Django", "PostgreSQL"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card/50 border-0">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}