"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/landing-content"

export function StatsBar() {
  return (
    <section className="px-4 -mt-6 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
