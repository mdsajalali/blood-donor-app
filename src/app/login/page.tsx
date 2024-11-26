import { Key, Mail } from "lucide-react";
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <div className="w-80 bg-red-600 rounded-lg p-6 relative shadow-lg">
        {/* Drop Icon */}
        <div className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
          <div className="w-10 h-10 bg-red-700 rounded-b-full"></div>
        </div>

        {/* <Image src="/blood.png" alt="blood" width={200} height={200} /> */}

        {/* Form Section */}
        <form className="mt-16 space-y-6">
          {/* Email Input */}
          <div className="flex items-center bg-white text-red-700 rounded-md shadow-md">
            <span className="px-3 text-lg">
              <Mail size={20} />
            </span>
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 py-2 px-3 bg-transparent border-none outline-none text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center bg-white text-red-700 rounded-md shadow-md">
            <span className="px-3 text-lg">
              <Key size={20} />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 py-2 px-3 bg-transparent border-none outline-none text-sm"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-center space-x-2 text-white text-sm">
            <input type="checkbox" className="rounded-sm" />
            <label>Remember Me.</label>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button className="w-full py-2 bg-white text-red-700 rounded-full shadow-md font-semibold">
              LOGIN
            </button>
            <button className="w-full py-2 bg-pink-500 text-white rounded-full shadow-md font-semibold">
              SIGN-UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
