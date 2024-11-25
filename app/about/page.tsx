import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative z-10 flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-20 p-5 bg-background/80 backdrop-blur-sm border-b">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashiel Monzo</h1>
            <div className="space-x-6 flex items-center">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold">Network & VoIP Engineer</h4>
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
                <h4 className="text-xl font-semibold">Repair Agent, Geek Squad</h4>
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
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">Tech Launch Academy</h4>
                <p className="text-muted-foreground">Jan 2023 - Aug 2023</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Miami Killian Senior High School</h4>
                <p className="text-muted-foreground">Graduated Jun 2018</p>
                <p>Cambridge Diploma</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Certifications</h4>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>CompTIA Network+ Certification</li>
                  <li>Google Technical Support Fundamentals</li>
                  <li>CompTIA IT Fundamentals (ITF+) Certification</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-muted p-4">
          <div className="container mx-auto text-center text-muted-foreground">
            © {new Date().getFullYear()} Dashiel Monzo. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

