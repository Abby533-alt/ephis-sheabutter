import heroimg from "../assets/images/heroimg.jpg"
import { Link } from "react-router";

// HeroSection.jsx
export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${heroimg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-5xl">
        <div className="bg-yellow-700 w-fit px-4 py-1 rounded-full text-sm font-semibold mb-4 flex items-center gap-2">
          <span>🌿</span> 100% Pure & Natural
        </div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Pure African <span className="text-yellow-400">Shea Butter</span> for Radiant Skin
        </h2>

        <p className="text-lg mt-6 max-w-xl leading-relaxed">
          Discover the ancient beauty secrets of Africa with our premium, ethically-sourced shea butter. Nourish your skin naturally with our handcrafted collection.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to="/ProductsPage" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition cursor-pointer">
            Browse Products →
          </Link>
          <Link to="/SecondAbout" className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition">
            Learn Our Story
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 flex gap-8 flex-wrap text-white">
          <div>
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-sm">Pure & Natural</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">⭐️⭐️⭐️⭐️</h3>
            <p className="text-sm">Customer Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}



