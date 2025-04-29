import type { Metadata } from "next"
import Link from "next/link"
import { Building, Home } from "lucide-react"
import CategoryListings from "@/components/category-listings"
import PropertyFilters from "@/components/property-filters"
import PropertySearch from "@/components/property-search/property-results"

export const metadata: Metadata = {
  title: "Properties For Sale | Gardian Real Estate",
  description: "Browse our selection of properties for sale in Mackay and surrounding areas.",
}

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Properties For Sale</h1>
              <p className="text-primary-100 max-w-2xl">
                Find your dream home in Mackay and surrounding areas. Browse our selection of properties for sale.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <Link
                href="/rent"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center transition-colors"
              >
                <Building className="mr-2 h-5 w-5" />
                <span>Rentals</span>
              </Link>
              <Link
                href="/commercial"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center transition-colors"
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Commercial</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Properties For Sale</h2>
            <Link href="/for-sale" className="text-primary-600 hover:text-primary-700 font-medium">
              View All
            </Link>
          </div>
          <CategoryListings category="forSale" limit={2} />
        </div>
      </section>

      {/* Property Search Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Find Your Perfect Property</h2>
          <PropertyFilters />
        </div>

        <PropertySearch type="forSale" />
      </div>
    </div>
  )
}
