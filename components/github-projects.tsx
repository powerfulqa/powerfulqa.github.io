import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  link: string
  focus: string
  stack: string[]
}

const githubProjects: Project[] = [
  {
    title: "Aszune AI Bot",
    description:
  "Discord bot for the gaming community that combines Perplexity-powered chat, real-time analytics dashboards, and a 1,000-test CI/CD pipeline.",
    link: "https://github.com/powerfulqa/aszune-ai-bot",
    focus: "Discord AI ops",
    stack: ["Node.js", "Perplexity API", "SQLite", "Discord.js"],
  },
  {
    title: "Passive Ramscoop",
    description:
  "Modern Starsector mod upkeep - automatic fuel and supply gathering with LunaLib-powered configuration, CI validation, and release tooling.",
    link: "https://github.com/powerfulqa/Passive-Ramscoop",
    focus: "Starsector modding",
    stack: ["Java", "LunaLib", "Starsector API", "PowerShell"],
  },
]

export function GithubProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {githubProjects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1">
                  Personal R&amp;D
                </span>
                <span>{project.focus}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-muted-foreground">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-primary text-sm font-semibold">
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
