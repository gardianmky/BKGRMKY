"use client";
import { fetchListingById } from "../../../lib/api";
import Link from "next/link";
import { useParams, notFound } from 'next/navigation'; // Make sure notFound is imported
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import PropertyDetails from "./PropertyDetails";
import AgentContact from "../../../components/listing/AgentContact";

// Define types for our data
interface Address {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

interface BedBathCarLandItem {
  key: string;
  value: string;
}

interface Image {
  url: string;
}

interface Agent {
  name: string;
  title: string;
  mobile: string;
  imageURL: string;
}

interface Listing {
  id: string;
  heading: string;
  address: Address;
  price: string;
  bedBathCarLand: BedBathCarLandItem[];
  images: Image[];
  agents: Agent[];
  dateListed: string;
}

interface ListingPageProps {
  params: {
    id: string;
  };
}

export default function ListingPage({ params: originalParams }: ListingPageProps) { // Keep the original params prop for now but don't use it directly in client logic
  "use client";
  const params = useParams();
  const listingId = params.id as string;
  const [listing, setListing] = useState<Listing | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchListingById(listingId);
        if (!data) {
          notFound();
        }
        setListing(data as Listing);
      } catch (err) {
        console.error("Error fetching listing details:", err);
        setError("Failed to load listing details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [listingId]);

  if (loading) {
    return <div className="container mx-auto px-4 py-10">Loading...</div>;
  }

  if (error || !listing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm" role="alert">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-medium">{error || "Failed to load listing details. Please try again later."}</p>
          </div>
          <Link
            href="/"
            className="mt-4 inline-block bg-white text-red-700 px-4 py-2 rounded-md border border-red-200 hover:bg-red-50 transition-colors duration-200"
          >
            Return to listings
          </Link>
        </div>
      </div>
    );
  }

  // Extract numeric price for structured data
  const extractNumericPrice = (priceString: string) => {
    const matches = priceString.match(/[\d,]+/g);
    if (matches && matches.length > 0) {
      return Number.parseInt(matches[0].replace(/,/g, ""), 10);
    }
    return null;
  };

  const numericPrice = extractNumericPrice(listing.price);

  // Helper function to get bed/bath/car values
  const getValue = (key: string): string => {
    const item = listing.bedBathCarLand.find((item) => item.key === key);
    return item ? item.value : "0";
  };

  const beds = getValue("bedrooms");
  const baths = getValue("bathrooms");
  const cars = getValue("carSpaces");
  const land = getValue("landSize");

  // Prepare JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.heading,
    description: `${beds} bedroom, ${baths} bathroom property located at ${listing.address.street}, ${listing.address.suburb}, ${listing.address.state}`,
    url: `https://yourdomain.com/listing/${listingId}`,
    datePosted: listing.dateListed || new Date().toISOString(),
    image: listing.images && listing.images.length > 0 ? listing.images[0].url : "",
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address.street,
      addressLocality: listing.address.suburb,
      addressRegion: listing.address.state,
      postalCode: listing.address.postcode,
      addressCountry: "AU",
    },
    offers: {
      "@type": "Offer",
      price: numericPrice || "",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
    numberOfRooms: beds,
    numberOfBathroomsTotal: baths,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Bedrooms",
        value: beds,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Bathrooms",
        value: baths,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking Spaces",
        value: cars,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Land Size",
        value: land,
      },
    ],
  };

  // Add agent information if available
  if (listing.agents && listing.agents.length > 0) {
    structuredData.agent = {
      "@type": "RealEstateAgent",
      name: listing.agents[0].name,
      telephone: listing.agents[0].mobile,
      image: listing.agents[0].imageURL,
    };
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <NextSeo
        title={listing.heading || "Property Listing"}
        description={`${beds} bedroom ${baths} bathroom property located at ${listing.address.street}, ${listing.address.suburb}, ${listing.address.state}`,
        canonical={`https://example.com/listing/${listingId}`}
        openGraph={{
          url: `https://yourdomain.com/listing/${listingId}`,
          title: listing.heading,
          description: `${beds} bedroom, ${baths} bathroom property for sale in ${listing.address.suburb}`,
          images:
            listing.images && listing.images.length > 0
              ? [
                  {
                    url: listing.images[0].url,
                    width: 1200,
                    height: 630,
                    alt: listing.heading,
                  },
                ]
              : [],
          site_name: "Your Real Estate Company",
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/buy"
          className="inline-flex items-center mb-8 text-teal-600 hover:text-teal-800 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Listings
        </Link>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Properties", href: "/buy" },
            { label: listing.heading, href: `/listing/${listingId}` },
          ]}
          className="mb-4"
        />
        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <ImageGallery images={listing.images} heading={listing.heading} />
          <PropertyDetails listing={listing} beds={beds} baths={baths} cars={cars} land={land} />
          <AgentContact agents={listing.agents} />
        </div>
      </div>
    </>
  );
}