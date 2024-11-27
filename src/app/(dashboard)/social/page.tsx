import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Social = () => {
  // Sample posts
  const posts = [
    {
      id: 1,
      userName: "Sarah Khan",
      userProfilePic: "/profile.webp",
      postText:
        "Just donated blood today. Feeling great to help save lives! #BloodDonation",
      postTime: "2 hours ago",
      likes: 25,
      comments: 5,
    },
    {
      id: 2,
      userName: "Abdul Rahman",
      userProfilePic: "/profile.webp",
      postText:
        "Looking for blood donors for a patient in need. Please help! #UrgentBloodRequest",
      postTime: "1 day ago",
      likes: 45,
      comments: 12,
    },
    {
      id: 3,
      userName: "Amina Noor",
      userProfilePic: "/profile.webp",
      postText:
        "Blood donation saves lives. Let’s make a difference together. #DonateBlood",
      postTime: "3 days ago",
      likes: 32,
      comments: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-900 px-4 py-6">
      {/* Top Bar with Back Icon and Heading */}
      <div className="absolute top-4 left-4 right-4 flex  items-center justify-between">
        <Link href="/dashboard">
          <ArrowLeftCircle className="text-white" size={30} />
        </Link>
        <h1 className="text-lg font-semibold text-white">Socials</h1>
      </div>

      {/* Create Post Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 mt-16 mb-6">
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          rows={3}
          placeholder="Share your blood donation story or request help..."
        />
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Post
        </button>
      </div>

      {/* Post Feed */}
      <div className="space-y-6 pb-10">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.userProfilePic}
                alt={post.userName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{post.userName}</p>
                <p className="text-sm text-gray-600">{post.postTime}</p>
              </div>
            </div>
            <p className="mt-3 text-gray-700">{post.postText}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4 text-gray-600">
                <button className="flex items-center space-x-1">
                  <span className="text-xl">❤️</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <span className="text-xl">💬</span>
                  <span>{post.comments}</span>
                </button>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3">
        <div className="flex justify-around">
          <button className="text-gray-600">Home</button>
          <button className="text-gray-600">Donate</button>
          <button className="text-gray-600">Social</button>
          <button className="text-gray-600">Profile</button>
        </div>
      </footer>
    </div>
  );
};

export default Social;
