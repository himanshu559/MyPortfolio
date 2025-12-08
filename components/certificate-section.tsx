"use client"

import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-XXXXX",
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    icon: "🎓",
    gradient: "from-primary/20 to-chart-2/20",
    credentialUrl: "/public/certificate/WEB_DEVELOPMENT_CERTIFICATE.pdf",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "LeetCode",
    date: "2023",
    credentialId: "LC-XXXXX",
    skills: ["DSA", "Problem Solving", "Optimization"],
    icon: "🧠",
    gradient: "from-chart-4/20 to-primary/20",
    credentialUrl: "/public/certificate/",
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Coursera",
    date: "2024",
    credentialId: "CY-XXXXX",
    skills: ["Network Security", "Threat Analysis", "Vulnerability Assessment"],
    icon: "🛡️",
    gradient: "from-chart-2/20 to-chart-4/20",
    credentialUrl: "/public/certificate/cyber_security.pdf",
  },
  {
    title: "AI & Machine Learning Foundations",
    issuer: "Google / Coursera",
    date: "2024",
    credentialId: "AI-ML-XXXXX",
    skills: ["Machine Learning", "Neural Networks", "AI Concepts", "Data Processing"],
    icon: "🤖",
    gradient: "from-chart-3/20 to-primary/20",
    credentialUrl: "/public/certificate/AI_ML_Certificate.pdf", 
  }
]


export default function CertificateSection() {
  return (
    <section id="certificates" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">{"<Certificates />"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise and commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={cert.title}
              className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header with Gradient */}
              <div
                className={`h-24 bg-gradient-to-br ${cert.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </span>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex-1">{cert.title}</h3>
                  <Award className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Credential ID */}
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Credential ID</p>
                  <p className="text-xs font-mono bg-muted px-2 py-1 rounded text-foreground/70">{cert.credentialId}</p>
                </div>

                {/* View Credential Button */}
                <Button size="sm" variant="outline" className="w-full bg-transparent hover:bg-primary/10" asChild>
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary">{certificates.length}</div>
            <p className="text-sm text-muted-foreground mt-2">Total Certifications</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary">{new Set(certificates.map((c) => c.issuer)).size}</div>
            <p className="text-sm text-muted-foreground mt-2">Issuing Organizations</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary">
              {certificates.filter((c) => new Date(c.date).getFullYear() >= 2024).length}
            </div>
            <p className="text-sm text-muted-foreground mt-2">Recent Certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}
