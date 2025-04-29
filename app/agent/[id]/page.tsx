import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const getAgentById = (id: string) => {
  const agents = [
    {
      id: 1,
      name: "Ben Kerrisk",
      title: "Principal/Licensee",
      phone: "0407 514 983",
      email: "ben@gardianrealestate.com.au",
      bio: "With over 15 years of experience in Mackay real estate, Ben has a deep understanding of the local market and a passion for helping clients find their dream homes. His commitment to exceptional service and integrity has earned him a reputation as one of the region's most trusted real estate professionals.",
      imageUrl: "http://cdn.renet.net.au/10021353/images/1678154026_1655072239image.jpg",
      specialties: ["Residential", "Luxury Homes", "Investment Properties"],
      socialMedia: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
      achievements: ["Top Selling Agent 2022", "Excellence in Customer Service Award", "Over 500 properties sold"],
      testimonials: [
        {
          text: "Ben's knowledge of the local market helped us sell our home for more than we expected. Highly recommended!",
          author: "Michael & Sarah Thompson",
        },
        {
          text: "Professional, responsive, and genuinely cares about his clients. Ben made the whole process stress-free.",
          author: "Jessica Wilson",
        },
      ],
      listings: [20092845, 20602577, 20092846],
    },
    // Other agents would be here
  ]

  return agents.find((agent) => agent.id === Number(id))
}

export default function AgentDetailPage({ params }: { params: { id: string } }) {
  const agent = getAgentById(params.id)

  if (!agent) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/agents"
        className="inline-flex items-center mb-8 text-teal-600 hover:text-teal-800 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to All Agents
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="relative h-96 w-full md:h-full">
              <Image
                src={agent.imageUrl || "/placeholder.svg"}
                alt={agent.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="md:w-2/3 p-8">
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">{agent.title}</div>
            <h1 className="text-3xl font-bold mt-1 mb-4">{agent.name}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {agent.specialties.map((specialty, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{agent.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${agent.phone.replace(/\s/g, "")}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {agent.phone}
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${agent.email}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {agent.email}
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {Object.entries(agent.socialMedia).map(([platform, url], index) => (
                <a
                  key={index}
                  href={url}
                  className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                >
                  {platform === "facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )}
                  {platform === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  )}
                  {platform === "instagram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {platform === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="p-8 border-t border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agent.achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-8 border-t border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-200 absolute top-4 left-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                  <p className="font-medium text-gray-800">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-8 border-t border-gray-100 bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Ready to work with {agent.name}?</h2>
            <p className="text-gray-600 mb-6">Contact today to discuss your real estate needs.</p>
            <div className="flex justify-center space-x-4">
              <a
                href={`tel:${agent.phone.replace(/\s/g, "")}`}
                className="bg-white text-primary-700 border border-primary-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-400 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="bg-gradient-to-r from-primary-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
