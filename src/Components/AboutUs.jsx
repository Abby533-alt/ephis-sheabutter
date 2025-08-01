import woman1 from "../assets/images/woman1.jpeg"
import heroimg from "../assets/images/heroimg.jpg"
import benefit from "../assets/images/benefit.jpeg";
import impact from "../assets/images/impact.jpeg"
import impact1 from "../assets/images/impact1.jpeg"
import impact2 from "../assets/images/impact2.jpeg"
import impact3 from "../assets/images/impact3.jpeg"
import impact4 from "../assets/images/impact4.jpeg"
import img from "../assets/images/img.jpeg"
import Navbar from "./Navbar";

export default function AboutUs() {
  const gallery = [impact, impact1, impact2, impact3, impact4, img];

  return (
    <>
      <Navbar />
      <section className="bg-yellow-50 py-16 px-6 md:px-20 text-gray-800 mt-10">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A151D]">OUR STORY</h1>
          <p className="text-lg leading-relaxed mt-4 mb-6 text-gray-600">
            Founded on the belief that beauty products should be pure, ethical, and transformative. <br />
            We've spent over 6 years building relationships with <br /> Ghanaian women's cooperatives to bring you the finest shea butter while creating positive impact.
          </p>
          <img
            src={heroimg}
            alt="Our Story"
            className="rounded-2xl shadow-lg mx-auto object-cover max-h-[500px] w-full"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 mb-16 justify-around items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A151D]">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ephis Shea Butter Production Company Ltd. is a legally registered and incorporated company in Ghana, operating under Sections 27 and 28 of the Companies Act 1963. We began business operations on the 12th of July, 2019, and are proudly located in Walewale, in the North East Region of Ghana.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We specialize in the production of 100% natural shea butter for both local and international markets. Our mission is deeply rooted in community collaboration—we work closely with dedicated women across the five Northern Regions of Ghana who collect shea nuts and supply them to us.
            </p>
          </div>

          <div className="md:w-[30%]">
            <img
              src={benefit}
              alt="Award"
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>

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

      <section className="bg-[#FFFDF9] px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-block bg-yellow-100 text-yellow-700 font-medium px-4 py-1 rounded-full mb-4 text-sm">
              🟡 Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 leading-snug">
              Empowering Communities <br /> Through Nature's Gift
            </h2>
            <p className="mt-6 text-gray-700 md:text-lg leading-relaxed">
              The mission of EPHIS Shea Butter Production is to locally produce high quality Shea butter from
              natural sources for the local industries and the international market.
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
    </>
  );
}
