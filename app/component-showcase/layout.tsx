import type React from "react"
import "../globals.css"
import "./styles.css"

export const metadata = {
  title: "UI Component Showcase | DatoCMS Components",
  description: "A showcase of reusable UI components designed for DatoCMS integration",
}

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
