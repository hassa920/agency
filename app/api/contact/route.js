// app/api/contact/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "../../lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, phone, email, message, projectDetails } = body;

    // ── Validation ───────────────────────────
    if (!name || !email || (!message && !projectDetails)) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Normalize: popup sends `projectDetails`, contact form sends `message`
    const finalMessage = message || projectDetails || "";

    // ── Save to MongoDB (agency → contacts) ──
    const db = await getDb();
    await db.collection("contacts").insertOne({
      name,
      company: company || "",
      phone: phone || "",
      email,
      message: finalMessage,
      createdAt: new Date(),
    });

    // ── Send email to YOU ────────────────────
    await resend.emails.send({
      from: "Your App <onboarding@resend.dev>",
      to: "your_email@gmail.com", // 🔁 change this
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Message:</b> ${finalMessage}</p>
      `,
    });

    // ── Auto-reply to USER ───────────────────
    await resend.emails.send({
      from: "Your App <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <h3>Thanks ${name}!</h3>
        <p>We received your message and will get back to you soon.</p>
        <hr />
        <p><b>Your message:</b></p>
        <p>${finalMessage}</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error." },
      { status: 500 }
    );
  }
}