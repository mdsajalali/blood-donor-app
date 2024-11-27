"use client";

import {
  ArrowLeftCircle,
  Mail,
  Phone,
  Droplet,
  ToggleRight,
  ToggleLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const handleToggle = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
  };
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-red-800 to-red-900 p-4">
      {/* Top Bar with Back Icon and Heading */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">My Profile</h1>
      </div>

      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center gap-4 mt-20">
        <Image
          src="/profile.webp"
          alt="profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-white"
        />
        <h1 className="text-2xl font-bold text-white">Sajal</h1>
      </div>

      {/* User Information */}
      <div className="mt-8 space-y-4 mx-auto w-[150px]  text-white">
        <div className="flex items-center gap-4">
          <Mail className="text-white" size={24} />
          <span className="text-sm">sajal@example.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="text-white" size={24} />
          <span className="text-sm">+1 234 567 890</span>
        </div>
        <div className="flex items-center gap-4">
          <Droplet className="text-white" size={24} />
          <span className="text-sm">B+</span>
        </div>
      </div>

      <button className="w-full uppercase py-2 my-5 bg-pink-500 text-white rounded-full shadow-md font-semibold">
        Update profile
      </button>

      <div className="flex items-center flex-col justify-center cursor-pointer">
        <span className="text-sm text-white">Are you ready to donate?</span>
        <div onClick={handleToggle}>
          {isNotificationsEnabled ? (
            <ToggleRight className="text-green-400" size={28} />
          ) : (
            <ToggleLeft className="text-gray-400" size={28} />
          )}
        </div>
      </div>
    </div>
  );
}
