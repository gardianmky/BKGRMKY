import Image from "next/image"
import Link from "next/link"
import { Home, Bath, Car, Building, DollarSign, MapPin } from "lucide-react"
import type { Listing } from "@/types/listing"

interface PropertyListingProps {
  listing: Listing
  category: "sale" | "rent" | "commercial"
}

export default function PropertyListing({ listing, category }: PropertyListingProps) {
  // Get the first image or use a placeholder
  const mainImage =
    listing.images && listing.images.length > 0 ? listing.images[0].url : "/placeholder.svg?height=300&width=400"

  // Find values for beds, baths, cars
  const getBedBathCarValue = (key: string) => {
    const item = listing.bedBathCarLand.find((item) => item.key === key)
    return item ? item.value : "0"
  }

  const beds = getBedBathCarValue("bedrooms")
  const baths = getBedBathCarValue("bathrooms")
  const cars = getBedBathCarValue("carSpaces")
  const land = getBedBathCarValue("landSize")
  const floorArea = getBedBathCarValue("floorArea") || "N/A"

  // Get badge text and icon based on category
  const getBadgeInfo = () => {
    switch (category) {
      case "sale":
        return { text: "For Sale", icon: <Home className="h-4 w-4 mr-1" /> }
      case "rent":
        return { text: "For Rent", icon: <DollarSign className="h-4 w-4 mr-1" /> }
      case "commercial":
        return { text: "Commercial", icon: <Building className="h-4 w-4 mr-1" /> }
      default:
        return { text: "Property", icon: <Home className="h-4 w-4 mr-1" /> }
    }
  }

  const badge = getBadgeInfo()

  return (
    <Link href={`/listing/${listing.listingID}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={listing.heading}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 z-20 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            {badge.icon}
            <span>{badge.text}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h2 className="text-xl font-semibold line-clamp-1 group-hover:text-primary-600 transition-colors duration-200">
              {listing.heading}
            </h2>
            <p className="text-gray-600 text-sm mb-2 flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
              {`${listing.address.street}, ${listing.address.suburb}, ${listing.address.state} ${listing.address.postcode}`}
            </p>
          </div>

          <p className="text-xl font-bold text-primary-600 mb-5">{listing.price}</p>

          {/* Property Features */}
          {category === "commercial" ? (
            <div className="flex justify-between text-sm text-gray-700 mb-5 border-t border-gray-100 pt-4">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-primary-500 mr-1" />
                <span>{listing.categories[0] || "Commercial"}</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <span>{floorArea}</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 text-primary-500 mr-1" />
                <span>{cars} Parks</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-between text-sm text-gray-700 mb-5 border-t border-gray-100 pt-4">
              <div className="flex items-center">
                <Home className="h-5 w-5 text-primary-500 mr-1" />
                <span>{beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 text-primary-500 mr-1" />
                <span>{baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 text-primary-500 mr-1" />
                <span>{cars} Cars</span>
              </div>
            </div>
          )}

          {/* Agent Info (if available) */}
          {listing.agents && listing.agents.length > 0 && (
            <div className="flex items-center text-sm text-gray-600 border-t border-gray-100 pt-4">
              {listing.agents[0].imageURL && (
                <div className="relative h-10 w-10 mr-3 overflow-hidden rounded-full border-2 border-gray-100">
                  <Image
                    src={listing.agents[0].imageURL || "/placeholder.svg"}
                    alt={listing.agents[0].name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{listing.agents[0].name}</p>
                <p className="text-xs">{listing.agents[0].phone}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
