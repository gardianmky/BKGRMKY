import { DatoRenderer } from "@/components/dato-renderer"

// This is a simplified example of fetching data from DatoCMS
async function getPageData(slug: string) {
  // In a real implementation, you would fetch this data from DatoCMS API
  // This is just a mock example
  return {
    title: "Sample Page",
    slug: slug,
    content: [
      {
        __typename: "BasicHeroRecord",
        id: "hero1",
        title: "Welcome to our platform",
        subtitle: "Discover amazing features",
        description: "Our platform provides everything you need to succeed in your business.",
        primaryCta: {
          label: "Get Started",
          url: "/signup",
        },
        secondaryCta: {
          label: "Learn More",
          url: "/about",
        },
        backgroundImage: {
          url: "/placeholder.svg?height=600&width=1200&query=abstract%20background",
          alt: "Abstract background",
        },
        overlayColor: { hex: "rgba(0, 0, 0, 0.5)" },
        overlayOpacity: 0.5,
        textColor: { hex: "#ffffff" },
        textAlignment: "center",
      },
      {
        __typename: "FeatureGridRecord",
        id: "features1",
        title: "Our Features",
        subtitle: "WHAT WE OFFER",
        description: "Discover the tools and features that will help your business grow.",
        features: [
          {
            title: "Easy Integration",
            description: "Seamlessly integrate with your existing tools and workflows.",
            icon: {
              url: "/placeholder.svg?height=64&width=64&query=integration",
              alt: "Integration icon",
            },
          },
          {
            title: "Powerful Analytics",
            description: "Gain insights into your business with our advanced analytics.",
            icon: {
              url: "/placeholder.svg?height=64&width=64&query=analytics",
              alt: "Analytics icon",
            },
          },
          {
            title: "Secure Platform",
            description: "Your data is safe with our enterprise-grade security.",
            icon: {
              url: "/placeholder.svg?height=64&width=64&query=security",
              alt: "Security icon",
            },
          },
        ],
        columns: 3,
        backgroundColor: { hex: "#ffffff" },
        textColor: { hex: "#1a1a1a" },
      },
      {
        __typename: "BannerCTARecord",
        id: "cta1",
        title: "Ready to get started?",
        description: "Join thousands of businesses that trust our platform.",
        cta: {
          label: "Sign Up Now",
          url: "/signup",
        },
        backgroundColor: { hex: "#4f46e5" },
        textColor: { hex: "#ffffff" },
      },
    ],
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pageData = await getPageData(params.slug)

  return (
    <main>
      <DatoRenderer blocks={pageData.content} />
    </main>
  )
}
