"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-center text-muted-foreground space-y-6 leading-relaxed">
            
            <p>
              I am a B.Tech Computer Science student specializing in{" "}
              <span className="font-semibold">Cyber Security</span> at Raghu
              Engineering College, passionate about safeguarding digital systems
              and data.
            </p>

            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Shield size={16} /> Cyber Security
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Cpu size={16} /> Data Analytics
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users size={16} /> Team Leadership
              </Badge>
            </div>

            <p>
              As a <span className="font-semibold">Core Team Member at
              PillionPal</span>, I work on projects that bridge technology with
              real-world solutions.
            </p>

            <p>
              I have earned certifications in{" "}
              <span className="font-semibold">
                GenAI, Data Analytics, and Project Management
              </span>{" "}
              from BCG, Deloitte, and Siemens Mobility (via Forage). My
              volunteering with <span className="font-semibold">NSS UPES</span>{" "}
              has strengthened my adaptability, teamwork, and leadership skills.
            </p>

            <p>
              I am actively seeking{" "}
              <span className="font-semibold">internships and collaborative opportunities</span>{" "}
              in the cyber security and tech domains. Let’s connect and explore
              how I can add value to your organization.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
