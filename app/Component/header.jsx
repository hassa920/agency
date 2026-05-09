"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import '../css/header.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProjectPopup from './ProjectPopup'

const Header = () => {
  const pathname = usePathname()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className='header-wrapper'>
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

        {/* Opens popup on click */}
        <button className="btn" onClick={() => setIsPopupOpen(true)}>
          Start Now
        </button>
      </header>

      {/* Popup rendered at root level, controlled by state */}
      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  )
}

export default Header