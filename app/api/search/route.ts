import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")
  const category = searchParams.get("category") || "all"

  // In a real application, you would query your database or search service
  // This is just a mock response
  const results = {
    query,
    category,
    results: [
      { id: 1, title: "Modern Apartment in Downtown", price: "$450,000", type: "apartment" },
      { id: 2, title: "Spacious Family Home", price: "$750,000", type: "house" },
      { id: 3, title: "Luxury Penthouse with Ocean View", price: "$1,200,000", type: "penthouse" },
    ],
    total: 3,
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(results)
}
