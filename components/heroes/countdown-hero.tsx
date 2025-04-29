"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export interface CountdownHeroProps {
  title: string
  subtitle?: string
  description?: string
  targetDate: Date | string
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
  overlayColor?: string
  overlayOpacity?: number
  textColor?: string
  textAlignment?: "left" | "center" | "right"
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownHero({
  title,
  subtitle,
  description,
  targetDate,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  textColor = "white",
  textAlignment = "center",
}: CountdownHeroProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setIsExpired(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
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
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
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

          <div className="grid grid-cols-4 gap-2 md:gap-4 my-4">
            <div className="flex flex-col items-center p-2 md:p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: textColor }}>
                {timeLeft.days}
              </span>
              <span className="text-xs md:text-sm" style={{ color: textColor }}>
                Days
              </span>
            </div>
            <div className="flex flex-col items-center p-2 md:p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: textColor }}>
                {timeLeft.hours}
              </span>
              <span className="text-xs md:text-sm" style={{ color: textColor }}>
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center p-2 md:p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: textColor }}>
                {timeLeft.minutes}
              </span>
              <span className="text-xs md:text-sm" style={{ color: textColor }}>
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center p-2 md:p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg">
              <span className="text-2xl md:text-4xl font-bold" style={{ color: textColor }}>
                {timeLeft.seconds}
              </span>
              <span className="text-xs md:text-sm" style={{ color: textColor }}>
                Seconds
              </span>
            </div>
          </div>

          {isExpired && (
            <p className="text-lg font-bold mt-4" style={{ color: textColor }}>
              The countdown has ended!
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
