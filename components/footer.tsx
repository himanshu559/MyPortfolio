import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/himanshu559",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/himanshu-raj-374a2825b/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:himanshu.raj.cs.2022@mitmeerut.ac.in",
    label: "Email",
  },
]

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-bold text-primary">
              {"<HR />"}
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full-Stack Developer passionate about building modern web applications and creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Himanshu Raj. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
