"use client"

import Footer from "./Footer"
import PixelTransition from "./pixalated"

export default function IndexSection() {
  return (
    <section className="min-h-screen relative z-30 bg-[#8B7355]">
      {/* Main Content - INDEX Section */}
      <>
        <main className="relative z-30 px-4 sm:px-6">
          {/* Large Typography with full width and responsive design */}
          <div className="full-width-text mt-16 mb-20 scroll-animate">
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black text-[#2C3E50] leading-none tracking-tight bg-gradient-to-r from-[#2C3E50] via-[#34495E] to-[#2C3E50] bg-clip-text text-transparent animate-pulse">
              ABDUS
            </h1>
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black text-[#2C3E50] leading-none tracking-tight -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 bg-gradient-to-r from-[#2C3E50] via-[#E67E22] to-[#2C3E50] bg-clip-text text-transparent">
              SABOOR
            </h1>
            {/* Subtitle */}
            <p className="subtitle text-[#E67E22] text-xl sm:text-2xl md:text-3xl font-medium mt-8 sm:mt-10 md:mt-12 opacity-80 px-4">
              Creative Developer & Designer
            </p>
          </div>

          {/* Hero Section - Exactly as shown in image */}
          <div className="relative flex items-center justify-center min-h-[800px] max-w-7xl mx-auto mb-20 scroll-animate px-4">
            {/* Contact Info - Left Side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-8 z-30 scroll-animate gap-animate">
              {/* Barcode */}
              <div className="bg-[#F5F5DC]/90 backdrop-blur-md rounded-lg p-4 border border-[#2C3E50]/20 shadow-lg">
                <div className="flex space-x-1 mb-2">
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
                <div className="text-[#2C3E50] text-sm font-mono">+31 (0)6 28839393</div>
              </div>
              
              {/* Skills Text */}
              <div className="bg-gradient-to-r from-[#E67E22]/20 to-[#2C3E50]/20 backdrop-blur-md rounded-lg p-4 border border-[#E67E22]/30 shadow-lg">
                <div className="text-[#2C3E50] text-sm font-medium">
                  Skilled in both
                  <br />
                  <span className="text-[#E67E22] font-bold">developing</span> and <span className="text-[#E67E22] font-bold">design</span>
                </div>
              </div>
            </div>

            {/* Large Centered Bird Image with Overlapping Text */}
            <div className="relative scroll-animate group z-20">
              {/* Main Bird Image - Larger and Centered using PixelTransition */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[350px] sm:h-[420px] md:h-[490px] lg:h-[560px]">
                  <PixelTransition
                    firstContent={
                      <img
                        src="/detailed-realistic-bird-illustration-small-songbir.png"
                        alt="Bird illustration"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    }
                    secondContent={
                      <img
                        src="/detailed-realistic-bird-illustration-small-songbir.png"
                        alt="Bird illustration"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    }
                    gridSize={20}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                    className="custom-pixel-card w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Overlapping Text - Positioned over the bird as shown in image */}
              <div className="absolute top-8 right-8 z-30 gap-animate">
                <div className="text-left bg-[#F5F5DC]/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-[#2C3E50]/20">
                  <div className="text-[#2C3E50] text-base mb-3 font-semibold tracking-wide">M./</div>
                  <div className="text-[#E67E22] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-script mb-3 drop-shadow-lg leading-tight font-bold">
                    Creative Developer
                  </div>
                  <div className="text-[#2C3E50] text-sm opacity-80 font-medium">Portfolio 2025</div>
                </div>
              </div>
            </div>

            {/* Description Text - Right Side overlapping the bird */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-md z-30 scroll-animate gap-animate">
              <div className="space-y-6 bg-[#F5F5DC]/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-[#2C3E50]/20">
                <p className="text-[#2C3E50] text-base sm:text-lg leading-relaxed font-medium">
                  With a strong focus on <span className="text-[#E67E22] font-bold">creative development</span>, digital stories are crafted to engage. Expertise in
                  interactive animations and detailed design enables the creation of websites that stand out and leave
                  a lasting impact.
                </p>
                <p className="text-[#2C3E50] text-base sm:text-lg leading-relaxed font-medium">
                  Specializing in impressive online experiences, clients receive tailored solutions to elevate their
                  digital presence. Each project aims to capture attention and engage audiences effectively.
                </p>
                <p className="text-[#2C3E50] text-base sm:text-lg leading-relaxed font-medium">
                  By delivering unique and impressive websites, clients can confidently showcase their brand and
                  communicate in the digital space. Every vision deserves to shine online, and that's the goal.
                </p>

                {/* Coordinates - Top Right as shown in image */}
                <div className="mt-8 text-right">
                  <div className="text-[#2C3E50] text-sm font-mono font-semibold">
                    <div>/ 51.5270258</div>
                    <div>// 5.9753635</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Navigation with better styling */}
          <div className="absolute bottom-12 left-4 sm:left-6 right-4 sm:right-6 flex justify-between scroll-animate">
            <div className="bg-[#F5F5DC]/80 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer hover:bg-[#F5F5DC] transition-all duration-300 shadow-lg border border-[#2C3E50]/20 hover:scale-110">
              <div className="text-[#2C3E50] text-xl sm:text-2xl font-bold">‹</div>
            </div>
            <div className="bg-[#F5F5DC]/80 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer hover:bg-[#F5F5DC] transition-all duration-300 shadow-lg border border-[#2C3E50]/20 hover:scale-110">
              <div className="text-[#2C3E50] text-xl sm:text-2xl font-bold">›</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </section>
  )
}
