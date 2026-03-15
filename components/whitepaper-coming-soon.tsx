"use client"

import type { ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

type WhitepaperComingSoonProps = {
  className: string
  label: string
  icon?: ReactNode
}

export function WhitepaperComingSoon({ className, label, icon }: WhitepaperComingSoonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        toast({
          title: "Whitepaper coming soon",
          description: "We're polishing it up now. Check back soon for the full release.",
        })
      }
    >
      {icon}
      {label}
    </button>
  )
}
