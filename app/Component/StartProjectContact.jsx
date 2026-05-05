"use client"
import React, { useState } from "react";

const socialLinks = [
  { id: "fb", label: "Facebook", icon: "f", href: "#" },
  { id: "ln", label: "LinkedIn", icon: "in", href: "#" },
  { id: "ig", label: "Instagram", icon: "ig", href: "#" },
];

const StartProjectContact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset(); // keeps UI same, just clears form
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
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
              <input type="text" name="name" required />
            </label>

            <label className="start-project-field">
              <span>Company name</span>
              <input type="text" name="company" />
            </label>

            <label className="start-project-field">
              <span>Phone number*</span>
              <input type="tel" name="phone" required />
            </label>

            <label className="start-project-field">
              <span>Email address*</span>
              <input type="email" name="email" required />
            </label>
          </div>

          <label className="start-project-field start-project-textarea">
            <span>Tell us about your project*</span>
            <textarea name="message" rows={4} required />
          </label>

          <button
            type="submit"
            className="start-project-submit-btn"
            disabled={loading}
          >
            <span className="start-project-submit-icon">→</span>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartProjectContact;