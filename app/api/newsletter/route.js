import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "../../../lib/db";
import { escapeHtml } from "../../../lib/escapeHtml";

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // 1. Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("subscribers");

    // 2. Check for duplicate
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "This email is already subscribed." },
        { status: 409 }
      );
    }

    const safeEmail = escapeHtml(email);

    // 3. Save to MongoDB
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
    });

    // 4. Handle Emails (Professional Multi-Email Approach)
    // We use allSettled so that if one email fails, the process doesn't crash
    await Promise.allSettled([
      resend.emails.send({
        from: "Hassam@domyaio.com",
        to: email,
        subject: "You're subscribed! 🎉",
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: auto; padding: 32px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #1a1a1a;">Welcome aboard!</h2>
            <p style="color: #444; line-height: 1.6;">
              Thanks for subscribing to our newsletter. You'll be the first to know about our latest
              services, insights, and updates.
            </p>
            <p style="color: #444; margin-top: 20px;">Best regards,<br><strong>The Team</strong></p>
          </div>
        `,
      }),
    ]);

    // 5. Notify the WEB OWNER (Professional Notification)
    try {
      await resend.emails.send({
        from: "System <Hassam@domyaio.com>",
        to: "Hassam@domyaio.com",
        subject: "🚀 New Newsletter Signup",
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h3>New Lead Acquired!</h3>
            <p>A new user has just subscribed to your newsletter:</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      });
    } catch (adminError) {
      // We log this but don't stop the process, so the user doesn't see an error
      console.error("Admin notification failed to send:", adminError);
    }

    return NextResponse.json(
      { success: true, message: "Subscribed successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}