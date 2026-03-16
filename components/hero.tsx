"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Scene } from "@/components/scene"
import { ArrowRight, BadgeCheck, FileText, Network, ShieldCheck, SlidersHorizontal, Sparkles, WalletCards } from "lucide-react"
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

        <div className="holo-panel bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-6 max-w-5xl w-full">
          <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(5,8,16,0.92),rgba(5,7,13,0.84))] px-4 py-5 md:px-7 md:py-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_24%),radial-gradient(circle_at_bottom_center,rgba(168,85,247,0.12),transparent_32%)]" />
            <div className="relative">
              <div className="flex flex-col gap-4 border-b border-white/8 pb-5 text-left md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300/80">Eligibility pipeline</div>
                  <div className="mt-2 text-2xl md:text-3xl font-semibold text-white">One private flow from signals to on-chain verification</div>
                </div>
                <div className="flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 md:self-auto">
                  <ShieldCheck size={14} />
                  MPC-secured verdict
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
                <div className="rounded-[26px] border border-cyan-500/20 bg-[linear-gradient(180deg,rgba(16,28,38,0.56),rgba(9,14,22,0.72))] p-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/12 text-cyan-300">
                      <WalletCards size={20} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300/70">Step 01</div>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.24em] text-neutral-500">Signals</div>
                  <div className="mt-2 text-xl font-semibold text-white">Connected identity inputs</div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Wallet history, social verification, and credentials come together in one encrypted profile.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-300">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">Solana + EVM wallets</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">X / Discord / GitHub</span>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center px-1">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400/60 to-blue-400/20" />
                </div>

                <div className="rounded-[26px] border border-purple-500/18 bg-[linear-gradient(180deg,rgba(17,14,34,0.62),rgba(9,10,22,0.78))] p-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/12 text-purple-300">
                      <Network size={20} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-purple-300/70">Step 02</div>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.24em] text-neutral-500">Compute</div>
                  <div className="mt-2 text-xl font-semibold text-white">Arcium MPC evaluates the rules</div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    DAO thresholds, whale caps, and allocation logic are computed privately across MPC nodes.
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-purple-300/70">Private compute state</div>
                    <div className="mt-2 text-sm font-medium text-white">Encrypted and split across nodes</div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center px-1">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-purple-400/50 to-emerald-400/30" />
                </div>

                <div className="rounded-[26px] border border-emerald-500/18 bg-[linear-gradient(180deg,rgba(8,32,28,0.58),rgba(6,17,16,0.82))] p-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-300">
                      <BadgeCheck size={20} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-300/70">Step 03</div>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.24em] text-neutral-500">Output</div>
                  <div className="mt-2 text-xl font-semibold text-white">Attestation ready for the launch contract</div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    The app or contract receives a private eligibility verdict without exposing the underlying user data.
                  </p>
                  <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-4 py-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/70">Verifier</div>
                      <div className="mt-1 text-sm font-medium text-white">Launch contract accepts attestation</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/12 px-3 py-1.5 text-sm font-semibold text-emerald-300">
                      Eligible
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <WalletCards size={16} className="text-cyan-300" />
                    Signals
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">Wallets, socials, and credentials live in one portable reputation profile.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <SlidersHorizontal size={16} className="text-purple-300" />
                    Rules
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">DAO teams set access thresholds, anti-whale logic, and distribution tiers without code.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <BadgeCheck size={16} className="text-emerald-300" />
                    Output
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">Only the attestation result reaches the app, verifier, or launch contract.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
