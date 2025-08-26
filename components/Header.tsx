"use client"

import { Instagram, Linkedin } from "lucide-react"

interface HeaderProps {
  activeSection: string
  isScrolled: boolean
  onNavClick: (section: string) => void
}

export default function Header({ activeSection, isScrolled, onNavClick }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-md bg-[#E8DDD4]/90 shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Logo */}
      <div className="w-12 h-12 group cursor-pointer hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-lg">
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

      {/* Enhanced Navigation */}
      <nav className="flex space-x-8">
        <button
          onClick={() => onNavClick("index")}
          className={`text-[#2C3E50] font-medium hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl ${
            activeSection === "index" 
              ? "opacity-100 bg-[#E67E22]/20 text-[#E67E22] font-bold" 
              : "opacity-60 hover:bg-white/20"
          }`}
        >
          INDEX
        </button>
        <button
          onClick={() => onNavClick("work")}
          className={`text-[#2C3E50] font-medium hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl ${
            activeSection === "work" 
              ? "opacity-100 bg-[#E67E22]/20 text-[#E67E22] font-bold" 
              : "opacity-60 hover:bg-white/20"
          }`}
        >
          WORK
        </button>
        <button
          onClick={() => onNavClick("about")}
          className={`text-[#2C3E50] font-medium hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl ${
            activeSection === "about" 
              ? "opacity-100 bg-[#E67E22]/20 text-[#E67E22] font-bold" 
              : "opacity-60 hover:bg-white/20"
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavClick("contact")}
          className={`text-[#2C3E50] font-medium hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl ${
            activeSection === "contact" 
              ? "opacity-100 bg-[#E67E22]/20 text-[#E67E22] font-bold" 
              : "opacity-60 hover:bg-white/20"
          }`}
        >
          CONTACT
        </button>
      </nav>

      {/* Enhanced Social Icons */}
      <div className="flex space-x-4">
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
          <Instagram className="w-5 h-5 text-[#2C3E50] hover:text-[#E67E22] transition-colors" />
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
          <Linkedin className="w-5 h-5 text-[#2C3E50] hover:text-[#E67E22] transition-colors" />
        </div>
      </div>
    </header>
  )
}
