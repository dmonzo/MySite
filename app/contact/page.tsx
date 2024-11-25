import Link from 'next/link'
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Contact() {
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
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4">Feel free to reach out to me for any inquiries or opportunities:</p>
              <ul className="space-y-2">
                <li>Email: dashmonzo101@gmail.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/dashiel-monzo-47727a245" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click Here</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
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

