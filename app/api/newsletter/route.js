// app/api/newsletter/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "../../lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("subscribers");

    // ── Check for duplicate ──────────────────
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "This email is already subscribed." },
        { status: 409 }
      );
    }

    // ── Save to MongoDB ──────────────────────
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
    });

    // ── Send welcome email via Resend ────────
    await resend.emails.send({
      from: "Your Agency <onboarding@resend.dev>",
      to: email,
      subject: "You're subscribed! 🎉",
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: auto; padding: 32px;">
          <h2 style="color: #1a1a1a;">Welcome aboard!</h2>
          <p style="color: #444; line-height: 1.6;">
            Thanks for subscribing. You'll be the first to know about our latest
            services, insights, and updates.
          </p>
          <p style="color: #444;">– The Team</p>
        </div>
      `,
    });

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