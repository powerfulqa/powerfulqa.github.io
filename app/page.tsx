export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Gareth Phillips
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Software Engineering Leader, AI Enthusiast, Tech Geek & Gamer
          </p>
          <div className="max-w-3xl mx-auto space-y-3 mb-4 px-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              With over 20 years of experience in software development and more than a decade in leadership, I specialise in guiding teams and organisations through growth, change, and complex challenges. My career has spanned startups, scale-ups, and large enterprises, equipping me with the insight to adapt strategies to different stages of business development while maintaining a focus on delivering impactful results.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              I have a proven track record of shaping technical strategies that align with business objectives, building high-performing teams, and fostering a culture of open communication and collaboration. My leadership style is grounded in clarity, accountability, and empowering others to excel.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              My experience spans a range of sectors, including Med-Tech, Finance, Security, Shipping, Commodities and Energy Trading, Education, Local Government, and Elite Sports Performance. This diverse background has honed my ability to deliver innovative, scalable, and commercially sound solutions across industries.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mecster09"
              target="_blank"
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="mailto:gkp2105@gmail.com"
              className="border border-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="container mx-auto px-4 pt-4 pb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Music Master</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A NextJS web application that enables users to sync playlists between Spotify and YouTube Music. 
              Features OAuth login for both platforms and seamless playlist transfer functionality.
            </p>
            <a
              href="https://github.com/mecster09/music-master"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Building Blocks</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A responsive NextJS progressive web application designed for efficient task management. 
              Allows users to easily add and manage their tasks with a modern interface.
            </p>
            <a
              href="https://github.com/mecster09/building-blocks"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Godot Game</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A top-down game created using Godot 4 engine. This project serves as a learning
              experience for game development with the Godot engine.
            </p>
            <a
              href="https://github.com/mecster09/godot-game"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m always open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mecster09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/gkphillips9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gkp2105@gmail.com"
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
