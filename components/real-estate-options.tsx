import Link from "next/link"
import { Home, Building, DollarSign } from "lucide-react"

export default function RealEstateOptions() {
  const options = [
    {
      title: "Buy a home",
      description:
        "A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.",
      buttonText: "Find a local agent",
      buttonLink: "/agents",
      icon: <Home className="h-12 w-12" />,
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-700",
      borderColor: "border-teal-800",
      textColor: "text-white",
    },
    {
      title: "Rent a home",
      description:
        "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      buttonText: "Find rentals",
      buttonLink: "/rent",
      icon: <Building className="h-12 w-12" />,
      bgColor: "bg-gradient-to-br from-accent-600 to-accent-700",
      borderColor: "border-accent-800",
      textColor: "text-white",
    },
    {
      title: "Sell a home",
      description: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      buttonText: "See your options",
      buttonLink: "/sell",
      icon: <DollarSign className="h-12 w-12" />,
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-700",
      borderColor: "border-teal-800",
      textColor: "text-white",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mackay QLD <span className="text-accent-600">Real Estate</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to buy, rent, or sell property in Mackay and surrounding suburbs, we have the
            expertise to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`rounded-xl border ${option.borderColor} ${option.bgColor} p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group hover:[animation:rattle_0.3s_ease_infinite] hover:[transform-origin:center]`}
            >
              <div className={`${option.textColor} mb-6`}>{option.icon}</div>
              <h3 className={`text-2xl font-bold mb-4 ${option.textColor}`}>{option.title}</h3>
              <p className={`${option.textColor} opacity-90 mb-6 min-h-[80px]`}>{option.description}</p>
              <Link
                href={option.buttonLink}
                className={`inline-flex items-center bg-white text-${index === 1 ? "accent" : "teal"}-700 px-5 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-100`}
              >
                <span>{option.buttonText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-accent-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about buying, selling, and renting property in Mackay.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What's the current property market like in Mackay?
              </h3>
              <p className="text-gray-600">
                Mackay's property market has shown steady growth in recent years, with increasing demand for both
                residential and investment properties. The region's strong economy, driven by mining, agriculture, and
                tourism, continues to support property values and rental yields.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How long does it typically take to sell a property in Mackay?
              </h3>
              <p className="text-gray-600">
                The average time on market for properties in Mackay varies by suburb and property type, but typically
                ranges from 30-60 days. Well-priced properties in desirable locations can sell much faster, sometimes
                within a week of listing.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What should I look for when investing in Mackay real estate?
              </h3>
              <p className="text-gray-600">
                When investing in Mackay, consider proximity to employment hubs, infrastructure developments, and
                amenities. Areas near the mines, hospital, university, and CBD often show strong rental demand. Look for
                properties with potential for capital growth and strong rental yields.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What are the costs involved in buying property in Queensland?
              </h3>
              <p className="text-gray-600">
                Costs typically include stamp duty, legal fees, building and pest inspections, loan application fees,
                and mortgage insurance (if applicable). First home buyers may be eligible for grants and stamp duty
                concessions, which can significantly reduce upfront costs.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How much should I budget for property management fees?
              </h3>
              <p className="text-gray-600">
                Property management fees in Mackay typically range from 7-9% of the weekly rent, plus additional fees
                for services like letting fees (usually 1-2 weeks rent), annual statement fees, and inspection fees. Our
                transparent fee structure ensures you know exactly what you're paying for.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <span>Have more questions? Contact us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
