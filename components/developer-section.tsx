"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { TransitionLink } from "@/components/transition-link"
import { developerSnippet, landingLinks } from "@/lib/landing-content"

export function DeveloperSection() {
  return (
    <section id="developers" className="py-16 md:py-20 px-4 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-300">
              For developers
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Integrate in 10 lines of code</h2>
            <p className="mt-5 text-lg md:text-xl text-neutral-300 leading-relaxed">
              Request a private attestation off-chain, verify it in your launch contract, and keep your eligibility logic flexible without turning users into public KYC records.
            </p>
            <TransitionLink href={landingLinks.documentation} className="inline-flex items-center gap-2 mt-7 text-cyan-300 hover:text-cyan-200 transition-colors text-base font-medium">
              View Documentation
              <ArrowRight size={18} />
            </TransitionLink>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md p-5 md:p-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-cyan-400 text-sm mb-4">// TypeScript SDK</div>
            <pre className="overflow-x-auto text-xs sm:text-sm md:text-base leading-6 md:leading-7 text-neutral-100">
              <code>{developerSnippet}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
