"use client"

import { motion } from "framer-motion"
import { comparisonColumns, comparisonRows } from "@/lib/landing-content"

function getValueClassName(value: string) {
  if (value === "MPC" || value === "Full" || value === "Built for DAOs" || value === "Yes") {
    return "text-emerald-400"
  }

  if (value === "No" || value === "Public") {
    return "text-rose-400"
  }

  return "text-amber-300"
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 md:py-20 px-4 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">How it is different</h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Existing whitelisting tools either expose too much, check too little, or were not built for DAO-native launch logic. CipherScore combines all three layers in one rail.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[760px] text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-sm uppercase tracking-[0.2em] text-neutral-400">Capability</th>
                {comparisonColumns.map((column) => (
                  <th key={column} className="px-6 py-5 text-sm uppercase tracking-[0.2em] text-neutral-400">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-0">
                  <td className="px-6 py-5 font-semibold text-white">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${comparisonColumns[index]}`} className={`px-6 py-5 font-medium ${getValueClassName(value)}`}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
