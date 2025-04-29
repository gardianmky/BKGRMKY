import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface VideoHeroProps {
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
  videoUrl: string
  posterImage?: string
  overlayColor?: string
  overlayOpacity?: number
  textColor?: string
  textAlignment?: "left" | "center" | "right"
}

export function VideoHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  videoUrl,
  posterImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  textColor = "white",
  textAlignment = "center",
}: VideoHeroProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterImage}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
