// app/api/contact/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "../../../lib/db";
import { escapeHtml } from "../../../lib/escapeHtml";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, phone, email, message, projectDetails } = body;

    // 1. Validation
    if (!name || !email || !email.includes("@") || (!message && !projectDetails)) {
      return NextResponse.json(
        { success: false, message: "Name, valid email, and message are required." },
        { status: 400 }
      );
    }

    const finalMessage = message || projectDetails || "";
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "N/A");
    const safeCompany = escapeHtml(company || "N/A");
    const safeMessage = escapeHtml(finalMessage);

    // 2. Save to MongoDB
    const db = await getDb();
    await db.collection("contacts").insertOne({
      name,
      company: company || "",
      phone: phone || "",
      email,
      message: finalMessage,
      createdAt: new Date(),
    });

    // 3. Send confirmation email to USER
    // We use allSettled so that if one email fails, the process doesn't crash
    await Promise.allSettled([
      resend.emails.send({
        from: "Hassam@domyaio.com",
        to: email,
        subject: "We've received your message! ✅",
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: auto; padding: 32px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #1a1a1a;">Thanks, ${safeName}!</h2>
            <p style="color: #444; line-height: 1.6;">
              We've received your message and will get back to you as soon as possible.
              In the meantime, feel free to explore our services.
            </p>
            <div style="background: #f9f9f9; border-left: 4px solid #ccc; padding: 16px; margin: 24px 0; border-radius: 4px;">
              <p style="margin: 0; color: #555; font-style: italic;">${safeMessage}</p>
            </div>
            <p style="color: #444; margin-top: 20px;">Best regards,<br><strong>The Team</strong></p>
          </div>
        `,
      }),
    ]);

    // 4. Notify the WEB OWNER
    try {
      await resend.emails.send({
        from: "System <Hassam@domyaio.com>",
        to: "Hassam@domyaio.com",
        subject: "📬 New Contact Form Submission",
        html: `
          <div style="font-family: sans-serif; color: #333; max-width: 520px;">
            <h3>New Contact Form Lead!</h3>
            <p>A new user has submitted the contact form:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${safeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${safeEmail}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${safePhone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${safeCompany}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td>${safeMessage}</td></tr>
            </table>
            <p style="color: #888; margin-top: 20px; font-size: 13px;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      });
    } catch (adminError) {
      // Log but don't surface to the user
      console.error("Admin notification failed to send:", adminError);
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}