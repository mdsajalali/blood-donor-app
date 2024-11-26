import { Search } from "lucide-react";
import Link from "next/link";

const Map = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093707!2d144.95373531549465!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57704e00a8d0b99!2sMelbourne!5e0!3m2!1sen!2sau!4v1631669786002!5m2!1sen!2sau"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="absolute top-4 left-4 right-4">
        <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
          <Search className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search "
            className="w-full outline-none h-6 bg-transparent text-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <Link href="/blood-donor-call">
          <button className="w-full uppercase bg-red-500 text-white py-3 rounded-lg shadow-lg hover:bg-red-600">
            Nearby Seekers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Map;
