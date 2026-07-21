"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Settings,
  ArrowRight,
  Zap,
  CheckCircle2,
  Wrench,
  UserCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

// CountUp Hook/Component for Stats
function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40); // larger increments for speed
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center border-r border-forge-navy-light/60 last:border-none md:p-8">
      <div className="font-display text-4xl font-black tracking-tight text-forge-orange md:text-5xl">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-forge-steel">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"workers" | "customers">("workers");

  return (
    <div className="relative flex flex-col flex-grow overflow-hidden">
      {/* Background Gear Details */}
      <div className="absolute top-10 left-[-100px] -z-10 opacity-[0.03]">
        <Settings className="h-96 w-96 animate-spin-slow text-forge-white" />
      </div>
      <div className="absolute top-[40%] right-[-150px] -z-10 opacity-[0.02]">
        <Settings className="h-[500px] w-[500px] animate-spin-reverse text-forge-white" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Content */}
          <div className="space-y-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-forge-orange/30 bg-forge-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-forge-orange uppercase"
            >
              <Zap className="h-3.5 w-3.5 animate-pulse" />
              <span>Next-Gen Platform Launching Soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-5xl font-black tracking-tight text-forge-white sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              Built for <span className="text-forge-orange">Work.</span> <br />
              Made for <span className="bg-gradient-to-r from-forge-orange to-forge-orange-dark bg-clip-text text-transparent">You.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-lg leading-relaxed text-forge-steel sm:text-xl"
            >
              Forge connects top-tier blue-collar tradespeople with high-value jobs. Get matched instantly, manage your contracts, and secure payments immediately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/beta/register"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-forge-orange px-8 py-4 text-base font-bold text-forge-white shadow-xl shadow-forge-orange/20 hover:bg-forge-orange-dark hover:scale-105 active:scale-95 transition-all"
              >
                <span>Join Beta Program</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ambassador"
                className="flex items-center justify-center gap-2 rounded-full border border-forge-steel/30 bg-forge-navy-light/40 px-8 py-4 text-base font-bold text-forge-white hover:bg-forge-navy-light hover:border-forge-steel/60 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Become an Ambassador</span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Visual Mark */}
          <div className="flex items-center justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15, duration: 0.8 }}
              className="relative flex h-[350px] w-[350px] items-center justify-center sm:h-[400px] sm:w-[400px]"
            >
              {/* Outer Gear */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Settings className="h-full w-full animate-spin-slow text-forge-navy-light/40 border-dashed border-forge-steel/10 rounded-full p-4" />
              </div>
              {/* Inner Gear */}
              <div className="absolute h-4/5 w-4/5 flex items-center justify-center">
                <Settings className="h-full w-full animate-spin-reverse text-forge-orange/10" />
              </div>
              {/* Central Floating Logo (App Icon) */}
              <motion.div
                animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10 flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-forge-navy-light to-forge-navy border-2 border-forge-orange/40 shadow-2xl shadow-forge-orange/15 overflow-hidden p-4"
              >
                <Image
                  src="/logo.png"
                  alt="Forge Logo"
                  width={160}
                  height={160}
                  className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(245,118,10,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS / SOCIAL PROOF SECTION */}
      <section className="border-y border-forge-navy-light/60 bg-forge-navy-light/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-forge-navy-light/60 md:grid-cols-3 md:divide-y-0">
            <StatCounter value={12500} label="Jobs Matched" suffix="+" />
            <StatCounter value={3200} label="Skilled Workers Onboarded" suffix="+" />
            <StatCounter value={42} label="Cities Operating Live" />
          </div>
        </div>
      </section>

      {/* 3. FEATURE SHOWCASE SECTION (TABBED PREVIEW) */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl text-forge-white">
            Designed to Build Connections
          </h2>
          <p className="mx-auto max-w-2xl text-base text-forge-steel">
            Whether you are an independent trade contractor wanting jobs, or a property manager/homeowner needing quality work—Forge has you covered.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex mt-6 p-1 rounded-full bg-forge-navy-light border border-forge-steel/20">
            <button
              onClick={() => setActiveTab("workers")}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                activeTab === "workers"
                  ? "bg-forge-orange text-forge-white shadow-md shadow-forge-orange/10"
                  : "text-forge-steel hover:text-forge-white"
              }`}
            >
              For Skilled Workers
            </button>
            <button
              onClick={() => setActiveTab("customers")}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                activeTab === "customers"
                  ? "bg-forge-orange text-forge-white shadow-md shadow-forge-orange/10"
                  : "text-forge-steel hover:text-forge-white"
              }`}
            >
              For Hiring Customers
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Tab Left Panel */}
          <div className="space-y-8 lg:col-span-6">
            {activeTab === "workers" ? (
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-black text-forge-white">
                  Grow Your Business, Keep Your Profits
                </h3>
                <p className="text-base text-forge-steel">
                  Forge empowers local painters, plumbers, carpenters, and electricians to find clients direct. Set your own pricing, receive quick payouts, and manage bookings effortlessly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Zero Commission Fees</h4>
                      <p className="text-xs text-forge-steel">Keep 100% of what you negotiate. We don&apos;t skim your hard-earned wages.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Secure Escrow Payouts</h4>
                      <p className="text-xs text-forge-steel">Funds are secured in escrow before you lift a hammer, guaranteeing swift payments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Forge Verification Badge</h4>
                      <p className="text-xs text-forge-steel">Earn verified credential status, reviews, and client trust scores on the platform.</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/beta/register"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forge-orange hover:text-forge-orange-dark transition-colors"
                >
                  <span>Apply for Worker Beta</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-black text-forge-white">
                  Hire Vetted Tradespeople in Minutes
                </h3>
                <p className="text-base text-forge-steel">
                  No more chasing contractors or waiting for quotes. Forge gives you access to a network of pre-vetted, insured local professionals ready to work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Pre-Vetted Credentials</h4>
                      <p className="text-xs text-forge-steel">We check licenses, backgrounds, and insurance certificates so you don&apos;t have to.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Live Status Mapping</h4>
                      <p className="text-xs text-forge-steel">Track your assigned tradesperson&apos;s arrival details and job progress in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forge-white">Standardised Job Bidding</h4>
                      <p className="text-xs text-forge-steel">Get fair, competitive quotes and pay securely through cards or mobile wallets.</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/beta/register"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forge-orange hover:text-forge-orange-dark transition-colors"
                >
                  <span>Register as Hiring Client</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Tab Right Panel (Mock App Preview Card) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[36px] bg-forge-navy-light/80 p-4 border border-forge-steel/20 shadow-2xl">
              <div className="absolute -top-3 -left-3 h-8 w-8 animate-bounce text-forge-orange">
                <Settings className="h-full w-full" />
              </div>
              
              {/* Mock Screen Content */}
              <div className="rounded-[28px] bg-forge-navy p-5 space-y-6 border border-forge-navy-light">
                {/* Header info */}
                <div className="flex justify-between items-center pb-3 border-b border-forge-navy-light/60">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-forge-orange/20 flex items-center justify-center text-forge-orange">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-forge-white">Job Details</span>
                  </div>
                  <span className="rounded-full bg-forge-orange/10 px-2.5 py-0.5 text-[10px] font-bold text-forge-orange uppercase">Active matching</span>
                </div>

                {/* Job Card Mock */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs text-forge-steel font-medium">Customer Request</div>
                    <div className="text-base font-bold text-forge-white">Bathroom Plumbing Pipe Leak</div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="rounded-lg bg-forge-navy-light px-3 py-2 text-center border border-forge-steel/10 flex-1">
                      <div className="text-[10px] text-forge-steel uppercase">Budget</div>
                      <div className="text-sm font-bold text-forge-orange">$250 - $400</div>
                    </div>
                    <div className="rounded-lg bg-forge-navy-light px-3 py-2 text-center border border-forge-steel/10 flex-1">
                      <div className="text-[10px] text-forge-steel uppercase">Date</div>
                      <div className="text-sm font-bold text-forge-white">Today, 2:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Swiping/Applicant mockup list */}
                <div className="space-y-3">
                  <div className="text-xs text-forge-steel font-medium">Top Applied Matches</div>
                  <div className="rounded-xl bg-forge-navy-light p-3 border border-forge-orange/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-forge-steel/20 border border-forge-orange/50 flex items-center justify-center font-display font-bold text-sm text-forge-orange">
                        MB
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forge-white flex items-center gap-1.5">
                          Marcus B.
                          <span className="text-[10px] font-semibold text-forge-orange bg-forge-orange/10 px-1 rounded">5.0 ★</span>
                        </div>
                        <div className="text-[10px] text-forge-steel">Vetted Plumber · 12yr Exp</div>
                      </div>
                    </div>
                    <button className="rounded-full bg-forge-orange px-3 py-1 text-[10px] font-bold text-forge-white hover:bg-forge-orange-dark">
                      Hire
                    </button>
                  </div>

                  <div className="rounded-xl bg-forge-navy-light p-3 border border-forge-steel/10 opacity-70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-forge-steel/20 flex items-center justify-center font-display font-bold text-sm text-forge-white">
                        TL
                      </div>
                      <div>
                        <div className="text-xs font-bold text-forge-white">Thomas L.</div>
                        <div className="text-[10px] text-forge-steel">Licensed Specialist · 4yr Exp</div>
                      </div>
                    </div>
                    <button className="rounded-full bg-forge-steel/20 px-3 py-1 text-[10px] font-bold text-forge-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS TIMELINE */}
      <section className="relative bg-forge-navy-light/10 border-y border-forge-navy-light/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-forge-white">
              The Path to Better Matches
            </h2>
            <p className="mx-auto max-w-2xl text-base text-forge-steel">
              Our system streamlines the hiring journey into 3 quick, clear steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative">
            {/* Step 1 */}
            <div className="relative bg-forge-navy p-8 rounded-2xl border border-forge-navy-light/80 hover:border-forge-orange/40 shadow-lg group">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-navy-light border-2 border-forge-steel/30 text-forge-white group-hover:border-forge-orange transition-all">
                <span className="font-display text-lg font-black text-forge-orange">1</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forge-white">Submit Request</h3>
              <p className="mt-3 text-sm text-forge-steel leading-relaxed">
                Describe the repair, maintenance, or construction task. Set your budget parameters and desired timeline inside the app.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-forge-navy p-8 rounded-2xl border border-forge-navy-light/80 hover:border-forge-orange/40 shadow-lg group">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-navy-light border-2 border-forge-steel/30 text-forge-white group-hover:border-forge-orange transition-all">
                <span className="font-display text-lg font-black text-forge-orange">2</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forge-white">Compare Professionals</h3>
              <p className="mt-3 text-sm text-forge-steel leading-relaxed">
                Review automated proposals from vetted tradespeople. Look through user reviews, certificates, and work portfolios.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-forge-navy p-8 rounded-2xl border border-forge-navy-light/80 hover:border-forge-orange/40 shadow-lg group">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-navy-light border-2 border-forge-steel/30 text-forge-white group-hover:border-forge-orange transition-all">
                <span className="font-display text-lg font-black text-forge-orange">3</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forge-white">Work & Confirm</h3>
              <p className="mt-3 text-sm text-forge-steel leading-relaxed">
                Once the job is completed to your high standard, release escrow funds securely. Review each other to keep the community honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMS TEASER SECTION (DIAGONAL CUT CARDS) */}
      <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-forge-white">
            Join Our Launch Programs
          </h2>
          <p className="mx-auto max-w-2xl text-base text-forge-steel">
            Be part of the trade revolution. Apply for our active tester or marketing ambassador positions and gain early rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Beta Testing card */}
          <div className="diagonal-cut-card bg-gradient-to-br from-forge-navy-light to-forge-navy p-8 sm:p-10 border border-forge-steel/10 flex flex-col justify-between group hover:border-forge-orange/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.03] group-hover:opacity-[0.06]">
              <Settings className="h-44 w-44 animate-spin-slow text-forge-white" />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-forge-orange/10 border border-forge-orange/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forge-orange">
                Beta Testing
              </div>
              <h3 className="font-display text-3xl font-black text-forge-white group-hover:text-forge-orange transition-colors">
                Test the App, Give Feedback
              </h3>
              <p className="text-base text-forge-steel">
                Get early access to our job matching client and professional dashboard applications. Help us refine the UX and earn premium badges upon store release.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>Early access downloads</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>Direct feedback slack channels</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>$100 Platform Credit upon release</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-10">
              <Link
                href="/beta"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forge-orange px-6 py-3 text-sm font-bold text-forge-white hover:bg-forge-orange-dark transition-all"
              >
                <span>Explore Beta details</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Ambassador card */}
          <div className="diagonal-cut-card-reverse bg-gradient-to-br from-forge-navy-light to-forge-navy p-8 sm:p-10 border border-forge-steel/10 flex flex-col justify-between group hover:border-forge-orange/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.03] group-hover:opacity-[0.06]">
              <Settings className="h-44 w-44 animate-spin-reverse text-forge-white" />
            </div>

            <div className="space-y-6">
              <div className="inline-block rounded-full bg-forge-orange/10 border border-forge-orange/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forge-orange">
                Ambassador
              </div>
              <h3 className="font-display text-3xl font-black text-forge-white group-hover:text-forge-orange transition-colors">
                Spread the Word, Earn Rewards
              </h3>
              <p className="text-base text-forge-steel">
                Help us build the initial local community. Refer skilled contractors or customers, generate local interest, and receive high-margin commission payouts.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>Exclusive Forge Ambassador swag</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>10% referral commission for 6 months</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-forge-white">
                  <UserCheck className="h-4 w-4 text-forge-orange" />
                  <span>Local lead status at launch events</span>
                </li>
              </ul>
            </div>

            <div className="pt-10">
              <Link
                href="/ambassador"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forge-orange px-6 py-3 text-sm font-bold text-forge-white hover:bg-forge-orange-dark transition-all"
              >
                <span>Explore Ambassador details</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BAND */}
      <section className="bg-gradient-to-r from-forge-navy-light to-forge-orange/25 py-20 relative border-t border-forge-navy-light/60">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-forge-white sm:text-5xl">
            Ready to Build the Future of Work?
          </h2>
          <p className="mx-auto max-w-xl text-base text-forge-steel">
            Be the first to download the app when we hit the App Store and Google Play. Join our active pilot phases today.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/beta/register"
              className="rounded-full bg-forge-orange px-8 py-3.5 text-sm font-bold text-forge-white hover:bg-forge-orange-dark hover:scale-105 transition-all shadow-lg shadow-forge-orange/15"
            >
              Sign Up Now
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-forge-steel/30 bg-forge-navy/80 px-8 py-3.5 text-sm font-bold text-forge-white hover:bg-forge-navy-light hover:scale-105 transition-all"
            >
              See FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
