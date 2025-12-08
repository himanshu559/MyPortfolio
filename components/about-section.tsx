"use client"

import { GraduationCap, MapPin, Calendar, Languages } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm">{"<About />"}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Photo Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-primary/50 to-chart-2/50 p-1">
                  <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src="/Profile_Photo.jpg"
                      alt="Himanshu Raj"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 glass px-3 py-1 rounded-full text-xs">🎯 Open to Work</div>
              </div>
            </div>

            {/* About Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Himanshu Raj</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Full-Stack Developer | Software Engineer | Website Developer
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                B.Tech (CSE) student passionate about full-stack development. Skilled in React, Next.js, Node.js,
                MongoDB. Strong foundation in Java and DSA. Experience building full-stack projects, authentication
                systems, CLI-based tools, AI-integrated search systems, and group project collaboration in agile
                environments.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Education</p>
                      <p className="text-sm font-medium">B.Tech CSE</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">College</p>
                      <p className="text-sm font-medium">MIT Meerut</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Batch</p>
                      <p className="text-sm font-medium">2022 - 2026</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Languages</p>
                      <p className="text-sm font-medium">English, Hindi</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CGPA Badge */}
              <div className="flex items-center gap-4 pt-2">
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-sm text-muted-foreground">CGPA: </span>
                  <span className="text-primary font-bold">7.43 / 10</span>
                </div>
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-sm text-muted-foreground">4th Year Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
