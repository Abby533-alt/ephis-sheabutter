import { Link } from "react-router";
import product6 from "../assets/images/product6.jpeg";
import woman from "../assets/images/woman.jpg";
import products2 from "../assets/images/products2.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import { Heart } from "lucide-react";
import { Leaf } from "lucide-react";
import { Globe } from "lucide-react";
import { Award } from "lucide-react";




export default function SecondAbout() {
    return (
        <div className="text-gray-900 font-sans">
            {/* Header */}
            <section className="text-center py-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-yellow-700"> Welcome To Ephis Shea Butter</h1>
                <h2 className="text-xl md:text-2xl font-medium mt-3 text-gray-600">
                    The Ancient Secret of African Beauty
                </h2>
            </section>

            {/* Introduction */}
            <section className="max-w-4xl mx-auto px-4 text-lg space-y-5 text-center mb-12">
                <p className="text-gray-700 leading-relaxed">
                    For centuries, African women have treasured shea butter as nature’s perfect moisturizer. We honor this tradition by bringing you the purest, most luxurious shea butter products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    The mission of EPHIS Shea Butter Production is to locally produce high quality Shea butter from natural sources for the local industries and the international market.
                </p>
            </section>

            <section className="py-14 px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Our Products
                    </h2>
                    <p className="mt-3 text-lg text-gray-600">
                        Discover our range of natural shea butter products crafted with care.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                        <img
                            src={product3}
                            alt="Product"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Whipped Shea Butter</h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Smooth and creamy texture, perfect for deep moisturization.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                        <img
                            src={product5}
                            alt="Product 2"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Raw Unrefined Shea Butter</h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Pure and natural, straight from the shea nut without processing.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                        <img
                            src={products2}
                            alt="Product 3"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Shea Butter Soap</h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Gentle cleansing with the nourishing benefits of shea butter.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                        <img
                            src={product4}
                            alt="Product 4"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Shea Body Oil</h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Luxurious oil that locks in moisture for all-day softness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="flex flex-col items-center gap-8 px-6 max-w-6xl mx-auto mb-16">
                <button className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition shadow">
                    Our Impact Story
                </button>
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-3xl transform transition duration-300 hover:scale-105">
                    {/* Image */}
                    <div className="relative overflow-hidden flex justify-between items-center">
                        <img
                            src={woman}
                            alt="Women Partnership"
                            className="w-[280px] h-80 object-cover rounded-xl"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-6 transition duration-300 group-hover:bg-yellow-50">
                        <h3 className="text-xl font-bold mb-2 transition duration-300 group-hover:text-yellow-700">
                            6+ Years of Partnership
                        </h3>
                        <p className="text-gray-700 transition duration-300 group-hover:text-yellow-600">
                            We’ve spent over 6 years fostering strong partnerships that empower communities and create lasting change.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-3xl transform transition duration-300 hover:scale-105">
                    {/* Image */}
                    <div className="relative overflow-hidden flex justify-between items-center">
                        <img
                            src={product6}
                            alt="Empowered Women"
                            className="w-[280px] h-80 object-cover rounded-xl"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-6 transition duration-300 group-hover:bg-yellow-50">
                        <h3 className="text-xl font-bold mb-2 transition duration-300 group-hover:text-yellow-700">
                            100+ Women Empowered
                        </h3>
                        <p className="text-gray-700 transition duration-300 group-hover:text-yellow-600">
                            Through training and resources, we’ve empowered over 100 women to gain skills, independence, and leadership opportunities.
                        </p>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="py-14 px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Why Choose Our Shea Butter?
                    </h2>
                    <p className="mt-3 text-lg text-gray-600">
                        From purity to sustainability, every jar tells a story of quality and care.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                            <div className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Leaf className=" text-white md:h-9 md:w-9 h-4 w-4" />
                            </div>
                            <h1 className="font-bold text-[25px]">100% Natural</h1>
                            <p className="text-[16px] text-gray-700">Pure, unrefined shea butter with no artificial additives or chemicals.</p>
                            <Link to="/contactus" className="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-2 rounded-full font-medium transition">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                            <div className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Heart className=" text-white md:h-9 md:w-9 h-4 w-4" />
                            </div>
                            <h1 className="font-bold text-[25px]">Ethically Sourced</h1>
                            <p className="text-[16px] text-gray-700">Supporting African women cooperatives and fair trade practices.</p>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                            <div className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Globe className=" text-white md:h-9 md:w-9 h-4 w-4" />
                            </div>
                            <h1 className="font-bold text-[25px]">Sustainable</h1>
                            <p className="text-[16px] text-gray-700">Eco-friendly packaging and environmentally conscious production.</p>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                            <div className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Award className=" text-white md:h-9 md:w-9 h-4 w-4" />
                            </div>
                            <h1 className="font-bold text-[25px]">Premium Quality</h1>
                            <p className="text-[16px] text-gray-700">Hand-selected from the finest shea trees in West Africa and beyound.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
