import { useState } from "react";
import { Heart, RefreshCcw, Flame } from "lucide-react";
import woman1 from "../assets/images/woman1.jpeg";
import woman4 from "../assets/images/woman4.jpeg";
import woman6 from "../assets/images/woman6.jpeg";
import woman5 from "../assets/images/woman5.jpeg";
import woman9 from "../assets/images/woman9.jpeg";
import distribution from "../assets/images/distribution.jpeg";

const sheaSteps = [
  {
    id: 1,
    title: "Harvesting Shea Nuts",
    description: "Our skilled women harvesters collect premium shea nuts from wild trees across West Africa during the optimal season.",
    image: woman1, 
  },
  {
    id: 2,
    title: "Traditional Processing",
    description: "Using time-honored methods passed down through generations, nuts are cracked, roasted, and ground by hand.",
    image: woman4,
  },
  {
    id: 3,
    title: "Pure Extraction",
    description: "Natural butter is extracted through careful kneading and water separation, preserving all nutrients.",
    image: woman6,
  },
  {
    id: 4,
    title: "Resting & Curing",
    description: "Butter is rested to allow the rich aroma and smooth texture to naturally develop over time.",
    image: woman5,
  },
  
  {
    id: 5,
    title: "Packaging",
    description: "Shea butter is hand-packed with care into eco-friendly containers to maintain freshness.",
    image: woman9,
  },
  {
    id: 6,
    title: "Natural Distribution",
    description: "Final products are distributed through sustainable and ethical channels.",
    image: distribution,
  },
];

export default function SheaButterProcess() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-16 px-6 md:px-16 bg-[#FFFDF9]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-yellow-700">Our Sacred Process</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Discover the ancient art of shea butter creation. Each step in our process honors tradition while ensuring the highest quality for your skin's wellness journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sheaSteps.map((step, index) => (
          <div
            key={step.id}
            onClick={() => setActiveCard(step.id === activeCard ? null : step.id)}
            className={`relative rounded-xl overflow-hidden bg-white cursor-pointer shadow-md transform transition-all duration-300 hover:scale-105 ${
              activeCard === step.id ? "scale-110 shadow-2xl z-10" : ""
            }`}
          >
            <img src={step.image} alt={step.title} className="h-48 w-full object-cover" />
            <div className="absolute top-3 left-3 bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow">Step {index + 1}</div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
              <RefreshCcw className="w-5 h-5 text-gray-500 hover:text-blue-500" />
              <Flame className="w-5 h-5 text-gray-500 hover:text-orange-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
