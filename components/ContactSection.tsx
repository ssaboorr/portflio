"use client"

import Footer from "./Footer"

export default function ContactSection() {
  return (
    <>
      <div className="relative z-10 min-h-screen">
        <div className="px-6 py-16">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-[8rem] font-black text-[#2C3E50] leading-none tracking-tight">CONTACT</h2>
          </div>

          {/* Scrolling Tags */}
          <div className="overflow-hidden whitespace-nowrap mb-16 scroll-animate">
            <div className="inline-flex space-x-8 animate-scroll">
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Freelance</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Creative</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Developer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Designer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Freelance</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Creative</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Developer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm">Designer</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto scroll-animate">
            <div className="grid grid-cols-3 gap-16">
              {/* Left Column - Contact Info */}
              <div className="space-y-8 scroll-animate">
                <div className="max-w-sm">
                  <p className="text-[#2C3E50] text-sm leading-relaxed mb-8">
                    Ready to start a project with me? Let's create something amazing together!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[#2C3E50] font-medium text-sm mb-1">Abdus</div>
                    <div className="text-[#2C3E50] font-medium text-sm">Saboor</div>
                  </div>

                  <div className="text-[#2C3E50] text-sm">
                    <div>Sint Jozefklooster</div>
                    <div>5801 CR Venray</div>
                    <div>The Netherlands</div>
                  </div>

                  <div className="text-[#2C3E50] text-sm">
                    <div>info@abdussaboor.com</div>
                    <div>+31 (0)628839393</div>
                  </div>
                </div>

                {/* Barcode */}
                <div className="flex space-x-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#2C3E50]"
                      style={{
                        width: Math.random() > 0.5 ? "2px" : "1px",
                        height: "60px",
                      }}
                    />
                  ))}
                </div>
                <div className="text-[#2C3E50] text-xs">+31 (0)6 28839393</div>

                {/* Bird with signature */}
                <div className="relative mt-16 scroll-animate">
                  <img
                    src="/detailed-realistic-bird-illustration-small-songbir.png"
                    alt="Bird illustration"
                    className="w-48 h-36 object-cover"
                  />
                  <div className="absolute bottom-0 left-0">
                    <div className="text-[#E67E22] text-2xl font-script">Abdus</div>
                  </div>
                </div>
              </div>

              {/* Center Column - Contact Form */}
              <div className="space-y-8 scroll-animate">
                <div>
                  <label className="block text-[#2C3E50] text-sm mb-2">Who are you?</label>
                  <input
                    type="text"
                    placeholder="{your name}"
                    className="w-full bg-transparent border-b border-[#2C3E50] pb-2 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#2C3E50] text-sm mb-2">How do we communicate?</label>
                  <input
                    type="email"
                    placeholder="{your e-mail}"
                    className="w-full bg-transparent border-b border-[#2C3E50] pb-2 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#2C3E50] text-sm mb-2">What is your question?</label>
                  <textarea
                    placeholder="{your message}"
                    rows={4}
                    className="w-full bg-transparent border-b border-[#2C3E50] pb-2 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors resize-none"
                  />
                </div>

                <button className="bg-[#2C3E50] text-[#E8DDD4] px-8 py-3 text-sm font-medium hover:bg-[#E67E22] transition-colors">
                  Send Message
                </button>
              </div>

              {/* Right Column - Coordinates */}
              <div className="text-right scroll-animate">
                <div className="text-[#2C3E50] text-xs">
                  <div>/ 51.5270258</div>
                  <div>// 5.9753635</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
