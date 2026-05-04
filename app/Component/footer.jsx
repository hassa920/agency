'use client';

import '../css/footer.css'
import Image from 'next/image';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
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
                width={140}
                height={55}
            
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
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#projects" className="footer-link">Our Work</a></li>
              <li><a href="#contact" className="footer-link">Get in Touch</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-column">
            <h3 className="footer-column-title">Services:</h3>
            <ul className="footer-link-list">
              <li><a href="#aio-service" className="footer-link">Digital Growth Solutions</a></li>
              <li><a href="#web-dev" className="footer-link">Website Development</a></li>
              <li><a href="#seo" className="footer-link">Search Optimization</a></li>
              <li><a href="#graphic-design" className="footer-link">Brand & Design</a></li>
              <li><a href="#video-editing" className="footer-link">Content Production</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-header">
              <div className="footer-bell-icon">🔔</div>
              <h3 className="footer-newsletter-title">Stay Updated</h3>
            </div>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="footer-email-input"
                required
              />
              <div className="footer-checkbox-container">
                <input
                  type="checkbox"
                  id="terms-agree"
                  className="footer-checkbox"
                  required
                />
                <label htmlFor="terms-agree" className="footer-checkbox-label">
                  I agree to the terms and privacy policy.
                </label>
              </div>
              <button type="submit" className="footer-subscribe-btn">
                Join Now
              </button>
            </form>
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