import Link from "next/link"
import { Home, Building, DollarSign, Users, Phone, CheckCircle, Key } from "lucide-react"

export default function QuickLinks() {
  const links = [
    {
      href: "/buy",
      icon: <Home className="h-5 w-5 text-primary-500" />,
      title: "Properties For Sale",
      description: "Browse our listings of properties for sale",
    },
    {
      href: "/rent",
      icon: <Key className="h-5 w-5 text-primary-500" />,
      title: "Properties For Rent",
      description: "Find your perfect rental property",
    },
    {
      href: "/commercial",
      icon: <Building className="h-5 w-5 text-primary-500" />,
      title: "Commercial Properties",
      description: "Explore commercial real estate opportunities",
    },
    {
      href: "/sold",
      icon: <CheckCircle className="h-5 w-5 text-primary-500" />,
      title: "Recently Sold",
      description: "View recently sold properties",
    },
    {
      href: "/property-management",
      icon: <Building className="h-5 w-5 text-primary-500" />,
      title: "Property Management",
      description: "Learn about our property management services",
    },
    {
      href: "/sell-your-property",
      icon: <DollarSign className="h-5 w-5 text-primary-500" />,
      title: "Sell Your Property",
      description: "Get your property listed with us",
    },
    {
      href: "/agents",
      icon: <Users className="h-5 w-5 text-primary-500" />,
      title: "Our Agents",
      description: "Meet our team of experienced agents",
    },
    {
      href: "/contact",
      icon: <Phone className="h-5 w-5 text-primary-500" />,
      title: "Contact Us",
      description: "Get in touch with our team",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="group">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
            <div className="mr-4">{link.icon}</div>
            <div>
              <h3 className="font-medium group-hover:text-primary-600 transition-colors">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
