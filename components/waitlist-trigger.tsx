"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  const [project, setProject] = useState("")

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
          project,
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
      setProject("")
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
        <DialogContent className="max-w-xl overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(145deg,rgba(18,24,38,0.9),rgba(10,10,16,0.82))] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_40%)]" />
          <div className="relative">
            <DialogHeader className="text-left">
              <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                Early access
              </div>
              <DialogTitle className="pt-3 text-2xl md:text-3xl text-white">Request early access</DialogTitle>
              <DialogDescription className="max-w-lg text-sm md:text-base leading-relaxed text-neutral-300">
                Join the CipherScore waitlist for private onboarding and early launch access.
              </DialogDescription>
            </DialogHeader>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="h-11 rounded-xl border-white/10 bg-white/6 text-white placeholder:text-neutral-500 focus-visible:ring-cyan-400/40"
                />
                <Input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-11 rounded-xl border-white/10 bg-white/6 text-white placeholder:text-neutral-500 focus-visible:ring-cyan-400/40"
                />
              </div>

              <Textarea
                value={project}
                onChange={(event) => setProject(event.target.value)}
                placeholder="What are you building or planning to launch?"
                rows={4}
                className="rounded-2xl border-white/10 bg-white/6 text-white placeholder:text-neutral-500 focus-visible:ring-cyan-400/40"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-neutral-400">
                  Share a little context if you want us to prioritize the right launch flow.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-white hover:from-cyan-400 hover:to-blue-500"
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
