import Heading from "@/components/Heading";
import { Phone } from "lucide-react";

const BloodDonorCall = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-red-800 to-red-900">
      {/* Top Bar with Back Icon and Heading */}
      <Heading title="Blood Donor" />

      {/* Blood Donor Info */}
      <div className="absolute top-1/4 left-4 right-4 p-4  ">
        <div className="text-center">
          <p className="text-xl font-bold text-white">John Doe</p>
          <p className="text-sm text-white my-10">Blood Group: O+</p>
          <p className="text-lg font-semibold text-white mt-2">+1234567890</p>
        </div>
      </div>

      {/* Call Icon with Animation */}
      <div className="absolute bottom-16 left-4 right-4 flex justify-center items-center">
        <div className="relative">
          <Phone
            className="text-white bg-red-500 p-3 rounded-full shadow-lg animate-ping"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default BloodDonorCall;
