import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/render";
import { getTransporter } from "@/lib/mailer";
import BetaWelcomeEmail from "@/emails/BetaWelcome";
import AmbassadorWelcomeEmail from "@/emails/AmbassadorWelcome";
import AdminNotificationEmail from "@/emails/AdminNotification";

const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  role: z.enum(["WORKER", "CUSTOMER", "BOTH"]),
  trade: z.string().optional().nullable(),
  location: z.string().min(3),
  motivation: z.string().optional().nullable(),
});

const GMAIL_USER = process.env.GMAIL_USER || "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || GMAIL_USER;
const FROM = `Forge <${GMAIL_USER}>`;

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ program: string }> }
) {
  try {
    const { program } = await params;

    if (program !== "beta" && program !== "ambassador") {
      return NextResponse.json(
        { error: "Invalid registration program path parameter" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { fullName, email, role, trade, location, motivation } = result.data;
    const createdAt = new Date().toISOString();

    console.log(`[DB] New ${program.toUpperCase()} registration:`, {
      fullName,
      email,
      role,
      location,
      createdAt,
    });

    // ── Build email content ──
    let userSubject = "";
    let userHtml = "";

    if (program === "beta") {
      userSubject = "⚙ You're on the Forge Beta list!";
      userHtml = await render(BetaWelcomeEmail({ fullName, email, role }));
    } else {
      userSubject = "⚙ Welcome to the Forge Ambassador Program!";
      userHtml = await render(AmbassadorWelcomeEmail({ fullName, email, location }));
    }

    const adminSubject = `[Forge] New ${program === "beta" ? "Beta" : "Ambassador"} signup: ${fullName}`;
    const adminHtml = await render(
      AdminNotificationEmail({
        fullName,
        email,
        program: program as "beta" | "ambassador",
        role,
        location,
        trade,
        motivation,
        createdAt,
      })
    );

    // ── Send via Nodemailer + Gmail ──
    const transporter = getTransporter();

    if (!transporter) {
      console.warn("[Email] GMAIL_USER or GMAIL_APP_PASSWORD not set — skipping email.");
      return NextResponse.json(
        { success: true, message: "Registered (email skipped: Gmail credentials not configured)." },
        { status: 200 }
      );
    }

    // Send welcome email to the user
    try {
      const userInfo = await transporter.sendMail({
        from: FROM,
        to: email,
        subject: userSubject,
        html: userHtml,
      });
      console.log(`[Email] Welcome email sent → ${email}. MessageId: ${userInfo.messageId}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("[Email] Failed to send welcome email:", message);
      return NextResponse.json(
        { error: `Failed to send confirmation email: ${message}` },
        { status: 500 }
      );
    }

    // Send admin notification (don't block success if this fails)
    try {
      const adminInfo = await transporter.sendMail({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: adminSubject,
        html: adminHtml,
      });
      console.log(`[Email] Admin notification sent → ${ADMIN_EMAIL}. MessageId: ${adminInfo.messageId}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("[Email] Failed to send admin notification:", message);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Successfully registered for the ${program} program. Check your inbox!`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration route error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred" },
      { status: 500 }
    );
  }
}
