import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "Pascal Audio QA Transformation",
    description: "Driving the end-to-end test strategy for Pascal Audio's pro-audio platforms, building a resilient QA function, and providing portfolio-wide quality insights to leadership.",
    link: "https://www.linkedin.com/in/christopherhaycock/"
  },
  {
    title: "EPOS Test Engineering Leadership",
    description: "Scaled embedded audio and video QA squads and orchestrated release governance across global teams.",
    link: "https://www.linkedin.com/in/christopherhaycock/"
  },
  {
    title: "SYBO Games Quality Enablement",
    description: "Introduced structured QA practices for Subway Surfers and Blades of Brim, mentoring testers and aligning delivery with art and design partners.",
    link: "https://www.linkedin.com/in/christopherhaycock/"
  }
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <Link 
          key={project.title} 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex items-center text-primary text-sm">
                Learn more 
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 