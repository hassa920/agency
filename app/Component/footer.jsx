'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../css/footer.css';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'duplicate'
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setStatus('error');
      setMessage('Please agree to the terms first.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setStatus('duplicate');
        setMessage(data.message);
        return;
      }

      if (!res.ok) {
        setStatus('error');
        setMessage(data.message || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setMessage(data.message);
      setEmail('');
      setAgreed(false);

    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Logo and Tagline Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="logo"
                
                width={100}
                height={40}
               
              />
            </div>
            <p className="footer-tagline">
              Smart digital solutions designed to grow and simplify your business.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="footer-column">
            <h3 className="footer-column-title">Company:</h3>
            <ul className="footer-link-list">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/contact" className="footer-link">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          {/* <div className="footer-column">
            <h3 className="footer-column-title">Services:</h3>
            <ul className="footer-link-list">
              <li><a href="#aio-service" className="footer-link">Digital Growth Solutions</a></li>
              <li><a href="#web-dev" className="footer-link">Website Development</a></li>
              <li><a href="#seo" className="footer-link">Search Optimization</a></li>
              <li><a href="#graphic-design" className="footer-link">Brand & Design</a></li>
              <li><a href="#video-editing" className="footer-link">Content Production</a></li>
            </ul>
          </div> */}

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-header">
              <div className="footer-bell-icon">🔔</div>
              <h3 className="footer-newsletter-title">Stay Updated</h3>
            </div>

            {/* ── Success state ── */}
            {status === 'success' ? (
              <div className="footer-newsletter-success">
                <span>✅</span>
                <p>{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="footer-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />

                <div className="footer-checkbox-container">
                  <input
                    type="checkbox"
                    id="terms-agree"
                    className="footer-checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    disabled={status === 'loading'}
                  />
                  <label htmlFor="terms-agree" className="footer-checkbox-label">
                    I agree to the terms and privacy policy.
                  </label>
                </div>

                {/* ── Feedback messages ── */}
                {status === 'error' && (
                  <p className="footer-form-error">❌ {message}</p>
                )}
                {status === 'duplicate' && (
                  <p className="footer-form-duplicate">ℹ️ {message}</p>
                )}

                <button
                  type="submit"
                  className="footer-subscribe-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Join Now'}
                </button>
              </form>
            )}

            <div className="footer-phone-number">
              <span className="footer-phone-icon">📞</span>
              <a href="tel:+18885811741" className="footer-phone-link">+1 888 581 1741</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-bottom-text">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}