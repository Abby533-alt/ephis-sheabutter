import React from 'react';
import { Leaf } from 'lucide-react'; // Optional: use an icon that fits your brand
import { Link } from 'react-router'; // Only if you're using React Router

export default function NotFound () {
  return (
    <div className="min-h-screen bg-[#FDF7F2] flex flex-col items-center justify-center text-[#4A3E36] px-6 py-12">
      <div className="text-center max-w-md">
        <Leaf className="w-10 h-10 mx-auto text-[#9D7D5B]" />
        <h1 className="text-7xl font-bold text-[#9D7D5B] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Oops! Page not found</h2>
        <p className="text-sm mb-6">
          It looks like you've wandered off the path — maybe you're looking for a jar of our golden shea butter?
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#9D7D5B] text-white rounded-lg hover:bg-[#8b6847] transition duration-300 text-sm"
        >
          Return to Home
        </Link>
      </div>

      <img
        src="/images/shea-leaf.png"
        alt="Shea leaf"
        className="mt-12 w-24 opacity-30"
      />
    </div>
  );
};


