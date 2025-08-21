import { Facebook, Linkedin, Instagram, PhoneIcon } from 'lucide-react';
import ephis from "../assets/images/ephis.png"
import { Link } from 'lucide-react';


export default function Footer() {
  return (
    <footer id="footer" className="bg-[#473208] text-white px-6 md:px-16 py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Overview */}
        <div>
          <div className='flex'>
            <img src={ephis} alt="logo" className='h-7 w-7' />
            <h2 className="text-2xl font-bold text-shadow-yellow-700 mb-4">Ephis Shea Butter</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Pure, handcrafted Shea Butter made with love in Ghana.
            We celebrate nature, nurture your skin, and empower local communities.
          </p>
          <div className="flex gap-4 mt-4">
            <p className="rounded-lg bg-blue-500 h-10 w-10 flex items-center justify-center cursor-pointer"><Facebook className="h-7 w-7 text-white " /></p>
            <p className="rounded-lg bg-blue-500 h-10 w-10 flex items-center justify-center cursor-pointer"><Linkedin className="h-7 w-7 text-white " /></p>
            <p className="rounded-lg bg-pink-400 h-10 w-10 flex items-center justify-center cursor-pointer"><Instagram className="h-7 w-7 text-white " /></p>
            <a
              href="tel:+233592420665"
              aria-label="Call 059 242 0665"
              className="rounded-lg bg-green-400 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-green-500 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <PhoneIcon className="h-7 w-7 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Tribe</h3>
          <p className="text-sm mb-3">Get wellness tips, product updates & 10% off your first order.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-[#D7C7B8] rounded-lg bg-transparent placeholder:text-[#998675] text-sm focus:outline-none"
            />
            <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-[#8b6847] transition duration-300 text-sm cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E9DCCF] mt-10 pt-6 text-sm text-center">
        <p>© 2025 Shea Essence. All rights reserved. | Made with 🌿 in Ghana</p>
      </div>
    </footer>
  );
};


