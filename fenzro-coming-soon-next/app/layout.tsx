import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fenzro - AI-native accounting platform",
  description: "Automate bookkeeping, reconciliations, and reporting with Fenzro.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.className} bg-[#020817] text-slate-50 antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
