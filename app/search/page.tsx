"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

interface SearchResult {
  id: number
  title: string
  price: string
  type: string
}

interface SearchResponse {
  query: string
  category: string
  results: SearchResult[]
  total: number
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const category = searchParams.get("category") || "all"

  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchResults() {
      if (!query) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch search results")
        }

        const data: SearchResponse = await response.json()
        setResults(data.results)
        setTotal(data.total)
      } catch (err) {
        setError("An error occurred while fetching search results")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query, category])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          {query ? `Showing results for "${query}"` : "Enter a search query to find properties"}
          {category !== "all" && ` in category "${category}"`}
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-800 p-4 rounded-md">{error}</div>
        ) : results.length === 0 ? (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">No results found</h2>
            <p className="text-gray-600 mb-4">We couldn't find any properties matching your search criteria.</p>
            <Link
              href="/component-showcase"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
            >
              Back to Showcase
            </Link>
          </div>
        ) : (
          <div>
            <p className="mb-4">
              Found {total} result{total !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img
                      src={`/placeholder.svg?height=300&width=400&query=property+${result.type}`}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
                    <p className="text-gray-600 mb-2">Type: {result.type}</p>
                    <p className="text-teal-600 font-bold">{result.price}</p>
                    <Link
                      href={`/property/${result.id}`}
                      className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
