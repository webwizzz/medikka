"use client";
import React, { useState } from 'react'
import { Search, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const mythsAndFacts = [
  {
    myth: "Cold weather causes colds.",
    fact: "Colds are caused by viruses, not by cold temperatures.",
    image: "/1.jpg"  // Replace with actual image path
  },
  {
    myth: "Antibiotics can cure colds and flu.",
    fact: "Colds and flu are viral infections, so antibiotics, which target bacteria, are ineffective.",
    image: "/2.jpg.webp"  // Replace with actual image path
  },
  {
    myth: "Vaccines can cause the disease they're meant to prevent.",
    fact: "Vaccines contain inactive or weakened virus strains, making it extremely rare for them to cause illness.",
    image: "/3.jpeg"  // Replace with actual image path
  },
  // Add more myths as needed
]

const MythFactCard = ({ myth, fact, image }) => (
  <div className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <Image src={image} alt={myth} width={400} height={200} className="rounded-lg mb-4"/>
    <h3 className="text-lg font-semibold text-white mb-2">Myth: {myth}</h3>
    <p className="text-gray-300">Fact: {fact}</p>
  </div>
)

export default function HealthMythsAndFacts() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMythsAndFacts = mythsAndFacts.filter(item =>
    item.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.fact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white flex items-center">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Back
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Medical Myths vs. Facts
        </h1>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for myths or facts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMythsAndFacts.map((item, index) => (
            <MythFactCard key={index} myth={item.myth} fact={item.fact} image={item.image} />
          ))}
        </div>

        {filteredMythsAndFacts.length === 0 && (
          <p className="text-center text-gray-400 mt-6">No myths or facts found matching your search.</p>
        )}
      </main>

      <footer className="bg-gray-800 mt-12">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-400 text-sm">
            Stay informed and consult healthcare professionals for personalized advice.
          </p>
        </div>
      </footer>
    </div>
  )
}
