"use client"

import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] px-6 py-16 mt-16">
      {/* Scrolling Tags */}
      <div className="overflow-hidden whitespace-nowrap mb-16">
        <div className="inline-flex space-x-8 animate-scroll">
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Creative</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Developer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Designer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Freelance</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Creative</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Developer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Designer</span>
          <span className="text-[#E67E22] text-sm">✦</span>
          <span className="text-[#E67E22] text-sm">Freelance</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Connect text and info */}
          <div className="flex-1">
            <div className="text-[8rem] font-black text-[#E67E22] leading-none mb-8">C</div>
            <div className="max-w-md mb-8">
              <div className="text-[#E67E22] text-sm mb-2">M./</div>
              <p className="text-[#E67E22] text-sm leading-relaxed">
                Ready to take your digital project to the next level? Feel free to reach out to me for inquiries,
                collaborations, or just to say hello!
              </p>
            </div>
          </div>

          {/* Center - Bird image with signature */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="bg-[#1a2332] rounded-lg p-8 w-80 h-80 flex items-center justify-center">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-64 h-48 object-cover rounded"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="text-[#E67E22] text-2xl font-script">Abdus Saboor</div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                <div className="text-[#E67E22] text-xs">Venray</div>
                <div className="text-[#E67E22] text-xs">The Netherlands</div>
              </div>
            </div>
          </div>

          {/* Right side - Connect text and contact info */}
          <div className="flex-1 text-right">
            <div className="text-[8rem] font-black text-[#E67E22] leading-none mb-8">ONNECT</div>
            <div className="text-right">
              <div className="text-[#E67E22] text-sm underline mb-2">info@abdussaboor.com</div>
              <div className="text-[#E67E22] text-sm">+31 6 28839393</div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-end mt-16">
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-[#E67E22] hover:opacity-70 transition-opacity cursor-pointer" />
            <Linkedin className="w-5 h-5 text-[#E67E22] hover:opacity-70 transition-opacity cursor-pointer" />
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4">
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

          <div className="text-right text-[#E67E22] text-xs">
            <div>© 2025 Abdus Saboor</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
