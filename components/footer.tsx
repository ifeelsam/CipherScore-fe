"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { GlowScene } from "./glow-scene"
import { TransitionLink } from "./transition-link"
import { landingLinks } from "@/lib/landing-content"

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <GlowScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Run a fair launch without exposing your users.</h2>
        <p className="text-base md:text-lg text-neutral-300 mb-3">CipherScore helps DAOs gate access with MPC-backed reputation proofs.</p>
        <p className="text-base text-neutral-400 mb-8">Prove you belong. Without revealing anything.</p>
        <TransitionLink href={landingLinks.earlyAccess}>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full text-base transition-transform hover:scale-105">
            Request Early Access
          </button>
        </TransitionLink>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} CipherScore. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <TransitionLink href={landingLinks.x} className="text-neutral-400 hover:text-white">
              X (Twitter)
            </TransitionLink>
            {/* <TransitionLink href={landingLinks.github} className="text-neutral-400 hover:text-white">
              GitHub
            </TransitionLink>
            <TransitionLink href={landingLinks.discord} className="text-neutral-400 hover:text-white">
              Discord
            </TransitionLink> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
