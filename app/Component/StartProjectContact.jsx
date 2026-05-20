"use client"
import React, { useState } from "react";
import '../css/startprojectcontact.css'

const socialLinks = [
  { id: "fb", label: "Facebook", icon: "f", href: "https://www.facebook.com" },
  { id: "ln", label: "LinkedIn", icon: "in", href: "https://www.linkedin.com" },
  { id: "ig", label: "Instagram", icon: "ig", href: "https://www.instagram.com" },
];

const StartProjectContact = () => {
  const [status, setStatus] = useState("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setStatus("error");
        setFeedbackMsg("Server error. Please try again later.");
        return;
      }

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFeedbackMsg(result.message || "Your message has been sent successfully!");
        e.target.reset();
        return;
      }

      setStatus("error");
      setFeedbackMsg(result.message || "Failed to send message.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedbackMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="start-project-section" id="contact">
      <div className="start-project-container">
        <div className="start-project-left">
          <div className="start-project-badge" aria-hidden="true">
            🤝
          </div>
          <h2>Let’s build something great together</h2>
          <p>
            Looking to grow your business online? We create strategies and solutions
            that bring clarity, consistency, and real results.
          </p>

          <div className="start-project-socials" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="start-project-social-btn"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="start-project-form" onSubmit={handleSubmit}>
          <div className="start-project-field-grid">
            <label className="start-project-field">
              <span>Your name*</span>
              <input type="text" name="name" required disabled={status === "loading"} />
            </label>

            <label className="start-project-field">
              <span>Company name</span>
              <input type="text" name="company" disabled={status === "loading"} />
            </label>

            <label className="start-project-field">
              <span>Phone number*</span>
              <input type="tel" name="phone" required disabled={status === "loading"} />
            </label>

            <label className="start-project-field">
              <span>Email address*</span>
              <input type="email" name="email" required disabled={status === "loading"} />
            </label>
          </div>

          <label className="start-project-field start-project-textarea">
            <span>Tell us about your project*</span>
            <textarea name="message" rows={4} required disabled={status === "loading"} />
          </label>

          {status === "success" && (
            <p className="start-project-form-success" role="status">
              {feedbackMsg}
            </p>
          )}
          {status === "error" && (
            <p className="start-project-form-error" role="alert">
              {feedbackMsg}
            </p>
          )}

          <button
            type="submit"
            className="start-project-submit-btn"
            disabled={status === "loading"}
          >
            <span className="start-project-submit-icon">→</span>
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartProjectContact;