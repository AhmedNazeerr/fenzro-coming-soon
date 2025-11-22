"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"
import { AnimatedNumber } from "@/components/animated-number"
import { EncryptedText } from "@/components/ui/encrypted-text"
import DarkVeil from "@/components/dark-veil"
import { Check } from "lucide-react"

export default function Page() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 relative w-full" style={{ margin: 0, padding: 0 }}>
      {/* DarkVeil Background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ width: '100vw', height: '100vh', left: 0, top: 0, right: 0, bottom: 0 }}>
        <DarkVeil
          hueShift={42}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          speed={1.8}
          scanlineFrequency={0.5}
          warpAmount={0.3}
          resolutionScale={0.8}
        />
      </div>

      {/* Glassmorphic Navigation Bar */}
      <div className="flex justify-center pt-8 relative z-10">
        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
          <Image
            src="/fenzro.png"
            alt="Fenzro"
            width={100}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      <main className="container relative z-10 mx-auto px-6 pt-24 pb-12 md:pt-32">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-200 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <EncryptedText
              text="Fenzro is almost here"
              encryptedClassName="text-blue-200/50"
              revealedClassName="text-blue-200"
              revealDelayMs={50}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 mb-8 leading-tight"
          >
            Financial clarity,
            <br />
            reimagined.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed"
          >
            An AI-native accounting platform that automates bookkeeping, reconciliations, and reporting—turning raw
            financial data into real-time insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <WaitlistForm />
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-white">
              Stop drowning in spreadsheets.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 max-w-4xl mx-auto">
            <BentoGridItem
              title={items[0].title}
              description={items[0].description}
              header={items[0].header}
              className="sm:row-span-2"
            />
            <BentoGridItem
              title={items[1].title}
              description={items[1].description}
              header={items[1].header}
              className=""
            />
            <BentoGridItem
              title={items[2].title}
              description={items[2].description}
              header={items[2].header}
              className=""
            />
          </div>
        </section>

        {/* Stats Strip with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto border-y border-white/10 py-16 mb-32 bg-black/20 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter">
                <AnimatedNumber value={3248} />
              </div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">AI processed (24h)</div>
            </div>
            <div className="md:border-l md:border-r border-white/10 relative">
              <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 tracking-tighter">
                <AnimatedNumber value={27} />
              </div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Accounts synced</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-3 tracking-tighter flex items-center justify-center">
                <AnimatedNumber value={99} />%
              </div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Accuracy Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Early Access Perks */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
            {[
              "Founding customer pricing",
              "Priority onboarding & migration",
              "Direct product team access",
              "Custom integration support",
            ].map((perk, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                <Check className="h-3.5 w-3.5 text-blue-400" />
                {perk}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-white/5 pt-12 pb-8">
          <div className="flex items-center justify-center mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image
              src="/fenzro.png"
              alt="Fenzro Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-neutral-600 text-sm">© 2025 Fenzro. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

// Abstract shapes for Bento Grid Headers
const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.05]" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-20 w-20 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
    </div>
    <div className="absolute bottom-4 left-4 right-4 h-12 bg-neutral-800/50 backdrop-blur-md rounded-lg border border-white/5 flex items-center px-4 gap-3">
      <div className="h-2 w-2 rounded-full bg-green-500" />
      <div className="h-2 w-20 rounded-full bg-neutral-700" />
      <div className="h-2 w-12 rounded-full bg-neutral-700 ml-auto" />
    </div>
  </div>
)
const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-16 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-2/3 h-1.5 bg-neutral-800 rounded-full overflow-hidden relative">
          <div
            className="absolute inset-y-0 left-0 w-1/2 bg-blue-500/30 animate-[shimmer_2s_infinite]"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  </div>
)
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-16 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden group">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <div className="h-9 w-9 rounded-full border border-emerald-500/30 flex items-center justify-center">
          <div className="h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_8px_white]" />
        </div>
      </div>
    </div>
  </div>
)

const items = [
  {
    title: "Automated Bookkeeping",
    description: "AI that categorizes transactions with 99% accuracy, learning from your corrections. No more manual entry or endless spreadsheet updates. Our intelligent system automatically tags expenses, income, and transfers while adapting to your business patterns. Review, approve, and move on—it's that simple.",
    header: <SkeletonOne />,
    className: "md:col-span-2",
  },
  {
    title: "Real-time Insights",
    description: "Live P&L, cash flow, and burn rate analysis available at your fingertips.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Auto-Reconciliation",
    description: "Connects directly to banks and ledgers to keep your books perfectly balanced.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
]
