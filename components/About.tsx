"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-center text-muted-foreground">
            Aspiring Software Developer with strong skills in Java, Python, and C.
            Passionate about leveraging cutting-edge technologies to create
            innovative solutions.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}