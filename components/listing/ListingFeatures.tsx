interface ListingFeaturesProps {
  listing: any;
  beds: string;
  baths: string;
  cars: string;
  land: string;
}

const ListingFeatures: React.FC<ListingFeaturesProps> = ({ listing, beds, baths, cars, land }) => {
  return (
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

      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-100 pb-2">
        Property Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Modern kitchen with stone benchtops</span>
        </div>
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Air conditioning throughout</span>
        </div>
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Spacious outdoor entertaining area</span>
        </div>
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Fully fenced yard</span>
        </div>
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Close to schools and amenities</span>
        </div>
        <div className="flex items-center py-2 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200">
          <svg
            className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Secure parking</span>
        </div>
      </div>
    </div>
  );
};

export default ListingFeatures;