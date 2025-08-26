"use client"

import { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import IndexSection from "../components/IndexSection"
import WorkSection from "../components/WorkSection"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"

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

  return (
    <div className="min-h-screen bg-[#E8DDD4] relative overflow-hidden">
      {/* Terminal Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="terminal-background w-full h-full"></div>
      </div>

      <Header 
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavClick={handleNavClick}
      />

      <div className="pt-20">
        {/* Main Content */}
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
