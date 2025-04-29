"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export interface AnimatedHeroProps {
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
  backgroundImage?: {
    url: string
    alt: string
  }
  floatingElements?: {
    url: string
    alt: string
    size: "small" | "medium" | "large"
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  }[]
  overlayColor?: string
  overlayOpacity?: number
  textColor?: string
  textAlignment?: "left" | "center" | "right"
}

export function AnimatedHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  floatingElements = [],
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  textColor = "white",
  textAlignment = "center",
}: AnimatedHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  const positionClasses = {
    "top-left": "top-[10%] left-[10%]",
    "top-right": "top-[10%] right-[10%]",
    "bottom-left": "bottom-[10%] left-[10%]",
    "bottom-right": "bottom-[10%] right-[10%]",
    "center-left": "top-1/2 -translate-y-1/2 left-[10%]",
    "center-right": "top-1/2 -translate-y-1/2 right-[10%]",
  }

  const sizeClasses = {
    small: "w-16 h-16 md:w-24 md:h-24",
    medium: "w-24 h-24 md:w-32 md:h-32",
    large: "w-32 h-32 md:w-48 md:h-48",
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage.url || "/placeholder.svg"}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={cn(
            "absolute z-10 opacity-0 transition-all duration-1000",
            positionClasses[element.position],
            sizeClasses[element.size],
            isVisible && "opacity-100 animate-float",
          )}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${3 + (index % 3)}s`,
          }}
        >
          <Image src={element.url || "/placeholder.svg"} alt={element.alt} fill className="object-contain" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div
          className={cn(
            `max-w-3xl mx-auto flex flex-col gap-6 ${alignmentClasses[textAlignment]}`,
            "opacity-0 translate-y-10 transition-all duration-1000",
            isVisible && "opacity-100 translate-y-0",
          )}
        >
          {subtitle && (
            <p
              className={cn(
                `text-sm md:text-base font-medium uppercase tracking-wider`,
                "opacity-0 transition-all duration-1000 delay-300",
                isVisible && "opacity-100",
              )}
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
          )}
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
              "opacity-0 transition-all duration-1000 delay-500",
              isVisible && "opacity-100",
            )}
            style={{ color: textColor }}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "text-base md:text-lg max-w-2xl",
                "opacity-0 transition-all duration-1000 delay-700",
                isVisible && "opacity-100",
              )}
              style={{ color: textColor }}
            >
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "flex flex-wrap gap-4 mt-4",
                "opacity-0 transition-all duration-1000 delay-900",
                isVisible && "opacity-100",
              )}
            >
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
