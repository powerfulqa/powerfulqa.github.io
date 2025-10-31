import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex justify-center space-x-4">
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
    </footer>
  )
}

