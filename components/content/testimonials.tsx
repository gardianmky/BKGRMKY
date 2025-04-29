import Image from "next/image"

export interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: {
    url: string
    alt: string
  }
}

export interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  layout?: "grid" | "slider" | "single"
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

export function Testimonials({
  title,
  subtitle,
  testimonials,
  layout = "grid",
  backgroundColor = "white",
  textColor = "#1a1a1a",
  accentColor = "#4f46e5",
}: TestimonialsProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: textColor }}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor }}>
                {title}
              </h2>
            )}
          </div>
        )}

        {layout === "single" && testimonials.length > 0 && (
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl font-serif mb-6" style={{ color: accentColor }}>
              "
            </div>
            <p className="text-xl md:text-2xl italic mb-8" style={{ color: textColor }}>
              {testimonials[0].quote}
            </p>
            <div className="flex flex-col items-center">
              {testimonials[0].avatar && (
                <div className="mb-3">
                  <Image
                    src={testimonials[0].avatar.url || "/placeholder.svg"}
                    alt={testimonials[0].avatar.alt}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              )}
              <p className="font-semibold" style={{ color: textColor }}>
                {testimonials[0].author}
              </p>
              {(testimonials[0].role || testimonials[0].company) && (
                <p className="text-sm" style={{ color: textColor }}>
                  {testimonials[0].role}
                  {testimonials[0].role && testimonials[0].company && ", "}
                  {testimonials[0].company}
                </p>
              )}
            </div>
          </div>
        )}

        {layout === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif mb-4" style={{ color: accentColor }}>
                  "
                </div>
                <p className="mb-6" style={{ color: textColor }}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  {testimonial.avatar && (
                    <div className="mr-3">
                      <Image
                        src={testimonial.avatar.url || "/placeholder.svg"}
                        alt={testimonial.avatar.alt}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold" style={{ color: textColor }}>
                      {testimonial.author}
                    </p>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-sm" style={{ color: textColor }}>
                        {testimonial.role}
                        {testimonial.role && testimonial.company && ", "}
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
