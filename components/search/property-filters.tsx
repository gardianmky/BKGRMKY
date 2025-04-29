"use client"

import { useState, useEffect } from "react"
import { useSearch, type PropertyType } from "@/context/search-context"
import { Filter, ChevronDown, ChevronUp, X, Check, Calendar, Home, Building2, Warehouse } from "lucide-react"

interface PropertyFiltersProps {
  propertyType: PropertyType
}

export default function PropertyFilters({ propertyType }: PropertyFiltersProps) {
  const { filters, updateFilters, resetFilters, activeFiltersCount, clearFilter } = useSearch()
  const [isOpen, setIsOpen] = useState(false)

  // Set the property type when the component mounts - but only once
  useEffect(() => {
    // Only update if the current filter property type is different
    if (filters.propertyType !== propertyType) {
      updateFilters({ propertyType })
    }
  }, [propertyType, filters.propertyType, updateFilters])

  // Generate price options based on property type
  const getPriceOptions = () => {
    if (propertyType === "rent") {
      return [
        { label: "Any", value: "" },
        { label: "$100 pw", value: "100" },
        { label: "$200 pw", value: "200" },
        { label: "$300 pw", value: "300" },
        { label: "$400 pw", value: "400" },
        { label: "$500 pw", value: "500" },
        { label: "$600 pw", value: "600" },
        { label: "$700 pw", value: "700" },
        { label: "$800 pw", value: "800" },
        { label: "$900 pw", value: "900" },
        { label: "$1,000 pw", value: "1000" },
        { label: "$1,500 pw", value: "1500" },
        { label: "$2,000 pw", value: "2000" },
      ]
    } else {
      return [
        { label: "Any", value: "" },
        { label: "$100,000", value: "100000" },
        { label: "$200,000", value: "200000" },
        { label: "$300,000", value: "300000" },
        { label: "$400,000", value: "400000" },
        { label: "$500,000", value: "500000" },
        { label: "$600,000", value: "600000" },
        { label: "$700,000", value: "700000" },
        { label: "$800,000", value: "800000" },
        { label: "$900,000", value: "900000" },
        { label: "$1,000,000", value: "1000000" },
        { label: "$1,500,000", value: "1500000" },
        { label: "$2,000,000", value: "2000000" },
        { label: "$3,000,000", value: "3000000" },
      ]
    }
  }

  // Rest of the component remains the same...
  // Get property categories based on property type
  const getPropertyCategories = () => {
    if (propertyType === "commercial") {
      return [
        { label: "Any", value: "" },
        { label: "Office", value: "Office" },
        { label: "Retail", value: "Retail" },
        { label: "Industrial", value: "Industrial" },
        { label: "Warehouse", value: "Warehouse" },
        { label: "Land", value: "Land" },
        { label: "Hotel/Leisure", value: "Hotel" },
        { label: "Medical", value: "Medical" },
      ]
    } else {
      return [
        { label: "Any", value: "" },
        { label: "House", value: "House" },
        { label: "Apartment", value: "Apartment" },
        { label: "Townhouse", value: "Townhouse" },
        { label: "Villa", value: "Villa" },
        { label: "Land", value: "Land" },
        { label: "Rural", value: "Rural" },
        { label: "Acreage", value: "Acreage" },
      ]
    }
  }

  // Property features
  const getPropertyFeatures = () => {
    const commonFeatures = [
      { id: "pool", label: "Swimming Pool" },
      { id: "aircon", label: "Air Conditioning" },
      { id: "garage", label: "Garage" },
      { id: "security", label: "Security System" },
    ]

    if (propertyType === "commercial") {
      return [
        ...commonFeatures,
        { id: "parking", label: "Parking" },
        { id: "reception", label: "Reception" },
        { id: "kitchenette", label: "Kitchenette" },
        { id: "loading", label: "Loading Dock" },
        { id: "alarm", label: "Alarm System" },
        { id: "highCeilings", label: "High Ceilings" },
      ]
    } else if (propertyType === "rent") {
      return [
        ...commonFeatures,
        { id: "balcony", label: "Balcony" },
        { id: "garden", label: "Garden" },
        { id: "study", label: "Study" },
        { id: "ensuite", label: "Ensuite" },
        { id: "furnished", label: "Furnished" },
        { id: "petsAllowed", label: "Pets Allowed" },
      ]
    } else {
      return [
        ...commonFeatures,
        { id: "balcony", label: "Balcony" },
        { id: "garden", label: "Garden" },
        { id: "study", label: "Study" },
        { id: "ensuite", label: "Ensuite" },
        { id: "waterfront", label: "Waterfront" },
        { id: "views", label: "Views" },
      ]
    }
  }

  // Get status options based on property type
  const getStatusOptions = () => {
    if (propertyType === "rent") {
      return [
        { label: "Any", value: "" },
        { label: "Available Now", value: "Available" },
        { label: "Available Soon", value: "Soon" },
        { label: "Under Application", value: "Application" },
        { label: "Leased", value: "Leased" },
      ]
    } else if (propertyType === "commercial") {
      return [
        { label: "Any", value: "" },
        { label: "For Sale", value: "Sale" },
        { label: "For Lease", value: "Lease" },
        { label: "Under Offer", value: "Offer" },
        { label: "Sold", value: "Sold" },
        { label: "Leased", value: "Leased" },
      ]
    } else {
      return [
        { label: "Any", value: "" },
        { label: "For Sale", value: "Sale" },
        { label: "Under Offer", value: "Offer" },
        { label: "Sold", value: "Sold" },
      ]
    }
  }

  // Get commercial-specific options
  const getCommercialTypes = () => {
    return [
      { label: "Any", value: "" },
      { label: "Office", value: "Office" },
      { label: "Retail", value: "Retail" },
      { label: "Industrial", value: "Industrial" },
      { label: "Warehouse", value: "Warehouse" },
      { label: "Showroom", value: "Showroom" },
      { label: "Land", value: "Land" },
      { label: "Hotel/Leisure", value: "Hotel" },
      { label: "Medical", value: "Medical" },
    ]
  }

  // Get floor area options for commercial properties
  const getFloorAreaOptions = () => {
    return [
      { label: "Any", value: "" },
      { label: "Up to 50m²", value: "50" },
      { label: "50-100m²", value: "100" },
      { label: "100-200m²", value: "200" },
      { label: "200-500m²", value: "500" },
      { label: "500-1000m²", value: "1000" },
      { label: "1000m²+", value: "1001" },
    ]
  }

  // Get lease length options for rentals
  const getLeaseLengthOptions = () => {
    return [
      { label: "Any", value: "" },
      { label: "6 months", value: "6" },
      { label: "12 months", value: "12" },
      { label: "18 months", value: "18" },
      { label: "24 months", value: "24" },
      { label: "Flexible", value: "flexible" },
    ]
  }

  const priceOptions = getPriceOptions()
  const propertyCategories = getPropertyCategories()
  const propertyFeatures = getPropertyFeatures()
  const statusOptions = getStatusOptions()

  // Handle feature toggle
  const toggleFeature = (featureId: string) => {
    const newFeatures = [...filters.features]
    const index = newFeatures.indexOf(featureId)

    if (index === -1) {
      newFeatures.push(featureId)
    } else {
      newFeatures.splice(index, 1)
    }

    updateFilters({ features: newFeatures })
  }

  // Toggle boolean filters
  const toggleBooleanFilter = (filterName: "recentlyAdded" | "openHouse" | "furnished" | "petsAllowed") => {
    updateFilters({ [filterName]: !filters[filterName] })
  }

  // Render active filters
  const renderActiveFilters = () => {
    if (activeFiltersCount === 0) return null

    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
          <button
            onClick={resetFilters}
            className="ml-2 text-xs text-primary-600 hover:text-primary-800 hover:underline"
          >
            Clear All
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.location && (
            <FilterTag label={`Location: ${filters.location}`} onRemove={() => clearFilter("location")} />
          )}
          {filters.minPrice && (
            <FilterTag
              label={`Min Price: ${propertyType === "rent" ? "$" + filters.minPrice + "/w" : "$" + filters.minPrice}`}
              onRemove={() => clearFilter("minPrice")}
            />
          )}
          {filters.maxPrice && (
            <FilterTag
              label={`Max Price: ${propertyType === "rent" ? "$" + filters.maxPrice + "/w" : "$" + filters.maxPrice}`}
              onRemove={() => clearFilter("maxPrice")}
            />
          )}
          {filters.bedrooms && (
            <FilterTag label={`${filters.bedrooms}+ Beds`} onRemove={() => clearFilter("bedrooms")} />
          )}
          {filters.bathrooms && (
            <FilterTag label={`${filters.bathrooms}+ Baths`} onRemove={() => clearFilter("bathrooms")} />
          )}
          {filters.carSpaces && (
            <FilterTag label={`${filters.carSpaces}+ Cars`} onRemove={() => clearFilter("carSpaces")} />
          )}
          {filters.propertyCategory && (
            <FilterTag label={`Type: ${filters.propertyCategory}`} onRemove={() => clearFilter("propertyCategory")} />
          )}
          {filters.status && <FilterTag label={`Status: ${filters.status}`} onRemove={() => clearFilter("status")} />}
          {filters.recentlyAdded && <FilterTag label="Recently Added" onRemove={() => clearFilter("recentlyAdded")} />}
          {filters.openHouse && <FilterTag label="Open House" onRemove={() => clearFilter("openHouse")} />}
          {propertyType === "rent" && filters.furnished && (
            <FilterTag label="Furnished" onRemove={() => clearFilter("furnished")} />
          )}
          {propertyType === "rent" && filters.petsAllowed && (
            <FilterTag label="Pets Allowed" onRemove={() => clearFilter("petsAllowed")} />
          )}
          {propertyType === "rent" && filters.leaseLength && (
            <FilterTag label={`Lease: ${filters.leaseLength} months`} onRemove={() => clearFilter("leaseLength")} />
          )}
          {propertyType === "commercial" && filters.commercialType && (
            <FilterTag label={`Type: ${filters.commercialType}`} onRemove={() => clearFilter("commercialType")} />
          )}
          {propertyType === "commercial" && filters.floorArea && (
            <FilterTag label={`Area: ${filters.floorArea}m²`} onRemove={() => clearFilter("floorArea")} />
          )}
          {filters.features.length > 0 && (
            <FilterTag label={`Features: ${filters.features.length}`} onRemove={() => clearFilter("features")} />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 border border-gray-100">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2 text-primary-500" />
          <span className="font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="ml-2 bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && <div className="px-4 pb-2">{renderActiveFilters()}</div>}

      {isOpen && (
        <div className="p-4 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => updateFilters({ location: e.target.value })}
                  placeholder="Suburb, City, Postcode"
                  className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <MapPinIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <select
                value={filters.minPrice}
                onChange={(e) => updateFilters({ minPrice: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {priceOptions.map((option) => (
                  <option key={`min-${option.value}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <select
                value={filters.maxPrice}
                onChange={(e) => updateFilters({ maxPrice: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {priceOptions.map((option) => (
                  <option key={`max-${option.value}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <div className="relative">
                <select
                  value={filters.propertyCategory}
                  onChange={(e) => updateFilters({ propertyCategory: e.target.value })}
                  className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {propertyCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {propertyType === "commercial" ? (
                  <Building2 className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                ) : (
                  <Home className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>

            {/* Bedrooms - Not for commercial */}
            {propertyType !== "commercial" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => updateFilters({ bedrooms: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            )}

            {/* Bathrooms - Not for commercial */}
            {propertyType !== "commercial" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                <select
                  value={filters.bathrooms}
                  onChange={(e) => updateFilters({ bathrooms: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            )}

            {/* Car Spaces - Not for commercial */}
            {propertyType !== "commercial" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Car Spaces</label>
                <select
                  value={filters.carSpaces}
                  onChange={(e) => updateFilters({ carSpaces: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            )}

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={filters.status}
                onChange={(e) => updateFilters({ status: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Commercial-specific filters */}
            {propertyType === "commercial" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Commercial Type</label>
                  <div className="relative">
                    <select
                      value={filters.commercialType}
                      onChange={(e) => updateFilters({ commercialType: e.target.value })}
                      className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      {getCommercialTypes().map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <Warehouse className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Floor Area</label>
                  <select
                    value={filters.floorArea}
                    onChange={(e) => updateFilters({ floorArea: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {getFloorAreaOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Rental-specific filters */}
            {propertyType === "rent" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lease Length</label>
                  <select
                    value={filters.leaseLength}
                    onChange={(e) => updateFilters({ leaseLength: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {getLeaseLengthOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available From</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={filters.availableFrom}
                      onChange={(e) => updateFilters({ availableFrom: e.target.value })}
                      className="w-full p-2 pl-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </>
            )}

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilters({ sortBy: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="newest">Newest</option>
                <option value="price_low">Price (Low to High)</option>
                <option value="price_high">Price (High to Low)</option>
                {propertyType !== "commercial" && <option value="beds_high">Most Bedrooms</option>}
                <option value="land_high">Largest Land Size</option>
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                filters.recentlyAdded
                  ? "bg-primary-50 border border-primary-200"
                  : "hover:bg-gray-50 border border-gray-100"
              }`}
              onClick={() => toggleBooleanFilter("recentlyAdded")}
            >
              <div
                className={`h-4 w-4 rounded-sm mr-2 flex items-center justify-center ${
                  filters.recentlyAdded ? "bg-primary-500" : "border border-gray-300"
                }`}
              >
                {filters.recentlyAdded && <Check className="h-3 w-3 text-white" />}
              </div>
              <label className="text-sm text-gray-700 cursor-pointer">Recently Added</label>
            </div>

            <div
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                filters.openHouse
                  ? "bg-primary-50 border border-primary-200"
                  : "hover:bg-gray-50 border border-gray-100"
              }`}
              onClick={() => toggleBooleanFilter("openHouse")}
            >
              <div
                className={`h-4 w-4 rounded-sm mr-2 flex items-center justify-center ${
                  filters.openHouse ? "bg-primary-500" : "border border-gray-300"
                }`}
              >
                {filters.openHouse && <Check className="h-3 w-3 text-white" />}
              </div>
              <label className="text-sm text-gray-700 cursor-pointer">Open House</label>
            </div>

            {propertyType === "rent" && (
              <>
                <div
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    filters.furnished
                      ? "bg-primary-50 border border-primary-200"
                      : "hover:bg-gray-50 border border-gray-100"
                  }`}
                  onClick={() => toggleBooleanFilter("furnished")}
                >
                  <div
                    className={`h-4 w-4 rounded-sm mr-2 flex items-center justify-center ${
                      filters.furnished ? "bg-primary-500" : "border border-gray-300"
                    }`}
                  >
                    {filters.furnished && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <label className="text-sm text-gray-700 cursor-pointer">Furnished</label>
                </div>

                <div
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    filters.petsAllowed
                      ? "bg-primary-50 border border-primary-200"
                      : "hover:bg-gray-50 border border-gray-100"
                  }`}
                  onClick={() => toggleBooleanFilter("petsAllowed")}
                >
                  <div
                    className={`h-4 w-4 rounded-sm mr-2 flex items-center justify-center ${
                      filters.petsAllowed ? "bg-primary-500" : "border border-gray-300"
                    }`}
                  >
                    {filters.petsAllowed && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <label className="text-sm text-gray-700 cursor-pointer">Pets Allowed</label>
                </div>
              </>
            )}
          </div>

          {/* Property Features */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Property Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {propertyFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex items-center p-2 rounded-md cursor-pointer ${
                    filters.features.includes(feature.id)
                      ? "bg-primary-50 border border-primary-200"
                      : "hover:bg-gray-50 border border-gray-100"
                  }`}
                  onClick={() => toggleFeature(feature.id)}
                >
                  <div
                    className={`h-4 w-4 rounded-sm mr-2 flex items-center justify-center ${
                      filters.features.includes(feature.id) ? "bg-primary-500" : "border border-gray-300"
                    }`}
                  >
                    {filters.features.includes(feature.id) && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <label className="text-sm text-gray-700 cursor-pointer">{feature.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6 space-x-2">
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Reset Filters
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-primary-500 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Filter tag component for active filters
function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="inline-flex items-center bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs">
      <span>{label}</span>
      <button onClick={onRemove} className="ml-1 text-primary-500 hover:text-primary-700">
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}

// Map pin icon component
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  )
}
