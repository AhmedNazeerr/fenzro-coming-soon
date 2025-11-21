import React, { useState } from "react";
import logo from "./assets/logo.webp";

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: hook this into your backend / form tool
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <img src={logo} alt="Fenzro" className="h-6" />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
            <span className="rounded-full border border-[#0548FC]/40 bg-[#0548FC]/10 px-3 py-1 font-medium text-[#0548FC] flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0548FC] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0548FC]" />
              </span>
              Launching soon
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left copy */}
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0548FC]" />
              <span>
                Fenzro is almost here - built for founders, CFOs and accountants.
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                {"We're "}
                <span className="bg-gradient-to-tr from-[#0548FC] to-[#23A0E3] bg-clip-text text-transparent">
                  launching soon
                </span>
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
                Fenzro is an AI-native accounting platform that automates bookkeeping, reconciliations, and reporting—turning raw financial data into real-time, actionable insights.
              </p>
            </div>

            {/* Email capture */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <div className="flex-1">
                <label className="sr-only" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-[#0548FC] focus:ring-1 focus:ring-[#0548FC]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-5 py-3 text-sm font-medium bg-[#0548FC] text-slate-50 hover:bg-[#23A0E3] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23A0E3] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {submitted ? "Added to waitlist" : "Join waitlist"}
              </button>
            </form>

            {submitted && (
              <p className="text-xs text-[#23A0E3] mt-1">
                Thank you! We will email you as soon as Fenzro goes live.
              </p>
            )}

            {/* Bottom text */}
            <div className="pt-4 grid gap-4 sm:grid-cols-2 text-xs text-slate-400">
              <div className="space-y-1">
                <p className="font-medium text-slate-300">Designed for real workflows</p>
                <p>
                  Built in collaboration with founders, accountants and operators who
                  live in ledgers and spreadsheets every day.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-slate-300">Early access perks</p>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>Founding customer pricing</li>
                  <li>Priority onboarding and migration</li>
                  <li>Direct feedback channel with the product team</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Right side mockup */}
          <section className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0548FC]/15 to-[#23A0E3]/5 blur-3xl" />
            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-sm p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Snapshot</p>
                  <p className="text-sm font-semibold text-slate-50">Today&apos;s overview</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1 w-6 rounded-full bg-[#0548FC]/70" />
                  <span className="h-1 w-6 rounded-full bg-[#23A0E3]/60" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 space-y-2">
                  <p className="text-[11px] text-slate-400">AI reconciled (last 24h)</p>
                  <p className="text-2xl font-semibold text-[#23A0E3]">3,248</p>
                  <p className="text-[11px] text-[#23A0E3]">Up to 92% faster vs manual</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 space-y-2">
                  <p className="text-[11px] text-slate-400">Accounts in sync</p>
                  <p className="text-2xl font-semibold">27</p>
                  <p className="text-[11px] text-slate-400">Bank feeds · PSPs · ledgers</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span>Pipeline</span>
                  <span>AI insight</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Uncategorised transactions</span>
                    <span className="text-[#23A0E3]">↓ 63%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#0548FC] to-[#23A0E3]" />
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  Connect remaining bank feeds to let Fenzro auto-categorise the majority
                  of your transactions in minutes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Fenzro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Made for AI-first finance teams.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
