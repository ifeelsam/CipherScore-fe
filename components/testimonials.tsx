"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/landing-content"

export function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">What early partners want from private reputation</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            The demand is straightforward: one encrypted profile, one reusable attestation layer, and no identity leakage during launch participation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-6 md:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-white">"{testimonial.quote}"</p>
              <footer className="mt-6 text-neutral-400">
                <span className="font-semibold text-white">{testimonial.author}</span>
                <span> - {testimonial.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
