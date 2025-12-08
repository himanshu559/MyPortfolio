"use client"

import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "CLI Interface Application",
    description:
      "Advanced command-line interface with AI SDK integration for intelligent search and data access. Features robust authentication, real-time chat, and tool calling capabilities including code execution and AI agent functionality.",
    tech: ["Node.js", "Next.js", "PostgreSQL", "Better-Auth", "AI SDK"],
    features: ["Authentication", "Chat Interface", "Tool Calling", "Code Execution", "AI Agent"],
    gradient: "from-primary/20 to-chart-2/20",
    icon: "🖥️",
    github: "https://github.com/himanshu559/Orbital_CLI",
    demo: "https://your-live-demo-url.com",
  },
  {
    title: "Library Management System",
    description:
      "Comprehensive library management solution with AI-powered book recommendations. Implements secure role-based access control with JWT authentication and streamlined book inventory management.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT Auth"],
    features: ["AI Recommendations", "Role Management", "Secure Access", "Inventory System"],
    gradient: "from-chart-2/20 to-chart-3/20",
    icon: "📚",
    github: "https://github.com/himanshu559/Library_Management_System",
    demo: "https://your-live-demo-url.com",
  },
  {
  title: "Service Finder Platform",
  description:
    "A modern platform that connects users with local service providers such as electricians, plumbers, cleaners, and more. Includes advanced search, category filtering, user authentication, provider profiles, and a seamless booking experience.",
  tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT Auth"],
  features: [
    "Service Search",
    "Provider Profiles",
    "Booking System",
    "Category Filtering",
    "User Authentication"
  ],
  gradient: "from-chart-3/20 to-chart-4/20",
  icon: "🛠️",
  github: "https://github.com/himanshu559",
  demo: "https://your-live-demo-url.com"
}

]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">{"<Projects />"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating expertise in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Key Features</p>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0 gap-2">
  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <Github className="h-4 w-4 mr-2" />
      Code
    </a>
  </Button>

  <Button size="sm" className="flex-1" asChild>
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="h-4 w-4 mr-2" />
      Demo
    </a>
  </Button>
</CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/himanshu559" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
