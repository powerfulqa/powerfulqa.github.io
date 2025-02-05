"use client"

import Link from 'next/link'
import { Timeline } from '@/components/timeline'
import { Button } from "@/components/ui/button"
import { Home, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react'

const careerEvents = [
  {
    date: new Date('2024-06-01'),
    company: "Thermofisher Scientific (CRG)",
    role: "Director, Sofware Engineering",
    summary: "Deliver the software engineering function spanning architecture, application development, platform, test and operations."
  },
  {
    date: new Date('2020-05-01'),
    company: "Genomics England",
    role: "Director of Engineering & Operations",
    summary: "Led a department of 105 professionals spanning Python, React, High-Performance Computing (HPC), networks, cloud platforms and DevSecOps. Directed software and platform development, quality assurance (QA), and delivery, encompassing junior to principal and manager levels."
  },
  {
    date: new Date('2019-10-01'),
    company: "Clarksons Platou",
    role: "Head of Engineering (Platforms)",
    summary: "Retained accountability and responsibility for the product platform in both Azure and private cloud, covering all products globally operating 24/7 and led the cloud platform, infrastructure, and Site Reliability Engineering teams globally."
  },
  {
    date: new Date('2018-06-01'),
    company: "Brady Plc",
    role: "Global Head of Engineering",
    summary: "Guided global engineering and architecture leadership to a department of over 100 technical professionals spanning seven international locations and directed the technical delivery of products in six distinct programming languages and coordinated communication across two spoken languages."
  },
  {
    date: new Date('2015-10-01'),
    company: "Capita Software Solutions",
    role: "Lead Solutions Architect",
    summary: "Led the architecture and solutions team in the Local Government and the Education division and functioned as principal architect on technical designs for existing and new product solutions."
  },
  {
    date: new Date('2014-10-01'),
    company: "EDGE10(UK) Limited",
    role: "Head of Engineering (Platforms)",
    summary: "Owned all infrastructure projects as the principal cloud architect, overseeing coordination among the infrastructure teams in both Russia and the UK."
  },
  {
    date: new Date('2006-09-01'),
    company: "Ranger Service Limited",
    role: "Head of Software Engineering",
    summary: "Started as an engineer before promotions through to Head of Software Engineering. In this role I supervised a cross-functional team of 35 in-house engineers and 60+ outsourced engineers, directing the full software lifecycle of core projects and ensuring on-time delivery, adherence to specifications, and elevated quality standards."
  },
  {
    date: new Date('1997-07-01'),
    company: "Various Companies",
    role: "Software Engineer / IT Consultant",
    summary: "Began journey in engineering after leaving school, focusing on full stack development and IT support."
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
              Welcome to my career timeline. This interactive journey showcases my professional 
              progression from a Computer Science student to my current role as a Tech Leader. 
              Each milestone represents a significant step in my career, with details about my 
              roles and key achievements. Click on any milestone to explore more.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

