export async function fetchListingById(id: string) {
  // Mock data for demonstration purposes
  // In a real app, this would fetch from an API endpoint
  return {
    id,
    heading: "Beautiful Family Home",
    address: {
      street: "123 Main Street",
      suburb: "Pleasantville",
      state: "CA",
      postcode: "12345"
    },
    price: "$750,000",
    bedBathCarLand: [
      { key: "bedrooms", value: "4" },
      { key: "bathrooms", value: "2" },
      { key: "carSpaces", value: "2" },
      { key: "landSize", value: "600 sqm" }
    ],
    images: [
      { url: "/placeholder.svg" },
      { url: "/placeholder.svg" },
      { url: "/placeholder.svg" }
    ],
    agents: [
      {
        name: "Jane Smith",
        title: "Senior Agent",
        mobile: "555-123-4567",
        imageURL: "/placeholder.svg"
      }
    ],
    dateListed: new Date().toISOString()
  };
}

export async function fetchListingsByCategory(category: string, limit: number) {
  // Implement your logic here to fetch listings by category
  // This is mock data for demonstration
  const mockListings = Array.from({ length: limit }).map((_, index) => ({
    listingID: `mock-${category}-${index}`,
    heading: `Mock ${category} Property ${index + 1}`,
    address: { street: "Mock Street", suburb: "Mock Suburb", state: "Mock State", postcode: "0000" },
    price: "$100,000",
    bedBathCarLand: [],
    images: [{ url: "/placeholder.svg" }],
    type: category === "commercial" ? "Commercial" : "Residential",
    categories: [category],
  }));
  return mockListings;
}

export async function fetchSoldListings(limit: number) {
  // Implement your logic here to fetch sold listings
  // This is mock data for demonstration
  const mockListings = Array.from({ length: limit }).map((_, index) => ({
    listingID: `mock-sold-${index}`,
    heading: `Mock Sold Property ${index + 1}`,
    address: { street: "Mock Street", suburb: "Mock Suburb", state: "Mock State", postcode: "0000" },
    price: "$100,000",
    bedBathCarLand: [],
    images: [{ url: "/placeholder.svg" }],
    type: "Residential",
    categories: ["sold"],
  }));
  return mockListings;
}

export async function fetchLeasedListings(limit: number) {
  // Implement your logic here to fetch leased listings
  // This is mock data for demonstration
  const mockListings = Array.from({ length: limit }).map((_, index) => ({
    listingID: `mock-leased-${index}`,
    heading: `Mock Leased Property ${index + 1}`,
    address: { street: "Mock Street", suburb: "Mock Suburb", state: "Mock State", postcode: "0000" },
    price: "$100,000",
    bedBathCarLand: [],
    images: [{ url: "/placeholder.svg" }],
    type: "Residential",
    categories: ["leased"],
  }));
  return mockListings;
}

export async function fetchFeaturedListing() {
  try {
    const listings = await fetchListings({ limit: 10 })
    // Find a listing with good images to feature
    const featured = listings.find(listing => 
      listing.images?.length >= 3 && 
      listing.price && 
      listing.heading
    )
    
    if (!featured) return null

    return {
      ...featured,
      bedBathCarLand: [
        { key: "bedrooms", value: featured.bedrooms?.toString() || "N/A" },
        { key: "bathrooms", value: featured.bathrooms?.toString() || "N/A" },
        { key: "carSpaces", value: featured.carSpaces?.toString() || "N/A" },
        { key: "landSize", value: featured.landSize || "N/A" }
      ],
      images: featured.images?.map(img => ({ url: img.url })) || []
    }
  } catch (error) {
    console.error('Error fetching featured listing:', error)
    return null
  }
}

export async function fetchListings() {
  const saleListings = await fetchListingsByCategory("sale", 3);
  const rentListings = await fetchListingsByCategory("rent", 3);
  const commercialListings = await fetchListingsByCategory("commercial", 3);
  const soldListings = await fetchSoldListings(3);
  const leasedListings = await fetchLeasedListings(3);

  return [...saleListings, ...rentListings, ...commercialListings, ...soldListings, ...leasedListings];
}
