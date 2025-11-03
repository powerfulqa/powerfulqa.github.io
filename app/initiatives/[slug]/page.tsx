import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { initiatives, getInitiative } from "@/lib/initiatives"

interface InitiativePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return initiatives.map((initiative) => ({ slug: initiative.slug }))
}

export function generateMetadata({ params }: InitiativePageProps): Metadata {
  const initiative = getInitiative(params.slug)

  if (!initiative) {
    return {
      title: "Initiative not found",
    }
  }

  return {
  title: `${initiative.title} - Christopher Haycock`,
    description: initiative.teaser,
  }
}

export default function InitiativeDetail({ params }: InitiativePageProps) {
  const initiative = getInitiative(params.slug)

  if (!initiative) {
    return notFound()
  }

  const current = initiative

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            Signature initiative
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            {current.title}
          </h1>
        </div>
        <div className="grid gap-2 text-sm text-muted-foreground md:text-right">
          <div className="text-xs uppercase tracking-wide">{current.statLabel}</div>
          <div className="text-2xl font-semibold text-foreground">{current.statValue}</div>
        </div>
      </div>

      <div className="mb-10 max-w-3xl text-lg text-muted-foreground">
        <p className="leading-relaxed">
          {current.summary}
        </p>
      </div>

      <section className="mb-12 grid gap-6 md:grid-cols-3">
        {current.outcomes.map((outcome) => (
          <div key={outcome.title} className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{outcome.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {outcome.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12 max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
        {current.narrative.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="mb-12">
        <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Focus areas</h3>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {current.focusAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center rounded-full border border-border px-3 py-1"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-12 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          Interested in the playbook behind this initiative? Let’s talk about how it could translate to your organisation.
        </p>
        <div className="flex gap-3">
          <Link
            href="mailto:chris.haycock+iopage@gmail.com"
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Start a conversation
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Back to homepage
          </Link>
        </div>
      </footer>
    </div>
  )
}
