RENET_API_TOKEN=your_api_token_here

import { NextResponse } from "next/server"
import { searchListings } from "@/lib/renet-api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q") || ""
    const category = searchParams.get("category") || undefined
    const location = searchParams.get("location") || undefined
    const minPrice = searchParams.get("minPrice") || undefined
    const maxPrice = searchParams.get("maxPrice") || undefined

    const filters: Record<string, string> = {}
    if (category) filters.category = category
    if (location) filters.location = location
    if (minPrice) filters.minPrice = minPrice
    if (maxPrice) filters.maxPrice = maxPrice

    const results = await searchListings(query, filters)

    return NextResponse.json({
      query,
      filters,
      results,
      total: results.length
    })
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { error: "Failed to perform search" },
      { status: 500 }
    )
  }
}
