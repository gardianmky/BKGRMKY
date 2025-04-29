"use client";
import Image from 'next/image';

interface Agent {
  name: string;
  title: string;
  mobile: string;
  imageURL: string;
}

interface AgentContactProps {
  agents: Agent[];
}

export default function AgentContact({ agents }: AgentContactProps) {
  if (!agents || agents.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-100 pt-10 px-8 pb-8">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Contact Agent</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors duration-300 hover:shadow-md"
          >
            {agent.imageURL && (
              <div className="relative h-20 w-20 mr-6 overflow-hidden rounded-full border-2 border-teal-100 shadow-sm transform transition-transform duration-300 hover:scale-110">
                <Image
                  src={agent.imageURL || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{agent.name}</h3>
              <p className="text-gray-600 mb-3">{agent.title}</p>
              <a
                href={`tel:${agent.mobile}`}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200 font-medium"
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
                {agent.mobile}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}