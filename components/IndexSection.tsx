"use client"

import Footer from "./Footer"

export default function IndexSection() {
  return (
    <section className="min-h-screen relative">
      {/* Main Content - INDEX Section */}
      <>
        <main className="relative z-10 px-6">
          {/* Large Typography */}
          <div className="text-center mt-8 mb-12 scroll-animate">
            <h1 className="text-[12rem] font-black text-[#2C3E50] leading-none tracking-tight">ABDUS</h1>
            <h1 className="text-[12rem] font-black text-[#2C3E50] leading-none tracking-tight -mt-8">SABOOR</h1>
          </div>

          {/* Hero Section with Centered Bird and Overlapping Text */}
          <div className="relative flex items-center justify-center min-h-[600px] max-w-7xl mx-auto mb-32 scroll-animate">
            {/* Contact Info - Left Side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-8 z-10 scroll-animate">
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
              <div className="text-[#2C3E50] text-sm">+31 (0)6 28839393</div>
              <div className="text-[#2C3E50] text-sm italic">
                Skilled in both
                <br />
                <span className="italic">developing</span> and <span className="italic">design</span>
              </div>
            </div>

            <div className="relative scroll-animate">
              <img
                src="/detailed-realistic-bird-illustration-small-songbir.png"
                alt="Bird illustration"
                className="w-[600px] h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="text-center">
                  <div className="text-[#2C3E50] text-sm mb-2">M./</div>
                  <div className="text-[#E67E22] text-6xl font-script mb-4 drop-shadow-lg">Creative Developer</div>
                </div>
              </div>
            </div>

            {/* Description - Right Side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-md z-10 scroll-animate">
              <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                With a strong focus on creative development, digital stories are crafted to engage. Expertise in
                interactive animations and detailed design enables the creation of websites that stand out and leave
                a lasting impact.
              </p>
              <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                Specializing in impressive online experiences, clients receive tailored solutions to elevate their
                digital presence. Each project aims to capture attention and engage audiences effectively.
              </p>
              <p className="text-[#2C3E50] text-sm leading-relaxed">
                By delivering unique and impressive websites, clients can confidently showcase their brand and
                communicate in the digital space. Every vision deserves to shine online, and that's the goal.
              </p>

              {/* Bottom Right Info */}
              <div className="mt-8 text-right text-[#2C3E50] text-xs">
                <div>/ 51.5270258</div>
                <div>// 5.9753635</div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Arrows */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between scroll-animate">
            <div className="text-[#2C3E50] text-2xl cursor-pointer hover:opacity-70 transition-opacity">‹</div>
            <div className="text-[#2C3E50] text-2xl cursor-pointer hover:opacity-70 transition-opacity">›</div>
          </div>
        </main>
        <Footer />
      </>
    </section>
  )
}
