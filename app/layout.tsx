import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Himanshu Raj | Full-Stack Developer",
  description:
    "B.Tech CSE student passionate about full-stack development. Skilled in React, Next.js, Node.js, MongoDB.",
  generator: "next.js",
  icons: {
    icon: [
      {
        url: "/portfolioicon.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/portfolioicon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/portfolioicon.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/portfolioicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
         <Toaster />
      </body>
    </html>
  )
}
