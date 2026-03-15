import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GsapProvider } from "@/components/gsap-provider"
import { TransitionProvider } from "@/components/transition-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CipherScore - Private Eligibility and Reputation for Solana",
  description:
    "Privacy-preserving eligibility and reputation proofs for Solana DAOs, token launches, airdrops, and governance powered by Arcium MPC.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0a] text-white">
        <GsapProvider>
          <TransitionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </TransitionProvider>
        </GsapProvider>
      </body>
    </html>
  )
}
