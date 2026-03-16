"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Scene } from "@/components/scene"
import { ArrowRight, FileText, Network, ShieldCheck, Sparkles } from "lucide-react"
import { heroContent } from "@/lib/landing-content"
import { WaitlistTrigger } from "@/components/waitlist-trigger"
import { WhitepaperComingSoon } from "@/components/whitepaper-coming-soon"

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" },
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-buttons",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
          "-=0.5",
        )
        .fromTo(".trust-chips", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo(
          ".holo-panel",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.4",
        )
    },
    { scope: container },
  )

  const title = heroContent.title
  const splitTitle = title.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block">{word}&nbsp;</span>
    </span>
  ))

  return (
    <div ref={container} className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 pt-32 pb-16 md:pt-36 md:pb-20">
        <h1
          className="hero-title font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-5 max-w-4xl"
          style={{
            lineHeight: 1.18,
            paddingBottom: "0.28em",
            marginBottom: "0.28em",
          }}
        >
          {splitTitle}
        </h1>

        <motion.p
          className="hero-subtitle text-base sm:text-lg lg:text-xl max-w-2xl mb-7 text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {heroContent.subtitle}
        </motion.p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-3 mb-10">
          <motion.div whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }} whileTap={{ scale: 0.95 }}>
            <WaitlistTrigger
              buttonClassName="flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-sm md:text-base text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              label="Request Early Access"
              icon={<ArrowRight size={18} />}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }} whileTap={{ scale: 0.95 }}>
            <WhitepaperComingSoon
              className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-sm md:text-base text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10"
              label="Whitepaper Coming Soon"
              icon={<FileText size={18} />}
            />
          </motion.div>
        </div>

        <div className="trust-chips flex flex-wrap justify-center gap-2.5 mb-10">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 px-3.5 py-2 rounded-full text-xs sm:text-sm">
            <ShieldCheck size={16} />
            {heroContent.chips[0]}
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-purple-500/30 text-purple-400 px-3.5 py-2 rounded-full text-xs sm:text-sm">
            <Network size={16} />
            {heroContent.chips[1]}
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-3.5 py-2 rounded-full text-xs sm:text-sm">
            <Sparkles size={16} />
            {heroContent.chips[2]}
          </div>
        </div>

        <div className="holo-panel bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-7 max-w-4xl w-full">
          <div className="text-left ">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-5 md:p-6 font-mono text-xs sm:text-sm">
              <div className="mx-auto max-w-2xl">
                <div className="text-cyan-400 mb-2">// Private eligibility attestation</div>
                <div className="text-white">
                  <span className="text-purple-400">const</span> attestation = <span className="text-yellow-400">await</span>{" "}
                  <span className="text-cyan-400">cipherScore</span>.<span className="text-green-400">compute</span>(
                  {"{"}
                </div>
                <div className="text-white ml-4">
                  ruleSetId: <span className="text-orange-400">"dao-launch-v1"</span>,
                </div>
                <div className="text-white ml-4">
                  wallets: <span className="text-green-400">["solana", "evm"]</span>,
                </div>
                <div className="text-white ml-4">
                  signals: <span className="text-green-400">["socials", "credentials"]</span>,
                </div>
                <div className="text-white ml-4">
                  privacy: <span className="text-green-400">"mpc"</span>
                </div>
                <div className="text-white">{"}"});</div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3 text-left">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs sm:text-sm text-neutral-400">Signals</div>
              <div className="mt-1 text-sm sm:text-base text-white font-semibold">Wallets, socials, credentials</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs sm:text-sm text-neutral-400">Rules</div>
              <div className="mt-1 text-sm sm:text-base text-white font-semibold">Whale caps, thresholds, tiered access</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs sm:text-sm text-neutral-400">Output</div>
              <div className="mt-1 text-sm sm:text-base text-white font-semibold">A single attestation the DAO can verify</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
