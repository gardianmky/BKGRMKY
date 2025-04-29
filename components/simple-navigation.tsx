"use client"

import Link from "next/link"
import { Home, Key, Building } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function SimpleNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // More robust path matching to handle nested routes
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navItems = [
    {
      label: "For Sale",
      href: "/buy",
      icon: <Home className="h-5 w-5 mr-2" />,
    },
    {
      label: "For Rent",
      href: "/rent",
      icon: <Key className="h-5 w-5 mr-2" />,
    },
    {
      label: "Commercial",
      href: "/commercial",
      icon: <Building className="h-5 w-5 mr-2" />,
    },
  ]

  return (
    <nav className="w-full bg-white py-3 md:py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <Link href="/" className="h-12 w-auto flex items-center">
              <Image
                src="/images/gardian-logo.webp"
                alt="Gardian Real Estate"
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-200 text-sm md:text-base
                    ${isActive(item.href) ? "bg-teal-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
                  `}
                  prefetch={true}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/property-management"
            className={`
              flex items-center justify-center sm:justify-start px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-200 text-sm md:text-base mt-2 md:mt-0
              ${isActive("/property-management") ? "bg-teal-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}
            `}
            prefetch={true}
          >
            <Building className="h-5 w-5 mr-2" />
            Property Management
          </Link>
        </div>
      </div>
    </nav>
  )
}
