"use client"

import Link from 'next/link'
import { Timeline } from '@/components/timeline'
import { Button } from "@/components/ui/button"
import { Home, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react'

const careerEvents = [
  {
    date: new Date('2023-08-01'),
    company: "Pascal Audio",
    role: "Head of Testing",
    summary: "Own the global QA strategy for Pascal Audio's pro-audio portfolio, mentor a multidisciplinary test organisation, and provide risk visibility that protects rapid release cadences."
  },
  {
    date: new Date('2021-11-01'),
    company: "EPOS",
    role: "Software Test Team Manager",
    summary: "Led embedded audio and video QA teams, managing onsite and remote test leads, scaling automation, and orchestrating release gates across multiple flagship product lines."
  },
  {
    date: new Date('2018-07-01'),
    company: "SYBO Games",
    role: "Senior QA Manager",
    summary: "Directed QA for Subway Surfers and Blades of Brim, hiring and mentoring test talent, rolling out automation practices, and aligning feature delivery with art, design, and external partners."
  },
  {
    date: new Date('2016-06-01'),
    company: "Ex Libris",
    role: "Senior QA",
    summary: "Introduced mobile and tablet QA practices, created detailed manual and regression test suites, and championed best-practice testing rituals for enterprise education software."
  },
  {
    date: new Date('2015-09-01'),
    company: "Castleton Software",
    role: "Senior Software Tester",
    summary: "Owned the test regime for new functionality, coordinated specification reviews, managed defect triage, and supported customer UAT for housing software products."
  },
  {
    date: new Date('2014-06-01'),
    company: "Digital Animal",
    role: "QA Lead",
    summary: "Set up QA operations for marketing tech products, rolled out security testing procedures, and implemented automation tooling that strengthened client delivery confidence."
  },
  {
    date: new Date('2011-09-01'),
    company: "Inspired Gaming Group",
    role: "Integration and QA Developer",
    summary: "Ran the QA integration environment for gaming terminals, authored automated and manual test suites, and managed deployments at large-scale industry events."
  },
  {
    date: new Date('2009-11-01'),
    company: "Ranger Services",
    role: "Principal QA/Analyst",
    summary: "Developed new QA procedures, cleared significant defect backlogs, and documented test artefacts that improved delivery quality across the organisation."
  },
  {
    date: new Date('2004-11-01'),
    company: "E.ON UK Energy",
    role: "Support Test Analyst",
    summary: "Tested large-scale energy systems, coordinated with 3rd parties, maintained documentation, and coached users on delivering compliant releases."
  },
  {
    date: new Date('2001-09-01'),
    company: "Metering Services",
    role: "Junior Test Analyst",
    summary: "Built foundational QA skills by designing manual test cases, analysing specifications, and supporting internal stakeholders through early testing cycles."
  }
]

export default function Career() {
  const [showIntro, setShowIntro] = useState(true)

  const handleTimelineClick = () => {
    setShowIntro(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Career History</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
      </div>

      <Card className="mb-8 bg-muted/50">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">Scroll timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <MousePointer2 className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">Click milestone to view details</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Timeline 
        events={careerEvents} 
        onMilestoneClick={handleTimelineClick}
      />

      {showIntro && (
        <Card className="mt-8">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to my QA leadership timeline. Explore the journey from my first role as a Junior Test Analyst to leading global quality organisations for audio, gaming, and enterprise software companies. Click any milestone to see responsibilities and impact highlights.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

