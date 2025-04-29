"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import NavigationCards from "./navigation-cards"

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null)

  // Initialize particles with 3D effect
  useEffect(() => {
    if (!particlesRef.current) return

    const particles = particlesRef.current.querySelectorAll(".particle")
    particles.forEach((particle, index) => {
      const size = 3 + Math.random() * 4
      const depth = 20 + Math.random() * 70
      const moveX = -50 + Math.random() * 100
      const moveY = -45 + Math.random() * 90
      const maxOpacity = 0.6 + Math.random() * 0.3
      const duration = 12 + Math.random() * 8
      const delay = Math.random() * 3

      particle.setAttribute(
        "style",
        `--size: ${size}px; --depth: ${depth}px; --move-x: ${moveX}px; --move-y: ${moveY}px; --max-opacity: ${maxOpacity}; width: var(--size); height: var(--size); top: ${Math.random() * 100}%; left: ${Math.random() * 100}%; animation: particleFloat ${duration}s infinite ease-in-out; animation-delay: ${delay}s;`,
      )
    })
  }, [])

  // Mackay suburbs for the scrolling text layers
  const suburbs = [
    "NORTH MACKAY • EAST MACKAY • SOUTH MACKAY • WEST MACKAY • EIMEO • RURAL VIEW • MOUNT PLEASANT • ANDERGROVE",
    "BUCASIA • SHOAL POINT • BLACKS BEACH • RICHMOND • BEACONSFIELD • OORALEA • GLENELLA • SLADE POINT",
    "ERAKALA • WALKERSTON • SARINA • MIRANI • MARIAN • FINCH HATTON • ETON • FARLEIGH",
    "HABANA • SEAFORTH • BALL BAY • HALIDAY BAY • CAPE HILLSBOROUGH • KOUMALA • CALEN • KUTTABUL",
    "MOUNT PLEASANT • ANDERGROVE • NORTH MACKAY • EAST MACKAY • SOUTH MACKAY • WEST MACKAY • EIMEO • RURAL VIEW",
    "RICHMOND • BEACONSFIELD • OORALEA • GLENELLA • SLADE POINT • BUCASIA • SHOAL POINT • BLACKS BEACH",
  ]

  return (
    <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/9] md:aspect-[16/9] rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      {/* Background with subtle pattern only */}
      <div className="absolute inset-0 bg-gray-100 z-0"></div>

      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.3)_1px,transparent_1px),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.25)_1px,transparent_1px),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[size:60px_60px] z-1"></div>

      {/* Glowing orbs with 3D effect */}
      <div className="absolute inset-0 overflow-hidden z-2">
        <div className="absolute w-[300px] h-[300px] top-[-100px] right-[-100px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(255,255,255,0.1))] filter blur-[5px] opacity-30 animate-orbFloat"></div>
        <div className="absolute w-[200px] h-[200px] bottom-[-80px] left-[10%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(255,255,255,0.1))] filter blur-[5px] opacity-30 animate-orbFloatAlt"></div>
        <div className="absolute w-[150px] h-[150px] top-[20%] left-[-50px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),rgba(255,255,255,0.1))] filter blur-[5px] opacity-30 animate-orbFloat animation-delay-1000"></div>
      </div>

      {/* Enhanced particles with depth effect */}
      <div ref={particlesRef} className="absolute inset-0 perspective-[1000px] z-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/60 shadow-[0_0_5px_rgba(255,255,255,0.3)] transform-style-preserve-3d will-change-transform"
          ></div>
        ))}
      </div>

      {/* Simple text background */}
      <div className="absolute inset-0 overflow-hidden z-4 flex flex-col justify-center items-center">
        <div className="w-[80%] mx-auto">
          {suburbs.map((text, index) => (
            <div key={index} className="text-gray-200/20 font-black uppercase tracking-wider text-center my-2">
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Hero content box - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1.0],
          staggerChildren: 0.1,
        }}
        className="absolute top-10 left-[0.5em] right-[0.5em] w-[calc(100%-1em)] max-w-[1400px] p-8 bg-[rgba(20,84,73,0.95)] backdrop-blur-[15px] rounded-[20px] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-10 overflow-hidden"
        whileHover={{
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          borderColor: "rgba(255,255,255,0.25)",
          transition: { duration: 0.5 },
        }}
      >
        {/* Enhanced inner glow effect with animated gradient */}
        <div
          className="absolute -inset-[5px] bg-gradient-to-br from-white/40 via-transparent to-white/15 rounded-[25px] -z-10 pointer-events-none animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.03)_1px,transparent_1px),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 -z-5"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-5 leading-tight relative text-shadow-[0_1px_0_rgba(255,255,255,0.4),0_2px_5px_rgba(0,0,0,0.2)] bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
        >
          Find Your Dream Home
        </motion.h1>

        {/* Search bar with enhanced animation - moved under heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          className="mb-4 relative"
        >
          <input
            type="text"
            placeholder="Search for properties in Mackay..."
            className="w-full px-4 py-3 pr-10 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40 shadow-inner transition-all duration-300 hover:border-white/40"
          />
          <motion.button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Explore Properties button - moved under search bar */}
        <div className="flex justify-start mb-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ y: -2, scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-white text-[#08776c] text-lg font-semibold rounded-full no-underline transition-all duration-400 border-none cursor-pointer relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:text-[#06655b] group ml-0"
          >
            Explore Properties
            <span className="ml-3 text-2xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            {/* Enhanced button shine effect */}
            <span className="absolute top-[-50%] left-[-60%] w-[20px] h-[200%] bg-white/40 rotate-[30deg] transition-transform duration-700 -z-10 group-hover:translate-x-[300%]"></span>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-sm text-white/95 leading-relaxed mb-6 md:mb-7 text-shadow-sm font-normal max-w-[90%]"
          style={{ fontSize: "12pt" }}
        >
          Discover exceptional properties in Mackay and surrounding areas with Gardian Real Estate.
        </motion.p>

        {/* Navigation Cards with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-8"
        >
          <NavigationCards />
        </motion.div>
      </motion.div>
    </div>
  )
}
