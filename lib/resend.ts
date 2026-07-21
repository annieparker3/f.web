import { Resend } from "resend";

// Lazily create the client so the module doesn't throw at build-time
// when RESEND_API_KEY is absent.
export function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export const FROM_EMAIL =
  process.env.FROM_EMAIL || "Forge <onboarding@resend.dev>";
