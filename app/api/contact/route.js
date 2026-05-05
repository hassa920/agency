import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, company, phone, email, message } = body;

    // ✅ validation for YOUR form
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Name, email, and message are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 1. Send email to YOU
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
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 2. Auto-reply to USER
    await resend.emails.send({
      from: "Your App <onboarding@resend.dev>",
      to: email,
      subject: "We received your message",
      html: `
        <h3>Thanks ${name}!</h3>
        <p>We received your message and will get back to you soon.</p>

        <hr />

        <p><b>Your message:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}