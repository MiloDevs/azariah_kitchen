import React from 'react'
import Navbar from '../components/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://kitchenazariah.com"),
  title: "Recipes",
  description:
    "",
  category: "Food",
  twitter: {
    title: "Kitchen Azariah",
    description:
      "Welcome to Kitchen Azariah, home of culinary delights, explore all varieties or recipes.",
  },
  openGraph: {
    images: "/azariahlogo.jpg",
    title: "Kitchen Azariah",
  },
}; 

const Recipes = () => {
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Recipes