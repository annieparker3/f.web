import nodemailer from "nodemailer";

// Create a Gmail SMTP transporter using App Password
export function getTransporter() {
  const user = process.env.GMAIL_USER?.trim();
  const rawPass = process.env.GMAIL_APP_PASSWORD;
  // Google displays App Passwords with spaces (e.g. "xxxx xxxx xxxx xxxx"), but SMTP requires 16 chars with no spaces.
  const pass = rawPass ? rawPass.replace(/\s+/g, "") : undefined;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export const FROM_EMAIL = (email: string) =>
  `Forge <${email || process.env.GMAIL_USER}>`;
