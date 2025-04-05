"use client"

import { Code2, Database, Github, Globe, Brain, Terminal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C"],
  },
  {
    name: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Developer Tools",
    icon: Github,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    name: "Problem Solving",
    icon: Brain,
    skills: ["Data Structures", "Algorithms", "System Design"],
  },
  {
    name: "Other Skills",
    icon: Terminal,
    skills: ["Linux", "Command Line", "Agile"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.name} className="bg-card/50 border-0 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}