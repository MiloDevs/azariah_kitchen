import React from 'react'
import Navbar from '../components/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://kitchenazariah.com"),
  title: "Recipes",
  description:
    "Explore our catalog of recipes, from brunches to full course gourmet meal you won't miss a recipe to spice up your kitchen",
  category: "Food",
  twitter: {
    title: "Kitchen Azariah",
    description:
      "Explore our catalog of recipes, from brunches to full course gourmet meal you won't miss a recipe to spice up your kitchen",
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