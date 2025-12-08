"use client"

import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import TrueFocus from "@/components/TrueFocus"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {"Hi, I'm "}
              <span className="text-primary">Himanshu Raj</span>
              <br />
              <span className="text-muted-foreground">

<TrueFocus 
sentence="Full-Stack Developer"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={1}
pauseBetweenAnimations={1}
/></span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              I build modern websites, full-stack applications, and AI-powered systems. Passionate about creating
              seamless digital experiences with clean code.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/ResumeFinal.pdf" download>
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">7.43</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </div>

          {/* Developer Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative">
              {/* Code Window */}
              <div className="glass rounded-2xl p-6 w-96 animate-float">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-chart-3" />
                  <div className="w-3 h-3 rounded-full bg-chart-2" />
                </div>
                <pre className="text-sm font-mono text-muted-foreground overflow-hidden">
                  <code>
                    {`const developer = {
  name: "Himanshu Raj",
  role: "Full-Stack Dev",
  skills: [
    "React", "Next.js",
    "Node.js", "MongoDB"
  ],
  passion: "Building 🚀"
};`}
                  </code>
                </pre>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-pulse-glow">
                <span className="text-2xl">⚛️</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-pulse-glow"
                style={{ animationDelay: "-1s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
              <div
                className="absolute top-1/2 -right-8 glass rounded-xl p-3 animate-pulse-glow"
                style={{ animationDelay: "-0.5s" }}
              >
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
