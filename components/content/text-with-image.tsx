import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export interface TextWithImageProps {
  title: string
  content: string
  image: {
    url: string
    alt: string
  }
  imagePosition?: "left" | "right"
  cta?: {
    label: string
    url: string
  }
  backgroundColor?: string
  textColor?: string
}

export function TextWithImage({
  title,
  content,
  image,
  imagePosition = "right",
  cta,
  backgroundColor = "white",
  textColor = "#1a1a1a",
}: TextWithImageProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: textColor }}>
              {title}
            </h2>
            <div
              className="prose max-w-none mb-6"
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {cta && (
              <Button asChild>
                <Link href={cta.url}>{cta.label}</Link>
              </Button>
            )}
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
            <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
