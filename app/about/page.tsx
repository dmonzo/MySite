'use client'

import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { AnimatedLogo } from "@/components/animated-logo"
import { usePathname } from 'next/navigation'

export default function About() {
  const pathname = usePathname()

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 p-5 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <AnimatedLogo />
          <div className="space-x-4 flex items-center">
            <Link 
              href="/" 
              className={`hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-primary transition-colors ${pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`hover:text-primary transition-colors ${pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column with text content */}
          <div className="flex-1">
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
          </div>
          
          {/* Right column with image */}
          <div className="md:w-1/3 flex items-center justify-center md:sticky md:top-[200px] pt-8 md:pt-0">
            <Image
              src="/images/profile.png"
              alt="Dashiel Monzo"
              width={400}
              height={400}
              className="rounded-full"
              priority
            />
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

