import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export interface SplitHeroProps {
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
  image: {
    url: string
    alt: string
  }
  imagePosition?: "left" | "right"
  backgroundColor?: string
  textColor?: string
}

export function SplitHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = "right",
  backgroundColor = "#f8f9fa",
  textColor = "#1a1a1a",
}: SplitHeroProps) {
  return (
    <section className="w-full" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 min-h-[600px] ${
            imagePosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-center p-8 md:p-12">
            {subtitle && (
              <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: textColor }}>
                {subtitle}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: textColor }}>
              {title}
            </h1>
            {description && (
              <p className="text-base md:text-lg mb-8" style={{ color: textColor }}>
                {description}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
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
          <div className="relative w-full h-[300px] md:h-auto">
            <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
