import Heading from "@/components/Heading";
import Image from "next/image";

const DonorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-900 flex flex-col items-center justify-center px-4 py-6">
      {/* Top Bar with Back Icon and Heading */}
      <Heading title="Blood Donor" />

      {/* Header */}
      <header className="text-center mb-8 mt-20">
        <h1 className="text-3xl font-semibold text-white ">
          Become a Blood Donor
        </h1>
        <p className="text-lg text-white mt-2">
          Help save lives by donating blood. Every donation counts!
        </p>
      </header>

      {/* Donor Info Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 space-y-4">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto   object-cover">
            <Image
              src="/profile.webp"
              alt="Donor"
              fill
              className=" rounded-full "
            />
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Sajal</h2>
          <p className="text-sm text-gray-600">Donor Type: O+</p>
        </div>

        {/* Donor Details Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Become a Donor
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

export default DonorPage;
