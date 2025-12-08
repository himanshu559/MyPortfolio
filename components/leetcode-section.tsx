"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { RefreshCw, Trophy, Target, Flame, Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface LeetCodeStats {
  status: string
  totalSolved: number
  totalQuestions: number
  easySolved: number
  totalEasy: number
  mediumSolved: number
  totalMedium: number
  hardSolved: number
  totalHard: number
  acceptanceRate: number
  ranking: number
}

export default function LeetcodeSection() {
  const [username, setUsername] = useState("HimanshuRaj49")
  const [inputUsername, setInputUsername] = useState("HimanshuRaj49")
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      const data = await response.json()
      if (data.status === "success") {
        setStats(data)
      } else {
        setError("User not found. Please check the username.")
        setStats(null)
      }
    } catch {
      setError("Failed to fetch stats. Please try again.")
      setStats(null)
    }
    setLoading(false)
  }, [username])

  useEffect(() => {
    fetchStats()
  }, [fetchStats])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUsername(inputUsername)
  }

  const easyProgress = stats ? (stats.easySolved / stats.totalEasy) * 100 : 0
  const mediumProgress = stats ? (stats.mediumSolved / stats.totalMedium) * 100 : 0
  const hardProgress = stats ? (stats.hardSolved / stats.totalHard) * 100 : 0

  return (
    <section id="leetcode" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-chart-3/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">{"<LeetCode />"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">DSA & LeetCode Status</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Username Input */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="Enter LeetCode username"
              className="bg-secondary border-border"
            />
            <Button type="submit" disabled={loading}>
              {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Update"}
            </Button>
          </form>
        </div>

        {error && <div className="text-center text-destructive mb-8">{error}</div>}

        {stats && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="glass border-border">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 text-chart-3 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">{stats.totalSolved}</p>
                  <p className="text-xs text-muted-foreground">Problems Solved</p>
                </CardContent>
              </Card>

              <Card className="glass border-border">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-chart-2 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">{stats.acceptanceRate?.toFixed(1) || "N/A"}%</p>
                  <p className="text-xs text-muted-foreground">Acceptance Rate</p>
                </CardContent>
              </Card>

              <Card className="glass border-border">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-chart-4 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">{stats.ranking?.toLocaleString() || "N/A"}</p>
                  <p className="text-xs text-muted-foreground">Global Ranking</p>
                </CardContent>
              </Card>

              <Card className="glass border-border">
                <CardContent className="p-4 text-center">
                  <Flame className="h-8 w-8 text-chart-4 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">{stats.totalQuestions}</p>
                  <p className="text-xs text-muted-foreground">Total Questions</p>
                </CardContent>
              </Card>
            </div>

            {/* Progress Bars */}
            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="text-lg">Problem Difficulty Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Easy */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-2" />
                      <span className="font-medium">Easy</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stats.easySolved} / {stats.totalEasy}
                    </span>
                  </div>
                  <Progress value={easyProgress} className="h-3 bg-secondary [&>div]:bg-chart-2" />
                </div>

                {/* Medium */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-3" />
                      <span className="font-medium">Medium</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stats.mediumSolved} / {stats.totalMedium}
                    </span>
                  </div>
                  <Progress value={mediumProgress} className="h-3 bg-secondary [&>div]:bg-chart-3" />
                </div>

                {/* Hard */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-4" />
                      <span className="font-medium">Hard</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stats.hardSolved} / {stats.totalHard}
                    </span>
                  </div>
                  <Progress value={hardProgress} className="h-3 bg-secondary [&>div]:bg-chart-4" />
                </div>
              </CardContent>
            </Card>

            {/* LeetCode Profile Link */}
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <a href={`https://leetcode.com/${username}`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Full LeetCode Profile
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
