import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prompt Chain Visualizer – Visualize AI Prompt Dependencies",
  description: "Interactive flowcharts for your AI prompt chains. Upload JSON/YAML or connect via API to visualize dependencies, execution order, and data flow."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="45a350e0-d716-4b38-9449-23b8ea6a56f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
