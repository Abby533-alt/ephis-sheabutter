import natural from "../assets/images/natural.jpg";
import woman from "../assets/images/woman.jpg";
import { Heart } from "lucide-react";
import { Leaf } from "lucide-react";
import { Globe } from "lucide-react";
import { Award } from "lucide-react";




export default function SecondAbout() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Header */}
            <section className="text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700">Ephis Shea Butter</h1>
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
                <button className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition shadow">
                    Our Impact Story
                </button>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto mb-16">
                <div className="relative group overflow-hidden rounded-2xl shadow-md">
                    <img
                        src={woman}
                        alt="Women Partnership"
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute bottom-0 bg-gradient-to-t from-yellow-700/80 to-transparent text-white w-full p-4">
                        <p className="text-lg font-semibold">15+ Years of Partnership</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-md">
                    <img
                        src={natural}
                        alt="Empowered Women"
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute bottom-0 bg-gradient-to-t from-yellow-700/80 to-transparent text-white w-full p-4">
                        <p className="text-lg font-semibold">200+ Women Empowered</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-yellow-100 py-14 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                             <div  className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Leaf className=" text-white md:h-9 md:w-9 h-4 w-4"/>
                             </div>
                             <h1 className="font-bold text-[25px]">100% Natural</h1>
                             <p className="text-[16px] text-gray-700">Pure, unrefined shea butter with no artificial additives or chemicals.</p>
                            <button className="mt-2 bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-medium transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                             <div  className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Heart className=" text-white md:h-9 md:w-9 h-4 w-4"/>
                             </div>
                             <h1 className="font-bold text-[25px]">Ethically Sourced</h1>
                             <p className="text-[16px] text-gray-700">Supporting African women cooperatives and fair trade practices.</p>
                            <button className="mt-2 bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-medium transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                             <div  className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Globe className=" text-white md:h-9 md:w-9 h-4 w-4"/>
                             </div>
                             <h1 className="font-bold text-[25px]">Sustainable</h1>
                             <p className="text-[16px] text-gray-700">Eco-friendly packaging and environmentally conscious production.</p>
                            <button className="mt-2 bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-medium transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-yellow-100 hover:shadow-xl transition duration-300">
                        <div className="p-6 flex flex-col items-center">
                             <div  className="md:h-15 md:w-15 h-8 w-8 rounded-full bg-yellow-600 flex justify-center items-center">
                                <Award className=" text-white md:h-9 md:w-9 h-4 w-4"/>
                             </div>
                             <h1 className="font-bold text-[25px]">Premium Guality</h1>
                             <p className="text-[16px] text-gray-700">Hand-selected from the finest shea trees in West Africa and beyound.</p>
                            <button className="mt-2 bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-medium transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
