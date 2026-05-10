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
  const wrapperRef = useRef(null)

  useEffect(() => {
    const updateOffset = () => {
      if (!wrapperRef.current) return
      // wrapper ka actual bottom position + 20px breathing room
      const rect = wrapperRef.current.getBoundingClientRect()
      const offset = rect.bottom + 20
      document.documentElement.style.setProperty('--header-offset', `${offset}px`)
    }

    // pehli baar run karo
    updateOffset()

    // har resize pe update (mobile rotate bhi cover hoga)
    const observer = new ResizeObserver(updateOffset)
    if (wrapperRef.current) observer.observe(wrapperRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='header-wrapper' ref={wrapperRef}>
      <header className="header">
        <Image
          src="/images/logo.png"
          alt="logo"
          className='logo'
          width={200}
          height={40}
        />

        <nav className="nav">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Portfolio</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        <button className="btn" onClick={() => setIsPopupOpen(true)}>
          Start Now
        </button>
      </header>

      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  )
}

export default Header