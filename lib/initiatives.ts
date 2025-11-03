export interface Initiative {
  slug: string
  title: string
  teaser: string
  summary: string
  statLabel: string
  statValue: string
  highlight: string
  softImpact: string
  focusAreas: string[]
  outcomes: {
    title: string
    description: string
  }[]
  narrative: string[]
}

export const initiatives: Initiative[] = [
  {
    slug: "pascal-audio-qa-transformation",
    title: "Pascal Audio QA Transformation",
    teaser:
      "Led QA strategy, visibility, and coaching for Pascal Audio's pro-audio software portfolio.",
    summary:
      "Headed testing for Pascal Audio by defining the quality strategy, increasing portfolio visibility, mentoring the team, and keeping risk conversations grounded in real data.",
    statLabel: "Portfolio coverage",
    statValue: "100%",
    highlight:
      "Combined hands-on test strategy work with people leadership so risks, scope, and staffing stayed aligned across the software portfolio.",
    softImpact:
      "Built psychological safety by translating pressure into clear conversations and keeping engineers supported when decisions were tough.",
    focusAreas: ["QA leadership", "Release governance", "Team coaching"],
    outcomes: [
      {
        title: "Unified QA operating model",
        description:
          "Stood up a repeatable test strategy that spans embedded DSP platforms and partner integrations, eliminating siloed plans across squads and giving engineers confidence in the change path.",
      },
      {
        title: "Executive-level observability",
        description:
          "Delivered clear status and risk reviews so stakeholders and executives could see portfolio progress without relying on ad-hoc updates, creating healthier conversations during release crunch.",
      },
      {
        title: "Capability uplift",
        description:
          "Mentored engineers and testers through structured coaching and pairing sessions so modern QA practices became part of day-to-day delivery and teammates felt supported taking on new responsibilities.",
      },
    ],
    narrative: [
  "Pascal Audio brought me in to own testing across their software programmes. I created the test strategy, established clear coverage expectations, and worked directly with engineers to ensure we hit the quality bar without burning out the team.",
  "To give sponsors confidence, I introduced consistent reporting and risk reviews that translated delivery signals into the language leadership needed for decisions, which made tough conversations calmer and more objective.",
  "I also focussed on people. Mentoring sessions, hiring support, and structured coaching helped the team grow their QA capability while we scaled the work, and they knew my door was open when decisions felt messy.",
    ],
  },
  {
    slug: "epos-test-engineering-leadership",
    title: "EPOS Test Engineering Leadership",
    teaser:
      "Scaled a hybrid QA organisation for premium audio and video products while safeguarding release gates across the globe.",
    summary:
      "At EPOS I coordinated a 19-person hybrid QA organisation that supported multiple flagship device lines, strengthening release gates while keeping the team aligned across locations.",
    statLabel: "Hybrid QA team",
    statValue: "19 engineers",
    highlight:
  "Kept on-site leads and remote testers aligned to the same expectations, balancing people leadership, release gates, and stakeholder liaison work.",
    softImpact:
      "Held open space for leads to trial ideas, backed them in exec forums, and encouraged thoughtful trade-offs instead of rushed fixes.",
    focusAreas: ["Resource strategy", "Team leadership", "Release orchestration"],
    outcomes: [
      {
        title: "Release gate discipline",
        description:
          "Rebuilt quality gates for embedded firmware and companion apps, ensuring every launch hit the bar without last-minute scrambles and giving teams space to make thoughtful trade-offs.",
      },
      {
        title: "Team enablement",
        description:
          "Provided mentoring, coaching, and leadership coverage for four on-site test leads and the wider remote team so expectations stayed clear, decisions were considered, and growth paths remained active.",
      },
      {
        title: "Resource coordination",
        description:
          "Balanced on-site and remote staffing, aligning 19 testers with product priorities and keeping communication tight with the dedicated automation lead so everyone felt heard and equipped to deliver.",
      },
    ],
    narrative: [
  "EPOS trusted me with line responsibility for multiple test leads and a sizable remote QA group. My first job was making sure everyone understood their role in release preparation, had space to ask questions, and that communication loops were running smoothly.",
  "Together with product and engineering stakeholders, we tightened release gates so every firmware and companion app launch had clear evidence before go/no-go calls, allowing the team to back their recommendations with confidence.",
  "I kept my availability high for soundboard conversations, encouraged the leads to test their ideas in a trusted space, and made sure each decision was well-rounded. The result was a supportive environment that still held a high bar for the releases we owned.",
    ],
  },
  {
    slug: "sybo-games-quality-enablement",
    title: "SYBO Games Quality Enablement",
    teaser:
      "Enabled live-ops excellence for Subway Surfers and Blades of Brim through modern QA practices and cross-discipline collaboration.",
    summary:
      "For SYBO's live mobile franchises I architected QA processes that matched the speed of live-ops, aligning art, design, and engineering while mentoring a rapidly growing team.",
    statLabel: "Live franchises",
    statValue: "2 top titles",
    highlight:
      "Kept Subway Surfers and Blades of Brim shipping confidently by embedding QA in the creative loop and formalising release reviews.",
    softImpact:
      "Protected morale during constant release cycles, ensuring creatives felt heard and testers had room to provide grounded player advocacy.",
    focusAreas: ["Live-ops QA", "Team building", "Cross-discipline alignment"],
    outcomes: [
      {
        title: "Live-ops rhythm",
        description:
          "Lockstepped QA with the cadence of live content drops so updates could ship on schedule without compromising player trust, keeping cross-discipline teams calm under pressure.",
      },
      {
        title: "Talent pipeline",
        description:
          "Led hiring and mentoring programs that brought in fresh QA talent, paired them with experienced staff, and gave everyone clear growth paths within the studio.",
      },
      {
        title: "Creative collaboration",
        description:
          "Partnered with art and design to translate creative vision into actionable quality criteria, keeping teams aligned on player experience.",
      },
    ],
    narrative: [
    "SYBO’s teams move fast to delight millions of players. My role was to make sure quality was never an afterthought, even when timelines were tight, and to keep morale steady during high-energy launches.",
  "We put in place light-weight but disciplined QA rituals that fit the live-ops tempo - reviewing builds earlier, automating smoke checks, and setting player experience bars that everyone understood, so every discipline could raise concerns early.",
    "Along the way I invested in people, recruiting and mentoring new QA managers so the studio had the leadership bench strength to keep evolving its flagship titles, and junior talent always had someone to learn from.",
    ],
  },
]

export const initiativeMap = new Map(initiatives.map((initiative) => [initiative.slug, initiative]))

export function getInitiative(slug: string) {
  return initiativeMap.get(slug)
}
