import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface SimpleCTAProps {
  title: string
  description?: string
  primaryCta: {
    label: string
    url: string
  }
  secondaryCta?: {
    label: string
    url: string
  }
  backgroundColor?: string
  textColor?: string
  alignment?: "left" | "center" | "right"
}

export function SimpleCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundColor = "#f8f9fa",
  textColor = "#1a1a1a",
  alignment = "center",
}: SimpleCTAProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto flex flex-col gap-6 ${alignmentClasses[alignment]}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: textColor }}>
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg" style={{ color: textColor }}>
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild size="lg">
              <Link href={primaryCta.url}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCta.url}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
