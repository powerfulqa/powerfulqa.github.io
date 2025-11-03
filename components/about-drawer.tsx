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
            <div className="space-y-4 max-h-[60vh] overflow-auto">
              <p>
                I'm a father living in Skovlunde with my fiance and our toddler. We're a multi-lingual household, and the blend of languages and routines keeps home life lively and grounded.
              </p>
              <p>
                Away from releases and quality dashboards you'll find me gaming, tinkering with small DIY builds, or experimenting with new programming languages. Lately that's meant dabbling in AI side projects to see where the tech can take QA teams next.
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