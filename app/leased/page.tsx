"use client"; // Add this line at the very top

import Link from "next/link";
import ListingsGrid from "@/components/listings-grid";
import { useState, useEffect } from 'react';
// Assuming you have a function to fetch leased listings in your API file
import { fetchLeasedListings } from "../../lib/api";

export default function LeasedPage() {
  const [leasedListings, setLeasedListings] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLeasedProperties() {
      setLoading(true);
      try {
        const data = await fetchLeasedListings();
        setLeasedListings(data || []); // Ensure it's an array
      } catch (err) {
        console.error("Error fetching leased listings:", err);
        setError("Failed to load leased properties.");
      } finally {
        setLoading(false);
      }
    }

    getLeasedProperties();
  }, []);

  if (loading) return <p>Loading leased properties...</p>;
  if (error) return <p>Error loading leased properties: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Recently Leased Properties</h1>
        <p className="text-gray-600 mb-6">
          Browse our recently leased properties in Mackay and surrounding areas to get an idea of the current rental
          market.
        </p>
      </div>

      <ListingsGrid listings={leasedListings} /> {/* Pass the fetched data here */}
    </div>
  );
}