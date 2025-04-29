interface PropertyDetailsProps {
  listing: any;
  beds: string;
  baths: string;
  cars: string;
  land: string;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ listing, beds, baths, cars, land }) => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {listing.heading
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ")}
          </h1>
          <p className="text-xl text-gray-600">
            {`${listing.address.street}, ${listing.address.suburb}, ${listing.address.state} ${listing.address.postcode}`}
          </p>
        </div>
        <div className="bg-gradient-to-r from-primary-500 to-teal-500 text-white px-8 py-4 rounded-lg shadow-md">
          <p className="text-2xl font-bold">{listing.price}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100 hover:border-primary-200 transition-colors duration-200 transform hover:scale-105 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-3 text-primary-500"
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
          <span className="block text-2xl font-bold text-gray-800">{beds}</span>
          <span className="text-gray-600">Bedrooms</span>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100 hover:border-primary-200 transition-colors duration-200 transform hover:scale-105 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-3 text-primary-500"
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
          <span className="block text-2xl font-bold text-gray-800">{baths}</span>
          <span className="text-gray-600">Bathrooms</span>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100 hover:border-primary-200 transition-colors duration-200 transform hover:scale-105 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-3 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="block text-2xl font-bold text-gray-800">{cars}</span>
          <span className="text-gray-600">Parking</span>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-100 hover:border-primary-200 transition-colors duration-200 transform hover:scale-105 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-3 text-primary-500"
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
          <span className="block text-2xl font-bold text-gray-800">{land}</span>
          <span className="text-gray-600">Land Size</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;