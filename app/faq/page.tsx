"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Settings, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is Forge?",
        answer:
          "Forge is a blue-collar job-matching platform that connects skilled tradespeople — plumbers, electricians, carpenters, painters, and more — with customers who need quality work done. Think of it as a professional marketplace built specifically for the trades industry.",
      },
      {
        question: "Is Forge available in my city?",
        answer:
          "We are currently operating across 42 cities and actively expanding. If we are not yet in your city, signing up for our Beta Program is the best way to get notified and influence which locations we launch in next.",
      },
      {
        question: "Is Forge available on iOS and Android?",
        answer:
          "Yes. The Forge app will be available on both the Apple App Store and Google Play Store. Beta testers will receive early access via TestFlight (iOS) and direct APK/Play Beta (Android) before the public launch.",
      },
    ],
  },
  {
    category: "For Workers",
    items: [
      {
        question: "How do I sign up as a skilled worker?",
        answer:
          "Register via our Beta Program. After approval, you will set up your trade profile with your specialty, service area, license information, and availability. Once verified, you will start receiving matched job requests.",
      },
      {
        question: "Does Forge take a commission from my earnings?",
        answer:
          "No. Forge does not take a commission from the wages you negotiate with clients. You keep 100% of what you earn. Forge's sustainability model is based on small platform service fees charged separately to customers.",
      },
      {
        question: "How and when do I get paid?",
        answer:
          "Payment is held securely in escrow before the job begins. Once you mark the job as complete and the customer approves, funds are released directly to your registered payment method — typically within 24 hours.",
      },
      {
        question: "What trades are supported on Forge?",
        answer:
          "Forge supports a wide range of blue-collar trades including plumbing, electrical, carpentry, painting, roofing, tiling, landscaping, HVAC, general contracting, and more. If your trade is not listed, you can still apply and we will review it.",
      },
      {
        question: "How does Forge verify workers?",
        answer:
          "All workers go through a background check, license verification, and insurance validation process during onboarding. Verified professionals receive a Forge Verified badge visible on their profile.",
      },
    ],
  },
  {
    category: "For Customers",
    items: [
      {
        question: "How do I post a job request?",
        answer:
          "Download the Forge app, create a customer account, and tap 'Post a Job'. Describe the work needed, set your budget, select your preferred dates, and add any relevant photos. Forge will immediately surface it to qualified professionals in your area.",
      },
      {
        question: "How are the tradespeople vetted?",
        answer:
          "Every professional on Forge has passed a multi-step vetting process: background check, license verification, and proof of insurance. You can see each tradesperson's credentials, star rating, and client reviews before you hire.",
      },
      {
        question: "What if I am unhappy with the completed work?",
        answer:
          "Your payment stays in escrow until you confirm you are satisfied. If you have a dispute, our support team mediates between you and the professional to reach a fair resolution before any funds are released.",
      },
      {
        question: "Are there any hidden fees for customers?",
        answer:
          "Forge charges a transparent platform fee on each booking to cover payment processing and platform maintenance. This fee is displayed clearly before you confirm any booking — there are no hidden charges.",
      },
    ],
  },
  {
    category: "Beta & Ambassador Programs",
    items: [
      {
        question: "What is the Beta Testing Program?",
        answer:
          "The Beta Testing Program gives selected users early access to the Forge app before public launch. Beta testers help us identify bugs, improve UX, and shape features. In exchange, they receive a $100 platform credit, direct access to our engineering team via Slack, and exclusive launch badges.",
      },
      {
        question: "What is the Ambassador Program?",
        answer:
          "Ambassadors are local community representatives who help grow Forge in their city. They refer workers and customers, host informational events, and act as the Forge voice in their region. Ambassadors earn a 10% recurring referral commission for 6 months, exclusive swag, and local lead opportunities.",
      },
      {
        question: "How do I apply for either program?",
        answer:
          "Visit our Beta or Ambassador pages and complete the multi-step registration form. Our team reviews submissions within 48 hours. Accepted applicants receive an email with onboarding instructions.",
      },
      {
        question: "Can I apply for both programs?",
        answer:
          "Yes! If you are passionate about both testing the app and helping grow the local community, you are welcome to apply to both. Just note that Ambassador roles require a brief alignment call with our team.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-forge-navy-light/60 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-semibold text-forge-white group-hover:text-forge-orange transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-forge-steel transition-transform duration-300 ${
            open ? "rotate-180 text-forge-orange" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-forge-steel leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-forge-navy">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-forge-orange/10 border border-forge-orange/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forge-orange mb-6">
          <Settings className="h-3.5 w-3.5" />
          <span>Support Center</span>
        </div>
        <h1 className="font-display text-4xl font-black uppercase tracking-tight text-forge-white sm:text-6xl">
          Frequently Asked <br />
          <span className="text-forge-orange">Questions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-steel leading-relaxed">
          Everything you need to know about Forge, our programs, payments, and how the platform works. Can&apos;t find an answer?{" "}
          <a href="mailto:hello@forge.app" className="text-forge-orange hover:text-forge-orange-dark transition-colors">
            Contact our team.
          </a>
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8 space-y-12">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-widest text-forge-orange">
              {section.category}
            </h2>
            <div className="rounded-2xl bg-forge-navy-light/30 border border-forge-steel/10 px-6">
              {section.items.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-forge-navy-light to-forge-orange/20 border border-forge-steel/10 p-8 text-center space-y-4">
          <h3 className="font-display text-xl font-extrabold uppercase text-forge-white">
            Ready to Get Started?
          </h3>
          <p className="text-sm text-forge-steel">
            Join our Beta Program today and help shape the future of blue-collar work.
          </p>
          <Link
            href="/beta/register"
            className="inline-flex items-center gap-2 rounded-full bg-forge-orange px-8 py-3 text-sm font-bold text-forge-white hover:bg-forge-orange-dark hover:scale-105 transition-all"
          >
            <span>Join Beta</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
