"use client"

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import SimpleNavigation from "../components/simple-navigation"
import LocationLinks from "../components/location-links"
import Breadcrumbs from "../components/breadcrumbs"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* G Logo for home navigation - moved to right */}
        <Link
          href="/"
          className="fixed top-4 right-4 z-50 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md hover:bg-primary-700 transition-colors duration-200"
          aria-label="Return to homepage"
        >
          G
        </Link>

        <div className="bg-[#00535c] text-white py-2.5 px-6 text-center text-sm shadow-md relative overflow-hidden animate-pulse-slow">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)] opacity-70"></div>
            <div className="absolute -inset-1 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-float-slow opacity-60"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent_60%)] opacity-60"></div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0 py-1 sm:py-0">
            <span className="text-center font-medium text-sm sm:text-base">Mackay&apos;s Best Real Estate</span>
            <span className="hidden sm:inline-flex items-center mx-2 opacity-90">•</span>
            <span className="inline-flex items-center justify-center font-medium text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (07) 4957 7424
            </span>
          </div>
        </div>

        <SimpleNavigation />

        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto">
            <Breadcrumbs />
          </div>
        </div>

        <main className="min-h-screen bg-gray-50 relative overflow-hidden">
          {/* Top right decorative ball */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-100/60 -translate-y-1/4 translate-x-1/4 animate-float-slow -z-10 blur-[2px]"></div>

          {/* Bottom left decorative ball */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-100/60 translate-y-1/4 -translate-x-1/4 animate-float-slow-reverse -z-10 blur-[2px]"></div>

          {children}
        </main>
        <LocationLinks />
        <footer className="bg-white py-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="col-span-2">
                <div className="mb-8">
                  <img src="/images/gardian-logo.webp" alt="Gardian Real Estate" className="h-20" />
                </div>
                <p className="text-gray-600 mb-6 max-w-xl">
                  Contact us today at info@gardianrealestate.com.au for a free consultation and discover how Gardian can
                  become your trusted partner in building your real estate success story in Mackay.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/insurance-privacy" className="text-gray-500 hover:text-primary-600 transition-colors">
                      Insurance Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/complaints" className="text-gray-500 hover:text-primary-600 transition-colors">
                      Complaints
                    </Link>
                  </li>
                  <li>
                    <Link href="/compliance" className="text-gray-500 hover:text-primary-600 transition-colors">
                      Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 text-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Gardian Real Estate. All rights reserved.
              </p>
            </div>
          </div>
          <div className="fixed bottom-6 right-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-teal-700 text-white p-3 rounded-md shadow-md hover:bg-teal-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Scroll to Top</span>
            </button>
          </div>
        </footer>
      </body>
    </html>
  )
}
