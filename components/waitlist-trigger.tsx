"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type WaitlistTriggerProps = {
  buttonClassName: string
  label: string
  icon?: ReactNode
}

export function WaitlistTrigger({ buttonClassName, label, icon }: WaitlistTriggerProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Could not join the waitlist.")
      }

      toast({
        title: "You're on the waitlist",
        description: "Thanks. We'll reach out when early access opens.",
      })

      setOpen(false)
      setName("")
      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button type="button" className={buttonClassName} onClick={() => setOpen(true)}>
        {icon}
        {label}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg overflow-hidden rounded-[30px] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(7,10,18,0.94),rgba(8,8,14,0.92))] p-6 text-white shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-3xl md:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="relative">
            <DialogHeader className="text-left">
              <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
                Early access
              </div>
              <DialogTitle className="pt-3 text-2xl md:text-[2rem] text-white">Request early access</DialogTitle>
              <DialogDescription className="max-w-md text-sm md:text-base leading-relaxed text-neutral-300">
                Join the CipherScore waitlist for private onboarding when access opens.
              </DialogDescription>
            </DialogHeader>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="h-12 rounded-2xl border-white/8 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-cyan-400/30 focus-visible:ring-offset-0"
                />
                <Input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-12 rounded-2xl border-white/8 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-cyan-400/30 focus-visible:ring-offset-0"
                />
              </div>

              <div className="px-4 py-0">
                <p className="text-xs leading-relaxed text-neutral-400">
                  We will only use this to manage waitlist access and onboarding updates.
                </p>
              </div>

              <div className="flex justify-end pt-1">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-white shadow-[0_10px_30px_rgba(6,182,212,0.22)] hover:from-cyan-400 hover:to-blue-500"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : null}
                  {isSubmitting ? "Submitting..." : "Join waitlist"}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
