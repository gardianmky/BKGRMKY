"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

interface PropertyDetails {
  id: number
  title: string
  price: string
  type: string
  description: string
  features: string[]
  address: string
  bedrooms: number
  bathrooms: number
  area: string
}

export default function PropertyDetails() {
  const params = useParams()
  const router = useRouter()
  const id = params.id

  const [property, setProperty] = useState<PropertyDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the property details from your API
    // This is just a mock implementation
    const fetchProperty = async () => {
      try {
        setLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Mock data
        if (id === "1") {
          setProperty({
            id: 1,
            title: "Modern Apartment in Downtown",
            price: "$450,000",
            type: "apartment",
            description:
              "A beautiful modern apartment in the heart of downtown. Features open concept living, high ceilings, and premium finishes throughout.",
            features: ["Central Air", "In-unit Laundry", "Stainless Steel Appliances", "Hardwood Floors", "Balcony"],
            address: "123 Main St, Downtown",
            bedrooms: 2,
            bathrooms: 2,
            area: "1,200 sq ft",
          })
        } else if (id === "2") {
          setProperty({
            id: 2,
            title: "Spacious Family Home",
            price: "$750,000",
            type: "house",
            description:
              "Perfect for families, this spacious home offers plenty of room to grow. Features a large backyard, updated kitchen, and finished basement.",
            features: ["Finished Basement", "Large Backyard", "Attached Garage", "Updated Kitchen", "Fireplace"],
            address: "456 Oak Ave, Suburbia",
            bedrooms: 4,
            bathrooms: 3,
            area: "2,800 sq ft",
          })
        } else if (id === "3") {
          setProperty({
            id: 3,
            title: "Luxury Penthouse with Ocean View",
            price: "$1,200,000",
            type: "penthouse",
            description:
              "Stunning penthouse with panoramic ocean views. Features high-end finishes, floor-to-ceiling windows, and a private rooftop terrace.",
            features: [
              "Ocean View",
              "Private Terrace",
              "Floor-to-ceiling Windows",
              "Gourmet Kitchen",
              "Concierge Service",
            ],
            address: "789 Beach Blvd, Oceanside",
            bedrooms: 3,
            bathrooms: 3.5,
            area: "3,000 sq ft",
          })
        } else {
          setError("Property not found")
        }
      } catch (err) {
        setError("Failed to load property details")
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-red-100 text-red-800 p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{error || "Property not found"}</h1>
            <p className="mb-4">The property you're looking for could not be found.</p>
            <Link
              href="/search"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
            >
              Back to Search
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-200">
            <img
              src={`/placeholder.svg?height=800&width=1200&query=luxury+${property.type}+interior`}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-gray-600">{property.address}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-3xl font-bold text-teal-600">{property.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-200 pb-6">
              <div className="text-center">
                <p className="text-gray-500">Bedrooms</p>
                <p className="text-xl font-semibold">{property.bedrooms}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Bathrooms</p>
                <p className="text-xl font-semibold">{property.bathrooms}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Area</p>
                <p className="text-xl font-semibold">{property.area}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors duration-300">
                Contact Agent
              </button>
              <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md transition-colors duration-300">
                Schedule Viewing
              </button>
              <Link
                href="/search"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md transition-colors duration-300"
              >
                Back to Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
