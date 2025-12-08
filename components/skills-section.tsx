"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C", level: 75 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "React Native", level: 70 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Team Collaboration", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Debugging", level: 88 },
      { name: "Agile/Scrum", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Languages")

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-chart-2/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">{"<Skills />"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={cn(
                "grid gap-4 transition-all duration-500",
                activeCategory === category.name ? "opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4",
              )}
            >
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass rounded-xl p-4 group hover:scale-[1.02] transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Skill Badges Overview */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "Node.js", "MongoDB", "Java", "TailwindCSS", "Git", "Docker"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 glass rounded-full text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
