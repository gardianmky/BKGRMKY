"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export interface TabbedHeroProps {
  title: string
  subtitle?: string
  tabs: {
    id: string
    label: string
    content: {
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

export function TabbedHero({
  title,
  subtitle,
  tabs,
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  backgroundColor = "#f8f9fa",
  textColor = "#1a1a1a",
}: TabbedHeroProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  return (
    <section className="relative w-full py-16 overflow-hidden" style={{ backgroundColor }}>
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-8">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{tab.content.title}</h2>
                  <p className="text-gray-600 mb-6">{tab.content.description}</p>
                  {tab.content.cta && (
                    <Button asChild>
                      <Link href={tab.content.cta.url}>{tab.content.cta.label}</Link>
                    </Button>
                  )}
                </div>
                {tab.content.image && (
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={tab.content.image.url || "/placeholder.svg"}
                      alt={tab.content.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
