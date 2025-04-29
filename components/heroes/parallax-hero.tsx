"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export interface ParallaxHeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    label: string
    url: string
  }
  secondaryCta?: {
    label: string
    url: string
  }
  backgroundImage: {
    url: string
    alt: string
  }
  foregroundImage?: {
    url: string
    alt: string
    position?: "left" | "center" | "right"
  }
  overlayColor?: string
  overlayOpacity?: number
  textColor?: string
  textAlignment?: "left" | "center" | "right"
}

export function ParallaxHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  foregroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  textColor = "white",
  textAlignment = "center",
}: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  const foregroundPositionClasses = {
    left: "left-10",
    center: "left-1/2 -translate-x-1/2",
    right: "right-10",
  }

  return (
    <section ref={sectionRef} className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src={backgroundImage.url || "/placeholder.svg"}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      </div>

      {foregroundImage && (
        <div
          className={`absolute bottom-0 ${
            foregroundPositionClasses[foregroundImage.position || "center"]
          } z-10 w-[300px] md:w-[400px] h-[300px] md:h-[400px]`}
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          <Image
            src={foregroundImage.url || "/placeholder.svg"}
            alt={foregroundImage.alt}
            fill
            className="object-contain"
          />
        </div>
      )}

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className={`max-w-3xl mx-auto flex flex-col gap-6 ${alignmentClasses[textAlignment]}`}>
          {subtitle && (
            <p className={`text-sm md:text-base font-medium uppercase tracking-wider`} style={{ color: textColor }}>
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: textColor }}>
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg max-w-2xl" style={{ color: textColor }}>
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 mt-4">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link href={primaryCta.url}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCta.url}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
