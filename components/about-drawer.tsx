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
              I've spent my career turning complex problems into elegant software solutions, evolving from a hands-on engineer to a strategic leader. With deep experience across startups, scale-ups, and enterprise environments, I know how to navigate high-growth phases, steer teams through change, and cultivate a culture of accountability, innovation, and open communication.
              </p>
              <p>
              My expertise spans Med-Tech, Finance, Security, Shipping, Commodities & Energy Trading, Education, Local Government, and Elite Sports Performance—giving me a unique perspective on adapting technology to diverse industries.
              </p>
              <p>
              When I’m not leading teams or solving technical challenges, I’m building games in Godot, crafting personal web apps, gaming on PC, or enjoying time with my wife and daughter.
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