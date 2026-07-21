"use client";

import RegisterForm from "@/components/RegisterForm";
import { Star } from "lucide-react";

export default function BetaRegisterPage() {
  return (
    <div className="bg-forge-navy py-12 sm:py-20 flex-grow flex items-center justify-center relative overflow-hidden">
      {/* Visual flourishes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-forge-orange/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-forge-orange uppercase tracking-wider">
            <Star className="h-3 w-3 animate-spin-slow" />
            <span>Beta Testing Registration</span>
          </div>
          <h1 className="font-display text-3xl font-black uppercase text-forge-white sm:text-4xl">
            Secure Your Access Token
          </h1>
          <p className="text-sm text-forge-steel max-w-md mx-auto">
            Fill the details below to register for early access, slack developer group, and $100 platform credit.
          </p>
        </div>

        <RegisterForm program="beta" />
      </div>
    </div>
  );
}
