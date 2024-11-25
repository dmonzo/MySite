import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg",
    link: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive weather application using React and OpenWeatherMap API.",
    image: "/placeholder.svg",
    link: "https://github.com/yourusername/weather-app"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A Kanban-style task management app built with Vue.js and Firebase.",
    image: "/placeholder.svg",
    link: "https://github.com/yourusername/task-management"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This very website, built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg",
    link: "https://github.com/yourusername/portfolio"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} id={`project-${project.id}`} className="border rounded-lg p-6 transition-all hover:shadow-lg scroll-mt-20">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <Button asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">View Project</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

