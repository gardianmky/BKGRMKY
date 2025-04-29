import Image from "next/image"
import Link from "next/link"
import type { Listing } from "@/types/listing"

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { listingID, heading, price, address, bedBathCarLand, images, agents } = listing

  // Find values for beds, baths, cars
  const getBedBathCarValue = (key: string) => {
    const item = bedBathCarLand.find((item) => item.key === key)
    return item ? item.value : "0"
  }

  const beds = getBedBathCarValue("bedrooms")
  const baths = getBedBathCarValue("bathrooms")
  const cars = getBedBathCarValue("carSpaces")
  const land = getBedBathCarValue("landSize")

  // Get the first image or use a placeholder
  const mainImage = images && images.length > 0 ? images[0].url : "/placeholder.svg?height=300&width=400"

  return (
    <Link href={`/listing/${listingID}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={heading}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="property-badge">For Sale</div>

          <div className="absolute bottom-3 left-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-white/90 backdrop-blur-sm text-teal-deep py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200">
              Quick View
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h2 className="text-xl font-semibold line-clamp-1 group-hover:text-primary-600 transition-colors duration-200">
              {heading}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{`${address.street}, ${address.suburb}, ${address.state} ${address.postcode}`}</p>
          </div>

          <p className="text-xl font-bold text-primary-600 mb-5">{price}</p>

          <div className="flex justify-between text-sm text-gray-700 mb-5 border-t border-gray-100 pt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-teal-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-teal-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-teal-500 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{cars} Cars</span>
            </div>
          </div>

          {agents && agents.length > 0 && (
            <div className="flex items-center text-sm text-gray-600 border-t border-gray-100 pt-4">
              {agents[0].imageURL && (
                <div className="agent-avatar mr-3">
                  <Image
                    src={agents[0].imageURL || "/placeholder.svg"}
                    alt={agents[0].name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{agents[0].name}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
