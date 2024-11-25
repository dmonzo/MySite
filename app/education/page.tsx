import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"

export default function Education() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 p-5 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashiel Monzo</h1>
          <div className="space-x-4 flex items-center">
            <Link href="/" className="hover:text-primary">About</Link>
            <Link href="/experience" className="hover:text-primary">Experience</Link>
            <Link href="/education" className="hover:text-primary">Education</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Tech Launch Academy</h3>
            <p className="text-muted-foreground">Jan 2023 - Aug 2023</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Miami Killian Senior High School</h3>
            <p className="text-muted-foreground">Graduated Jun 2018</p>
            <p>Cambridge Diploma</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>CompTIA Network+ Certification</li>
              <li>Google Technical Support Fundamentals</li>
              <li>CompTIA IT Fundamentals (ITF+) Certification</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Dashiel Monzo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

