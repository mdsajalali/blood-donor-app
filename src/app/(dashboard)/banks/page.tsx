"use client";

import { useState } from "react";
import { ArrowLeftCircle, Phone, MapPin, User } from "lucide-react"; // Icons from lucide-react
import Link from "next/link";

// Type for a single blood bank
type BloodBank = {
  id: number;
  name: string;
  location: string;
  phone: string;
};

// Blood banks data
const bloodBanks: BloodBank[] = [
  {
    id: 1,
    name: "Quantum Blood Bank",
    location: "Kakrail",
    phone: "01714010869",
  },
  {
    id: 2,
    name: "Retina Blood Bank",
    location: "Shahbagh",
    phone: "01614606411",
  },
  {
    id: 3,
    name: "Red Crescent Blood Center",
    location: "Mohammadpur",
    phone: "9116563",
  },
  {
    id: 4,
    name: "Charpoka Blood Bank",
    location: "Mirpur",
    phone: "0182958252",
  },
  {
    id: 5,
    name: "Lions Club Blood Bank",
    location: "Agargaon",
    phone: "0810894",
  },
  {
    id: 1,
    name: "Quantum Blood Bank",
    location: "Kakrail",
    phone: "01714010869",
  },
  {
    id: 2,
    name: "Retina Blood Bank",
    location: "Shahbagh",
    phone: "01614606411",
  },
  {
    id: 3,
    name: "Red Crescent Blood Center",
    location: "Mohammadpur",
    phone: "9116563",
  },
  {
    id: 4,
    name: "Charpoka Blood Bank",
    location: "Mirpur",
    phone: "0182958252",
  },
];

export default function Banks() {
  const [selectedBank, setSelectedBank] = useState<BloodBank | null>(null); // State for selected bank

  const closeModal = () => setSelectedBank(null);

  return (
    <div className=" bg-gradient-to-b from-red-800 to-red-900 min-h-screen">
      {/* Top Bar with Back Icon and Heading */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white cursor-pointer" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Blood Banks</h1>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-4">
        <div className="space-y-4 pb-10">
          {bloodBanks.map((bank) => (
            <div
              key={bank.id}
              className="p-4  bg-red-800 rounded-md shadow-md border border-red-500 cursor-pointer hover:bg-red-600 transition"
              onClick={() => setSelectedBank(bank)}
            >
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <User className="text-white" size={16} />
                {bank.name}
              </h2>
              <p className="text-sm flex py-2 items-center gap-2">
                <MapPin className="text-white" size={16} />
                {bank.location}
              </p>
              <p className="text-sm flex items-center gap-2">
                <Phone className="text-white" size={16} />
                {bank.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBank && (
        <div
          className="fixed inset-0 px-6 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black rounded-md p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-center mb-4 flex items-center gap-2 justify-center">
              <User size={20} />
              {selectedBank.name}
            </h2>
            <div className="flex justify-between gap-4">
              <Link
                href="/map"
                className="flex-1 bg-red-600 text-center text-white py-2 rounded-md hover:bg-red-700 transition"
                onClick={() => alert("Map functionality")}
              >
                Map
              </Link>
              <Link
                href="/blood-donor-call"
                className="flex-1 bg-green-600 text-center text-white py-2 rounded-md hover:bg-green-700 transition"
                onClick={() =>
                  (window.location.href = `tel:${selectedBank.phone}`)
                }
              >
                Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
