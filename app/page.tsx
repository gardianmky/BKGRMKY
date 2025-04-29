import FeaturedPropertyShowcase from "../components/featured-property-showcase";
import HeroSection from "../components/hero-section";
import CategoryListings from "../components/category-listings";
import StackedAgents from "../components/stacked-agents";
import RealEstateOptions from "../components/real-estate-options";
import SecondaryNavigation from "../components/secondary-navigation";
import QuickLinks from "../components/quick-links";
import { Home, Building, DollarSign } from "lucide-react";
import Link from "next/link";
import { fetchFeaturedListing } from "../lib/api";
import type { Listing } from "../types/listing";


async function HomePage() {
  const featuredProperty = await fetchFeaturedListing();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Search */}
      <section className="w-full bg-gray-50 py-6 md:py-8 lg:py-10">
        <div className="hidden md:block container mx-auto px-4 max-h-[600px] md:max-h-[700px] lg:max-h-[800px] overflow-hidden">
          <HeroSection />
        </div>
      </section>
     {/* Featured Property Showcase */}


      {/* Featured Property Showcase */}
      <section className="w-full px-4 py-8 bg-white">
        <FeaturedPropertyShowcase featuredProperty={featuredProperty} />
      </section>

      {/* Property Categories */}
      <section className="w-full px-4 py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Property</h2>

          {/* Property Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* For Sale Card */}
            <div className="group">
              <Link href="/buy" className="block">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="mr-4">
                    <Home className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary-600 transition-colors">
                      Properties For Sale
                    </h3>
                    <p className="text-sm text-gray-600">Find your dream home</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* For Rent Card */}
            <div className="group">
              <Link href="/rent" className="block">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="mr-4">
                    <DollarSign className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary-600 transition-colors">
                      Properties For Rent
                    </h3>
                    <p className="text-sm text-gray-600">Find your perfect rental</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Commercial Card */}
            <div className="group">
              <Link href="/commercial" className="block">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="mr-4">
                    <Building className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary-600 transition-colors">
                      Commercial Properties
                    </h3>
                    <p className="text-sm text-gray-600">Business opportunities</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* For Sale Listings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Featured Properties For Sale</h3>
            <CategoryListings category="forSale" limit={2} />
            <div className="mt-6 text-center">
              <Link
                href="/buy"
                className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-colors"
              >
                View All For Sale Properties
              </Link>
            </div>
          </div>

          {/* For Rent Listings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Featured Rental Properties</h3>
            <CategoryListings category="forRent" limit={2} />
            <div className="mt-6 text-center">
              <Link
                href="/rent"
                className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-colors"
              >
                View All Rental Properties
              </Link>
            </div>
          </div>

          {/* Commercial Listings */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Featured Commercial Properties</h3>
            <CategoryListings category="commercial" limit={2} />
            <div className="mt-6 text-center">
              <Link
                href="/commercial"
                className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-colors"
              >
                View All Commercial Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sell & Rent CTAs Section */}
      <section className="w-full px-4 py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sell Your Property CTA */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative p-8 md:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#FFFFFF"
                      d="M45.3,-59.1C58.9,-51.1,70.2,-37.3,76.4,-21.1C82.6,-4.9,83.8,13.7,77.2,29.7C70.7,45.7,56.4,59.1,40.1,67.4C23.9,75.7,5.7,78.9,-11.1,75.8C-27.9,72.7,-43.3,63.3,-55.3,50.1C-67.3,36.9,-75.9,19.8,-77.7,1.8C-79.5,-16.2,-74.5,-34.1,-63.2,-45.6C-51.9,-57.1,-34.3,-62.1,-18.4,-65.1C-2.5,-68.1,14.7,-69.1,29.8,-67.1C44.9,-65.1,58,-67.1,45.3,-59.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking to Sell?</h3>
                <p className="text-white/90 mb-6 max-w-md">
                  Our expert agents will help you get the best price for your property with our comprehensive marketing
                  strategy and extensive buyer network.
                </p>
                <Link
                  href="/sell-your-property"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Sell Your Property
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Property Management CTA */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative p-8 md:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#FFFFFF"
                      d="M47.7,-57.2C59.5,-47.3,65.8,-30.9,68.2,-14.9C70.7,1.1,69.4,16.7,62.1,28.9C54.8,41.1,41.6,49.9,27.4,57.5C13.2,65.2,-2,71.6,-18.2,70.5C-34.5,69.3,-51.8,60.6,-60.9,46.6C-70.1,32.6,-71.2,13.3,-70.8,-6.2C-70.4,-25.7,-68.5,-45.3,-57.8,-55.6C-47.1,-65.9,-27.7,-66.8,-10.1,-65.1C7.5,-63.4,35.9,-67.1,47.7,-57.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Property Management</h3>
                <p className="text-white/90 mb-6 max-w-md">
                  Let us take care of your investment property with our comprehensive property management services, from
                  tenant screening to maintenance.
                </p>
                <Link
                  href="/property-management"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Moved to be below the CTAs */}
      <section className="w-full px-4 py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <QuickLinks />
        </div>
      </section>

      {/* Featured Agents */}
      <section className="w-full px-4 py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mackay&apos;s Best Real Estate Agents</h2>
          <StackedAgents />
          <div className="mt-8 text-center">
            <Link
              href="/agents"
              className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-600 hover:text-white transition-colors"
            >
              View All Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Real Estate Options */}
      <section className="w-full px-4 py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Real Estate Services</h2>
          <RealEstateOptions />
        </div>
      </section>

      {/* Secondary Navigation */}
      <section className="w-full px-4 py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <SecondaryNavigation />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
