import { BasicHero } from "./heroes/basic-hero"
import { SplitHero } from "./heroes/split-hero"
import { VideoHero } from "./heroes/video-hero"
import { FeatureGrid } from "./content/feature-grid"
import { TextWithImage } from "./content/text-with-image"
import { Testimonials } from "./content/testimonials"
import { SimpleCTA } from "./ctas/simple-cta"
import { BannerCTA } from "./ctas/banner-cta"
import { NewsletterCTA } from "./ctas/newsletter-cta"
import { CardCTA } from "./ctas/card-cta"

// This is a simplified type for DatoCMS blocks
type DatoBlock = {
  __typename: string
  id: string
  [key: string]: any
}

interface DatoRendererProps {
  blocks: DatoBlock[]
}

export function DatoRenderer({ blocks }: DatoRendererProps) {
  return (
    <>
      {blocks.map((block) => {
        // Map DatoCMS block types to our components
        switch (block.__typename) {
          // Hero components
          case "BasicHeroRecord":
            return (
              <BasicHero
                key={block.id}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                primaryCta={
                  block.primaryCta && {
                    label: block.primaryCta.label,
                    url: block.primaryCta.url,
                  }
                }
                secondaryCta={
                  block.secondaryCta && {
                    label: block.secondaryCta.label,
                    url: block.secondaryCta.url,
                  }
                }
                backgroundImage={
                  block.backgroundImage && {
                    url: block.backgroundImage.url,
                    alt: block.backgroundImage.alt || "",
                  }
                }
                overlayColor={block.overlayColor?.hex}
                overlayOpacity={block.overlayOpacity}
                textColor={block.textColor?.hex}
                textAlignment={block.textAlignment}
              />
            )

          case "SplitHeroRecord":
            return (
              <SplitHero
                key={block.id}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                primaryCta={
                  block.primaryCta && {
                    label: block.primaryCta.label,
                    url: block.primaryCta.url,
                  }
                }
                secondaryCta={
                  block.secondaryCta && {
                    label: block.secondaryCta.label,
                    url: block.secondaryCta.url,
                  }
                }
                image={{
                  url: block.image.url,
                  alt: block.image.alt || "",
                }}
                imagePosition={block.imagePosition}
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
              />
            )

          case "VideoHeroRecord":
            return (
              <VideoHero
                key={block.id}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                primaryCta={
                  block.primaryCta && {
                    label: block.primaryCta.label,
                    url: block.primaryCta.url,
                  }
                }
                secondaryCta={
                  block.secondaryCta && {
                    label: block.secondaryCta.label,
                    url: block.secondaryCta.url,
                  }
                }
                videoUrl={block.videoUrl.url}
                posterImage={block.posterImage?.url}
                overlayColor={block.overlayColor?.hex}
                overlayOpacity={block.overlayOpacity}
                textColor={block.textColor?.hex}
                textAlignment={block.textAlignment}
              />
            )

          // Content components
          case "FeatureGridRecord":
            return (
              <FeatureGrid
                key={block.id}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                features={block.features.map((feature: any) => ({
                  title: feature.title,
                  description: feature.description,
                  icon: feature.icon && {
                    url: feature.icon.url,
                    alt: feature.icon.alt || "",
                  },
                  iconClassName: feature.iconClassName,
                }))}
                columns={block.columns ? (Number.parseInt(block.columns) as 2 | 3 | 4) : 3}
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
              />
            )

          case "TextWithImageRecord":
            return (
              <TextWithImage
                key={block.id}
                title={block.title}
                content={block.content}
                image={{
                  url: block.image.url,
                  alt: block.image.alt || "",
                }}
                imagePosition={block.imagePosition}
                cta={
                  block.cta && {
                    label: block.cta.label,
                    url: block.cta.url,
                  }
                }
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
              />
            )

          case "TestimonialsRecord":
            return (
              <Testimonials
                key={block.id}
                title={block.title}
                subtitle={block.subtitle}
                testimonials={block.testimonials.map((testimonial: any) => ({
                  quote: testimonial.quote,
                  author: testimonial.author,
                  role: testimonial.role,
                  company: testimonial.company,
                  avatar: testimonial.avatar && {
                    url: testimonial.avatar.url,
                    alt: testimonial.avatar.alt || "",
                  },
                }))}
                layout={block.layout}
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
                accentColor={block.accentColor?.hex}
              />
            )

          // CTA components
          case "SimpleCTARecord":
            return (
              <SimpleCTA
                key={block.id}
                title={block.title}
                description={block.description}
                primaryCta={{
                  label: block.primaryCta.label,
                  url: block.primaryCta.url,
                }}
                secondaryCta={
                  block.secondaryCta && {
                    label: block.secondaryCta.label,
                    url: block.secondaryCta.url,
                  }
                }
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
                alignment={block.alignment}
              />
            )

          case "BannerCTARecord":
            return (
              <BannerCTA
                key={block.id}
                title={block.title}
                description={block.description}
                cta={{
                  label: block.cta.label,
                  url: block.cta.url,
                }}
                backgroundImage={
                  block.backgroundImage && {
                    url: block.backgroundImage.url,
                    alt: block.backgroundImage.alt || "",
                  }
                }
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
              />
            )

          case "NewsletterCTARecord":
            return (
              <NewsletterCTA
                key={block.id}
                title={block.title}
                description={block.description}
                buttonLabel={block.buttonLabel}
                placeholderText={block.placeholderText}
                successMessage={block.successMessage}
                backgroundColor={block.backgroundColor?.hex}
                textColor={block.textColor?.hex}
                alignment={block.alignment}
              />
            )

          case "CardCTARecord":
            return (
              <CardCTA
                key={block.id}
                title={block.title}
                description={block.description}
                cta={{
                  label: block.cta.label,
                  url: block.cta.url,
                }}
                backgroundColor={block.backgroundColor?.hex}
                cardBackgroundColor={block.cardBackgroundColor?.hex}
                textColor={block.textColor?.hex}
              />
            )

          default:
            console.warn(`Unknown block type: ${block.__typename}`)
            return null
        }
      })}
    </>
  )
}
