"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, BookOpen, School } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-card/50 border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Education
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Bachelor of Technology */}
        <Card className="bg-card/50 border-0">
          <CardContent className="flex flex-col items-center text-center">
            <GraduationCap className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">
              Bachelor of Technology, CSE(Cyber Security)
            </h3>
            <CardDescription>
              Raghu Institute of Technology, Visakhapatnam • Nov 2022 – Present
            </CardDescription>
            <p className="text-sm mt-2 text-muted-foreground">GPA: 7.0</p>
          </CardContent>
        </Card>

        {/* Intermediate */}
        <Card className="bg-card/50 border-0">
          <CardContent className="flex flex-col items-center text-center">
            <BookOpen className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Intermediate</h3>
            <CardDescription>
              Prabha Jr. College, Visakhapatnam • 2020 – 2022
            </CardDescription>
            <p className="text-sm mt-2 text-muted-foreground">GPA: 7.7</p>
          </CardContent>
        </Card>

        {/* SSC */}
        <Card className="bg-card/50 border-0">
          <CardContent className="flex flex-col items-center text-center">
            <School className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">SSC</h3>
            <CardDescription>
              Srujana High School, Visakhapatnam • 2019 – 2020
            </CardDescription>
            <p className="text-sm mt-2 text-muted-foreground">GPA: 8.2</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
