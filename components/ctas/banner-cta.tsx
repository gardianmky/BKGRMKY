import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export interface BannerCTAProps {
  title: string
  description?: string
  cta: {
    label: string
    url: string
  }
  backgroundImage?: {
    url: string
    alt: string
  }
  backgroundColor?: string
  textColor?: string
}

export function BannerCTA({
  title,
  description,
  cta,
  backgroundImage,
  backgroundColor = "#4f46e5",
  textColor = "white",
}: BannerCTAProps) {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage.url || "/placeholder.svg"}
          alt={backgroundImage.alt}
          fill
          className="object-cover opacity-20"
        />
      )}
      <div className="absolute inset-0" style={{ backgroundColor }} />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: textColor }}>
              {title}
            </h2>
            {description && (
              <p className="text-base md:text-lg" style={{ color: textColor }}>
                {description}
              </p>
            )}
          </div>
          <div className="shrink-0">
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href={cta.url}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
