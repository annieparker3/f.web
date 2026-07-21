"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-forge-navy-light/60 bg-forge-navy/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-forge-navy-light border border-forge-steel/30 group-hover:border-forge-orange/50 transition-all duration-300">
                {/* App Logo */}
                <Image
                  src="/logo.png"
                  alt="Forge Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-forge-white group-hover:text-forge-orange transition-colors duration-300">
                FORGE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-forge-steel hover:text-forge-white transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              href="/beta"
              className="text-sm font-medium text-forge-steel hover:text-forge-white transition-colors duration-200"
            >
              Beta Program
            </Link>
            <Link
              href="/ambassador"
              className="text-sm font-medium text-forge-steel hover:text-forge-white transition-colors duration-200"
            >
              Ambassadors
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-forge-steel hover:text-forge-white transition-colors duration-200"
            >
              FAQ
            </Link>
          </div>



          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-forge-steel hover:bg-forge-navy-light hover:text-forge-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-forge-navy-light bg-forge-navy md:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              <Link
                href="/how-it-works"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-forge-steel hover:bg-forge-navy-light hover:text-forge-white"
              >
                How It Works
              </Link>
              <Link
                href="/beta"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-forge-steel hover:bg-forge-navy-light hover:text-forge-white"
              >
                Beta Program
              </Link>
              <Link
                href="/ambassador"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-forge-steel hover:bg-forge-navy-light hover:text-forge-white"
              >
                Ambassadors
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-forge-steel hover:bg-forge-navy-light hover:text-forge-white"
              >
                FAQ
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
