"use client"

import { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import IndexSection from "../components/IndexSection"
import WorkSection from "../components/WorkSection"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import AnimatedBackground from "../components/AnimatedBackground"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("index")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    if (section === activeSection) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSection(section)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scrollDirection === "down") {
            entry.target.classList.remove("animate-slide-out-down")
            entry.target.classList.add("animate-slide-in-up")
          } else {
            entry.target.classList.remove("animate-slide-out-down")
            entry.target.classList.add("animate-slide-in-up")
          }
        } else {
          if (scrollDirection === "up") {
            entry.target.classList.remove("animate-slide-in-up")
            entry.target.classList.add("animate-slide-out-down")
          }
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeSection, scrollDirection])

  // Gap Animation Observer
  useEffect(() => {
    const gapObserverOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const gapObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, gapObserverOptions)

    const gapElements = document.querySelectorAll(".gap-animate")
    gapElements.forEach((el) => gapObserver.observe(el))

    return () => gapObserver.disconnect()
  }, [activeSection])

  return (
    <div className="min-h-screen bg-[#E8DDD4] relative overflow-hidden">
      {/* Animated Background - Lowest z-index */}
      <AnimatedBackground />
      
      {/* Terminal Background (kept for compatibility) - Above animated background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-10">
        <div className="terminal-background w-full h-full"></div>
      </div>

      {/* Header - Highest z-index */}
      <Header 
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavClick={handleNavClick}
      />

      {/* Main Content - Above background, below header */}
      <div className="pt-20 relative z-20">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {activeSection === "index" && <IndexSection />}
          {activeSection === "work" && <WorkSection />}
          {activeSection === "about" && <AboutSection />}
          {activeSection === "contact" && <ContactSection />}
        </div>
      </div>
    </div>
  )
}
