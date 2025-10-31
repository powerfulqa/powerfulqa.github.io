import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FeaturedProjects } from "@/components/featured-projects"
import { GithubProjects } from "@/components/github-projects"
import { AboutDrawer } from "@/components/about-drawer"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Christopher Haycock</h1>
  <p className="text-xl md:text-2xl text-center mb-8">Head of Testing – Certified Agile Leader with 20+ years of quality engineering experience</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="block h-full group transition-transform hover:-translate-y-1">
          <AboutDrawer />
        </div>
        <Link 
          href="https://github.com/powerfulqa" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block h-full group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>GitHub Portfolio</CardTitle>
              <CardDescription className="text-muted-foreground">
                Explore testing utilities, automation experiments, and QA leadership artifacts
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link 
          href="/career" 
          className="block h-full group transition-transform hover:-translate-y-1"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>Career History</CardTitle>
              <CardDescription className="text-muted-foreground">
                Trace my progression from hands-on testing to global QA leadership
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
  <h2 className="text-3xl font-bold mb-6 px-4 mt-8">Signature Initiatives</h2>
  <FeaturedProjects />   
  <h2 className="text-3xl font-bold mb-6 px-4 mt-12">GitHub Projects</h2>
  <GithubProjects />
    </div>
  )
}

