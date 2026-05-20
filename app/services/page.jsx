"use client";
import React, { useState } from "react";
import "../css/service.css";
import { useRouter } from "next/navigation";

const serviceItems = [
  "Custom Website Design & Development",
  "Brand Identity & Visual Design",
  "Social Media Growth & Management",
  "Search Visibility & SEO Optimization",
];

const clients = ["NX", "DIGI HUB", "Z", "R", "T", "L", "Q"];

const faqs = [
  {
    id: "faq-1",
    question: "What are digital growth services, and why do they matter?",
    answer:
      "Digital growth services combine design, marketing, and optimization into one strategy to help businesses attract more customers and scale efficiently.",
  },
  {
    id: "faq-2",
    question: "Can I select only the services I need?",
    answer:
      "Yes, our solutions are flexible—you can choose individual services or a complete package based on your goals.",
  },
  {
    id: "faq-3",
    question: "How soon can we get started?",
    answer:
      "Most projects begin within a few days after initial discussion and planning.",
  },
  {
    id: "faq-4",
    question: "Do you offer support after project completion?",
    answer:
      "Yes, we provide ongoing support, updates, and optimization to ensure long-term success.",
  },
  {
    id: "faq-5",
    question: "What makes your services different from others?",
    answer:
      "We offer a unified approach where design, marketing, and strategy work together, ensuring better results and smoother execution.",
  },
];

const Service = () => {

  const router = useRouter();

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SUBMIT FORM (REAL FUNCTIONAL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setStatus("error");
        setFeedbackMsg("Server error. Please try again later.");
        return;
      }

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedbackMsg(data.message || "Your message has been sent successfully!");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        return;
      }

      setStatus("error");
      setFeedbackMsg(data.message || "Failed to send message.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedbackMsg("Network error. Please check your connection and try again.");
    }
  };

  // ✅ BUTTON ACTIONS
  const handleDiscover = () => {
    router.push("/#pricing");
  };

  const handleExplore = () => {
    router.push("/");
  };

  return (
    <main className="services-page">

      <section className="services-hero">
        <div className="services-shell">
          <div className="services-hero-copy">
            <h1>Digital Growth Services</h1>

            <p>
              We provide end-to-end digital solutions that help businesses grow
              faster. From building powerful websites to executing smart marketing
              strategies, everything we do is focused on real results and long-term success.
            </p>

            <div className="services-hero-actions">

              <button
                type="button"
                className="services-primary-btn"
                onClick={handleDiscover}
              >
                Discover More <span>→</span>
              </button>

              <a
                href="#"
                className="services-crumb-btn"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                Home <span>&gt;</span> Services
              </a>

            </div>
          </div>

          <div className="services-hero-art" aria-hidden="true">
            <img
              className="services-hero-visual"
              src="/images/hero_section.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="services-offer">
        <div className="services-shell">
          <h2>Solutions We Provide</h2>

          <div className="services-offer-grid">
            <article className="services-offer-card">
              <img
                src="/images/content.jpg"
                alt="Digital services overview"
              />
            </article>

            <ul className="services-offer-list">
              {serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      <section className="services-clients">
        <div className="services-shell">
          <h2>Brands We Work With</h2>

          <div className="services-client-strip">
            {clients.map((client) => (
              <div key={client} className="services-client-logo">
                {client}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="services-highlight">
        <div className="services-shell">
          <article className="services-highlight-card">

            <div className="services-highlight-top">
              <div>
                <h2>Smart Strategies Backed by Real Experience</h2>

                <p>
                  We blend creativity with data-driven insights to build digital
                  experiences that attract, engage, and convert your audience.
                </p>

                <button
                  type="button"
                  className="services-primary-btn"
                  onClick={handleExplore}
                >
                  Explore More <span>→</span>
                </button>

              </div>

              <img
                src="/images/smart.png"
                alt="Digital team collaboration"
              />
            </div>

            <div className="services-highlight-bottom">
              <img
                src="/images/creative.png"
                alt="Creative professional"
              />

              <div>
                <h3>Creative Approach</h3>
                <p>
                  We design solutions that are not only functional but also visually impactful.
                </p>
              </div>

              <div>
                <h3>Why Work With Us</h3>
                <p>
                  Clear communication, consistent delivery, and strategies focused on measurable growth.
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>

      <section className="services-faq">
        <div className="services-shell">
          <h2>Common Questions</h2>

          <div className="services-faq-list">
            {faqs.map((faq, idx) => (
              <details key={faq.id} open={idx === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      <section className="services-contact">
        <div className="services-shell services-contact-grid">

          <div className="services-contact-left">
            <div className="services-hand">🤝</div>
            <h2>Let’s build something great together</h2>

            <p>
              Share your ideas with us and we’ll help turn them into a powerful digital experience.
            </p>

            <div className="services-socials">
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            </div>
          </div>

          <form className="services-contact-form" onSubmit={handleSubmit}>

            <div className="services-form-grid">

              <label>
                Your name*
                <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={status === "loading"} />
              </label>

              <label>
                Company name
                <input type="text" name="company" value={formData.company} onChange={handleChange} disabled={status === "loading"} />
              </label>

              <label>
                Phone number*
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required disabled={status === "loading"} />
              </label>

              <label>
                Email address*
                <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={status === "loading"} />
              </label>

            </div>

            <label className="services-form-message">
              Tell us about your project*
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              ></textarea>
            </label>

            {status === "success" && (
              <p className="services-form-success" role="status">
                {feedbackMsg}
              </p>
            )}
            {status === "error" && (
              <p className="services-form-error" role="alert">
                {feedbackMsg}
              </p>
            )}

            <button type="submit" className="services-send-btn" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

          </form>

        </div>
      </section>

    </main>
  );
};

export default Service;