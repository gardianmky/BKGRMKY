import { cn } from "@/lib/utils"
import Image from "next/image"

export interface FeatureItem {
  title: string
  description: string
  icon?: {
    url: string
    alt: string
  }
  iconClassName?: string
}

export interface FeatureGridProps {
  title?: string
  subtitle?: string
  description?: string
  features: FeatureItem[]
  columns?: 2 | 3 | 4
  backgroundColor?: string
  textColor?: string
}

export function FeatureGrid({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  backgroundColor = "white",
  textColor = "#1a1a1a",
}: FeatureGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        {(title || subtitle || description) && (
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: textColor }}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: textColor }}>
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg" style={{ color: textColor }}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn("grid grid-cols-1 gap-8", columnClasses[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
              {feature.icon && (
                <div className="mb-4">
                  <Image
                    src={feature.icon.url || "/placeholder.svg"}
                    alt={feature.icon.alt}
                    width={64}
                    height={64}
                    className={cn("w-16 h-16", feature.iconClassName)}
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3" style={{ color: textColor }}>
                {feature.title}
              </h3>
              <p className="text-base" style={{ color: textColor }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
