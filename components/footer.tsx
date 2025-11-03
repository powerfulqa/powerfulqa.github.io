import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { siteVersion } from '@/lib/version'

export function Footer() {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="text-xs uppercase tracking-wide text-muted-foreground self-start">
          Version {siteVersion}
        </span>
        <div className="flex w-full justify-center space-x-4 sm:flex-1">
          <Link href="https://github.com/powerfulqa" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/christopherhaycock/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:chris.haycock+iopage@gmail.com">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

