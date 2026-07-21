import nodemailer from "nodemailer";

// Create a Gmail SMTP transporter using App Password
export function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

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
