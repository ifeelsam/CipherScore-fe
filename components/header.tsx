"use client"

import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ArrowRight, FileText } from "lucide-react"
import Image from "next/image"
import { WaitlistTrigger } from "@/components/waitlist-trigger"
import { WhitepaperComingSoon } from "@/components/whitepaper-coming-soon"

export function Header() {
  const headerRef = useRef(null)
  const navItems = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/#developers", label: "Developers" },
  ]

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
    })
  }, [])

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full">
        <TransitionLink href="/" className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
          <Image src="/favicon.png" alt="CipherScore logo" width={28} height={28} className="rounded" />
          CipherScore
        </TransitionLink>

        <nav className="hidden md:flex items-center gap-5 text-sm text-white">
          {navItems.map((item) => (
            <TransitionLink key={item.href} href={item.href} className="hover:text-cyan-400 transition-colors">
              {item.label}
            </TransitionLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <WhitepaperComingSoon
              className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white font-medium py-2 px-3.5 rounded-full hover:bg-white/20 transition-all duration-300"
              label="Whitepaper"
              icon={<FileText size={16} />}
            />
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <WaitlistTrigger
              buttonClassName="bg-gradient-to-r from-cyan-500 to-blue-600 text-sm text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              label="Early Access"
              icon={<ArrowRight size={16} className="sm:hidden" />}
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
