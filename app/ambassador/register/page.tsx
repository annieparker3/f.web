"use client";

import RegisterForm from "@/components/RegisterForm";
import { Sparkles } from "lucide-react";

export default function AmbassadorRegisterPage() {
  return (
    <div className="bg-forge-navy py-12 sm:py-20 flex-grow flex items-center justify-center relative overflow-hidden">
      {/* Visual background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-forge-orange/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-forge-orange uppercase tracking-wider">
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span>Ambassador Enrollment Form</span>
          </div>
          <h1 className="font-display text-3xl font-black uppercase text-forge-white sm:text-4xl">
            Apply As Ambassador
          </h1>
          <p className="text-sm text-forge-steel max-w-md mx-auto">
            Become a local growth lead, lock down your 10% referral commission link, and request custom Forge promotional swag.
          </p>
        </div>

        <RegisterForm program="ambassador" />
      </div>
    </div>
  );
}
