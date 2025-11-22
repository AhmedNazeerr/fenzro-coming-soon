"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
})

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function joinWaitlist(email: string) {
  const result = schema.safeParse({ email })

  if (!result.success) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    console.log(`[Waitlist] Processing signup for: ${email}`)

    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("[Waitlist] SMTP credentials are not configured")
      return { success: false, error: "Email service is not configured. Please contact support." }
    }

    console.log("[Waitlist] Sending confirmation email to user...")
    
    // 1. Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "Fenzro <support@fenzro.com>",
      to: email,
      subject: "Welcome to Fenzro – You're on the Waitlist",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header with Logo -->
            <div style="text-align: center; margin-bottom: 40px;">
              <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px; margin-bottom: 32px;">
                <h1 style="color: #ffffff; margin: 0 0 12px 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Welcome to Fenzro</h1>
                <p style="color: #60a5fa; margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">You're on the waitlist</p>
              </div>
            </div>

            <!-- Main Content -->
            <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
              <h2 style="color: #ffffff; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">Financial clarity, reimagined.</h2>
              <p style="color: #a3a3a3; line-height: 1.7; margin: 0 0 24px 0; font-size: 15px;">
                Thank you for joining the Fenzro waitlist. You've taken the first step towards automating your bookkeeping, reconciliations, and reporting with AI-native technology.
              </p>

              <!-- Email Confirmation Box -->
              <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="margin: 0; color: #60a5fa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Confirmed Email</p>
                <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">${email}</p>
              </div>

              <!-- Benefits Section -->
              <div style="margin-bottom: 24px;">
                <h3 style="color: #ffffff; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">What's next?</h3>
                <div style="margin-bottom: 12px;">
                  <div style="display: inline-block; width: 6px; height: 6px; background: #60a5fa; border-radius: 50%; margin-right: 12px; vertical-align: middle;"></div>
                  <span style="color: #d4d4d4; font-size: 14px; line-height: 1.6;">Priority access to early beta testing</span>
                </div>
                <div style="margin-bottom: 12px;">
                  <div style="display: inline-block; width: 6px; height: 6px; background: #60a5fa; border-radius: 50%; margin-right: 12px; vertical-align: middle;"></div>
                  <span style="color: #d4d4d4; font-size: 14px; line-height: 1.6;">Founding customer pricing and exclusive perks</span>
                </div>
                <div style="margin-bottom: 12px;">
                  <div style="display: inline-block; width: 6px; height: 6px; background: #60a5fa; border-radius: 50%; margin-right: 12px; vertical-align: middle;"></div>
                  <span style="color: #d4d4d4; font-size: 14px; line-height: 1.6;">Direct access to our product team</span>
                </div>
                <div>
                  <div style="display: inline-block; width: 6px; height: 6px; background: #60a5fa; border-radius: 50%; margin-right: 12px; vertical-align: middle;"></div>
                  <span style="color: #d4d4d4; font-size: 14px; line-height: 1.6;">Custom integration support for your business</span>
                </div>
              </div>

              <p style="color: #a3a3a3; line-height: 1.7; margin: 24px 0 0 0; font-size: 15px;">
                We'll be in touch soon with your early access invite. Stay tuned!
              </p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <p style="color: #525252; font-size: 12px; margin: 0 0 8px 0;">© 2025 Fenzro. All rights reserved.</p>
              <p style="color: #404040; font-size: 11px; margin: 0;">
                This email was sent because you signed up for the Fenzro waitlist.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    console.log("[Waitlist] User email sent successfully")
    console.log("[Waitlist] Sending notification to support...")

    // 2. Send notification to support
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "Fenzro <support@fenzro.com>",
      to: "support@fenzro.com",
      subject: "🎉 New Waitlist Signup",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #020817; margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">New Waitlist Signup 🎉</h2>
              
              <div style="background: #f1f5f9; border-left: 3px solid #3b82f6; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; color: #475569; font-size: 13px; font-weight: 600;">Email Address</p>
                <p style="margin: 0; color: #020817; font-size: 16px; font-weight: 600;">${email}</p>
              </div>

              <div style="background: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 16px;">
                <p style="margin: 0 0 4px 0; color: #64748b; font-size: 13px;">Timestamp</p>
                <p style="margin: 0; color: #0f172a; font-size: 14px;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' })}</p>
              </div>

              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
              
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                Automated notification from Fenzro Waitlist System
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    console.log("[Waitlist] Support notification sent successfully")

    return { success: true }
  } catch (error: any) {
    console.error("[Waitlist] Error occurred:", error)
    console.error("[Waitlist] Error details:", error?.message || error)
    return { 
      success: false, 
      error: error?.message || "Failed to join waitlist. Please try again." 
    }
  }
}