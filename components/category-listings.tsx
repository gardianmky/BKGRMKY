"use client"

import { useState, useEffect } from "react"
import ListingsGrid from "./listings-grid"
import { Skeleton } from "./ui/skeleton"
import { fetchListingsByCategory } from "../lib/api";
import type { Listing } from "../types/listing";
import type { ListingType } from "../lib/api";

interface CategoryListingsProps {
  category: ListingType
  limit?: number
}

// Ensure the default limit is set to 2
export default function CategoryListings({ category, limit = 2 }: CategoryListingsProps) {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await fetchListingsByCategory(category, limit)
        setListings(data)
        setError(null)
      } catch (err) {
        console.error(`Error fetching ${category} listings:`, err)
        setError(`Failed to load ${category} listings. Please try again later.`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, limit])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-2/3 mb-2" />
              <Skeleton className="h-6 w-1/3 mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-12 w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
  }

  if (listings.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-3 rounded-md">
        No{" "}
        {category === "forSale"
          ? "properties for sale"
          : category === "forRent"
            ? "rental properties"
            : "commercial properties"}{" "}
        available at the moment.
      </div>
    )
  }

  return <ListingsGrid listings={listings} />
}

