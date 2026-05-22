"use client";

import "./home.css";
import Link from "next/link";
import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import Image from "next/image";

import { useRouter }
from "next/navigation";

/* ================= DATA ================= */

const plans = [
  {
    name: "Starter",
    price: 399,
    features: [
      "AI Growth Setup",
      "Website Performance Boost",
      "Social Media Content (2 posts)",
      "Blog Writing (1 article)",
    ],
  },

  {
    name: "Growth",
    price: 899,
    features: [
      "Advanced AI Optimization",
      "Full Website Enhancement",
      "Social Media Content (5 posts)",
      "Blog Writing (3 articles)",
    ],
  },

  {
    name: "Elite",
    price: 1399,
    features: [
      "Complete AI Marketing System",
      "Conversion Optimization",
      "Social Media Content (10 posts)",
      "Blog Writing (5 articles)",
    ],
  },
];

const services = [
  {
    title: "Content Creation",

    description:
      "Engaging content tailored to your brand voice, audience, and growth goals across key digital channels.",

    isActive: false,

    image:
      "/images/content.jpg",
  },

  {
    title:
      "Search Growth Strategy",

    description:
      "Data-led SEO and visibility plans designed to attract qualified traffic and improve long-term discoverability.",

    isActive: true,

    image:
      "/images/search_growth.jpg",
  },

  {
    title:
      "Modern Web Solutions",

    description:
      "Fast responsive websites built for performance and conversions.",

    isActive: false,

    image:
      "/images/modern_web.jpg",
  },
];

const items = [
  "Built for growth",

  "Smart automation",

  "Proven strategies",

  "Reliable support",
];

const carouselImages = [
  "/images/search_growth.jpg",

  "/images/creative.png",

  "/images/modern_web.jpg",
];

export default function Home() {

  const router = useRouter();

  /* ===== ORBIT ===== */

  const dot1Ref =
    useRef(null);

  const dot2Ref =
    useRef(null);

  const dot3Ref =
    useRef(null);

  const dot4Ref =
    useRef(null);

  const angleRef =
    useRef(0);

  const rafRef =
    useRef();

  useEffect(() => {

    const dots = [

      {
        ref: dot1Ref,
        offset: 0,
      },

      {
        ref: dot2Ref,
        offset: 90,
      },

      {
        ref: dot3Ref,
        offset: 180,
      },

      {
        ref: dot4Ref,
        offset: 270,
      },

    ];

    const radius = 160;

    const animate = () => {

      angleRef.current +=
        0.4;

      dots.forEach(
        ({
          ref,
          offset,
        }) => {

          const el =
            ref.current;

          if (!el) return;

          const rad =
            (
              (
                angleRef.current +
                offset
              ) *
              Math.PI
            ) / 180;

          const x =
            radius *
            Math.cos(rad);

          const y =
            radius *
            Math.sin(rad);

          el.style.transform =
            `translate(${x}px,${y}px)`;

        }
      );

      rafRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () =>
      cancelAnimationFrame(
        rafRef.current
      );

  }, []);

  /* ===== CAROUSEL ===== */

  const [index,
    setIndex] =
    useState(1);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setIndex(
          prev =>
            (
              prev + 1
            ) %
            carouselImages.length
        );

      }, 2500);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const getClass = i => {

    if (i === index)
      return "card active";

    if (
      i ===
      (
        index -
        1 +
        carouselImages.length
      ) %
      carouselImages.length
    )
      return "card left";

    if (
      i ===
      (
        index +
        1
      ) %
      carouselImages.length
    )
      return "card right";

    return "card hidden";
  };

  const slugify =
    text =>
      text
        .toLowerCase()
        .replace(
          /\s+/g,
          "-"
        );

  const handleConsultation =
    () =>
      router.push(
        "/contact"
      );

  const handleServiceClick =
    service =>

      router.push(

        `/services#${
          slugify(
            service.title
          )
        }`
      );

  const dotStyle = {

    position:
      "absolute",

    top: "50%",

    left: "50%",

    width: "14px",

    height: "14px",

    background:
      "#ffffff",

    borderRadius:
      "50%",

    margin: "-7px",

    willChange:
      "transform",

    boxShadow:
      "0 0 18px rgba(255,255,255,.8)",
  };

  return (

    <div className="page-root">

      {/* HERO */}

      <section className="hero-orbit-wrapper">

        <section className="hero-container">

          <div className="orbit-line"></div>

          <div className="content-box">

            <div className="badge">

              <span>✦</span>

              Struggling to Scale?

              <span>✦</span>

            </div>

            <h1 className="main-title">

              Transform Your Digital Presence

              <br />

              Into a Powerful Growth Engine

              <br />

              That Delivers Real Results.

            </h1>

            <Link href="/services">

              <button
                className="services-btn"
              >

                <span className="btn-text">

                  Explore Services

                </span>

              </button>

            </Link>

          </div>

        </section>

        {/* ORBIT */}

        <section className="hp-orbit-section">

          <div className="hp-circle-wrapper">

            <div className="hp-circle">

              <div
                ref={dot1Ref}
                style={dotStyle}
              />

              <div
                ref={dot2Ref}
                style={dotStyle}
              />

              <div
                ref={dot3Ref}
                style={dotStyle}
              />

              <div
                ref={dot4Ref}
                style={dotStyle}
              />

              <div className="hp-center-logo">

                <Image
                  src="/images/logo.png"
                  width={200}
                  height={100}
                  alt="logo"
                  priority
                />

              </div>

            </div>

          </div>

        </section>

      </section>

      {/* CAROUSEL */}

      <div className="carousel">

        <div className="carousel-track">

          {carouselImages.map(
            (src, i) => (

              <div
                key={src}
                className={
                  getClass(i)
                }
              >

                <Image
                  src={src}
                  fill
                  priority={
                    i === 1
                  }
                  alt="project image"
                  className="card-image"

                  sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  380px
                  "
                />

              </div>
            )
          )}

        </div>

      </div>

      {/* ===== TRUST SECTION ===== */}
      <section className="background-view">
        <h1 className="main-title">
          Trusted by Growing Brands Worldwide
        </h1>
        <div className="middle-row">
          <div className="gradient-title">
            <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
          </div>
          <p className="description">
            Our results are driven by real strategies,
            real data, and consistent execution
            that helps businesses scale faster and smarter.
          </p>
        </div>
        <div className="bottom-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: '-10px', overflow: 'hidden', backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/icon_client.jpg" alt="Clients icon" width={22} height={22} />
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: '-10px', overflow: 'hidden', backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/icon_trust.jpg" alt="Trust icon" width={22} height={22} />
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', marginLeft: '-10px', overflow: 'hidden', backgroundColor: '#1b1b1b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/icon_growth.png" alt="Growth icon" width={22} height={22} />
              </div>
            </div>
            <div>
              <p style={{ color: '#aaa', margin: 0, fontSize: '0.8rem' }}>Clients Served</p>
              <strong>700+ businesses</strong>
            </div>
          </div>
          <Image src="/images/logo.png" alt="Logo" width={100} height={70} />
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
              <div
                className="shape-container"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing">
        <div className="pricing-container">
          <h1 className="pricing-title">Flexible Plans For Every Business</h1>
          <div className="pricing-cards-wrapper">
            {plans.map((plan) => (
              <div key={plan.name} className="pricing-card">
                <div className="plan-badge">{plan.name}</div>
                <h2 className="plan-name">{plan.name}</h2>
                <div className="pricing-amount">
                  <span className="currency">£</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}