import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/render";
import { getResend, FROM_EMAIL } from "@/lib/resend";
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

    // ── 1. Save to database (mock log for now — replace with Prisma) ──
    console.log(`[DB] New ${program.toUpperCase()} registration:`, {
      fullName,
      email,
      role,
      location,
      createdAt,
    });

    // ── 2. Build the correct email templates ──
    let userSubject = "";
    let userHtml = "";

    if (program === "beta") {
      userSubject = "⚙ You're on the Forge Beta list!";
      userHtml = await render(
        BetaWelcomeEmail({ fullName, email, role })
      );
    } else {
      userSubject = "⚙ Welcome to the Forge Ambassador Program!";
      userHtml = await render(
        AmbassadorWelcomeEmail({ fullName, email, location })
      );
    }

    // Build admin notification email
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
    const adminEmail = process.env.ADMIN_EMAIL || "intelligentsystems26@gmail.com";

    if (!resendClient) {
      // API key not configured — log and continue (dev mode)
      console.warn("[Email] RESEND_API_KEY not set — skipping email send.");
      console.log(`[Email] Would have sent "${userSubject}" to ${email}`);
      console.log(`[Email] Would have sent admin notification to ${adminEmail}`);
    } else {
      // Send welcome email to user
      const { error: userEmailError } = await resendClient.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: userSubject,
        html: userHtml,
      });

      if (userEmailError) {
        console.error("[Email] Resend error (user email):", userEmailError);
      } else {
        console.log(`[Email] Welcome email sent to ${email} (program: ${program})`);
      }

      // Send notification to admin
      const { error: adminEmailError } = await resendClient.emails.send({
        from: FROM_EMAIL,
        to: adminEmail,
        subject: adminSubject,
        html: adminHtml,
      });

      if (adminEmailError) {
        console.error("[Email] Resend error (admin email):", adminEmailError);
      } else {
        console.log(`[Email] Admin notification sent to ${adminEmail}`);
      }
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
