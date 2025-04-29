import Link from "next/link";
import AgentsSection from "@/components/agents-section";
// import AgentsSection from "../../components/agents-section";
export default function AgentsPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
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

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Real Estate Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of real estate professionals who are committed to helping you with all your property
            needs in Mackay and surrounding areas.
          </p>
        </div>

        <AgentsSection />
      </div>
    </div>
  );
}
