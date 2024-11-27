import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

const Seeker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-900 flex flex-col items-center justify-center px-4 py-6">
      {/* Top Bar with Back Icon and Heading */}
      <div className="absolute top-4 left-4 right-4 flex  items-center justify-between">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Blood Seeker</h1>
      </div>
      {/* Header */}
      <header className="text-center mb-8 mt-16">
        <h1 className="text-3xl font-semibold text-white">
          Blood Donation Request
        </h1>
        <p className="text-lg text-white mt-2">
          If you're in need of blood, submit your request here to get help.
        </p>
      </header>

      {/* Seeker Info Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Blood Request Form
          </h2>
        </div>

        {/* Request Details Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="bloodType"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Type Needed
            </label>
            <select
              id="bloodType"
              name="bloodType"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location (City/Region)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Quantity Needed (in units)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter quantity of blood needed"
            />
          </div>

          <div>
            <label
              htmlFor="contactInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Information (Phone/Email)
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your contact details"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white">
        <p>&copy; 2024 Blood Donation App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Seeker;
