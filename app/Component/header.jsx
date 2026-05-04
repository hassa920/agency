"use client"
import React from 'react'
import Link from 'next/link'
import '../css/header.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
    const pathname=usePathname()
  return (
    <div className='header-wrapper'>

      <header className="header">
    <Image 
        src="/images/logo.png" 
        alt="logo" 
        width={120} 
        height={50}
      />
      
      <nav className="nav">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Portfolio</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>

      <button className="btn">Start Now</button>
    </header>
    </div>
    
  )
}

export default Header