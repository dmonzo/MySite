import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"

export default function Experience() {
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
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Network & VoIP Engineer</h3>
            <p className="text-muted-foreground">IPFone | Aug 2023 - Current</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Upgraded hardware and software components to maintain system stability.</li>
              <li>Designed and implemented network infrastructures for various clients.</li>
              <li>Troubleshot and resolved complex network issues in a timely manner.</li>
              <li>Oversaw telecommunications update and maintenance projects.</li>
              <li>Configured routers, switches, and firewalls to optimize network performance.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Repair Agent, Geek Squad</h3>
            <p className="text-muted-foreground">Feb 2020 - Aug 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Communicated with customers about device issues and provided solutions.</li>
              <li>Disassembled, cleaned, and troubleshot equipment problems.</li>
              <li>Conducted software updates and installations on customer devices.</li>
              <li>Provided technical support over phone or through email for remote clients.</li>
              <li>Replaced damaged parts such as screens, batteries, and charging ports.</li>
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

