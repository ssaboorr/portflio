"use client"

import { useRef, useState, useEffect } from "react"
import Footer from "./Footer"

export default function AboutSection() {
  const [isAboutLoaded, setIsAboutLoaded] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => setIsAboutLoaded(true), 100)
  }, [])

  return (
    <>
      <div className="relative z-10" ref={aboutRef}>
        {/* Enhanced About Header Section */}
        <div className="px-6 py-12">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-[#2C3E50] leading-none tracking-tight bg-gradient-to-r from-[#2C3E50] via-[#E67E22] to-[#2C3E50] bg-clip-text text-transparent">
              ABOUT
            </h2>
            <div className="relative text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-[#2C3E50] leading-none tracking-tight -mt-8">
              <div className="flex items-center justify-center">
                <span
                  className={`inline-block transition-transform duration-1000 ${isAboutLoaded ? "translate-x-[-100px]" : ""}`}
                >
                  AB
                </span>
                <span
                  className={`inline-block mx-4 text-[#E67E22] text-3xl md:text-4xl font-script transition-opacity duration-1000 delay-500 ${isAboutLoaded ? "opacity-100" : "opacity-0"}`}
                >
                  Creative Developer
                </span>
                <span
                  className={`inline-block transition-transform duration-1000 ${isAboutLoaded ? "translate-x-[100px]" : ""}`}
                >
                  DUS
                </span>
              </div>
            </div>
            {/* Subtitle */}
            <p className="text-[#E67E22] text-lg mt-6 opacity-80 max-w-2xl mx-auto">
              Passionate about creating digital experiences that inspire and engage
            </p>
          </div>

          {/* Enhanced Scrolling Tags */}
          <div className="overflow-hidden whitespace-nowrap mb-16 scroll-animate">
            <div className="inline-flex space-x-8 animate-scroll">
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
              <span className="text-[#E67E22] text-sm">×</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Freelance</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Creative</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Developer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">Designer</span>
            </div>
          </div>

          {/* Enhanced Hero Section */}
          <div className="relative flex items-center justify-center min-h-[700px] max-w-7xl mx-auto mb-20 scroll-animate">
            <div className="relative scroll-animate group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-[400px] md:w-[500px] h-[280px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute top-8 left-8 z-30">
                <div className="text-[#E67E22] text-4xl md:text-5xl font-script bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  Creative Developer
                </div>
              </div>
            </div>

            {/* Enhanced Description Text - Center Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-sm z-10 scroll-animate">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                  Specializing in impressive online experiences, clients receive tailored solutions to elevate their
                  digital presence. Each project aims to capture attention and engage audiences effectively.
                </p>
              </div>
            </div>

            {/* Enhanced Left Side Text */}
            <div className="absolute left-0 top-1/4 max-w-xs z-10 scroll-animate">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-[#2C3E50] text-sm mb-2 font-medium">M./</div>
                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  Expertise in interactive animations and detailed design enables the creation of websites that
                  stand out and leave a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Large Typography Section */}
        <div className="px-6 py-20 scroll-animate">
          <div className="max-w-7xl mx-auto relative">
            {/* Large Typography with Bird */}
            <div className="relative mb-20 large-text-overlay scroll-animate">
              <div className="flex items-start">
                <div className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-black text-[#2C3E50] leading-none max-w-4xl scroll-animate">
                  SINCE 2015 I'VE
                  <br />
                  BEEN WORKING
                  <br />
                  ON BUILDING
                  <br />
                  DIGITAL
                  <br />
                  STORIES, WITH
                  <br />A STRONG
                  <br />
                  FOCUS ON
                  <br />
                  CREATIVE
                  <br />
                  DEVELOPMENT.
                </div>
              </div>

              {/* Enhanced Bird positioned in center-right */}
              <div className="bird-overlay scroll-animate group">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/detailed-realistic-bird-illustration-small-songbir.png"
                    alt="Bird illustration"
                    className="w-[300px] md:w-[400px] h-[225px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Enhanced Right side description */}
              <div className="absolute right-0 top-1/4 max-w-sm scroll-animate">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                    By delivering unique and impressive websites, clients can confidently showcase their brand and
                    communicate in the digital space. Every vision deserves to shine online, and that's the goal.
                  </p>
                  <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                    Over the years, I've developed expertise in interactive animations and design, creating websites
                    that stand out and leave a lasting impression. Now, I'm fully focused on helping clients enhance
                    their digital presence.
                  </p>
                  <p className="text-[#2C3E50] text-sm leading-relaxed">
                    Specializing in impactful online experiences, I offer tailored solutions that capture attention
                    and engage audiences. My goal is to help clients present themselves effectively, with websites
                    that are both visually striking and functional. Every project is crafted with care, bringing
                    visions to life in a creative and meaningful way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <div className="px-6 py-20 services-section scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between mb-12 scroll-animate">
              <div className="text-[#2C3E50] text-lg font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl">Services</div>
              <div className="text-[#2C3E50] text-lg font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl">Info</div>
              <div className="text-[#2C3E50] text-2xl cursor-pointer bg-white/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300">×</div>
            </div>

            {/* Enhanced Service Items */}
            <div className="space-y-0">
              <div className="service-item py-10 flex items-start scroll-animate hover:bg-white/5 rounded-2xl p-6 transition-all duration-300">
                <div className="service-number text-[#2C3E50] text-lg mr-8 min-w-[3rem] font-bold bg-[#E67E22]/20 px-3 py-1 rounded-full">01</div>
                <div className="text-[#2C3E50] text-3xl md:text-4xl font-bold mr-16 min-w-[20rem]">Design</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Delivering strong, user-friendly designs exclusively paired with development. This ensures your
                  website is both beautiful and functional, perfectly reflecting your brand.
                </div>
              </div>

              <div className="service-item py-10 flex items-start scroll-animate hover:bg-white/5 rounded-2xl p-6 transition-all duration-300">
                <div className="service-number text-[#2C3E50] text-lg mr-8 min-w-[3rem] font-bold bg-[#E67E22]/20 px-3 py-1 rounded-full">02</div>
                <div className="text-[#2C3E50] text-3xl md:text-4xl font-bold mr-16 min-w-[20rem]">Development</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  I specialize in building dynamic, animated websites that captivate and engage users. With a
                  focus on custom development, I bring unique design visions to life without relying on standard
                  templates. Each website is crafted to meet specific needs, ensuring a distinctive and impactful
                  online presence.
                </div>
              </div>

              <div className="service-item py-10 flex items-start scroll-animate hover:bg-white/5 rounded-2xl p-6 transition-all duration-300">
                <div className="service-number text-[#2C3E50] text-lg mr-8 min-w-[3rem] font-bold bg-[#E67E22]/20 px-3 py-1 rounded-full">03</div>
                <div className="text-[#2C3E50] text-3xl md:text-4xl font-bold mr-16 min-w-[20rem]">Digital advice</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Struggling with a digital project? I provide advice to navigate through digital challenges.
                  Acting as an intermediary, I ensure smooth and efficient project execution by bridging any gaps
                  in digital knowledge.
                </div>
              </div>

              <div className="service-item py-10 flex items-start border-b-0 scroll-animate hover:bg-white/5 rounded-2xl p-6 transition-all duration-300">
                <div className="service-number text-[#2C3E50] text-lg mr-8 min-w-[3rem] font-bold bg-[#E67E22]/20 px-3 py-1 rounded-full">04</div>
                <div className="text-[#2C3E50] text-3xl md:text-4xl font-bold mr-16 min-w-[20rem]">Project management</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Projects are efficiently managed with a focus on clear communication and organization. If
                  needed, project management can be provided for clients to ensure smooth execution.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Awards Section */}
        <div className="px-6 py-20 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between scroll-animate mb-12">
              <div className="awards-text text-[#2C3E50] text-2xl font-bold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">A WWWARDS</div>
              <div className="text-right">
                <div className="awards-text text-[#2C3E50] text-2xl font-bold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">W</div>
              </div>
            </div>
            <div className="mt-8 max-w-md scroll-animate">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  Proudly serving as an <span className="italic font-bold text-[#E67E22]">Awwwards jury member</span>, I evaluate the finest
                  websites globally. With a keen eye for micro animations and transitions, I find immense joy in
                  recognizing excellence in design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
