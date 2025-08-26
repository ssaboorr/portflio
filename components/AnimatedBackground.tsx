"use client"

import { useEffect, useRef } from "react"
import Squares from "./ui/webBackground"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Initialize particles
    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: ['#E67E22', '#2C3E50', '#34495E', '#E8DDD4'][Math.floor(Math.random() * 4)]
        })
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(232, 221, 212, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return
          
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (100 - distance) / 100 * 0.1
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Reset global alpha
      ctx.globalAlpha = 1

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
   
    <div className="fixed inset-0 pointer-events-none z-0 w-full h-full">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8DDD4]/20 via-transparent to-[#E67E22]/10" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #2C3E50 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #E67E22 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 30px 30px',
          backgroundPosition: '0 0, 25px 25px'
        }} />
      </div>
      
      {/* Enhanced Floating Elements with different animations */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-[#E67E22] rounded-full opacity-20 ${
              i % 3 === 0 ? 'animate-float-slow' : 
              i % 3 === 1 ? 'animate-float-fast' : 'animate-pulse-glow'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(44, 62, 80, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44, 62, 80, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      {/* Additional Background Patterns */}
      <div className="absolute inset-0 bg-pattern-mesh opacity-5" />
      <div className="absolute inset-0 bg-pattern-waves opacity-3" />
      <div className="absolute inset-0 bg-pattern-circles opacity-5" />
      
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`interactive-${i}`}
            className="interactive-bg absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#E67E22]/20 to-[#2C3E50]/20"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E67E22]/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#2C3E50]/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-[#E67E22]/10 rounded-full animate-float" />
        <div className="absolute top-1/3 right-32 w-16 h-16 bg-[#2C3E50]/10 rounded-full animate-float-slow" />
      </div>
      
      {/* Animated Border Effect */}
      <div className="absolute inset-0 animated-border opacity-5" />
    // </div>
  )
}
