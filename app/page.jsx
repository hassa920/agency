"use client"
import './home.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

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
    { id: 1, name: 'Brand A', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg' },
    { id: 2, name: 'Brand B', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg' },
    { id: 3, name: 'Brand C', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg' },
    { id: 4, name: 'Brand D', logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg' },
  ];

  const services = [
    {
      title: "Content Creation",
      description: "...",
      isActive: false,
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      title: "Search Growth Strategy",
      description: "...",
      isActive: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "Modern Web Solutions",
      description: "...",
      isActive: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
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
  }, [images.length]);

  const getClass = (i) => {
    if (i === index) return "card active";
    if (i === (index - 1 + images.length) % images.length) return "card left";
    if (i === (index + 1) % images.length) return "card right";
    return "card hidden";
  };

  // ✅ FUNCTIONS

  const handleConsultation = () => {
    router.push("/contact");
  };

  const handlePlanSelect = (plan) => {
    console.log("Selected Plan:", plan);
    router.push(`/checkout?plan=${plan.name}`);
  };

  const handleServiceClick = (service) => {
    router.push(`/services#${service.title}`);
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

          <Link href="/services">
            <button className="services-btn">
              <span className='btn-text'>Explore Services</span>
            </button>
          </Link>
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
            <Image src="/images/logo.png" alt="Logo" width={200}
              height={100} />
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

          <Image src="/Images/logo.png" alt="Logo" width={100} height={70} />

          <button className="cta-button" onClick={handleConsultation}>
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

      {/* ===== SERVICES ===== */}
      <section className="services-section">
        <h2 className="services-header">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.isActive ? 'active' : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="card-top">
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-desc">{service.description}</p>
              <div className="shape-container" style={{ backgroundImage: `url(${service.image})` }}></div>
            </div>
          ))}
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <button
                  className="cta-button"
                  onClick={() => handlePlanSelect(plan)}
                >
                  Choose Plan
                </button> */}

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}