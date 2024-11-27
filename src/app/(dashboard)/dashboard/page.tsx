import {
  MapPin,
  Search,
  PlusSquare,
  Hospital,
  Banknote,
  User,
  HelpCircle,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const items = [
    { name: "Donor", Icon: PlusSquare, link: "donor" },
    { name: "Map", Icon: MapPin, link: "map" },
    { name: "Seeker", Icon: Search, link: "seeker" },
    { name: "Request", Icon: PlusSquare, link: "request" },
    { name: "Hospital", Icon: Hospital, link: "hospital" },
    { name: "Banks", Icon: Banknote, link: "banks" },
    { name: "Profile", Icon: User, link: "profile" },
    { name: "FAQ", Icon: HelpCircle, link: "faq" },
    { name: "Social", Icon: Users, link: "social" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-900 text-white">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Blood Donor App</h1>
        <button className="text-lg font-bold">⋮</button>
      </header>

      {/* Title */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">【BLOOD DONOR】</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-4 px-4 mt-8">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="bg-white/90 rounded-lg flex flex-col items-center py-4"
          >
            <item.Icon className="w-10 h-10 text-red-600 mb-2" />
            <span className="text-sm font-medium text-black">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 mt-10 text-sm">
        <div>
          <div className="font-bold text-center">29</div> Donors
        </div>
        <div>
          <div className="font-bold text-center">14</div> Requests
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center   mt-4 text-xs opacity-75">
        Unpublished work (c) 2024 Tech Sand
      </div>
    </div>
  );
}
