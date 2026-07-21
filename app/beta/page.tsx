"use client";

import Link from "next/link";
import { ShieldAlert, Award, Star, Terminal, ArrowRight, Smartphone } from "lucide-react";

export default function BetaPage() {
  return (
    <div className="bg-forge-navy py-12 sm:py-20">
      {/* Hero Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-forge-orange/10 border border-forge-orange/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-forge-orange">
            <Star className="h-3.5 w-3.5 animate-spin-slow" />
            <span>Pilot Program Phase 1</span>
          </div>
          <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl text-forge-white">
            Forge Beta <br />
            <span className="text-forge-orange">Testing Program</span>
          </h1>
          <p className="text-lg text-forge-steel leading-relaxed">
            Get exclusive access to the Forge job-matching mobile applications before the public release. Help us shape the platform and receive credit rewards.
          </p>
          <div className="pt-4">
            <Link
              href="/beta/register"
              className="group inline-flex items-center gap-3 rounded-full bg-forge-orange px-8 py-4 text-base font-bold text-forge-white shadow-xl shadow-forge-orange/20 hover:bg-forge-orange-dark hover:scale-105 active:scale-95 transition-all"
            >
              <span>Apply for Beta Access</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Perks Grid */}
      <div className="mx-auto max-w-7xl px-4 mt-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-forge-white">
            Beta Member Exclusives
          </h2>
          <p className="max-w-xl mx-auto text-sm text-forge-steel">
            As a select tester, you will receive tools, direct support, and monetary platform perks at final launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-forge-navy-light/40 border border-forge-steel/15 p-8 rounded-2xl space-y-4 hover:border-forge-orange/30 transition-all">
            <div className="h-10 w-10 rounded-lg bg-forge-orange/10 flex items-center justify-center text-forge-orange">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-forge-white">App Early Access</h3>
            <p className="text-sm text-forge-steel leading-relaxed">
              Test both Worker and Customer interfaces on iOS (TestFlight) and Android. Provide user feedback on features and workflow simplicity.
            </p>
          </div>

          <div className="bg-forge-navy-light/40 border border-forge-steel/15 p-8 rounded-2xl space-y-4 hover:border-forge-orange/30 transition-all">
            <div className="h-10 w-10 rounded-lg bg-forge-orange/10 flex items-center justify-center text-forge-orange">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-forge-white">Direct Slack Channel</h3>
            <p className="text-sm text-forge-steel leading-relaxed">
              Communicate bugs, feature ideas, and suggestions directly to the Forge software engineering team via an exclusive Slack channel.
            </p>
          </div>

          <div className="bg-forge-navy-light/40 border border-forge-steel/15 p-8 rounded-2xl space-y-4 hover:border-forge-orange/30 transition-all">
            <div className="h-10 w-10 rounded-lg bg-forge-orange/10 flex items-center justify-center text-forge-orange">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-forge-white">$100 Platform Credit</h3>
            <p className="text-sm text-forge-steel leading-relaxed">
              We credit your account with $100. Skilled workers keep 100% of their earnings, and customers get a discount on their initial booking.
            </p>
          </div>
        </div>
      </div>

      {/* Eligible Stepper Timeline */}
      <div className="bg-forge-navy-light/20 border-y border-forge-navy-light/60 py-24 mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-forge-white">
              Application Timeline
            </h2>
            <p className="max-w-xl mx-auto text-sm text-forge-steel">
              We review submissions to maintain balance between job categories and local regional areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 text-forge-orange font-display font-black">
                1
              </div>
              <h3 className="text-lg font-bold text-forge-white">Submit Request</h3>
              <p className="text-xs text-forge-steel leading-relaxed">
                Fill the multi-step registration form. Specify your trade fields, role preferences, and contact details.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 text-forge-orange font-display font-black">
                2
              </div>
              <h3 className="text-lg font-bold text-forge-white">Review Phase</h3>
              <p className="text-xs text-forge-steel leading-relaxed">
                Our operations team reviews submissions within 48 hours to ensure licensing and coverage balance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 text-forge-orange font-display font-black">
                3
              </div>
              <h3 className="text-lg font-bold text-forge-white">Onboarding Invitation</h3>
              <p className="text-xs text-forge-steel leading-relaxed">
                Accepted applicants receive email invitations containing secure app download tokens and setup guidelines.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 text-forge-orange font-display font-black">
                4
              </div>
              <h3 className="text-lg font-bold text-forge-white">Active Feedback</h3>
              <p className="text-xs text-forge-steel leading-relaxed">
                Use the application, report bugs, participate in surveys, and unlock your $100 platform credit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spots warning & Footer CTA */}
      <div className="mx-auto max-w-4xl px-4 mt-24 text-center space-y-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forge-orange/10 text-forge-orange border border-forge-orange/20">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-black uppercase text-forge-white">
          Active Slots are limited
        </h2>
        <p className="max-w-md mx-auto text-sm text-forge-steel">
          To ensure reliable support, we are only admitting 200 testers for this current phase. Secure your token today.
        </p>
        <div className="pt-4">
          <Link
            href="/beta/register"
            className="rounded-full bg-forge-orange px-8 py-3.5 text-sm font-bold text-forge-white hover:bg-forge-orange-dark transition-all"
          >
            Apply for Beta Registration
          </Link>
        </div>
      </div>
    </div>
  );
}
