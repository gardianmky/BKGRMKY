"use client"

import { useEffect, useState } from "react"
import { useSearch } from "@/context/search-context"
import ListingCard from "@/components/listing-card"
import Pagination from "@/components/search/pagination"
import MobileFilterDrawer from "./mobile-filter-drawer"
import type { Listing } from "@/types/listing"
import type { PropertyType } from "@/context/search-context"
import { fetchListings } from "@/lib/api"
import { Loader2, AlertCircle, SlidersHorizontal } from "lucide-react"

interface SearchResultsProps {
  propertyType?: PropertyType
}

export default function SearchResults({ propertyType = "sale" }: SearchResultsProps) {
  const { filters, isLoading, setTotalResults } = useSearch()
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  // Add a ref to track if we've already fetched data
  const [dataFetched, setDataFetched] = useState(false)

  // Remove the effect that was trying to update the property type
  // This is now handled by the PropertyFilters component

  useEffect(() => {
    const getSearchResults = async () => {
      // Skip if we're still initializing
      if (!dataFetched) {
        setDataFetched(true)
      }

      try {
        setLoading(true)
        setError(null)

        // In a real application, you would pass all filters to your API
        // For this example, we'll use the existing fetchListings function and filter client-side
        const allListings = await fetchListings()

        // Filter listings based on search criteria
        const filteredListings = allListings.filter((listing) => {
          // Filter by property type
          if (filters.propertyType === "sale" && listing.type !== "Residential") {
            return false
          }
          if (filters.propertyType === "rent" && listing.type !== "Residential") {
            return false
          }
          if (filters.propertyType === "commercial" && listing.type !== "Commercial") {
            return false
          }

          // Filter by keywords (search across multiple fields)
          if (filters.keywords) {
            const keywords = filters.keywords.toLowerCase()
            const matchesKeywords =
              listing.heading.toLowerCase().includes(keywords) ||
              listing.address.street.toLowerCase().includes(keywords) ||
              listing.address.suburb.toLowerCase().includes(keywords) ||
              listing.address.state.toLowerCase().includes(keywords) ||
              listing.address.postcode.toString().includes(keywords) ||
              listing.price.toLowerCase().includes(keywords) ||
              listing.categories.some((cat) => cat.toLowerCase().includes(keywords))

            if (!matchesKeywords) return false
          }

          // Filter by location
          if (filters.location) {
            const location = filters.location.toLowerCase()
            const matchesLocation =
              listing.address.suburb.toLowerCase().includes(location) ||
              listing.address.street.toLowerCase().includes(location) ||
              listing.address.state.toLowerCase().includes(location) ||
              listing.address.postcode.toString().includes(location)

            if (!matchesLocation) return false
          }

          // Filter by property category
          if (filters.propertyCategory && listing.categories.length > 0) {
            const matchesCategory = listing.categories.some(
              (cat) => cat.toLowerCase() === filters.propertyCategory.toLowerCase(),
            )
            if (!matchesCategory) return false
          }

          // Filter by bedrooms
          if (filters.bedrooms) {
            const bedroomsItem = listing.bedBathCarLand.find((item) => item.key === "bedrooms")
            const bedrooms = bedroomsItem ? Number.parseInt(bedroomsItem.value, 10) : 0
            if (bedrooms < Number.parseInt(filters.bedrooms, 10)) return false
          }

          // Filter by bathrooms
          if (filters.bathrooms) {
            const bathroomsItem = listing.bedBathCarLand.find((item) => item.key === "bathrooms")
            const bathrooms = bathroomsItem ? Number.parseInt(bathroomsItem.value, 10) : 0
            if (bathrooms < Number.parseInt(filters.bathrooms, 10)) return false
          }

          // Filter by car spaces
          if (filters.carSpaces) {
            const carSpacesItem = listing.bedBathCarLand.find((item) => item.key === "carSpaces")
            const carSpaces = carSpacesItem ? Number.parseInt(carSpacesItem.value, 10) : 0
            if (carSpaces < Number.parseInt(filters.carSpaces, 10)) return false
          }

          // Filter by land size
          if (filters.landSize) {
            const landSizeItem = listing.bedBathCarLand.find((item) => item.key === "landSize")
            if (landSizeItem) {
              // Extract numeric value from land size (e.g., "1211 Square Mtr" -> 1211)
              const landSizeMatch = landSizeItem.value.match(/(\d+)/)
              const landSize = landSizeMatch ? Number.parseInt(landSizeMatch[1], 10) : 0
              if (landSize < Number.parseInt(filters.landSize, 10)) return false
            } else {
              return false
            }
          }

          // Filter by price (simplified for demo)
          if (filters.minPrice || filters.maxPrice) {
            // Extract numeric price value (this is a simplification)
            const priceStr = listing.price.replace(/[^0-9]/g, "")
            const price = priceStr ? Number.parseInt(priceStr, 10) : 0

            if (filters.minPrice && price < Number.parseInt(filters.minPrice, 10)) return false
            if (filters.maxPrice && price > Number.parseInt(filters.maxPrice, 10)) return false
          }

          // Filter by status (simplified for demo)
          if (filters.status) {
            // This is a simplification - in a real app, you'd have a status field
            const status = listing.price.includes("Offers") ? "Offer" : "Sale"
            if (status !== filters.status) return false
          }

          // Filter by features (simplified for demo)
          if (filters.features.length > 0) {
            // In a real app, you'd have a features array to check against
            // This is a simplification that assumes certain features based on property data
            const hasPool = listing.heading.toLowerCase().includes("pool")
            const hasAirCon = listing.heading.toLowerCase().includes("air")
            const hasGarage = listing.bedBathCarLand.some(
              (item) => item.key === "carSpaces" && Number.parseInt(item.value, 10) > 0,
            )

            // Check if listing has all selected features
            const hasAllFeatures = filters.features.every((feature) => {
              if (feature === "pool") return hasPool
              if (feature === "aircon") return hasAirCon
              if (feature === "garage") return hasGarage
              // For other features, we'd need more data
              return false
            })

            if (!hasAllFeatures) return false
          }

          // All filters passed
          return true
        })

        // Apply sorting
        const sortedListings = [...filteredListings].sort((a, b) => {
          if (filters.sortBy === "price_low") {
            const priceA = Number.parseInt(a.price.replace(/[^0-9]/g, ""), 10) || 0
            const priceB = Number.parseInt(b.price.replace(/[^0-9]/g, ""), 10) || 0
            return priceA - priceB
          } else if (filters.sortBy === "price_high") {
            const priceA = Number.parseInt(a.price.replace(/[^0-9]/g, ""), 10) || 0
            const priceB = Number.parseInt(b.price.replace(/[^0-9]/g, ""), 10) || 0
            return priceB - priceA
          } else if (filters.sortBy === "beds_high") {
            const bedsA = Number.parseInt(a.bedBathCarLand.find((item) => item.key === "bedrooms")?.value || "0", 10)
            const bedsB = Number.parseInt(b.bedBathCarLand.find((item) => item.key === "bedrooms")?.value || "0", 10)
            return bedsB - bedsA
          } else if (filters.sortBy === "land_high") {
            const getLandSize = (listing: Listing) => {
              const landItem = listing.bedBathCarLand.find((item) => item.key === "landSize")
              if (!landItem) return 0
              const match = landItem.value.match(/(\d+)/)
              return match ? Number.parseInt(match[1], 10) : 0
            }
            return getLandSize(b) - getLandSize(a)
          }
          // Default: newest (using listingID as a proxy for date in this demo)
          return Number.parseInt(b.listingID, 10) - Number.parseInt(a.listingID, 10)
        })

        // Apply pagination
        const itemsPerPage = 12
        const startIndex = (filters.page - 1) * itemsPerPage
        const paginatedListings = sortedListings.slice(startIndex, startIndex + itemsPerPage)

        setListings(paginatedListings)
        setTotalResults(filteredListings.length)
      } catch (err) {
        console.error("Error fetching search results:", err)
        setError("Failed to load properties. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    getSearchResults()
  }, [filters, setTotalResults, dataFetched])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
        <Loader2 className="h-12 w-12 text-primary-500 animate-spin mb-4" />
        <p className="text-gray-600">Loading properties...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm" role="alert">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 mr-2 text-red-500" />
          <p className="font-medium">{error}</p>
        </div>
      </div>
    )
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
        <p className="text-gray-600 mb-6">We couldn't find any properties matching your search criteria.</p>
        <button
          onClick={() => (window.location.href = `/${filters.propertyType}`)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
        >
          Reset Search
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">
            Found <span className="font-semibold text-primary-600">{listings.length}</span> properties matching your
            search criteria
          </p>

          {/* Mobile filter toggle button */}
          <button
            className="md:hidden flex items-center text-primary-600 hover:text-primary-700"
            onClick={() => setShowMobileFilters(true)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-1" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.listingID} listing={listing} />
        ))}
      </div>

      <Pagination />

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        propertyType={propertyType}
      />
    </div>
  )
}
