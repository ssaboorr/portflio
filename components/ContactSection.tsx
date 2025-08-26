"use client"

import Footer from "./Footer"

export default function ContactSection() {
  return (
    <>
      <div className="relative z-10 min-h-screen">
        <div className="px-6 py-20">
          {/* Enhanced Header */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-[#2C3E50] leading-none tracking-tight bg-gradient-to-r from-[#2C3E50] via-[#E67E22] to-[#2C3E50] bg-clip-text text-transparent">
              CONTACT
            </h2>
            <p className="text-[#E67E22] text-lg mt-6 opacity-80 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
          </div>

          {/* Enhanced Scrolling Tags */}
          <div className="overflow-hidden whitespace-nowrap mb-20 scroll-animate">
            <div className="inline-flex space-x-8 animate-scroll">
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
              <span className="text-[#E67E22] text-sm">✦</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto scroll-animate">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Enhanced Left Column - Contact Info */}
              <div className="space-y-8 scroll-animate">
                <div className="max-w-sm">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <p className="text-[#2C3E50] text-sm leading-relaxed mb-8">
                      Ready to start a project with me? Let's create something amazing together!
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div>
                      <div className="text-[#2C3E50] font-bold text-lg mb-2">Abdus</div>
                      <div className="text-[#2C3E50] font-bold text-lg">Saboor</div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="text-[#2C3E50] text-sm">
                      <div>Sint Jozefklooster</div>
                      <div>5801 CR Venray</div>
                      <div>The Netherlands</div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="text-[#2C3E50] text-sm">
                      <div className="font-medium">info@abdussaboor.com</div>
                      <div className="font-medium">+31 (0)628839393</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Barcode */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex space-x-1 mb-3">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-[#2C3E50] rounded-sm"
                        style={{
                          width: Math.random() > 0.5 ? "3px" : "2px",
                          height: "60px",
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-[#2C3E50] text-xs font-mono">+31 (0)6 28839393</div>
                </div>

                {/* Enhanced Bird with signature */}
                <div className="relative mt-16 scroll-animate group">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/detailed-realistic-bird-illustration-small-songbir.png"
                      alt="Bird illustration"
                      className="w-48 h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0">
                    <div className="text-[#E67E22] text-2xl font-script bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
                      Abdus
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Center Column - Contact Form */}
              <div className="space-y-8 scroll-animate">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#2C3E50] text-sm mb-3 font-medium">Who are you?</label>
                      <input
                        type="text"
                        placeholder="{your name}"
                        className="w-full bg-transparent border-b-2 border-[#2C3E50]/30 pb-3 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors duration-300 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-[#2C3E50] text-sm mb-3 font-medium">How do we communicate?</label>
                      <input
                        type="email"
                        placeholder="{your e-mail}"
                        className="w-full bg-transparent border-b-2 border-[#2C3E50]/30 pb-3 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors duration-300 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-[#2C3E50] text-sm mb-3 font-medium">What is your question?</label>
                      <textarea
                        placeholder="{your message}"
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[#2C3E50]/30 pb-3 text-[#2C3E50] placeholder-[#2C3E50] placeholder-opacity-60 focus:outline-none focus:border-[#E67E22] transition-colors duration-300 text-lg resize-none"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-[#E8DDD4] px-8 py-4 text-sm font-medium hover:from-[#E67E22] hover:to-[#D35400] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Right Column - Coordinates */}
              <div className="text-right scroll-animate">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 inline-block">
                  <div className="text-[#2C3E50] text-xs font-mono">
                    <div>/ 51.5270258</div>
                    <div>// 5.9753635</div>
                  </div>
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
