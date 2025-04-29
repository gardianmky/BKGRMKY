"use client"

import type React from "react"
import { useState } from "react"

export interface NewsletterCTAProps {
  title: string
  description?: string
  buttonLabel?: string
  placeholderText?: string
  successMessage?: string
  backgroundColor?: string
  textColor?: string
  alignment?: "left" | "center" | "right"
}

export function NewsletterCTA({
  title,
  description,
  buttonLabel = "Subscribe",
  placeholderText = "Enter your email",
  backgroundColor = "white",
  alignment = "left",
}: NewsletterCTAProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    try {
      setStatus("loading")

      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message)
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred. Please try again later.")
    }
  }

  return (
    <div
      className={`py-12 ${backgroundColor !== "white" ? `bg-${backgroundColor}` : ""}`}
      style={backgroundColor !== "white" && !backgroundColor.startsWith("#") ? {} : { backgroundColor }}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-xl mx-auto ${alignment === "center" ? "text-center" : ""}`}>
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-gray-600 mb-6">{description}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <input
                type="email"
                placeholder={placeholderText}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Subscribing..." : buttonLabel}
            </button>
          </form>

          {status === "success" && <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">{message}</div>}

          {status === "error" && <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">{message}</div>}
        </div>
      </div>
    </div>
  )
}
