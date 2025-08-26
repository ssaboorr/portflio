"use client"

import { Instagram, Linkedin } from "lucide-react"

interface HeaderProps {
  activeSection: string
  isScrolled: boolean
  onNavClick: (section: string) => void
}

export default function Header({ activeSection, isScrolled, onNavClick }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-[#E8DDD4]/80 shadow-sm' 
        : 'bg-transparent'
    }`}>
      {/* Logo */}
      <div className="w-12 h-12">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <rect x="8" y="8" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="8" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="8" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="8" width="4" height="4" fill="#2C3E50" />
          <rect x="4" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="8" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="24" y="12" width="4" height="4" fill="#2C3E50" />
          <rect x="4" y="16" width="4" height="4" fill="#2C3E50" />
          <rect x="8" y="16" width="4" height="4" fill="#FFFFFF" />
          <rect x="12" y="16" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="16" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="16" width="4" height="4" fill="#2C3E50" />
          <rect x="24" y="16" width="4" height="4" fill="#2C3E50" />
          <rect x="4" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="8" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="24" y="20" width="4" height="4" fill="#2C3E50" />
          <rect x="8" y="24" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="24" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="24" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="24" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="28" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="28" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="32" width="4" height="4" fill="#2C3E50" />
          <rect x="12" y="36" width="4" height="4" fill="#2C3E50" />
          <rect x="16" y="36" width="4" height="4" fill="#2C3E50" />
          <rect x="20" y="36" width="4" height="4" fill="#2C3E50" />
        </svg>
      </div>

      <nav className="flex space-x-8">
        <button
          onClick={() => onNavClick("index")}
          className={`text-[#2C3E50] font-medium hover:opacity-70 transition-opacity ${activeSection === "index" ? "opacity-100" : "opacity-60"}`}
        >
          INDEX
        </button>
        <button
          onClick={() => onNavClick("work")}
          className={`text-[#2C3E50] font-medium hover:opacity-70 transition-opacity ${activeSection === "work" ? "opacity-100" : "opacity-60"}`}
        >
          WORK
        </button>
        <button
          onClick={() => onNavClick("about")}
          className={`text-[#2C3E50] font-medium hover:opacity-70 transition-opacity ${activeSection === "about" ? "opacity-100" : "opacity-60"}`}
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavClick("contact")}
          className={`text-[#2C3E50] font-medium hover:opacity-70 transition-opacity ${activeSection === "contact" ? "opacity-100" : "opacity-60"}`}
        >
          CONTACT
        </button>
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Instagram className="w-5 h-5 text-[#2C3E50] hover:opacity-70 transition-opacity cursor-pointer" />
        <Linkedin className="w-5 h-5 text-[#2C3E50] hover:opacity-70 transition-opacity cursor-pointer" />
      </div>
    </header>
  )
}
