import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { initiatives } from "@/lib/initiatives"

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {initiatives.map((initiative) => (
        <Link
          key={initiative.slug}
          href={`/initiatives/${initiative.slug}`}
          className="group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
                  {initiative.statValue}
                </span>
                <span>{initiative.statLabel}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {initiative.teaser}
                </p>
                <p className="text-sm font-medium text-foreground/80">
                  {initiative.highlight}
                </p>
              </div>
              <div className="mt-auto flex items-center text-primary text-sm font-semibold">
                Read the story
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}