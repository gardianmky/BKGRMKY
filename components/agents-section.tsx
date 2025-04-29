import Image from "next/image"
import Link from "next/link"

// Define the Agent type
interface Agent {
  id: number
  name: string
  title: string
  phone: string
  email: string
  bio: string
  imageUrl: string
  specialties: string[]
  socialMedia: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

// Sample agent data
const agents: Agent[] = [
  {
    id: 1,
    name: "Ben Kerrisk",
    title: "Principal/Licensee",
    phone: "0407 514 983",
    email: "ben@gardianrealestate.com.au",
    bio: "With over 15 years of experience in Mackay real estate, Ben has a deep understanding of the local market and a passion for helping clients find their dream homes.",
    imageUrl: "http://cdn.renet.net.au/10021353/images/1678154026_1655072239image.jpg",
    specialties: ["Residential", "Luxury Homes", "Investment Properties"],
    socialMedia: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Mick McLeod",
    title: "Sales Agent",
    phone: "0412 345 678",
    email: "mick@gardianrealestate.com.au",
    bio: "Mick specializes in residential properties and has a proven track record of achieving exceptional results for his clients through strategic marketing and negotiation.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    specialties: ["Residential", "First Home Buyers", "Property Marketing"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Ryan Patton",
    title: "Sales Agent",
    phone: "0423 456 789",
    email: "ryan@gardianrealestate.com.au",
    bio: "Ryan brings enthusiasm and a fresh perspective to real estate. His attention to detail and client-focused approach ensures a smooth and successful property transaction.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    specialties: ["Residential", "Rural Properties", "Commercial"],
    socialMedia: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Property Manager",
    phone: "0434 567 890",
    email: "sarah@gardianrealestate.com.au",
    bio: "Sarah has extensive experience in property management and ensures that both landlords and tenants receive exceptional service and support throughout the rental process.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    specialties: ["Property Management", "Rental Properties", "Tenant Relations"],
    socialMedia: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

export default function AgentsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-teal-deep">Expert Agents</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced real estate professionals is dedicated to providing exceptional service and helping
            you achieve your property goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={agent.imageUrl || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      {agent.socialMedia.facebook && (
                        <a
                          href={agent.socialMedia.facebook}
                          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                      )}
                      {agent.socialMedia.twitter && (
                        <a
                          href={agent.socialMedia.twitter}
                          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      )}
                      {agent.socialMedia.instagram && (
                        <a
                          href={agent.socialMedia.instagram}
                          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                      {agent.socialMedia.linkedin && (
                        <a
                          href={agent.socialMedia.linkedin}
                          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary-600 transition-colors duration-200">
                  {agent.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{agent.title}</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-2"
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
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-500 mr-2"
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
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm truncate"
                    >
                      {agent.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/agent/${agent.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center group"
                  >
                    <span>View Profile</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/agents"
            className="inline-flex items-center bg-white text-primary-700 border border-primary-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-400 font-medium"
          >
            <span>View All Agents</span>
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
    </section>
  )
}
