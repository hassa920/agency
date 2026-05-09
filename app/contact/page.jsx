"use client"
import React, { useState } from "react";
import "../css/contact.css";
import StartProjectContact from "../Component/StartProjectContact";
import Link from "next/link";
const contactHighlights = [
  {
    id: "location",
    title: "Our Office",
    description: "3900 Pelican Drive, Suite 213, Tyler, TX 75701",
    icon: "📍",
  },
  {
    id: "email",
    title: "Email Us",
    description: "info@domyaio.com",
    icon: "✉️",
  },
  {
    id: "phone",
    title: "Call Us",
    description: "+1 888 581 1741",
    icon: "📞",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    package: "Starter Package",
    comment: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { firstName, lastName, mail, package: pkg, comment } = formData;

    // ── Basic client-side validation ──
    if (!firstName || !mail || !comment) {
      setStatus("error");
      setErrorMsg("First name, email, and message are required.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email: mail,
          message: `[Package: ${pkg}]\n\n${comment}`,
        }),
      });

      // ── Guard against HTML error pages ──
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setStatus("error");
        setErrorMsg("Server error. Please try again later.");
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        mail: "",
        package: "Starter Package",
        comment: "",
      });

    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <h1>Get in Touch With Our Team</h1>
            <p>
              We are here to help you grow. Reach out to us through any of the
              available contact options and we will respond as quickly as possible.
            </p>
            <div className="contact-hero-actions">
              <button
                type="button"
                className="contact-call-btn"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Now <span>→</span>
              </button>
         <Link href="/" className="contact-crumb-btn">
  Home
</Link>
<span style={{ margin: "0 6px" }}>&gt;</span>
<span className="contact-crumb-btn">Contact</span>
            </div>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <div className="contact-hero-orb"></div>
          </div>
        </div>
      </section>

      <section className="contact-ready-section">
        <div className="contact-ready-container">
          <h2>Let Connect</h2>
          <div className="contact-info-grid">
            {contactHighlights.map((item) => (
              <article key={item.id} className="contact-info-card">
                <div className="contact-info-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="contact-details-copy">
            <h2>We are Ready to Help You</h2>
            <p>
              Have questions or a project in mind? Send us a message and our
              team will get back to you shortly.
            </p>
          </div>

          {/* ── Success State ── */}
          {status === "success" ? (
            <div className="contact-success-box">
              <div className="contact-success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>
                Thanks for reaching out. We have received your message and will
                get back to you within 24 hours. Check your inbox for a
                confirmation email.
              </p>
              <button
                className="contact-submit-btn"
                onClick={() => setStatus("idle")}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form id="contact-form"  className="contact-details-form" onSubmit={handleSubmit}>
              <h3>Start a Conversation</h3>

              <div className="contact-details-grid">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. John"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    required
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="e.g. Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="mail"
                    placeholder="example@gmail.com"
                    value={formData.mail}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    required
                  />
                </label>
                <label>
                  Service Package
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  >
                    <option>Starter Package</option>
                    <option>Growth Package</option>
                    <option>Enterprise Package</option>
                  </select>
                </label>
              </div>

              <label className="contact-details-message">
                Message
                <textarea
                  name="comment"
                  rows={3}
                  placeholder="Write your message here..."
                  value={formData.comment}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  required
                />
              </label>

              {/* ── Error message ── */}
              {status === "error" && (
                <p className="contact-form-error">❌ {errorMsg}</p>
              )}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}{" "}
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <StartProjectContact />
    </main>
  );
};

export default Contact;