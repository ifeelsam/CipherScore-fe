"use client"

import { motion } from "framer-motion"
import { Blocks, Gift, Landmark, ShieldCheck, Users } from "lucide-react"
import { useCases } from "@/lib/landing-content"

const useCaseIcons = [Blocks, Gift, Users, ShieldCheck, Landmark]
const gradients = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-fuchsia-500 to-violet-600",
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">Where CipherScore fits first</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Start with launches and governance, then extend the same private reputation layer anywhere you need trustworthy access control.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {useCases.map((useCase, index) => {
            const Icon = useCaseIcons[index]

            return (
              <motion.div
                key={useCase.title}
                className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-5 md:p-6 hover:bg-black/30 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
