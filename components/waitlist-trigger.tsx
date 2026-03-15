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
        title: "Added to the waitlist",
        description: result.emailSent
          ? "We sent a confirmation email and will reach out when early access opens."
          : "You're on the list. We'll reach out when early access opens.",
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
        <DialogContent className="max-w-xl border-white/10 bg-[#0b0b10] p-0 text-white">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 p-6 md:p-7">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl md:text-3xl text-white">Request early access</DialogTitle>
              <DialogDescription className="text-sm md:text-base text-neutral-300">
                Join the CipherScore waitlist and we will email you once early access is ready.
              </DialogDescription>
            </DialogHeader>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="h-11 border-white/10 bg-white/5 text-white placeholder:text-neutral-500"
                />
                <Input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-11 border-white/10 bg-white/5 text-white placeholder:text-neutral-500"
                />
              </div>

              <Textarea
                value={project}
                onChange={(event) => setProject(event.target.value)}
                placeholder="What are you building or planning to launch?"
                rows={4}
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-400">
                  We only use this for waitlist outreach and launch onboarding.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-white hover:from-cyan-400 hover:to-blue-500"
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
