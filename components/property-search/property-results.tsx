"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2, AlertCircle } from "lucide-react"
import PropertyListing from "./property-listing"
import Pagination from "./pagination"
import { fetchListings } from "@/lib/api"
import type { Listing } from "@/types/listing"

interface PropertyResultsProps {
  category: "sale" | "rent" | "commercial"
}

export default function PropertyResults({ category }: PropertyResultsProps) {
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<Listing[]>([])
  const [filteredListings, setFilteredListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const pageParam = searchParams.get("page")
  const location = searchParams.get("location")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const propertyType = searchParams.get("propertyType")
  const bedrooms = searchParams.get("bedrooms")
  const bathrooms = searchParams.get("bathrooms")
  const floorArea = searchParams.get("floorArea")
  const commercialType = searchParams.get("commercialType")
  const furnished = searchParams.get("furnished")
  const petsAllowed = searchParams.get("petsAllowed")
  const availableFrom = searchParams.get("availableFrom")

  useEffect(() => {
    setCurrentPage(pageParam ? Number.parseInt(pageParam) : 1)
  }, [pageParam])

  useEffect(() => {
    const fetchAllListings = async () => {
      try {
        setLoading(true)
        const data = await fetchListings()
        setListings(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching listings:", err)
        setError("Failed to load properties. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchAllListings()
  }, [])

  useEffect(() => {
    if (listings.length === 0) return

    let filtered = [...listings]

    switch (category) {
      case "sale":
        filtered = filtered.filter(
          (listing) =>
            listing.type === "Residential" &&
            !listing.price.toLowerCase().includes("rent") &&
            !listing.price.toLowerCase().includes("week"),
        )
        break
      case "rent":
        filtered = filtered.filter(
          (listing) =>
            listing.type === "Residential" &&
            (listing.price.toLowerCase().includes("rent") || listing.price.toLowerCase().includes("week")),
        )
        break
      case "commercial":
        filtered = filtered.filter(
          (listing) => listing.type === "Commercial" || listing.categories.includes("Commercial"),
        )
        break
    }

    if (location) {
      const locationLower = location.toLowerCase()
      filtered = filtered.filter(
        (listing) =>
          listing.address.suburb.toLowerCase().includes(locationLower) ||
          listing.address.street.toLowerCase().includes(locationLower) ||
          listing.address.state.toLowerCase().includes(locationLower) ||
          listing.address.postcode.toString().includes(locationLower),
      )
    }

    if (minPrice || maxPrice) {
      filtered = filtered.filter((listing) => {
        const priceStr = listing.price.replace(/[^0-9]/g, "")
        const price = priceStr ? Number.parseInt(priceStr) : 0

        if (minPrice && Number.parseInt(minPrice) > price) return false
        if (maxPrice && Number.parseInt(maxPrice) < price) return false
        return true
      })
    }

    if (propertyType) {
      filtered = filtered.filter((listing) =>
        listing.categories.some((cat) => cat.toLowerCase() === propertyType.toLowerCase()),
      )
    }

    if (bedrooms) {
      filtered = filtered.filter((listing) => {
        const bedroomsItem = listing.bedBathCarLand.find((item) => item.key === "bedrooms")
        const bedroomsValue = bedroomsItem ? Number.parseInt(bedroomsItem.value) : 0
        return bedroomsValue >= Number.parseInt(bedrooms)
      })
    }

    if (bathrooms) {
      filtered = filtered.filter((listing) => {
        const bathroomsItem = listing.bedBathCarLand.find((item) => item.key === "bathrooms")
        const bathroomsValue = bathroomsItem ? Number.parseInt(bathroomsItem.value) : 0
        return bathroomsValue >= Number.parseInt(bathrooms)
      })
    }

    if (category === "commercial") {
      if (floorArea) {
        filtered = filtered.filter((listing) => {
          const floorAreaItem = listing.bedBathCarLand.find((item) => item.key === "floorArea")
          if (!floorAreaItem) return false

          const match = floorAreaItem.value.match(/(\d+)/)
          const floorAreaValue = match ? Number.parseInt(match[1]) : 0
          return floorAreaValue >= Number.parseInt(floorArea)
        })
      }

      if (commercialType) {
        filtered = filtered.filter((listing) => {
          if (commercialType === "Sale") {
            return listing.price.toLowerCase().includes("sale") || !listing.price.toLowerCase().includes("lease")
          } else if (commercialType === "Lease") {
            return listing.price.toLowerCase().includes("lease")
          }
          return true
        })
      }
    }

    if (category === "rent") {
      if (furnished === "true") {
        filtered = filtered.filter(
          (listing) =>
            listing.heading.toLowerCase().includes("furnished") ||
            listing.categories.some((cat) => cat.toLowerCase().includes("furnished")),
        )
      }

      if (petsAllowed === "true") {
        filtered = filtered.filter(
          (listing) =>
            listing.heading.toLowerCase().includes("pet") ||
            listing.categories.some((cat) => cat.toLowerCase().includes("pet")),
        )
      }

      if (availableFrom) {
        // Placeholder for future logic
      }
    }

    const itemsPerPage = 9
    const totalPages = Math.ceil(filtered.length / itemsPerPage)
    setTotalPages(totalPages || 1)

    const page = currentPage || 1
    const startIndex = (page - 1) * itemsPerPage
    const paginatedListings = filtered.slice(startIndex, startIndex + itemsPerPage)

    setFilteredListings(paginatedListings)
  }, [
    listings,
    location,
    minPrice,
    maxPrice,
    propertyType,
    bedrooms,
    bathrooms,
    floorArea,
    commercialType,
    furnished,
    petsAllowed,
    availableFrom,
    category,
    currentPage,
  ])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm">
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

  if (filteredListings.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
        <p className="text-gray-600 mb-6">We couldn't find any properties matching your search criteria.</p>
        <p className="text-gray-600">Try adjusting your filters or browse all properties.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
        <p className="text-gray-700">
          Found <span className="font-semibold text-primary-600">{filteredListings.length}</span> properties
          {searchParams.toString() ? " matching your search criteria" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredListings.map((listing) => (
          <PropertyListing key={listing.listingID} listing={listing} category={category} />
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  )
}
