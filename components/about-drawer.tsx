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
              Tech Leader, AI Enthusiast, Tech Geek & Gamer
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-6">
            <div className="space-y-4">
              <p>
                Hello! I'm a passionate tech leader and software engineer with expertise in building modern web applications and scalable systems.
              </p>
              <p>
                With over X years of experience in the tech industry, I've worked with various technologies and frameworks, always staying at the forefront of innovation.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or gaming.
              </p>
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