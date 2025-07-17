import award from "../assets/images/award.jpg"
import sexyman from "../assets/images/sexyman.jpg"

export default function AboutUs() {
  return (
    <section className="bg-yellow-100 py-16 px-6 md:px-20 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-md leading-relaxed mb-4">
            Ephis Shea Butter Production Company Ltd. is a legally registered and incorporated company in Ghana, operating under Sections 27 and 28 of the Companies Act 1963. We began business operations on the 12th of July, 2019, and are proudly located in Walewale, in the North East Region of Ghana.
          </p>
          <p className="text-md leading-relaxed mb-4">
            We specialize in the production of 100% natural shea butter for both local and international markets. Our mission is deeply rooted in community collaboration—we work closely with dedicated women across the five Northern Regions of Ghana who collect shea nuts and supply them to us.
          </p>
          <p className="text-md leading-relaxed">
            By engaging many hands in our production process, we've not only expanded our capacity but also contributed to employment creation. From the women and girls who process the shea nuts into finished products, to those harvesting the nuts in the wild, Ephis Shea Butter is proud to support local livelihoods while delivering premium quality shea butter to the world.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-[30%] flex space-x-4">
          <img src={sexyman} alt="" className="rounded-xl shadow-md w-[75%]"/>
          <img 
            src={award}
            alt="Shea Butter" 
            className="rounded-xl shadow-md w-[75%] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
