import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export interface MultiColumnHeroProps {
  title: string
  subtitle?: string
  columns: {
    title: string
    description: string
    image?: {
      url: string
      alt: string
    }
    cta?: {
      label: string
      url: string
    }
  }[]
  backgroundImage?: {
    url: string
    alt: string
  }
  overlayColor?: string
  overlayOpacity?: number
  backgroundColor?: string
  textColor?: string
}

export function MultiColumnHero({
  title,
  subtitle,
  columns,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  backgroundColor = "#f8f9fa",
  textColor = "#1a1a1a",
}: MultiColumnHeroProps) {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor }}>
      {backgroundImage && (
        <>
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
        </>
      )}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: textColor }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: textColor }}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              {column.image && (
                <div className="relative h-48">
                  <Image
                    src={column.image.url || "/placeholder.svg"}
                    alt={column.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{column.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{column.description}</p>
                {column.cta && (
                  <Button asChild className="mt-auto">
                    <Link href={column.cta.url}>{column.cta.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
