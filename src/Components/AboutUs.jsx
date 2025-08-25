import { useNavigate } from "react-router";
import { Link } from "react-router";
import woman1 from "../assets/images/woman1.jpeg"
import heroimg from "../assets/images/heroimg.jpg"
import product9 from "../assets/images/product9.jpeg";
import products3 from "../assets/images/products3.jpeg";
import benefit from "../assets/images/benefit.jpeg";
import impact from "../assets/images/impact.jpeg"
import impact1 from "../assets/images/impact1.jpeg"
import impact2 from "../assets/images/impact2.jpeg"
import impact3 from "../assets/images/impact3.jpeg"
import impact4 from "../assets/images/impact4.jpeg"
import product2 from "../assets/images/product2.jpeg"
import img from "../assets/images/img.jpeg"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUs() {
  const gallery = [impact, impact1, impact2, impact3, impact4, img];
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 md:px-20 text-gray-800 mt-10">
        <div className="px-4 md:px-15">
          <button
            onClick={() => navigate(-1)}
            className="text-sm md:text-md text-white flex items-center justify-center gap-2 h-8 w-20 rounded-full bg-amber-800 hover:text-amber-300 cursor-pointer"
          >
            ← Back
          </button>
        </div>
        <div className="max-w-7xl mx-auto text-center mb-14 mt-5">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#1A151D]">OUR STORY</h1>
          <p className="text-lg leading-relaxed mt-4 mb-6 text-gray-600">
            Founded on the belief that beauty products should be pure, ethical, and transformative. <br />
            We've spent over 6 years building relationships with <br /> Ghanaian women's cooperatives to bring you the finest shea butter while creating positive impact.
          </p>

          <div className=" flex gap-5 mb-10 justify-center">
            <Link to="/productspage" className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-2 rounded-md font-medium transition cursor-pointer">Explore Products</Link>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-2 rounded-md font-medium transition">Learn More</button>
          </div>
          <img
            src={heroimg}
            alt="Our Story"
            className="rounded-2xl shadow-lg mx-auto object-cover max-h-[500px] w-full"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 mb-16 justify-around items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e03232]">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ephis Shea Butter Production Company Ltd. is a legally registered and incorporated company in Ghana, operating under Sections 27 and 28 of the Companies Act 1963. We began business operations on the 12th of July, 2019, and are proudly located in Walewale, in the North East Region of Ghana.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={product2}
              alt="About Us"
              className="rounded-lg shadow-md object-cover w-[350px] h-[420px]"
            />
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Business Ecosystem
            </h2>
            <p className="mt-2 text-gray-600 text-xl">
              Understanding what we stand for and why
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={product9}
                alt="Business Vision"
                className="rounded-lg shadow-md object-cover w-[310px] h-[320px]"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                Our vision is to be a leading global brand in pure, sustainably-produced shea butter, empowering local communities and delivering unmatched quality to industries worldwide.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                The mission of EPHIS Shea Butter Production is to locally produce
                high quality Shea butter from natural sources for the local industries
                and the international market.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={products3}
                alt="Business Mission"
                className="rounded-lg shadow-md object-cover w-[310px] h-[320px]"
              />
            </div>
          </div>
        </section>


        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto md:mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#1A151D]">Our Impact in Pictures</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-semibold text-[#1A151D] mb-4">A Glimpse Into Our Journey</h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            These moments captured in time reflect our commitment to empowering local communities, preserving cultural heritage, and delivering pure, handcrafted shea butter to the world.
            <br className="hidden sm:block" />
            Every image tells a story of purpose, passion, and people coming together to create something truly meaningful.
          </p>
        </div>
      </section>

      <section className=" px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 leading-snug">
              Empowering Communities <br /> Through Nature's Gift
            </h2>
            <p className="mt-6 text-gray-700 md:text-lg leading-relaxed">
              We specialize in the production of 100% natural shea butter for both local and international markets. Our mission is deeply rooted in community collaboration—we work closely with dedicated women across the five Northern Regions of Ghana who collect shea nuts and supply them to us.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-yellow-700 text-lg">👥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Community First</h4>
                  <p className="text-gray-600 text-[17px]">
                    We work directly with women's cooperatives, ensuring fair wages and sustainable practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-yellow-700 text-lg">🌍</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Global Impact</h4>
                  <p className="text-gray-600 text-[]17px">
                    From local communities to international markets, spreading the benefits of pure shea butter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative">
            <img
              src={woman1}
              alt="Traditional processing"
              className="rounded-xl w-full shadow-md object-cover h-[290px]"
            />
            <div className="absolute -bottom-6 left-6 bg-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="bg-yellow-100 p-2 rounded-full text-yellow-700 text-xl">🏅</span>
              <div>
                <h5 className="font-bold text-sm text-gray-800">Certified Organic</h5>
                <p className="text-xs text-gray-500">100% Natural & Pure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative bg-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-yellow-300 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold mb-4">
            Nourish Your Skin, Naturally 🌿
          </h2>

          <p className="text-lg mb-8 text-green-100">
            Experience the pure goodness of organic shea butter — crafted with care,
            for radiant skin, healthy hair, and natural wellness.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/productspage"
              className="px-6 py-3 rounded-xl bg-white text-green-700 font-semibold shadow-md hover:bg-green-100 transition"
            >
              Shop Now
            </a>
            <a
              href="/contactus" // 
              className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-green-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
