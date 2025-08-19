import { Link } from "react-router"; 
import ephis from "../assets/images/ephis.png";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white shadow-sm border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src={ephis} alt="logo" className="h-5 w-5 md:h-8 md:w-10" /> */}
        <div className="text-yellow-400 text-xl md:text-2xl font-bold">
          Ephis Shea Butter
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex font-bold space-x-6 text-sm md:text-base">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs" className="hover:text-yellow-300 transition">About</Link>
        </li>
        <li>
          <Link to="/ProductsPage" className="hover:text-yellow-300 transition">Products</Link>
        </li>
        <li>
          <Link to="/Blog" className="hover:text-yellow-300 transition">Blog</Link>
        </li>
        <li>
          <Link to="/ContactUs" className="hover:text-yellow-300 transition">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-white px-6 py-4 flex flex-col gap-4 text-base shadow-md md:hidden">
          <li>
            <Link onClick={toggleMenu} to="/" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/AboutUs" className="hover:text-yellow-300 transition">About</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/ProductsPage" className="hover:text-yellow-300 transition">Products</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/ContactUs" className="hover:text-yellow-300 transition">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
