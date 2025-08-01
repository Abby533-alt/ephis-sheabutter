import { Link } from 'react-router';
import ephis from "../assets/images/ephis.png"


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white shadow-lg border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className='flex items-center space-x-1'>
        <img src={ephis} alt="logo" className='h-5 w-5 md:h-8 md:w-10'/>
      <div className="text-yellow-400 text-xl md:text-2xl font-bold">
        Ephis Shea Butter
      </div>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm md:text-base">
        <Link to="/">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
        </Link>
        <Link to="/AboutUs">
          <a href="ProductsPage" className="hover:text-yellow-300 transition">
            About
          </a>
        </Link>
        <Link to="/ProductsPage">
          <a href="About Us" className="hover:text-yellow-300 transition">
            Products
          </a>
        </Link>
        <li>
          <a href="contactus" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}


