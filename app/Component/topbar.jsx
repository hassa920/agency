'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiPhone, FiZap } from 'react-icons/fi'
import '../css/topbar.css'

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar">

        <div className="topbar-left">
          <FiZap size={16} className="topbar-icon" />
          <span>Empowering Businesses Since 2022</span>
        </div>

        <div className="topbar-right">
          <FiPhone size={16} className="topbar-icon" />
          <span>Speak with us: <strong>+44 7988582665</strong></span>

          <span className="divider">|</span>

          <Link href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebook size={16} />
          </Link>

          <Link href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedin size={16} />
          </Link>

          <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TopBar