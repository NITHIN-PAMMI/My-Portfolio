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
            As a B.Tech student specializing in Computer Science with a focus on Cyber Security at Raghu Engineering College, I am passionate about protecting digital systems and data. My academic journey is complemented by hands-on experience as a Core Team Member at PillionPal, where I contribute to innovative projects that bridge technology and real-world solutions.

I actively seek opportunities to expand my skillset, as demonstrated by my certifications in GenAI, Data Analytics, and Project Management from industry leaders like BCG, Deloitte, and Siemens Mobility (via Forage). Volunteering with NSS UPES has helped me develop strong teamwork, adaptability, and leadership skills.

I am eager to connect with professionals and organizations in the cyber security and tech domains. I am currently seeking internships and collaborative projects where I can contribute my analytical thinking, leadership, and technical expertise. Let’s connect to explore how I can add value to your organization.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}