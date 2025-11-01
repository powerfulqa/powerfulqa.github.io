import Link from "next/link"

export const metadata = {
  title: "Christopher Haycock — CV",
}

export default function CVPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold">Christopher Haycock</h1>
        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <a href="mailto:chris.haycock+iopage@gmail.com" className="underline">
            chris.haycock+iopage@gmail.com
          </a>
          <span aria-hidden className="text-zinc-500">|</span>
          <Link href="https://www.linkedin.com/in/christopherhaycock/" target="_blank" className="underline">
            linkedin.com/in/christopherhaycock
          </Link>
          <span aria-hidden className="text-zinc-500">|</span>
          <span className="text-muted-foreground">UK Expat living in Denmark</span>
        </div>
      </header>

      <main className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Personal Summary</h2>
          <p>
            Certified Agile QA Leader with over 20 years of experience driving quality initiatives,
            building high-performing QA teams, and developing end-to-end testing strategies across
            industries including gaming, finance, and audio hardware. Proven track record of
            improving product quality through strategic process improvements, mentoring, and
            cross-functional collaboration.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Leadership & Strategic Skills</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Agile Leadership</li>
              <li>Quality Assurance Strategy</li>
              <li>Stakeholder Management</li>
              <li>Resource & Release Planning</li>
              <li>Risk Analysis & Mentorship</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">Certifications</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Agile Leadership (CAL-E, CAL-O, CAL-1)</li>
              <li>ISTQB Advanced / Foundation</li>
              <li>ITIL Foundation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Technical & Testing Skills</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>System, Manual, Web & Mobile Testing</li>
              <li>Defect Tracking, UI/UX Testing</li>
              <li>Automation tooling & Test Management</li>
              <li>Device & Virtual Device Testing</li>
              <li>JIRA, Confluence, CI pipelines</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">Education</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>HNC in Computing</li>
              <li>NVQ in Using Technology Level 2</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Professional Abilities</h2>
          <p>
            I am a T-shaped manager with 20+ years in QA, blending deep expertise with broad
            cross-industry experience to elevate QA standards and mentor Test Leads and teams. I
            drive quality initiatives, champion testing maturity, and foster collaboration between
            stakeholders and developers to deliver reliable software releases.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Employment History</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">Pascal Audio — Head of Testing</h4>
              <p className="text-sm text-muted-foreground">August 2023 — Present</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Overall management and leadership responsibility for software testing.</li>
                <li>Define test strategy and mentor the software team on testing best practices.</li>
                <li>Increase testing visibility and manage testing risks across the portfolio.</li>
              </ul>

              <h4 className="font-semibold mt-4">EPOS — Software Test Team Manager</h4>
              <p className="text-sm text-muted-foreground">Nov 2021 — July 2023</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Line responsibility for on-site test leads and resource management.</li>
                <li>Release Gate participant and mentor for in-house testers.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">SYBO Games — Senior QA Manager</h4>
              <p className="text-sm text-muted-foreground">July 2018 — Oct 2021</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>QA for high-profile mobile titles; mentored and grew QA team members.</li>
                <li>Implemented QA processes and supported release pipelines.</li>
              </ul>

              <h4 className="font-semibold mt-4">ExLibris — Senior QA</h4>
              <p className="text-sm text-muted-foreground">June 2016 — June 2018</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Attendance monitoring, process improvements and mentoring graduates.</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="/CV%20Website%20NOV%2025.pdf" download className="underline">
              Download PDF version
            </a>
            <span aria-hidden className="text-zinc-500">|</span>
            <Link href="/" className="underline">
              Back to home
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
