import { AnimatedHero } from "@/components/heroes/animated-hero"
import { BasicHero } from "@/components/heroes/basic-hero"
import { BannerCTA } from "@/components/ctas/banner-cta"
import { CardCTA } from "@/components/ctas/card-cta"
import { CountdownHero } from "@/components/heroes/countdown-hero"
import { FeatureGrid } from "@/components/content/feature-grid"
import { MultiColumnHero } from "@/components/heroes/multi-column-hero"
import { NewsletterCTA } from "@/components/ctas/newsletter-cta"
import { ParallaxHero } from "@/components/heroes/parallax-hero"
import { SearchHero } from "@/components/heroes/search-hero"
import { SimpleCTA } from "@/components/ctas/simple-cta"
import { SplitHero } from "@/components/heroes/split-hero"
import { TabbedHero } from "@/components/heroes/tabbed-hero"
import { TextWithImage } from "@/components/content/text-with-image"
import { VideoHero } from "@/components/heroes/video-hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComponentShowcase() {
  // Get tomorrow's date for countdown demo
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Component Showcase</h1>
            <div className="flex gap-4">
              <Link href="#heroes" className="text-sm font-medium hover:text-teal-600">
                Heroes
              </Link>
              <Link href="#content" className="text-sm font-medium hover:text-teal-600">
                Content
              </Link>
              <Link href="#ctas" className="text-sm font-medium hover:text-teal-600">
                CTAs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">UI Component Library</h1>
            <p className="text-lg text-gray-600 mb-8">
              A showcase of reusable UI components designed for DatoCMS integration. Browse through our collection of
              heroes, content blocks, and call-to-action components.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="#heroes">View Components</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section id="heroes" className="py-16 border-t">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-2">Hero Components</h2>
          <p className="text-gray-600">
            Hero sections are the first thing visitors see. They set the tone for your site and communicate your main
            message.
          </p>
        </div>

        {/* Component: Basic Hero */}
        <div className="mb-24">
          <BasicHero
            title="Basic Hero Component"
            subtitle="Simple and Effective"
            description="A versatile hero section with background image, overlay, and CTA buttons. Perfect for landing pages and key sections of your website."
            primaryCta={{ label: "Get Started", url: "/get-started" }}
            secondaryCta={{ label: "Learn More", url: "/learn-more" }}
            backgroundImage={{
              url: "/vibrant-flow.png",
              alt: "Abstract background",
            }}
            textAlignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Basic Hero</h3>
            <p className="text-gray-600 mb-4">
              A clean, simple hero with title, description, and call-to-action buttons. Supports background images with
              overlay.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<BasicHero
  title="Basic Hero Component"
  subtitle="Simple and Effective"
  description="A versatile hero section with background image, overlay, and CTA buttons."
  primaryCta={{ label: "Get Started", url: "/get-started" }}
  secondaryCta={{ label: "Learn More", url: "/learn-more" }}
  backgroundImage={{
    url: "/path/to/image.jpg",
    alt: "Abstract background",
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Split Hero */}
        <div className="mb-24">
          <SplitHero
            title="Split Hero Component"
            subtitle="Text and Image Side by Side"
            description="A two-column hero with image on one side and content on the other. Perfect for product showcases and feature highlights."
            primaryCta={{ label: "Explore Features", url: "/explore-features" }}
            secondaryCta={{ label: "Contact Sales", url: "/contact-sales" }}
            image={{
              url: "/minimalist-living-space.png",
              alt: "Modern house interior",
            }}
            imagePosition="right"
            backgroundColor="#f8f9fa"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Split Hero</h3>
            <p className="text-gray-600 mb-4">
              A two-column layout with content on one side and an image on the other. Great for product pages or feature
              highlights.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<SplitHero
  title="Split Hero Component"
  subtitle="Text and Image Side by Side"
  description="A two-column hero with image on one side and content on the other."
  primaryCta={{ label: "Explore Features", url: "/explore-features" }}
  secondaryCta={{ label: "Contact Sales", url: "/contact-sales" }}
  image={{
    url: "/path/to/image.jpg",
    alt: "Product image",
  }}
  imagePosition="right"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Video Hero */}
        <div className="mb-24">
          <VideoHero
            title="Video Hero Component"
            subtitle="Engage with Motion"
            description="A hero section with background video for maximum impact. Perfect for showcasing dynamic content and creating an immersive experience."
            primaryCta={{ label: "Watch Demo", url: "/watch-demo" }}
            secondaryCta={{ label: "Learn More", url: "/learn-more" }}
            videoUrl="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            posterImage="/majestic-peaks.png"
            textAlignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Video Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with a background video for dynamic visual impact. Includes fallback poster image and text
              overlay.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<VideoHero
  title="Video Hero Component"
  subtitle="Engage with Motion"
  description="A hero section with background video for maximum impact."
  primaryCta={{ label: "Watch Demo", url: "/watch-demo" }}
  videoUrl="/path/to/video.mp4"
  posterImage="/path/to/poster.jpg"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Multi-Column Hero */}
        <div className="mb-24">
          <MultiColumnHero
            title="Multi-Column Hero"
            subtitle="Showcase Multiple Features"
            columns={[
              {
                title: "Feature One",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
                image: {
                  url: "/cerulean-flow.png",
                  alt: "Feature one illustration",
                },
                cta: { label: "Learn More", url: "/learn-more" },
              },
              {
                title: "Feature Two",
                description:
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: {
                  url: "/emerald-flow.png",
                  alt: "Feature two illustration",
                },
                cta: { label: "Explore", url: "/explore" },
              },
              {
                title: "Feature Three",
                description:
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                image: {
                  url: "/amethyst-flow.png",
                  alt: "Feature three illustration",
                },
                cta: { label: "Get Started", url: "/get-started" },
              },
            ]}
            backgroundColor="#ffffff"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Multi-Column Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with multiple columns to showcase features, benefits, or categories. Great for product
              landing pages.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<MultiColumnHero
  title="Multi-Column Hero"
  subtitle="Showcase Multiple Features"
  columns={[
    {
      title: "Feature One",
      description: "Feature description text goes here.",
      image: { url: "/path/to/image1.jpg", alt: "Feature one" },
      cta: { label: "Learn More", url: "/learn-more" },
    },
    // Additional columns...
  ]}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Search Hero */}
        <div className="mb-24">
          <SearchHero
            title="Find What You're Looking For"
            subtitle="Powerful search functionality right at your fingertips"
            searchPlaceholder="Search for products, articles, or resources..."
            searchButtonLabel="Search"
            backgroundImage={{
              url: "/twilight-towers.png",
              alt: "City skyline",
            }}
            categories={[
              { value: "products", label: "Products" },
              { value: "articles", label: "Articles" },
              { value: "resources", label: "Resources" },
            ]}
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Search Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with a prominent search form. Perfect for search-driven websites like real estate,
              e-commerce, or content platforms.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<SearchHero
  title="Find What You're Looking For"
  subtitle="Powerful search functionality right at your fingertips"
  searchPlaceholder="Search for products, articles, or resources..."
  backgroundImage={{ url: "/path/to/image.jpg", alt: "Background" }}
  categories={[
    { value: "products", label: "Products" },
    { value: "articles", label: "Articles" },
  ]}
  onSearch={(query) => handleSearch(query)}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Countdown Hero */}
        <div className="mb-24">
          <CountdownHero
            title="Coming Soon"
            subtitle="Get Ready For"
            description="Our new platform is launching soon. Sign up to be notified when we go live and get exclusive early access."
            targetDate={tomorrow.toISOString()}
            primaryCta={{ label: "Notify Me", url: "/notify-me" }}
            secondaryCta={{ label: "Learn More", url: "/learn-more" }}
            backgroundImage={{
              url: "/digital-flow.png",
              alt: "Tech background",
            }}
            textAlignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Countdown Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with a countdown timer. Perfect for product launches, events, or limited-time offers.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<CountdownHero
  title="Coming Soon"
  subtitle="Get Ready For"
  description="Our new platform is launching soon."
  targetDate="2023-12-31T23:59:59"
  primaryCta={{ label: "Notify Me", url: "/notify-me" }}
  backgroundImage={{ url: "/path/to/image.jpg", alt: "Background" }}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Tabbed Hero */}
        <div className="mb-24">
          <TabbedHero
            title="Explore Our Solutions"
            subtitle="Find the perfect fit for your needs"
            tabs={[
              {
                id: "tab1",
                label: "For Individuals",
                content: {
                  title: "Personal Solutions",
                  description:
                    "Our personal plans are designed to help individuals achieve their goals with powerful tools and resources.",
                  image: {
                    url: "/focused-freelancer.png",
                    alt: "Person using laptop",
                  },
                  cta: { label: "View Personal Plans", url: "/view-personal-plans" },
                },
              },
              {
                id: "tab2",
                label: "For Teams",
                content: {
                  title: "Team Solutions",
                  description:
                    "Empower your team with collaborative tools and shared resources to boost productivity and achieve results.",
                  image: {
                    url: "/collaborative-office-discussion.png",
                    alt: "Team meeting",
                  },
                  cta: { label: "View Team Plans", url: "/view-team-plans" },
                },
              },
              {
                id: "tab3",
                label: "For Enterprise",
                content: {
                  title: "Enterprise Solutions",
                  description:
                    "Scalable, secure, and customizable solutions for large organizations with complex needs and requirements.",
                  image: {
                    url: "/placeholder.svg?height=400&width=600&query=corporate+office+building",
                    alt: "Corporate office",
                  },
                  cta: { label: "Contact Sales", url: "/contact-sales" },
                },
              },
            ]}
            backgroundColor="#f8f9fa"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Tabbed Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with tabbed content. Perfect for showcasing different product categories, user segments, or
              features.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<TabbedHero
  title="Explore Our Solutions"
  subtitle="Find the perfect fit for your needs"
  tabs={[
    {
      id: "tab1",
      label: "For Individuals",
      content: {
        title: "Personal Solutions",
        description: "Description text here",
        image: { url: "/path/to/image.jpg", alt: "Image alt" },
        cta: { label: "View Plans", url: "/view-plans" },
      },
    },
    // Additional tabs...
  ]}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Parallax Hero */}
        <div className="mb-24">
          <ParallaxHero
            title="Experience the Difference"
            subtitle="Scroll to Discover"
            description="Our innovative approach combines cutting-edge technology with thoughtful design to create experiences that stand out."
            primaryCta={{ label: "Get Started", url: "/get-started" }}
            secondaryCta={{ label: "Learn More", url: "/learn-more" }}
            backgroundImage={{
              url: "/placeholder.svg?height=800&width=1200&query=mountain+landscape+sunset",
              alt: "Mountain landscape",
            }}
            foregroundImage={{
              url: "/placeholder.svg?height=500&width=500&query=3d+floating+device+transparent+background",
              alt: "3D device",
              position: "right",
            }}
            textAlignment="left"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Parallax Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with parallax scrolling effect. Creates depth and visual interest as users scroll down the
              page.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<ParallaxHero
  title="Experience the Difference"
  subtitle="Scroll to Discover"
  description="Our innovative approach combines cutting-edge technology with thoughtful design."
  primaryCta={{ label: "Get Started", url: "/get-started" }}
  backgroundImage={{ url: "/path/to/background.jpg", alt: "Background" }}
  foregroundImage={{ 
    url: "/path/to/foreground.png", 
    alt: "Foreground element",
    position: "right" 
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Animated Hero */}
        <div className="mb-24">
          <AnimatedHero
            title="Bring Your Ideas to Life"
            subtitle="Animated Elements"
            description="Create engaging, dynamic experiences with animated components that capture attention and guide users through your content."
            primaryCta={{ label: "Get Started", url: "/get-started" }}
            secondaryCta={{ label: "View Examples", url: "/view-examples" }}
            backgroundImage={{
              url: "/placeholder.svg?height=600&width=1200&query=abstract+gradient+dark",
              alt: "Abstract background",
            }}
            floatingElements={[
              {
                url: "/placeholder.svg?height=100&width=100&query=abstract+circle+blue",
                alt: "Blue circle",
                size: "small",
                position: "top-left",
              },
              {
                url: "/placeholder.svg?height=150&width=150&query=abstract+square+purple",
                alt: "Purple square",
                size: "medium",
                position: "bottom-right",
              },
              {
                url: "/placeholder.svg?height=120&width=120&query=abstract+triangle+teal",
                alt: "Teal triangle",
                size: "small",
                position: "center-right",
              },
              {
                url: "/placeholder.svg?height=200&width=200&query=abstract+blob+pink",
                alt: "Pink blob",
                size: "large",
                position: "bottom-left",
              },
            ]}
            textAlignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Animated Hero</h3>
            <p className="text-gray-600 mb-4">
              A hero section with animated elements. Creates visual interest and draws attention to key content.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<AnimatedHero
  title="Bring Your Ideas to Life"
  subtitle="Animated Elements"
  description="Create engaging, dynamic experiences with animated components."
  primaryCta={{ label: "Get Started", url: "/get-started" }}
  backgroundImage={{ url: "/path/to/background.jpg", alt: "Background" }}
  floatingElements={[
    {
      url: "/path/to/element1.png",
      alt: "Element 1",
      size: "small",
      position: "top-left",
    },
    // Additional elements...
  ]}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 border-t">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-2">Content Components</h2>
          <p className="text-gray-600">
            Content components help structure and present your information in engaging and readable formats.
          </p>
        </div>

        {/* Component: Feature Grid */}
        <div className="mb-24">
          <FeatureGrid
            title="Our Key Features"
            subtitle="Why Choose Us"
            description="We've built our platform with powerful features designed to help you succeed. Here's what sets us apart."
            features={[
              {
                title: "Easy to Use",
                description:
                  "Intuitive interface that requires no technical knowledge. Get started in minutes, not days.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=simple+icon+blue",
                  alt: "Easy to use icon",
                },
              },
              {
                title: "Highly Customizable",
                description:
                  "Tailor the platform to your specific needs with extensive customization options and settings.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=settings+icon+blue",
                  alt: "Customizable icon",
                },
              },
              {
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security and 99.9% uptime guarantee keep your data safe and your business running.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=shield+icon+blue",
                  alt: "Security icon",
                },
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated support team is available around the clock to help you with any questions or issues.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=support+icon+blue",
                  alt: "Support icon",
                },
              },
              {
                title: "Powerful Analytics",
                description:
                  "Gain valuable insights with comprehensive analytics and reporting tools to track performance.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=chart+icon+blue",
                  alt: "Analytics icon",
                },
              },
              {
                title: "Seamless Integration",
                description:
                  "Connect with your favorite tools and services through our extensive integration ecosystem.",
                icon: {
                  url: "/placeholder.svg?height=64&width=64&query=integration+icon+blue",
                  alt: "Integration icon",
                },
              },
            ]}
            columns={3}
            backgroundColor="white"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Feature Grid</h3>
            <p className="text-gray-600 mb-4">
              A grid layout for displaying features or benefits. Supports icons, titles, and descriptions.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<FeatureGrid
  title="Our Key Features"
  subtitle="Why Choose Us"
  description="We've built our platform with powerful features designed to help you succeed."
  features={[
    {
      title: "Easy to Use",
      description: "Intuitive interface that requires no technical knowledge.",
      icon: { url: "/path/to/icon.svg", alt: "Icon alt" },
    },
    // Additional features...
  ]}
  columns={3}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Text with Image */}
        <div className="mb-24">
          <TextWithImage
            title="Transform Your Business with Our Platform"
            content="<p>Our comprehensive solution helps businesses of all sizes streamline operations, improve customer experiences, and drive growth.</p><p>With powerful tools and intuitive interfaces, you can focus on what matters most while we handle the technical details.</p><ul><li>Streamline your workflow</li><li>Improve team collaboration</li><li>Enhance customer satisfaction</li><li>Drive business growth</li></ul>"
            image={{
              url: "/placeholder.svg?height=400&width=600&query=business+meeting+professional",
              alt: "Business meeting",
            }}
            imagePosition="right"
            cta={{
              label: "Schedule a Demo",
              url: "/schedule-demo",
            }}
            backgroundColor="#f8f9fa"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Text with Image</h3>
            <p className="text-gray-600 mb-4">
              A flexible component with text content and an image. Supports rich text formatting and image positioning.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<TextWithImage
  title="Transform Your Business with Our Platform"
  content="<p>Our comprehensive solution helps businesses of all sizes streamline operations...</p>"
  image={{
    url: "/path/to/image.jpg",
    alt: "Image description",
  }}
  imagePosition="right"
  cta={{
    label: "Schedule a Demo",
    url: "/schedule-demo",
  }}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs Section */}
      <section id="ctas" className="py-16 border-t">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-2">Call-to-Action Components</h2>
          <p className="text-gray-600">
            CTAs guide users toward key actions on your site, from signing up to making a purchase.
          </p>
        </div>

        {/* Component: Simple CTA */}
        <div className="mb-24">
          <SimpleCTA
            title="Ready to Get Started?"
            description="Join thousands of satisfied customers who have transformed their business with our platform."
            primaryCta={{
              label: "Sign Up Now",
              url: "/sign-up",
            }}
            secondaryCta={{
              label: "Learn More",
              url: "/learn-more",
            }}
            backgroundColor="#f8f9fa"
            alignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Simple CTA</h3>
            <p className="text-gray-600 mb-4">
              A straightforward call-to-action with title, description, and buttons. Clean and effective.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<SimpleCTA
  title="Ready to Get Started?"
  description="Join thousands of satisfied customers who have transformed their business."
  primaryCta={{
    label: "Sign Up Now",
    url: "/sign-up",
  }}
  secondaryCta={{
    label: "Learn More",
    url: "/learn-more",
  }}
  alignment="center"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Banner CTA */}
        <div className="mb-24">
          <BannerCTA
            title="Special Offer: Get 20% Off Your First Month"
            description="Limited time offer for new customers. Use code WELCOME20 at checkout."
            cta={{
              label: "Claim Offer",
              url: "/claim-offer",
            }}
            backgroundImage={{
              url: "/placeholder.svg?height=200&width=1200&query=abstract+pattern+blue",
              alt: "Abstract pattern",
            }}
            backgroundColor="#4f46e5"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Banner CTA</h3>
            <p className="text-gray-600 mb-4">
              A full-width banner with background image/color and CTA button. Great for promotions or announcements.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<BannerCTA
  title="Special Offer: Get 20% Off Your First Month"
  description="Limited time offer for new customers. Use code WELCOME20 at checkout."
  cta={{
    label: "Claim Offer",
    url: "/claim-offer",
  }}
  backgroundColor="#4f46e5"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Newsletter CTA */}
        <div className="mb-24">
          <NewsletterCTA
            title="Stay Updated with Our Newsletter"
            description="Subscribe to receive the latest news, updates, and tips directly in your inbox."
            buttonLabel="Subscribe"
            placeholderText="Enter your email address"
            backgroundColor="#f8f9fa"
            alignment="center"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Newsletter CTA</h3>
            <p className="text-gray-600 mb-4">
              An email signup form with success state handling. Perfect for building your mailing list.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`<NewsletterCTA
  title="Stay Updated with Our Newsletter"
  description="Subscribe to receive the latest news, updates, and tips directly in your inbox."
  buttonLabel="Subscribe"
  placeholderText="Enter your email address"
  alignment="center"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Component: Card CTA */}
        <div className="mb-24">
          <CardCTA
            title="Premium Plan"
            description="Unlock all features and get priority support with our Premium Plan. Perfect for growing businesses."
            cta={{
              label: "Upgrade Now",
              url: "/upgrade",
            }}
            cardBackgroundColor="white"
          />
          <div className="container mx-auto px-4 mt-8">
            <h3 className="text-xl font-semibold mb-2">Card CTA</h3>
            <p className="text-gray-600 mb-4">
              A card-based CTA component with elevated design. Great for highlighting premium offerings or special
              deals.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{`&lt;CardCTA
  title="Premium Plan"
  description="Unlock all features and get priority support with our Premium Plan."
  cta={{
    label: "Upgrade Now",
    url: "/upgrade",
  }}
/&gt;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Use These Components?</h2>
            <p className="text-gray-600 mb-6">
              These components are designed to be easily integrated with DatoCMS for a seamless content management
              experience.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#heroes">Back to Top</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
