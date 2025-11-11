import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const montserrat = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nishat's Portfolio",
  description: "stuff i done woo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
