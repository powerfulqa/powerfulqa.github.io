"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export function AboutDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full h-full p-0" variant="ghost">
          <Card className="w-full h-full hover:border-primary/50 transition-colors">
            <CardHeader className="text-left">
              <CardTitle>About Me</CardTitle>
              <CardDescription>
                Learn more about who I am and what I do
              </CardDescription>
            </CardHeader>
          </Card>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader className="text-left">
            <DrawerTitle>About Me</DrawerTitle>
            <DrawerDescription>
              Head of Testing – Certified Agile Leader with 20+ years of quality engineering experience
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-6">
            <div className="space-y-4">
              <p>
                Certified Agile QA leader based in Copenhagen with over two decades of experience shaping test strategy, building high-performing QA teams, and steering quality initiatives across gaming, finance, audio hardware, and SaaS organisations.
              </p>
              <p>
                I focus on aligning quality engineering with business objectives, mentoring testers and leaders, and introducing modern tooling that boosts release confidence without slowing delivery. I am a UK expat living in Denmark and an active mentor within the QA community.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Leadership & Strategic Focus</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Agile leadership & QA operating models</li>
                    <li>Stakeholder engagement & communication</li>
                    <li>Release governance and risk mitigation</li>
                    <li>Resource planning across global teams</li>
                    <li>Mentoring and coaching test leaders</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Technical & Testing Expertise</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>System, web, mobile, and device testing</li>
                    <li>Automation tooling (Zephyr, X-Ray, Jenkins)</li>
                    <li>Defect analytics and quality reporting</li>
                    <li>Test management across multiple squads</li>
                    <li>Continuous improvement of QA processes</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Scrum Alliance Member #1448356 • HNC in Computing • NVQ in Using Technology Level 2
              </p>
              <div className="flex flex-col gap-2 pt-2 text-sm">
                <Link href="mailto:chris.haycock+iopage@gmail.com" className="text-primary hover:underline">
                  chris.haycock+iopage@gmail.com
                </Link>
                <Link
                  href="https://www.linkedin.com/in/christopherhaycock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/christopherhaycock
                </Link>
              </div>
            </div>
          </div>
          <DrawerFooter className="sm:justify-start">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 