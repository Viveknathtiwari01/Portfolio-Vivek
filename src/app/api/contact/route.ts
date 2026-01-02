import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactRequest = {
  from_name: string
  from_email: string
  subject: string
  message: string
}

const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS'] as const

const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key])

if (missingEnvVars.length > 0) {
  console.warn(
    `Nodemailer configuration missing env variables: ${missingEnvVars.join(', ')}. ` +
      'Contact form submissions will fail until these are provided.'
  )
}

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || 'gmail',
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : undefined,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactRequest>
    const { from_name, from_email, subject, message } = body

    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      )
    }

    const recipient = process.env.CONTACT_RECIPIENT || process.env.SMTP_USER

    const mailOptions = {
      from: `${from_name} <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: from_email,
      subject: `[Portfolio Message] ${subject}`,
      text: `Name: ${from_name}\nEmail: ${from_email}\n\n${message}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6;">
          <h2 style="margin-bottom: 12px;">New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${from_name}</p>
          <p><strong>Email:</strong> ${from_email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
