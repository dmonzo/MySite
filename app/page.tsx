'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedLogo } from "@/components/animated-logo"
import { ParticlesBackground } from "@/components/particles-background"
import { motion } from 'framer-motion'
import { useTheme } from "next-themes"

const AnimatedLink = motion(Link)

const HomePage = () => {
  const { theme } = useTheme()

  return (
    <div className="relative flex flex-col min-h-screen">
      <ParticlesBackground />
      <div className={`relative z-10 flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black/30' : 'bg-white/30'}`}>
        <header className={`sticky top-0 z-20 p-5 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm`}>
          <nav className="container mx-auto flex justify-between items-center">
            <AnimatedLogo />
            <div className="space-x-6 flex items-center">
              <AnimatedLink 
                href="/" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </AnimatedLink>
              <AnimatedLink 
                href="/about" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </AnimatedLink>
              <AnimatedLink 
                href="/contact" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </AnimatedLink>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 text-center space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m Dashiel.
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
                Network & Software Engineer uniting seamless connectivity with intuitive software solutions.
              </p>
              <div className="pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
                >
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className={`${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm p-4`}>
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dashiel Monzo. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HomePage

