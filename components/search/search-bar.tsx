"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, X, Home, Building, DollarSign } from "lucide-react"
import { useSearch, type PropertyType } from "@/context/search-context"

interface SearchBarProps {
  variant?: "hero" | "header" | "sidebar"
  defaultPropertyType?: PropertyType
}

export default function SearchBar({ variant = "hero", defaultPropertyType = "sale" }: SearchBarProps) {
  const { filters, updateFilters } = useSearch()
  const [searchTerm, setSearchTerm] = useState(filters.keywords || "")
  const [location, setLocation] = useState(filters.location || "")
  const [propertyType, setPropertyType] = useState<PropertyType>(filters.propertyType || defaultPropertyType)
  const [isFocused, setIsFocused] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Update local state when filters change
  useEffect(() => {
    setSearchTerm(filters.keywords || "")
    setLocation(filters.location || "")
    setPropertyType(filters.propertyType || defaultPropertyType)
  }, [filters, defaultPropertyType])

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    updateFilters({
      propertyType,
      keywords: searchTerm,
      location,
    })

    // Navigate to the appropriate search results page
    router.push(
      `/search?type=${propertyType}${searchTerm ? `&keywords=${encodeURIComponent(searchTerm)}` : ""}${location ? `&location=${encodeURIComponent(location)}` : ""}`,
    )
  }

  const clearSearch = () => {
    setSearchTerm("")
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Determine styles based on variant
  const getContainerStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto"
      case "header":
        return "bg-white rounded-lg shadow-md p-4 w-full max-w-3xl"
      case "sidebar":
        return "bg-white rounded-lg shadow-sm p-4 w-full"
      default:
        return "bg-white rounded-lg shadow-lg p-4 w-full"
    }
  }

  return (
    <div className={getContainerStyles()}>
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col gap-4">
          {/* Property Type Selector - Paginated Style */}
          <div className="w-full flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setPropertyType("sale")}
                className={`px-5 py-2.5 text-sm font-medium flex items-center justify-center ${
                  propertyType === "sale"
                    ? "bg-primary-500 text-white border border-primary-500"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-primary-200"
                } ${propertyType === "sale" ? "" : "hover:text-primary-600"} rounded-l-lg transition-colors duration-200`}
                aria-current={propertyType === "sale" ? "page" : undefined}
              >
                <Home className="h-4 w-4 mr-2" />
                Buy
              </button>
              <button
                type="button"
                onClick={() => setPropertyType("rent")}
                className={`px-5 py-2.5 text-sm font-medium flex items-center justify-center ${
                  propertyType === "rent"
                    ? "bg-primary-500 text-white border border-primary-500"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300 hover:border-primary-200"
                } ${propertyType === "rent" ? "" : "hover:text-primary-600"} transition-colors duration-200`}
                aria-current={propertyType === "rent" ? "page" : undefined}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Rent
              </button>
              <button
                type="button"
                onClick={() => setPropertyType("commercial")}
                className={`px-5 py-2.5 text-sm font-medium flex items-center justify-center ${
                  propertyType === "commercial"
                    ? "bg-primary-500 text-white border border-primary-500"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-primary-200"
                } ${propertyType === "commercial" ? "" : "hover:text-primary-600"} rounded-r-lg transition-colors duration-200`}
                aria-current={propertyType === "commercial" ? "page" : undefined}
              >
                <Building className="h-4 w-4 mr-2" />
                Commercial
              </button>
            </div>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Location Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Location (suburb, city, postcode)"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search by keywords, features..."
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
