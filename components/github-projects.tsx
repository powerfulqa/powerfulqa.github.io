import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  link: string
}

const githubProjects: Project[] = [
  {
    title: "Aszune AI Bot",
  description: "Experimenting with serverless functions, OpenAI orchestration, and workflow automation to prototype an intelligent QA sidekick for hobby projects.",
    link: "https://github.com/powerfulqa/aszune-ai-bot"
  },
  {
    title: "Passive Ramscoop",
    description: "A personal sandbox exploring passive resource-gathering mechanics, telemetry loops, and automation patterns for game-inspired tooling.",
    link: "https://github.com/powerfulqa/Passive-Ramscoop"
  },
]

export function GithubProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {githubProjects.map((project) => (
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
                View on GitHub
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
