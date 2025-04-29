import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export interface CardCTAProps {
  title: string
  description: string
  cta: {
    label: string
    url: string
  }
  backgroundColor?: string
  cardBackgroundColor?: string
  textColor?: string
}

export function CardCTA({
  title,
  description,
  cta,
  backgroundColor = "white",
  cardBackgroundColor = "white",
  textColor = "#1a1a1a",
}: CardCTAProps) {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <Card className="max-w-lg mx-auto shadow-lg" style={{ backgroundColor: cardBackgroundColor }}>
          <CardHeader>
            <h3 className="text-2xl font-bold" style={{ color: textColor }}>
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-base" style={{ color: textColor }}>
              {description}
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={cta.url}>{cta.label}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
