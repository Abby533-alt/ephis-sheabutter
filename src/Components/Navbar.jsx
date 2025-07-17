import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react'; 
import { Link } from 'react-router';

import logo from "../assets/images/logo.jpg"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="text-yellow-400 text-xl md:text-2xl font-bold">
        Ephis Shea Butter
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm md:text-base">
        <Link to="">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
        </Link>
        <Link to="/ProductsPage">
          <a href="ProductsPage" className="hover:text-yellow-300 transition">
            Products
          </a>
        </Link>
        <Link to="/SecondAbout">
          <a href="About Us" className="hover:text-yellow-300 transition">
            About
          </a>
        </Link>
        <li>
          <a href="Footer" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}


