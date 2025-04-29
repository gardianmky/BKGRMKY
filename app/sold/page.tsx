"use client";

import { useState, useEffect } from 'react';
import ListingsGrid from "@/components/listings-grid";
// Assuming your API file is in "../../lib/api" as in this code
import { fetchSoldListings } from "../../lib/api";
import Link from "next/link"; // Make sure this is here if you need it


export default function SoldPage() {
  const [soldListings, setSoldListings] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSoldProperties() {
      setLoading(true);
      try {
        const data = await fetchSoldListings();
        setSoldListings(data || []); // Ensure it's an array
      } catch (err) {
        console.error("Error fetching sold listings:", err);
        setError("Failed to load sold properties.");
      } finally {
        setLoading(false);
      }
    }

    getSoldProperties();
  }, []);

  if (loading) return <p>Loading sold properties...</p>;
  if (error) return <p>Error loading sold properties: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors duration-200"
        >
          {/* ... SVG ... */}
          Back to Home
        </Link>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Recently Sold Properties</h1>
        <p className="text-gray-600 mb-6">
          Browse our recently sold properties in Mackay and surrounding areas to get an idea of the current market.
        </p>
      </div>
      <ListingsGrid listings={soldListings} />
    </div>
  );
}