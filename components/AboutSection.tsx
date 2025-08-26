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
        {/* About Header Section */}
        <div className="px-6 py-8">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-[8rem] font-black text-[#2C3E50] leading-none tracking-tight">ABOUT</h2>
            <div className="relative text-[8rem] font-black text-[#2C3E50] leading-none tracking-tight -mt-8">
              <div className="flex items-center justify-center">
                <span
                  className={`inline-block transition-transform duration-1000 ${isAboutLoaded ? "translate-x-[-100px]" : ""}`}
                >
                  AB
                </span>
                <span
                  className={`inline-block mx-4 text-[#E67E22] text-4xl font-script transition-opacity duration-1000 delay-500 ${isAboutLoaded ? "opacity-100" : "opacity-0"}`}
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
          </div>

          <div className="overflow-hidden whitespace-nowrap mb-12 scroll-animate">
            <div className="inline-flex space-x-8 animate-scroll">
              <span className="text-[#2C3E50] text-sm">Designer</span>
              <span className="text-[#E67E22] text-sm">×</span>
              <span className="text-[#2C3E50] text-sm">Freelance</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Creative</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Developer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Designer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Freelance</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Creative</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Developer</span>
              <span className="text-[#E67E22] text-sm">+</span>
              <span className="text-[#2C3E50] text-sm">Designer</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[600px] max-w-7xl mx-auto mb-16 scroll-animate">
            <div className="relative scroll-animate">
              <img
                src="/detailed-realistic-bird-illustration-small-songbir.png"
                alt="Bird illustration"
                className="w-[500px] h-[350px] object-cover"
              />
              <div className="absolute top-8 left-8 z-30">
                <div className="text-[#E67E22] text-5xl font-script">Creative Developer</div>
              </div>
            </div>

            {/* Description Text - Center Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-sm z-10 scroll-animate">
              <p className="text-[#2C3E50] text-sm leading-relaxed mb-6">
                Specializing in impressive online experiences, clients receive tailored solutions to elevate their
                digital presence. Each project aims to capture attention and engage audiences effectively.
              </p>
            </div>

            {/* Left Side Text */}
            <div className="absolute left-0 top-1/4 max-w-xs z-10 scroll-animate">
              <div className="text-[#2C3E50] text-sm mb-2">M./</div>
              <p className="text-[#2C3E50] text-sm leading-relaxed">
                Expertise in interactive animations and detailed design enables the creation of websites that
                stand out and leave a lasting impact.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 scroll-animate">
          <div className="max-w-7xl mx-auto relative">
            {/* Large Typography with Bird */}
            <div className="relative mb-16 large-text-overlay scroll-animate">
              <div className="flex items-start">
                <div className="text-[6rem] font-black text-[#2C3E50] leading-none max-w-4xl scroll-animate">
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

              {/* Bird positioned in center-right */}
              <div className="bird-overlay scroll-animate">
                <img
                  src="/detailed-realistic-bird-illustration-small-songbir.png"
                  alt="Bird illustration"
                  className="w-[400px] h-[300px] object-cover"
                />
              </div>

              {/* Right side description */}
              <div className="absolute right-0 top-1/4 max-w-sm scroll-animate">
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

        <div className="px-6 py-16 services-section scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between mb-8 scroll-animate">
              <div className="text-[#2C3E50] text-sm font-medium">Services</div>
              <div className="text-[#2C3E50] text-sm font-medium">Info</div>
              <div className="text-[#2C3E50] text-2xl cursor-pointer">×</div>
            </div>

            {/* Service Items */}
            <div className="space-y-0">
              <div className="service-item py-8 flex items-start scroll-animate">
                <div className="service-number text-[#2C3E50] text-sm mr-8 min-w-[3rem]">01</div>
                <div className="text-[#2C3E50] text-4xl font-bold mr-16 min-w-[20rem]">Design</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Delivering strong, user-friendly designs exclusively paired with development. This ensures your
                  website is both beautiful and functional, perfectly reflecting your brand.
                </div>
              </div>

              <div className="service-item py-8 flex items-start scroll-animate">
                <div className="service-number text-[#2C3E50] text-sm mr-8 min-w-[3rem]">02</div>
                <div className="text-[#2C3E50] text-4xl font-bold mr-16 min-w-[20rem]">Development</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  I specialize in building dynamic, animated websites that captivate and engage users. With a
                  focus on custom development, I bring unique design visions to life without relying on standard
                  templates. Each website is crafted to meet specific needs, ensuring a distinctive and impactful
                  online presence.
                </div>
              </div>

              <div className="service-item py-8 flex items-start scroll-animate">
                <div className="service-number text-[#2C3E50] text-sm mr-8 min-w-[3rem]">03</div>
                <div className="text-[#2C3E50] text-4xl font-bold mr-16 min-w-[20rem]">Digital advice</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Struggling with a digital project? I provide advice to navigate through digital challenges.
                  Acting as an intermediary, I ensure smooth and efficient project execution by bridging any gaps
                  in digital knowledge.
                </div>
              </div>

              <div className="service-item py-8 flex items-start border-b-0 scroll-animate">
                <div className="service-number text-[#2C3E50] text-sm mr-8 min-w-[3rem]">04</div>
                <div className="text-[#2C3E50] text-4xl font-bold mr-16 min-w-[20rem]">Project management</div>
                <div className="text-[#2C3E50] text-sm leading-relaxed max-w-2xl">
                  Projects are efficiently managed with a focus on clear communication and organization. If
                  needed, project management can be provided for clients to ensure smooth execution.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between scroll-animate">
              <div className="awards-text text-[#2C3E50]">A WWWARDS</div>
              <div className="text-right">
                <div className="awards-text text-[#2C3E50]">W</div>
              </div>
            </div>
            <div className="mt-8 max-w-md scroll-animate">
              <p className="text-[#2C3E50] text-sm leading-relaxed">
                Proudly serving as an <span className="italic">Awwwards jury member</span>, I evaluate the finest
                websites globally. With a keen eye for micro animations and transitions, I find immense joy in
                recognizing excellence in design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
