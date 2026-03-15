"use client"

import { motion } from "framer-motion"
import { poweredBy } from "@/lib/landing-content"

export function BuiltOn() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">Built on the right rails</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Solana provides the launch surface, and Arcium MPC provides the private computation layer underneath every eligibility check.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {poweredBy.map((item, index) => (
            <motion.div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-5 md:p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 px-4 text-sm md:text-base font-semibold text-white">
                {item.name}
              </div>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
