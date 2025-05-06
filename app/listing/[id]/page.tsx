"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// Import NextSeo if you're using it
import { NextSeo } from "next-seo";
// Remove Head import as it's not compatible with App Router

interface PropertyListing {
  listingID: string;
  heading: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  price: string;
  bedBathCarLand: Array<{
    key: string;
    value: string;
  }>;
  images: Array<{
    url: string;
  }>;
  description: string;
  features: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
    photo: string;
  };
}

export default function ListingDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const [listing, setListing] = useState<PropertyListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchListing() {
      try {
        // Mock data for now - replace with actual API call
        const mockListing = {
          listingID: id,
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
            { url: "/placeholder.svg" }
          ],
          description: "This beautiful property features 4 bedrooms and 2 bathrooms, situated on 600 sqm of land. Perfect for families or investors looking for a quality property in a desirable location.",
          features: [
            "Modern kitchen with stone benchtops",
            "Air conditioning throughout",
            "Spacious outdoor entertaining area",
            "Fully fenced yard",
            "Close to schools and amenities",
            "Secure parking"
          ],
          agent: {
            name: "John Smith",
            email: "john@example.com",
            phone: "+1 555-123-4567",
            photo: "/placeholder.svg"
          }
        };

        setListing(mockListing);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching listing:", err);
        setError("Failed to load property details");
        setLoading(false);
      }
    }

    fetchListing();
  }, [id]);

  if (loading) {
    return <div className="text-center p-10">Loading property details...</div>;
  }

  if (error || !listing) {
    return <div className="text-center p-10">{error || "Property not found"}</div>;
  }

  // Extract property details
  const beds = listing.bedBathCarLand?.find(item => item.key === "bedrooms")?.value || "0";
  const baths = listing.bedBathCarLand?.find(item => item.key === "bathrooms")?.value || "0";
  const parking = listing.bedBathCarLand?.find(item => item.key === "carSpaces")?.value || "0";
  const landSize = listing.bedBathCarLand?.find(item => item.key === "landSize")?.value || "N/A";
  const listingId = listing.listingID;

  // SEO description for use in multiple places
  const seoDescription = `${beds} bedroom ${baths} bathroom property located at ${listing?.address?.street}, ${listing?.address?.suburb}, ${listing?.address?.state}`;

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": listing?.heading,
    "image": listing?.images?.[0]?.url,
    "description": listing?.description,
    "offers": {
      "@type": "Offer",
      "url": `https://example.com/listing/${listingId}`,
      "priceCurrency": "USD", // Update with your currency if it's not USD
      "price": listing?.price?.replace('$', '').replace(',', ''), // Basic price extraction
      "availability": "https://schema.org/InStock", // Adjust based on availability
    },
    "brand": {
      "@type": "Brand",
      "name": "Your Brand Name" // Add your brand name
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* SEO */}
      <NextSeo
        title={listing?.heading || "Property Listing"}
        description={seoDescription}
        canonical={`https://example.com/listing/${listingId}`}
        openGraph={{
          title: listing?.heading || "Property Listing",
          description: seoDescription,
          url: `https://example.com/listing/${listingId}`,
          images: listing?.images?.map(img => ({ url: img.url })),
          site_name: "Your Site Name", // Replace with your site name
        }}
      />
  
      {/* Structured Data */}
      <Script
        id="listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <div className="py-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Listings
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{listing.heading}</h1>
        <p className="text-xl text-gray-600">
          {listing.address.street}, {listing.address.suburb}, {listing.address.state} {listing.address.postcode}
        </p>
        <div className="text-2xl font-bold text-blue-600 mt-2">
          {listing.price}
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="relative h-96 w-full">
          <Image
            src={listing.images[0]?.url || "/placeholder.svg"}
            alt={listing.heading || "Property image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold">{beds}</div>
          <div className="text-gray-600">Bedrooms</div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold">{baths}</div>
          <div className="text-gray-600">Bathrooms</div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-4xl font-bold">{parking}</div>
          <div className="text-gray-600">Parking</div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold">
            {landSize}
          </div>
          <div className="text-gray-600">Land Size</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
        <div className="prose max-w-none">
          <p>{listing.description}</p>
        </div>
      </div>

      {listing.features && listing.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {listing.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {listing.agent && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
              <Image
                src={listing.agent.photo}
                alt={listing.agent.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{listing.agent.name}</h3>
              <p className="text-gray-600">{listing.agent.email}</p>
              <p className="text-gray-600">{listing.agent.phone}</p>
              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
