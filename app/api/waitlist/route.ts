import { NextResponse } from "next/server"

type WaitlistPayload = {
  name?: string
  email?: string
  project?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendResendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html: string
  text: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.WAITLIST_FROM_EMAIL

  if (!apiKey || !from) {
    return false
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
    }),
  })

  return response.ok
}

export async function POST(request: Request) {
  const body = (await request.json()) as WaitlistPayload
  const name = body.name?.trim() || ""
  const email = body.email?.trim().toLowerCase() || ""
  const project = body.project?.trim() || ""

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const confirmationHtml = `
    <div style="font-family: Inter, Arial, sans-serif; color: #ffffff; background: #0b0b10; padding: 32px;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">You're on the CipherScore waitlist</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">
        Hi ${name},
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">
        We've added you to the CipherScore early-access waitlist. We'll reach out as soon as private onboarding opens.
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">
        If you shared launch context, we've captured it for the team:
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #67e8f9;">
        ${project || "No additional project notes were included."}
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">
        CipherScore
      </p>
    </div>
  `

  const confirmationText = `Hi ${name},

We've added you to the CipherScore early-access waitlist. We'll reach out as soon as private onboarding opens.

Project notes: ${project || "None provided."}

CipherScore`

  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL

  const [confirmationSent, notificationSent] = await Promise.all([
    sendResendEmail({
      to: email,
      subject: "You're on the CipherScore waitlist",
      html: confirmationHtml,
      text: confirmationText,
    }),
    notifyEmail
      ? sendResendEmail({
          to: notifyEmail,
          subject: "New CipherScore waitlist signup",
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px;">
              <h1>New waitlist signup</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project:</strong> ${project || "None provided."}</p>
            </div>
          `,
          text: `New waitlist signup\n\nName: ${name}\nEmail: ${email}\nProject: ${project || "None provided."}`,
        })
      : Promise.resolve(false),
  ])

  return NextResponse.json({
    ok: true,
    emailSent: confirmationSent,
    notificationSent,
  })
}
