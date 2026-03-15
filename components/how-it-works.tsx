"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Network, Settings2, ShieldCheck } from "lucide-react"
import { steps } from "@/lib/landing-content"

gsap.registerPlugin(ScrollTrigger)

export function HowItWorks() {
  const container = useRef(null)

  useGSAP(
    () => {
      const steps = gsap.utils.toArray(".step-card")
      const connectors = gsap.utils.toArray(".step-connector")

      steps.forEach((step: any, i) => {
        gsap.fromTo(
          step,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      connectors.forEach((connector: any, i) => {
        gsap.fromTo(
          connector,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            delay: (i + 1) * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: connector,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    },
    { scope: container },
  )

  const stepIcons = [Network, Settings2, ShieldCheck]
  const stepColors = ["from-blue-500 to-cyan-600", "from-fuchsia-500 to-violet-600", "from-emerald-500 to-teal-600"]

  return (
    <section ref={container} id="how-it-works" className="py-16 md:py-20 px-4 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">How CipherScore works</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Teams define access once, users connect encrypted signals once, and Arcium MPC returns a private eligibility verdict that works across launches, airdrops, and governance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]

              return (
                <div key={index} className="flex items-center">
                  <div className="step-card flex flex-col items-center text-center max-w-xs">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${stepColors[index]} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="step-connector mx-8 flex-1 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]

              return (
                <div key={index} className="step-card">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stepColors[index]} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-neutral-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="step-connector w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 ml-8 mt-4 origin-top" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
