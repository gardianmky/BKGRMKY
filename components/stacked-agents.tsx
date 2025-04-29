"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface Agent {
  id: number
  name: string
  title: string
  imageUrl: string
}

export default function StackedAgents() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock agent data (replace with actual data fetching later)
    const mockAgents: Agent[] = [
      {
        id: 1,
        name: "Ben Kerrisk",
        title: "Principal/Licensee",
        imageUrl: "http://cdn.renet.net.au/10021353/images/1678154026_1655072239image.jpg",
      },
      {
        id: 2,
        name: "Mick McLeod",
        title: "Sales Agent",
        imageUrl: "/placeholder.svg?height=400&width=400&text=MM&fontColor=%23ffffff&bgColor=%23ff6b6b",
      },
      {
        id: 3,
        name: "Ryan Patton",
        title: "Sales Agent",
        imageUrl: "/placeholder.svg?height=400&width=400&text=RP&fontColor=%23ffffff&bgColor=%234dabf7",
      },
    ]

    setAgents(mockAgents)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center">Loading agents...</div>
  }

  return (
    <div className="relative">
      {/* Stacked Avatars */}
      <div className="flex justify-center mb-4">
        <div className="flex -space-x-8 md:-space-x-12 lg:-space-x-16">
          {agents.map((agent, index) => (
            <Link key={agent.id} href={`/agent/${agent.id}`}>
              <div
                className="relative inline-block h-28 w-28 md:h-40 md:w-40 lg:h-108 lg:w-108 rounded-full border-4 border-white bg-gray-100 text-gray-600 overflow-hidden hover:scale-110 transition-transform duration-300 shadow-md"
                style={{ zIndex: agents.length - index }}
              >
                <Image
                  src={agent.imageUrl || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 432px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8 lg:mt-16">
        <Link
          href="/agents"
          className="inline-flex items-center bg-white text-primary-700 border border-primary-200 px-6 py-3 rounded-md hover:bg-primary-50 transition-colors duration-200 font-medium text-lg"
        >
          Meet Our Team
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
  )
}
