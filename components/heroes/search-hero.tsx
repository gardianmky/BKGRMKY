"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export interface SearchHeroProps {
  title: string
  subtitle?: string
  searchPlaceholder?: string
  searchButtonLabel?: string
  backgroundImage?: {
    url: string
    alt: string
  }
  backgroundColor?: string
  categories?: {
    value: string
    label: string
  }[]
}

export function SearchHero({
  title,
  subtitle,
  searchPlaceholder = "Search...",
  searchButtonLabel = "Search",
  backgroundImage,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  categories = [],
}: SearchHeroProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categories.length > 0 ? categories[0].value : "")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    setIsSearching(true)


    // Redirect to search results page
    router.push(
      `/search?q=${encodeURIComponent(searchQuery)}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ""}`,
    )

    setIsSearching(false)
  }

  return (
    <div className="relative min-h-[500px] flex items-center">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage.url || "/placeholder.svg"}
            alt={backgroundImage.alt || ""}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor }}></div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {title && <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>}
          {subtitle && <p className="text-xl mb-8 text-white">{subtitle}</p>}

          <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search query"
                />
              </div>

              {categories.length > 0 && (
                <div className="md:w-1/3">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Category"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors duration-300 disabled:opacity-50"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : searchButtonLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
