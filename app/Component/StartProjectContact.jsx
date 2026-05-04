import React from "react";

const socialLinks = [
  { id: "fb", label: "Facebook", icon: "f", href: "#" },
  { id: "ln", label: "LinkedIn", icon: "in", href: "#" },
  { id: "ig", label: "Instagram", icon: "ig", href: "#" },
];

const StartProjectContact = () => {
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
              <a key={social.id} href={social.href} aria-label={social.label} className="start-project-social-btn">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="start-project-form">
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

          <button type="submit" className="start-project-submit-btn">
            <span className="start-project-submit-icon">→</span>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartProjectContact;