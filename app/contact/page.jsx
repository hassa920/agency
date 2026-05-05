"use client"
import React from "react";
import "../css/contact.css";
import StartProjectContact from "../Component/StartProjectContact";

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
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <h1>Get in Touch With Our Team</h1>
            <p>
              We’re here to help you grow. Reach out to us through any of the
              available contact options and we’ll respond as quickly as possible.
            </p>
            <div className="contact-hero-actions">
              <button type="button" className="contact-call-btn">
                Contact Now <span>→</span>
              </button>
              <a href="#" className="contact-crumb-btn">
                Home <span>&gt;</span> Contact
              </a>
            </div>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <div className="contact-hero-orb"></div>
          </div>
        </div>
      </section>

      <section className="contact-ready-section">
        <div className="contact-ready-container">
          <h2>Let’s Connect</h2>
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
            <h2>We’re Ready to Help You</h2>
            <p>
              Have questions or a project in mind? Send us a message and our
              team will get back to you shortly.
            </p>
          </div>

          <form className="contact-details-form">
            <h3>Start a Conversation</h3>
            <div className="contact-details-grid">
              <label>
                First Name
                <input type="text" name="firstName" placeholder="e.g. John" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" placeholder="e.g. Smith" />
              </label>
              <label>
                Email
                <input type="email" name="mail" placeholder="example@gmail.com" />
              </label>
              <label>
                Service Package
                <select name="package">
                  <option>Starter Package</option>
                  <option>Growth Package</option>
                  <option>Enterprise Package</option>
                </select>
              </label>
            </div>
            <label className="contact-details-message">
              Message
              <textarea name="comment" rows={3} placeholder="Write your message here..." />
            </label>
            <button type="submit" className="contact-submit-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <StartProjectContact />
    </main>
  );
};

export default Contact;