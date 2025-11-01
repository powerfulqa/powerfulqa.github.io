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
                <li>Overall management and leadership responsibility for the testing of software.</li>
                <li>Hands on: defining the test strategy, build test plans, and ensure coverage.</li>
                <li>Mentor software team in testing best practices and uplift QA capability.</li>
                <li>Identify and manage testing risks; ensure appropriate mitigation strategies.</li>
                <li>Foster collaboration between stakeholders, developers and testers to improve delivery.</li>
              </ul>

              <h4 className="font-semibold mt-4">EPOS — Software Test Team Manager</h4>
              <p className="text-sm text-muted-foreground">Nov 2021 — July 2023</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Line responsibility for on-site Test Leads and resource management for 19 testers.</li>
                <li>Release Gate participant and executor; championed quality gates across releases.</li>
                <li>Mentored and developed in-house testers and improved test practices.</li>
                <li>Liaison for manual and automation testing strategies with product and engineering.</li>
              </ul>

              <h4 className="font-semibold mt-4">SYBO Games — Senior QA Manager</h4>
              <p className="text-sm text-muted-foreground">July 2018 — Oct 2021</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>QA for Subway Surfers and Blades of Brim; provided QA leadership for live services.</li>
                <li>Mentor for testers, involved in hiring and building QA capability across teams.</li>
                <li>Implemented QA processes and supported CI/CD release pipelines.</li>
                <li>Collaborated with design and art partners to align quality goals with product vision.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">ExLibris — Senior QA</h4>
              <p className="text-sm text-muted-foreground">June 2016 — June 2018</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Attendance monitoring and QA process improvements across teams.</li>
                <li>Helped mentor graduates and junior testers, improving onboarding and skills.</li>
              </ul>

              <h4 className="font-semibold mt-4">Digital Animal — Lead QA</h4>
              <p className="text-sm text-muted-foreground">June 2014 — July 2015</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Led rollout of digital security procedures and set up testing processes.</li>
                <li>Implemented automation testing software and best practices for test teams.</li>
              </ul>

              <h4 className="font-semibold mt-4">Inspired Gaming — Integration and QA Developer</h4>
              <p className="text-sm text-muted-foreground">Sept 2011 — May 2014</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Integration and QA development; setup server room and gaming terminals for events.</li>
                <li>Migrated VMs and wrote automated integration tests for the platform.</li>
              </ul>

              <h4 className="font-semibold mt-4">Ranger Services — Principal QA/Analyst</h4>
              <p className="text-sm text-muted-foreground">Nov 2009 — March 2011</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Collaborated on strategies to improve QA and helped with Dev Team backlog grooming.</li>
                <li>Led small automation/POC efforts and supported test analysts.</li>
              </ul>

              <h4 className="font-semibold mt-4">Earlier roles</h4>
              <p className="text-sm text-muted-foreground">2001 — 2009</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Senior Tester / Principal Test Analyst roles across multiple organisations.</li>
                <li>Responsibilities included test execution, mentoring, and customer UAT support.</li>
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
