"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import '../css/header.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProjectPopup from './ProjectPopup'

const Header = () => {
  const pathname = usePathname()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const updateOffset = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const offset = rect.bottom + 20
      document.documentElement.style.setProperty('--header-offset', `${offset}px`)
    }

    updateOffset()

    const observer = new ResizeObserver(updateOffset)
    if (wrapperRef.current) observer.observe(wrapperRef.current)

    return () => observer.disconnect()
  }, [])

  // close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/',          label: 'Home'      },
    { href: '/services',  label: 'Services'  },
    { href: '/project',   label: 'Portfolio' },
    { href: '/about',     label: 'About'     },
    { href: '/contact',   label: 'Contact'   },
  ]

  return (
    <>
      <div className='header-wrapper' ref={wrapperRef}>
        <header className="header">

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="logo"
            className='logo'
            width={200}
            height={40}
          />

          {/* Desktop nav */}
          <nav className="nav">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button className="btn desktop-btn" onClick={() => setIsPopupOpen(true)}>
            Start Now
          </button>

          {/* Hamburger — mobile only */}
          <button
            className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'mobile-menu-overlay--open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer ${isMenuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__inner">

          <div className="mobile-drawer__links">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`mobile-drawer__link ${pathname === href ? 'active' : ''}`}
                style={{ '--i': i }}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
                <svg className="mobile-drawer__arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>

          <button
            className="mobile-drawer__cta"
            onClick={() => { setIsMenuOpen(false); setIsPopupOpen(true) }}
          >
            Start Now
          </button>

        </div>
      </nav>

      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  )
}

export default Header