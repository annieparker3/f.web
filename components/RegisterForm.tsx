"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowRight, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

// Form input types definitions using Zod schema
const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  role: z.enum(["WORKER", "CUSTOMER", "BOTH"], {
    message: "Please select your primary role",
  }),
  trade: z.string().optional(),
  location: z.string().min(3, "Please specify a location (City, State)"),
  motivation: z.string().optional(),
});

type FormValues = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  program: "beta" | "ambassador";
}

export default function RegisterForm({ program }: RegisterFormProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: "CUSTOMER",
      trade: "",
      location: "",
      motivation: "",
    },
  });

  const selectedRole = watch("role");

  // Conditional validations for step transitions
  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) {
      fieldsToValidate = ["fullName", "email", "phone"];
    } else if (step === 2) {
      fieldsToValidate = ["role"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch(`/api/register/${program}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setServerError(resData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  // Form Progress bar logic

  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-forge-navy-light/40 border border-forge-steel/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Progress Bar Header */}
      {!isSuccess && (
        <div className="mb-8 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold text-forge-steel uppercase tracking-wider">
            <span>Step {step} of 3</span>
            <span>{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-forge-navy overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(step / 3) * 100}%` }}
              className="h-full bg-forge-orange"
            />
          </div>
        </div>
      )}

      {/* Main Form Fields Container */}
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-6"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forge-orange/20 text-forge-orange border-2 border-forge-orange">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-black text-forge-white uppercase tracking-tight">
                You&apos;re On The List!
              </h2>
              <p className="text-sm text-forge-steel max-w-sm mx-auto leading-relaxed">
                Thank you for applying. We have sent a branded confirmation email to your address. Please verify your details to activate your early rewards token.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-forge-steel/30 bg-forge-navy-light/40 px-6 py-2.5 text-sm font-semibold text-forge-white hover:bg-forge-navy-light transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {serverError && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-xs font-medium text-red-400">
                {serverError}
              </div>
            )}

            {/* STEP 1: Personal Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-black text-forge-white uppercase">Personal Details</h3>
                  <p className="text-xs text-forge-steel">Please provide your legal name and contact options.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Marcus Brodin"
                      className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] font-semibold text-forge-orange">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. marcus@company.com"
                      className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-[11px] font-semibold text-forge-orange">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="e.g. +1 (555) 123-4567"
                      className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-semibold text-forge-orange">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Role Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-black text-forge-white uppercase">Your Profile</h3>
                  <p className="text-xs text-forge-steel">Select how you intend to interact with the matching platform.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setValue("role", "WORKER")}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all hover:scale-[1.02] ${
                      selectedRole === "WORKER"
                        ? "border-forge-orange bg-forge-orange/10 text-forge-white"
                        : "border-forge-steel/20 bg-forge-navy/60 text-forge-steel hover:text-forge-white hover:border-forge-steel/40"
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">Worker</span>
                    <span className="text-[10px] opacity-75 mt-1 block">Offer my trade skills</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setValue("role", "CUSTOMER")}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all hover:scale-[1.02] ${
                      selectedRole === "CUSTOMER"
                        ? "border-forge-orange bg-forge-orange/10 text-forge-white"
                        : "border-forge-steel/20 bg-forge-navy/60 text-forge-steel hover:text-forge-white hover:border-forge-steel/40"
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">Hiring Client</span>
                    <span className="text-[10px] opacity-75 mt-1 block">Book trade professionals</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setValue("role", "BOTH")}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all hover:scale-[1.02] ${
                      selectedRole === "BOTH"
                        ? "border-forge-orange bg-forge-orange/10 text-forge-white"
                        : "border-forge-steel/20 bg-forge-navy/60 text-forge-steel hover:text-forge-white hover:border-forge-steel/40"
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider">Both</span>
                    <span className="text-[10px] opacity-75 mt-1 block">Trade and hire locally</span>
                  </button>
                </div>
                {errors.role && (
                  <p className="text-[11px] font-semibold text-forge-orange text-center">{errors.role.message}</p>
                )}
              </motion.div>
            )}

            {/* STEP 3: Details & Motivation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-black text-forge-white uppercase">Additional Specs</h3>
                  <p className="text-xs text-forge-steel">Provide trade specializations, target locations, or program details.</p>
                </div>

                <div className="space-y-4">
                  {(selectedRole === "WORKER" || selectedRole === "BOTH") && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Trade Category / Specialty</label>
                      <input
                        type="text"
                        {...register("trade")}
                        placeholder="Plumbing, Carpentry, Electrical, Painting etc."
                        className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Operating Location</label>
                    <input
                      type="text"
                      {...register("location")}
                      placeholder="e.g. Austin, TX"
                      className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                    />
                    {errors.location && (
                      <p className="text-[11px] font-semibold text-forge-orange">{errors.location.message}</p>
                    )}
                  </div>

                  {program === "ambassador" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-forge-steel uppercase tracking-wider">Why do you want to join?</label>
                      <textarea
                        rows={3}
                        {...register("motivation")}
                        placeholder="Briefly state your local community connections or leadership experience..."
                        className="w-full rounded-xl border border-forge-steel/20 bg-forge-navy/60 px-4 py-3 text-sm text-forge-white placeholder-forge-steel/40 focus:border-forge-orange focus:outline-none"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Stepper Actions Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-forge-navy-light/60">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 rounded-full border border-forge-steel/20 bg-forge-navy-light/40 px-6 py-2.5 text-xs font-semibold text-forge-white hover:bg-forge-navy-light transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 rounded-full bg-forge-orange px-6 py-2.5 text-xs font-semibold text-forge-white hover:bg-forge-orange-dark transition-all"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-forge-orange px-7 py-3 text-sm font-bold text-forge-white hover:bg-forge-orange-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Apply Now</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
