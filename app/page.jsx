"use client"
import './home.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {

  const plans = [
    {
      name: 'Starter',
      price: 399,
      features: [
        'AI Growth Setup',
        'Website Performance Boost',
        'Social Media Content (2 posts)',
        'Blog Writing (1 article)',
      ],
    },
    {
      name: 'Growth',
      price: 899,
      features: [
        'Advanced AI Optimization',
        'Full Website Enhancement',
        'Social Media Content (5 posts)',
        'Blog Writing (3 articles)',
      ],
    },
    {
      name: 'Elite',
      price: 1399,
      features: [
        'Complete AI Marketing System',
        'Conversion Optimization',
        'Social Media Content (10 posts)',
        'Blog Writing (5 articles)',
      ],
    },
  ];

  const clients = [
    { id: 1, name: 'Brand A', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=' },
    { id: 2, name: 'Brand B', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=' },
    { id: 3, name: 'Brand C', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=' },
    { id: 4, name: 'Brand D', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=' },
  ];

  const services = [
    {
      title: "Content Creation",
      description: "We craft engaging visual and written content that captures attention and builds strong brand identity.",
      isActive: false,
      image: "https://via.placeholder.com/300x200/800080/FFFFFF?text=Creative+Content"
    },
    {
      title: "Search Growth Strategy",
      description: "Our SEO frameworks are built to increase visibility, attract quality traffic, and turn clicks into customers.",
      isActive: true,
      image: "https://via.placeholder.com/300x200/4B0082/FFFFFF?text=SEO+Growth"
    },
    {
      title: "Modern Web Solutions",
      description: "We design and develop scalable, high-performance websites tailored for business growth.",
      isActive: false,
      image: "https://via.placeholder.com/300x200/000033/FFFFFF?text=Web+Solutions"
    }
  ];

  const items = [
    "Built for growth",
    "Smart automation",
    "Proven strategies",
    "Reliable support"
  ];

  const images = [
    "https://yoursaio.com/wp-content/uploads/2026/02/Jc-publishing-356x396.jpg",
    "https://yoursaio.com/wp-content/uploads/2025/12/Snake-356x396.jpg",
    "https://yoursaio.com/wp-content/uploads/2024/09/Hausers-356x396.webp",
    "https://yoursaio.com/wp-content/uploads/2024/09/Bp-gas-356x396.webp",
    "https://yoursaio.com/wp-content/uploads/2026/02/Jc-publishing-356x396.jpg",
    "https://yoursaio.com/wp-content/uploads/2025/12/Snake-356x396.jpg",
    "https://yoursaio.com/wp-content/uploads/2024/09/Hausers-356x396.webp",
    "https://yoursaio.com/wp-content/uploads/2024/09/Bp-gas-356x396.webp",
  ];

  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getClass = (i) => {
    if (i === index) return "card active";
    if (i === (index - 1 + images.length) % images.length) return "card left";
    if (i === (index + 1) % images.length) return "card right";
    return "card hidden";
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-container">
        <div className="orbit-line"></div>
        <div className="content-box">
          <div className="badge">
            <span>✦</span>
            Struggling to Scale?
            <span>✦</span>
          </div>
          <h1 className="main-title">
            Transform Your Digital Presence<br />
            Into a Powerful Growth Engine<br />
            That Delivers Real Results.
          </h1>
          <button className="services-btn">
            <Link href="/services" className='btn-text'>Explore Services</Link>
          </button>
        </div>
      </section>

      {/* ===== CAROUSEL ===== */}
      <div className="carousel">
        <div className="carousel-track">
          {images.map((src, i) => (
            <div key={i} className={getClass(i)}>
              <img src={src} alt="project" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== TRUST SECTION ===== */}
      <section className="background-view">
        <h1 className="main-title">Trusted by Growing Brands Worldwide</h1>

        <div className="middle-row">
          <div className="gradient-title">
            <Image src="/images/logo.png" alt="Logo" width={180} height={70} />
          </div>
          <p className="description">
            Our results are driven by real strategies, real data, and consistent execution
            that helps businesses scale faster and smarter.
          </p>
        </div>

        <div className="bottom-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#555', marginLeft: '-10px' }}></div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#777', marginLeft: '-10px' }}></div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#999', marginLeft: '-10px' }}></div>
            </div>
            <div>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.8rem' }}>Clients Served</p>
              <strong>700+ businesses</strong>
            </div>
          </div>

          <Image src="/images/logo.png" alt="Logo" width={160} height={60} />

          <button className="cta-button">
            <span style={{ fontWeight: 'bold' }}>Start Free Consultation</span>
          </button>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((text, index) => (
            <div key={index} className="marquee-item">
              <span>{text}</span>
              <span className="separator">✱</span>
            </div>
          ))}
          {items.map((text, index) => (
            <div key={`dup-${index}`} className="marquee-item">
              <span>{text}</span>
              <span className="separator">✱</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section className="about-section">
        <div className="about-badge">
          <span className="stars">✦</span>
          <span>Who We Are</span>
          <span className="stars">✦</span>
        </div>
        <div className="about-content">
          <p style={{ fontSize: "30px", textAlign: "justify" }}>
            DO my AIO
            helps businesses leverage advanced digital tools and automation to simplify operations and boost growth.
            We combine intelligent systems with proven marketing strategies to deliver consistent, measurable outcomes.

            <span className="dimmed">
              Our approach focuses on efficiency, scalability, and performance—ensuring your business stays ahead.
            </span>

            <span className="highlight-gradient"> Better results, less effort. </span>

            <span className="dimmed">
              Everything is integrated into one streamlined experience, so you can focus on what matters most—growing your business.
            </span>

            DO my AIO
            <span className="dimmed"> is your long-term digital growth partner.</span>
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-section">
        <h2 className="services-header">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.isActive ? 'active' : ''}`}>
              <div className="card-top">
                <h3 className="service-title">{service.title}</h3>
                <div className="arrow-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <p className="service-desc">{service.description}</p>
              <div className="shape-container" style={{ backgroundImage: `url(${service.image})` }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section className="clients-section">
        <div className="clients-container">
          <h1 className="clients-title">Partners & Clients</h1>
          <div className="clients-title-underline"></div>
          <div className="clients-grid">
            {clients.map((client) => (
              <div key={client.id} className="client-card">
                <img src={client.logo} alt={client.name} className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section>
        <div className="pricing-container">
          <h1 className="pricing-title">Flexible Plans For Every Business</h1>
          <div className="pricing-cards-wrapper">
            {plans.map((plan) => (
              <div key={plan.name} className="pricing-card">
                <div className="plan-badge">{plan.name}</div>
                <h2 className="plan-name">{plan.name}</h2>
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="price">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}