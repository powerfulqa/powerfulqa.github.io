import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full-Stack Developer & Tech Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">Project {i}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description of project {i}. This is a brief overview of what the
                project does and the technologies used.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:opacity-80 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
