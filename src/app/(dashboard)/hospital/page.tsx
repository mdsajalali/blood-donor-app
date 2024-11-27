import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const hospitalsData = [
  {
    name: "Dhaka Medical College Hospital",
    location: "Dhaka, Bangladesh",
    description:
      "A renowned medical college and hospital offering comprehensive healthcare services.",
    contact: "+880 123 456 789",
    website: "https://www.dhaka-medical.edu.bd/",
  },
  {
    name: "Bangabandhu Sheikh Mujib Medical University",
    location: "Dhaka, Bangladesh",
    description:
      "A major medical university in Bangladesh offering specialized treatment and research.",
    contact: "+880 987 654 321",
    website: "https://www.bsmmu.edu.bd/",
  },
  {
    name: "Chittagong Medical College Hospital",
    location: "Chittagong, Bangladesh",
    description:
      "One of the largest medical college hospitals providing quality health services.",
    contact: "+880 234 567 890",
    website: "http://www.cmch.edu.bd/",
  },
  {
    name: "Rajshahi Medical College Hospital",
    location: "Rajshahi, Bangladesh",
    description:
      "A top-tier medical institution with advanced medical facilities in the northern region of Bangladesh.",
    contact: "+880 345 678 901",
    website: "http://www.rmch.org.bd/",
  },
];

const HospitalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 bg-gradient-to-b from-red-800 to-red-900">
      {/* Top Bar with Back Icon and Heading */}
      <div className="absolute top-4 left-4 right-4 flex  items-center justify-between">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Hospitals</h1>
      </div>
      {/* Header */}
      <header className="text-center mb-8 mt-16">
        <h1 className="text-3xl font-semibold text-white">
          Hospitals in Bangladesh
        </h1>
        <p className="text-lg text-white mt-2">
          Explore the top hospitals in Bangladesh and find the best medical care
          near you.
        </p>
      </header>

      {/* Hospital List */}
      <div className="space-y-6">
        {hospitalsData.map((hospital, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 space-y-4"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {hospital.name}
              </h2>
              <p className="text-sm text-gray-500">{hospital.location}</p>
            </div>
            <p className="text-gray-700 text-base">{hospital.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">{hospital.contact}</p>
              <a
                href={hospital.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Visit Website
              </a>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="mt-4 inline-block py-2 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white">
        <p>&copy; 2024 Blood Donation App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HospitalsPage;
