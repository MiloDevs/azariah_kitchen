import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefin = Josefin_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Azariah Kitchen: Food Blogging and Recipes",
  description:
    "Welcome to Kitchen Azariah, home of culinary delights, explore all varieties or recipes.",
  category: "Food",
  openGraph: {
    type: "website",
    url: "www.kitchenazariah.com",
    title: "Azariah Kitchen: Food Blogging and Recipes",
    description:
      "Welcome to Kitchen Azariah, home of culinary delights, explore all varieties or recipes.",
    siteName: "Azariah Kitchen",
    images: [
      {
        url: "https://www.kitchenazariah.com/_next/image?url=%2Fazariahlogo.jpg&w=128&q=75",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  )
}
