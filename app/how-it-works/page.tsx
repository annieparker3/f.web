"use client";

import Link from "next/link";
import { ArrowRight, Settings, Wrench, CheckCircle2, UserCheck, Star } from "lucide-react";

const workerSteps = [
  {
    number: "01",
    title: "Create Your Trade Profile",
    description: "Sign up and list your trade specialty — plumbing, electrical, carpentry, painting, and more. Add your license info, service area, and hourly rate.",
  },
  {
    number: "02",
    title: "Receive Matched Job Requests",
    description: "Forge's intelligent matching engine sends you job requests from customers in your area that match your trade category and availability.",
  },
  {
    number: "03",
    title: "Submit Your Bid",
    description: "Review the job details, ask questions, and submit a competitive bid. You set your own pricing — no commission is taken from your earnings.",
  },
  {
    number: "04",
    title: "Complete the Work",
    description: "Show up, do excellent work, and mark the job as complete on the app. The customer reviews the quality and releases the secured escrow payment to you instantly.",
  },
];

const customerSteps = [
  {
    number: "01",
    title: "Post Your Job Request",
    description: "Describe the repair, installation, or build task you need done. Set your budget, preferred timeline, and add photos of the site if needed.",
  },
  {
    number: "02",
    title: "Review Verified Proposals",
    description: "Receive bids from pre-vetted, insured local tradespeople. Browse their profiles, credentials, ratings, and past work portfolios before deciding.",
  },
  {
    number: "03",
    title: "Hire and Secure Payment",
    description: "Accept a bid you're confident in. Your payment is held securely in escrow — the tradesperson won't receive a single cent until the job is done to your satisfaction.",
  },
  {
    number: "04",
    title: "Review and Release",
    description: "Once the job is completed, inspect the work and approve payment release. Leave a review to help the Forge community stay accountable and trustworthy.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-forge-navy">
      {/* Page Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-forge-orange/10 border border-forge-orange/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forge-orange mb-6">
          <Settings className="h-3.5 w-3.5" />
          <span>The Forge System</span>
        </div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tight text-forge-white sm:text-6xl">
          How <span className="text-forge-orange">Forge</span> Works
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-steel leading-relaxed">
          Whether you are a skilled tradesperson looking for jobs, or a customer who needs quality work done, Forge streamlines the entire process from first request to final payment.
        </p>
      </section>

      {/* FOR WORKERS */}
      <section className="bg-forge-navy-light/15 border-y border-forge-navy-light/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-orange/10 border border-forge-orange/30 text-forge-orange">
              <Wrench className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-forge-white">
              For Skilled Workers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workerSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < workerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-forge-orange/40 to-forge-navy-light/20 z-10" />
                )}
                <div className="bg-forge-navy p-6 rounded-2xl border border-forge-navy-light/80 hover:border-forge-orange/40 shadow-lg h-full group-hover:shadow-forge-orange/5 transition-all">
                  <span className="font-display text-4xl font-black text-forge-orange/30 group-hover:text-forge-orange/50 transition-colors">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-forge-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-forge-steel leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/beta/register"
              className="inline-flex items-center gap-2 rounded-full bg-forge-orange px-8 py-3.5 text-sm font-bold text-forge-white hover:bg-forge-orange-dark hover:scale-105 transition-all shadow-lg shadow-forge-orange/10"
            >
              <span>Sign Up as a Worker</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOR CUSTOMERS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-orange/10 border border-forge-orange/30 text-forge-orange">
              <UserCheck className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-forge-white">
              For Hiring Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < customerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-forge-orange/40 to-forge-navy-light/20 z-10" />
                )}
                <div className="bg-forge-navy-light/30 p-6 rounded-2xl border border-forge-navy-light/80 hover:border-forge-orange/40 shadow-lg h-full group-hover:shadow-forge-orange/5 transition-all">
                  <span className="font-display text-4xl font-black text-forge-orange/30 group-hover:text-forge-orange/50 transition-colors">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-forge-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-forge-steel leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/beta/register"
              className="inline-flex items-center gap-2 rounded-full bg-forge-orange px-8 py-3.5 text-sm font-bold text-forge-white hover:bg-forge-orange-dark hover:scale-105 transition-all shadow-lg shadow-forge-orange/10"
            >
              <span>Sign Up as a Customer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="border-t border-forge-navy-light/50 bg-forge-navy-light/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-extrabold uppercase text-forge-white mb-10">
            Built on Trust
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-forge-orange/10 border border-forge-orange/20 text-forge-orange">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-forge-white">Vetted Professionals</h3>
              <p className="text-sm text-forge-steel">All tradespeople pass background, license, and insurance checks before appearing on the platform.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-forge-orange/10 border border-forge-orange/20 text-forge-orange">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-forge-white">Secure Escrow Payments</h3>
              <p className="text-sm text-forge-steel">Funds are locked in escrow until the work is confirmed complete — protecting both the customer and the worker.</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-forge-orange/10 border border-forge-orange/20 text-forge-orange">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-forge-white">Community Reviews</h3>
              <p className="text-sm text-forge-steel">Transparent two-way reviews after every job keep quality high and accountability real on both sides.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
