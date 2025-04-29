"use client"

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

export type PropertyType = "sale" | "rent" | "commercial"

export interface FilterOptions {
  propertyType: PropertyType
  location: string
  minPrice: string
  maxPrice: string
  bedrooms: string
  bathrooms: string
  carSpaces: string
  landSize: string
  keywords: string
  features: string[]
  propertyCategory: string // House, Apartment, Land, etc.
  sortBy: string
  page: number
  status: string // For Sale, Under Offer, Sold, etc.
  recentlyAdded: boolean
  openHouse: boolean
  furnished: boolean // Especially for rentals
  petsAllowed: boolean // For rentals
  availableFrom: string // For rentals
  leaseLength: string // For rentals
  commercialType: string // For commercial (Office, Retail, Industrial)
  floorArea: string // For commercial
}

interface SearchContextType {
  filters: FilterOptions
  updateFilters: (newFilters: Partial<FilterOptions>) => void
  resetFilters: () => void
  isLoading: boolean
  totalResults: number
  totalPages: number
  setTotalResults: (count: number) => void
  activeFiltersCount: number
  clearFilter: (filterName: keyof FilterOptions) => void
}

const defaultFilters: FilterOptions = {
  propertyType: "sale",
  location: "",
  minPrice: "",
  maxPrice: "",
  bedrooms: "",
  bathrooms: "",
  carSpaces: "",
  landSize: "",
  keywords: "",
  features: [],
  propertyCategory: "",
  sortBy: "newest",
  page: 1,
  status: "",
  recentlyAdded: false,
  openHouse: false,
  furnished: false,
  petsAllowed: false,
  availableFrom: "",
  leaseLength: "",
  commercialType: "",
  floorArea: "",
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [filters, setFilters] = useState<FilterOptions>(defaultFilters)
  const [isLoading, setIsLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [isInitialized, setIsInitialized] = useState(false)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Initialize filters from URL on first load - only once
  useEffect(() => {
    if (!isInitialized && searchParams) {
      const newFilters = { ...defaultFilters }

      // Parse search params into filters
      if (searchParams.has("type")) {
        const type = searchParams.get("type") as PropertyType
        if (["sale", "rent", "commercial"].includes(type)) {
          newFilters.propertyType = type
        }
      }

      if (searchParams.has("location")) {
        newFilters.location = searchParams.get("location") || ""
      }

      if (searchParams.has("minPrice")) {
        newFilters.minPrice = searchParams.get("minPrice") || ""
      }

      if (searchParams.has("maxPrice")) {
        newFilters.maxPrice = searchParams.get("maxPrice") || ""
      }

      if (searchParams.has("bedrooms")) {
        newFilters.bedrooms = searchParams.get("bedrooms") || ""
      }

      if (searchParams.has("bathrooms")) {
        newFilters.bathrooms = searchParams.get("bathrooms") || ""
      }

      if (searchParams.has("carSpaces")) {
        newFilters.carSpaces = searchParams.get("carSpaces") || ""
      }

      if (searchParams.has("landSize")) {
        newFilters.landSize = searchParams.get("landSize") || ""
      }

      if (searchParams.has("keywords")) {
        newFilters.keywords = searchParams.get("keywords") || ""
      }

      if (searchParams.has("features")) {
        const featuresStr = searchParams.get("features") || ""
        newFilters.features = featuresStr.split(",").filter(Boolean)
      }

      if (searchParams.has("propertyCategory")) {
        newFilters.propertyCategory = searchParams.get("propertyCategory") || ""
      }

      if (searchParams.has("sortBy")) {
        newFilters.sortBy = searchParams.get("sortBy") || "newest"
      }

      if (searchParams.has("page")) {
        const page = Number.parseInt(searchParams.get("page") || "1", 10)
        newFilters.page = isNaN(page) ? 1 : page
      }

      if (searchParams.has("status")) {
        newFilters.status = searchParams.get("status") || ""
      }

      if (searchParams.has("recentlyAdded")) {
        newFilters.recentlyAdded = searchParams.get("recentlyAdded") === "true"
      }

      if (searchParams.has("openHouse")) {
        newFilters.openHouse = searchParams.get("openHouse") === "true"
      }

      if (searchParams.has("furnished")) {
        newFilters.furnished = searchParams.get("furnished") === "true"
      }

      if (searchParams.has("petsAllowed")) {
        newFilters.petsAllowed = searchParams.get("petsAllowed") === "true"
      }

      if (searchParams.has("availableFrom")) {
        newFilters.availableFrom = searchParams.get("availableFrom") || ""
      }

      if (searchParams.has("leaseLength")) {
        newFilters.leaseLength = searchParams.get("leaseLength") || ""
      }

      if (searchParams.has("commercialType")) {
        newFilters.commercialType = searchParams.get("commercialType") || ""
      }

      if (searchParams.has("floorArea")) {
        newFilters.floorArea = searchParams.get("floorArea") || ""
      }

      setFilters(newFilters)
      setIsInitialized(true)
    }
  }, [searchParams, isInitialized])

  // Update URL when filters change - but only after initialization
  useEffect(() => {
    if (!isInitialized) return

    const params = new URLSearchParams()

    // Only add parameters that have values
    if (filters.propertyType) params.set("type", filters.propertyType)
    if (filters.location) params.set("location", filters.location)
    if (filters.minPrice) params.set("minPrice", filters.minPrice)
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice)
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms)
    if (filters.bathrooms) params.set("bathrooms", filters.bathrooms)
    if (filters.carSpaces) params.set("carSpaces", filters.carSpaces)
    if (filters.landSize) params.set("landSize", filters.landSize)
    if (filters.keywords) params.set("keywords", filters.keywords)
    if (filters.features.length > 0) params.set("features", filters.features.join(","))
    if (filters.propertyCategory) params.set("propertyCategory", filters.propertyCategory)
    if (filters.sortBy !== "newest") params.set("sortBy", filters.sortBy)
    if (filters.page !== 1) params.set("page", filters.page.toString())
    if (filters.status) params.set("status", filters.status)
    if (filters.recentlyAdded) params.set("recentlyAdded", "true")
    if (filters.openHouse) params.set("openHouse", "true")
    if (filters.furnished) params.set("furnished", "true")
    if (filters.petsAllowed) params.set("petsAllowed", "true")
    if (filters.availableFrom) params.set("availableFrom", filters.availableFrom)
    if (filters.leaseLength) params.set("leaseLength", filters.leaseLength)
    if (filters.commercialType) params.set("commercialType", filters.commercialType)
    if (filters.floorArea) params.set("floorArea", filters.floorArea)

    // Update URL without refreshing the page
    const url = `${pathname}?${params.toString()}`
    router.push(url, { scroll: false })
  }, [filters, router, pathname, isInitialized])

  // Update total pages when total results change
  useEffect(() => {
    const pages = Math.ceil(totalResults / 12) // 12 results per page
    setTotalPages(pages || 1) // Ensure at least 1 page
  }, [totalResults])

  // Calculate active filters count
  useEffect(() => {
    let count = 0

    // Count active filters (excluding propertyType, page, and sortBy)
    if (filters.location) count++
    if (filters.minPrice) count++
    if (filters.maxPrice) count++
    if (filters.bedrooms) count++
    if (filters.bathrooms) count++
    if (filters.carSpaces) count++
    if (filters.landSize) count++
    if (filters.keywords) count++
    if (filters.features.length > 0) count++
    if (filters.propertyCategory) count++
    if (filters.status) count++
    if (filters.recentlyAdded) count++
    if (filters.openHouse) count++
    if (filters.furnished) count++
    if (filters.petsAllowed) count++
    if (filters.availableFrom) count++
    if (filters.leaseLength) count++
    if (filters.commercialType) count++
    if (filters.floorArea) count++

    setActiveFiltersCount(count)
  }, [filters])

  // Use useCallback to prevent unnecessary re-renders
  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    // Reset to page 1 when filters change (except when explicitly changing page)
    if (!("page" in newFilters)) {
      newFilters.page = 1
    }

    setFilters((prev) => ({ ...prev, ...newFilters }))
    setIsLoading(true)
  }, [])

  // Use useCallback for resetFilters
  const resetFilters = useCallback(() => {
    // Keep property type but reset everything else
    setFilters((prev) => ({
      ...defaultFilters,
      propertyType: prev.propertyType,
    }))
    setIsLoading(true)
  }, [])

  // Use useCallback for clearFilter
  const clearFilter = useCallback((filterName: keyof FilterOptions) => {
    setFilters((prev) => {
      const newFilters = { ...prev }

      // Handle different types of filters
      if (filterName === "features") {
        newFilters.features = []
      } else if (typeof prev[filterName] === "boolean") {
        // @ts-ignore - We know this is a boolean
        newFilters[filterName] = false
      } else {
        // @ts-ignore - We know this is a string
        newFilters[filterName] = ""
      }

      // Reset to page 1 when clearing a filter
      newFilters.page = 1

      return newFilters
    })

    setIsLoading(true)
  }, [])

  // Memoize the setTotalResults function
  const setTotalResultsMemoized = useCallback((count: number) => {
    setTotalResults(count)
  }, [])

  return (
    <SearchContext.Provider
      value={{
        filters,
        updateFilters,
        resetFilters,
        isLoading,
        totalResults,
        totalPages,
        setTotalResults: setTotalResultsMemoized,
        activeFiltersCount,
        clearFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
