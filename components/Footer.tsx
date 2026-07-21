"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Settings, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-forge-navy-light bg-forge-navy-light/30">
      {/* Background gear ornament */}
      <div className="absolute right-0 bottom-0 -z-10 translate-x-1/3 translate-y-1/3 opacity-[0.02]">
        <Settings className="h-96 w-96 animate-spin-slow text-forge-steel" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Brand Panel */}
          <div className="space-y-6 md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 group-hover:border-forge-orange/50 transition-all duration-300">
                {/* SVG Logo with spinning gear animation on hover */}
                <Settings className="absolute h-8 w-8 text-forge-steel/20 group-hover:text-forge-orange/30 group-hover:rotate-180 duration-500 transition-all" />
                <Image
                  src="/logo.png"
                  alt="Forge Logo"
                  width={24}
                  height={24}
                  className="z-10 h-6 w-6 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-forge-white group-hover:text-forge-orange transition-colors">
                FORGE
              </span>
            </Link>
            <p className="max-w-md text-sm leading-6 text-forge-steel">
              Forge connects skilled, independent blue-collar workers with local businesses and customers. Built for work, chiseled for efficiency, and made for your convenience.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-forge-steel hover:text-forge-orange transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-forge-steel hover:text-forge-orange transition-colors" aria-label="Github">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-forge-steel hover:text-forge-orange transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-forge-steel hover:text-forge-orange transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-forge-orange">
                Programs
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/beta" className="text-sm text-forge-steel hover:text-forge-white">
                    Beta Testing Program
                  </Link>
                </li>
                <li>
                  <Link href="/ambassador" className="text-sm text-forge-steel hover:text-forge-white">
                    Ambassador Program
                  </Link>
                </li>
                <li>
                  <Link href="/beta/register" className="text-sm text-forge-steel hover:text-forge-white">
                    Join Beta Signup
                  </Link>
                </li>
                <li>
                  <Link href="/ambassador/register" className="text-sm text-forge-steel hover:text-forge-white">
                    Ambassador Application
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-forge-orange">
                Product
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/how-it-works" className="text-sm text-forge-steel hover:text-forge-white">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-forge-steel hover:text-forge-white">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-forge-steel hover:text-forge-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-forge-steel hover:text-forge-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter bar & Copyright */}
        <div className="mt-12 border-t border-forge-navy-light/60 pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md space-y-2">
            <h4 className="text-sm font-semibold text-forge-white">Subscribe to our newsletter</h4>
            <p className="text-xs text-forge-steel">Get project updates, local launch news, and exclusive gear sneak-peeks.</p>
            <form onSubmit={handleSubscribe} className="relative mt-2 flex max-w-sm items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-forge-navy-light bg-forge-navy/80 py-2 pl-4 pr-12 text-sm text-forge-white placeholder-forge-steel/60 focus:border-forge-orange focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-forge-orange text-forge-white hover:bg-forge-orange-dark transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs font-semibold text-forge-orange animate-pulse">
                Thanks! You have subscribed.
              </p>
            )}
          </div>
          <p className="text-xs text-forge-steel">
            &copy; {new Date().getFullYear()} Forge Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
