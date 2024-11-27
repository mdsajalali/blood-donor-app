import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function Request() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      {/* Top Bar with Back Icon and Heading */}
      <div className="absolute top-4 left-4 right-4 flex  items-center justify-between">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Add Request</h1>
      </div>
      <div className="w-80 bg-red-600 rounded-lg p-6 relative">
        {/* Form Section */}
        <form className="mt-16 space-y-6">
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Area Dropdown */}
          <div className="mb-4">
            <select
              id="area"
              className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
              <option value="">Select Area</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Khulna">Khulna</option>
            </select>
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Reason Field (Optional) */}
          <div className="mb-4">
            <input
              type="date"
              id="date"
              className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <select
              id="area"
              className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            >
              <option value="">Reason (Optional)</option>
              <option value="Dhaka1">Dhaka</option>
              <option value="Rajshahi2">Rajshahi</option>
              <option value="Cumilla3">Cumilla</option>
              <option value="Chittagong3">Chittagong</option>
              <option value="Khulna3">Khulna</option>
            </select>
          </div>

          <Link href="/map">
            <button className="w-full mt-4 py-2 text-black bg-green-600 rounded-full shadow-md font-semibold">
              Add Location
            </button>
          </Link>

          {/* Blood Group and Number of Bags */}
          <div className="flex   gap-4 mb-6">
            {/* Blood Group Dropdown */}
            <div className="flex-1">
              <select
                id="blood-group"
                className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Number of Bags Dropdown */}
            <div className="flex-1">
              <select
                id="bags"
                className="w-full mt-1 py-2 px-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 uppercase">
            <Link href="/dashboard">
              <button className="w-full py-2 bg-pink-500 text-white rounded-full shadow-md font-semibold">
                Post
              </button>
            </Link>
            <button className="w-full py-2 bg-pink-500 text-white rounded-full shadow-md font-semibold">
              My Posts
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
