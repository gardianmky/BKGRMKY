import { Property } from "@/types/listing"
import ListingCard from "@/components/listing-card"
import { Button } from "@/components/ui/button"

interface PropertyResultsProps {
  properties: Property[]
  loading?: boolean
  error?: string | null
  emptyMessage?: string
  className?: string
}

export default function PropertyResults({
  properties = [],
  loading = false,
  error = null,
  emptyMessage = "No properties found",
  className = ""
}: PropertyResultsProps) {
  // Helper function to get bed/bath/car values
  const getValue = (key: string): string => {
    const item = bedBathCarLand.find((item) => item.key === key);
    return item ? item.value : "0";
  };

  const beds = getValue("bedrooms");
  const baths = getValue("bathrooms");
  const cars = getValue("carSpaces");
  const land = getValue("landSize");

  // Feature card component for reuse
  const FeatureCard = ({ icon, value, label }: { icon: ReactNode; value: string; label: string }) => (
    <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100 hover:border-teal-200 transition-colors duration-200 transform hover:scale-105 transition-transform duration-300">
      {icon}
      <span className="block text-2xl font-bold text-gray-800">{value}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {heading
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ")}
          </h1>
          <p className="text-xl text-gray-600">
            {`${address.street}, ${address.suburb}, ${address.state} ${address.postcode}`}
          </p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg shadow-md">
          <p className="text-2xl font-bold">{price}</p>
        </div>
      </div>

      {/* Property Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3 text-teal-500"
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
          }
          value={beds}
          label="Bedrooms"
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3 text-teal-500"
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
          }
          value={baths}
          label="Bathrooms"
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          value={cars}
          label="Parking"
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          }
          value={land}
          label="Land Size"
        />
      </div>

      {/* Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-100 pb-2">
          Property Description
        </h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p>
            This beautiful property features {beds} bedrooms and {baths} bathrooms, situated on {land} of land.
            Perfect for families or investors looking for a quality property in a desirable location.
          </p>
          <p className="mt-4">
            The property includes modern amenities, spacious living areas, and is conveniently located close to
            schools, shopping centers, and public transport.
          </p>
        </div>
      </div>

      {/* Property Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-100 pb-2">
          Property Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
          {[
            "Modern kitchen with stone benchtops",
            "Air conditioning throughout",
            "Spacious outdoor entertaining area",
            "Fully fenced yard",
            "Close to schools and amenities",
            "Secure parking"
          ].map((feature, index) => (
            <div key={index} className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
              <svg
                className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}