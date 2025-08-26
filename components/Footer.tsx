"use client"

import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] px-6 py-20 mt-16 shadow-2xl relative z-30">
      {/* Enhanced Scrolling Tags */}
      <div className="overflow-hidden whitespace-nowrap mb-20">
        <div className="inline-flex space-x-8 animate-scroll">
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Enhanced Left side - Connect text and info */}
          <div className="text-center lg:text-left">
            <div className="text-[6rem] sm:text-[8rem] font-black text-[#E67E22] leading-none mb-8 drop-shadow-2xl">C</div>
            <div className="max-w-md mb-8">
              <div className="text-[#E67E22] text-sm mb-2 font-medium">M./</div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-[#E67E22] text-sm leading-relaxed">
                  Ready to take your digital project to the next level? Feel free to reach out to me for inquiries,
                  collaborations, or just to say hello!
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Center - Bird image with signature */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="bg-[#1a2332] rounded-2xl p-8 w-80 h-80 flex items-center justify-center shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-64 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="text-[#E67E22] text-2xl font-script bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  Abdus Saboor
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                <div className="text-[#E67E22] text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">Venray</div>
                <div className="text-[#E67E22] text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg mt-1">The Netherlands</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right side - Connect text and contact info */}
          <div className="text-center lg:text-right">
            <div className="text-[6rem] sm:text-[8rem] font-black text-[#E67E22] leading-none mb-8 drop-shadow-2xl">ONNECT</div>
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block">
                <div className="text-[#E67E22] text-sm underline mb-2 font-medium">info@abdussaboor.com</div>
                <div className="text-[#E67E22] text-sm font-medium">+31 6 28839393</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-20 space-y-8 lg:space-y-0">
          <div className="flex space-x-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <Instagram className="w-5 h-5 text-[#E67E22] hover:text-[#2C3E50] transition-colors" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <Linkedin className="w-5 h-5 text-[#E67E22] hover:text-[#2C3E50] transition-colors" />
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <rect x="8" y="8" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="8" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="8" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="8" width="4" height="4" fill="#E67E22" />
                <rect x="4" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="8" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="24" y="12" width="4" height="4" fill="#E67E22" />
                <rect x="4" y="16" width="4" height="4" fill="#E67E22" />
                <rect x="8" y="16" width="4" height="4" fill="#FFFFFF" />
                <rect x="12" y="16" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="16" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="16" width="4" height="4" fill="#E67E22" />
                <rect x="24" y="16" width="4" height="4" fill="#E67E22" />
                <rect x="4" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="8" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="24" y="20" width="4" height="4" fill="#E67E22" />
                <rect x="8" y="24" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="24" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="24" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="24" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="28" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="28" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="32" width="4" height="4" fill="#E67E22" />
                <rect x="12" y="36" width="4" height="4" fill="#E67E22" />
                <rect x="16" y="36" width="4" height="4" fill="#E67E22" />
                <rect x="20" y="36" width="4" height="4" fill="#E67E22" />
              </svg>
            </div>
          </div>

          <div className="text-right text-[#E67E22] text-xs bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
            <div>© 2025 Abdus Saboor</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
