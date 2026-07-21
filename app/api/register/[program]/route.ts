import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/render";
import { getResend } from "@/lib/resend";
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

// Use Resend's safe default from address (works without a verified domain)
const FROM_EMAIL = process.env.FROM_EMAIL || "Forge <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "intelligentsystems26@gmail.com";

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

    const { fullName, email, phone, role, trade, location, motivation } = result.data;
    const createdAt = new Date().toISOString();

    // ── 1. Log registration ──
    console.log(`[DB] New ${program.toUpperCase()} registration:`, {
      fullName,
      email,
      role,
      location,
      createdAt,
    });

    // ── 2. Build email templates ──
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

    // ── 3. Send via Resend ──
    const resendClient = getResend();

    if (!resendClient) {
      console.warn("[Email] RESEND_API_KEY not set — skipping email send.");
      return NextResponse.json(
        { success: true, message: "Registered (email skipped: no API key)." },
        { status: 200 }
      );
    }

    // Send welcome email to the user
    const { data: userData, error: userEmailError } = await resendClient.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: userSubject,
      html: userHtml,
    });

    if (userEmailError) {
      console.error("[Email] Failed to send welcome email:", JSON.stringify(userEmailError));
      // Return a helpful error to the client
      return NextResponse.json(
        {
          error: `Email delivery failed: ${userEmailError.message}. Note: Resend free plan only allows sending to your own verified email address. Please verify a domain at resend.com/domains.`,
        },
        { status: 500 }
      );
    }

    console.log(`[Email] Welcome email sent. ID: ${userData?.id} → ${email}`);

    // Send admin notification
    const { data: adminData, error: adminEmailError } = await resendClient.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminEmailError) {
      console.error("[Email] Failed to send admin notification:", JSON.stringify(adminEmailError));
      // Don't fail the whole request just because admin email failed
    } else {
      console.log(`[Email] Admin notification sent. ID: ${adminData?.id} → ${ADMIN_EMAIL}`);
    }

    // ── 4. Return success ──
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

