import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ParticlesBackground } from "@/components/particles-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashiel Monzo - Network & VoIP Engineer Portfolio",
  description: "Personal portfolio showcasing Dashiel Monzo's projects and skills in Network Engineering and VoIP Systems",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
