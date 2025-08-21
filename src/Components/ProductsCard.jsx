
import { useNavigate } from "react-router";
import product3 from "../assets/images/product3.jpeg"
import img6 from "../assets/images/img6.jpeg"
import img from "../assets/images/img.jpeg"
import img1 from "../assets/images/img1.jpeg"
import img9 from "../assets/images/img9.jpeg"
import products5 from "../assets/images/products5.jpeg"
import product4 from "../assets/images/product4.jpeg"
import product7 from "../assets/images/product7.jpeg"
import product8 from "../assets/images/product8.jpeg"
import products6 from "../assets/images/products6.jpeg"
import { Link } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    rating: 4.9,
    reviews: 127,
    tag: "Best Seller",
    image: img6,
  },
  {
    id: 2,
    title: "Organic Shea Butter",
    description: "Calming lavender infused shea butter",
    rating: 4.8,
    reviews: 89,
    tag: "New",
    image: img,
  },
  {
    id: 3,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    rating: 4.9,
    reviews: 156,
    image: product3,
  },
  {
    id: 4,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    rating: 4.9,
    reviews: 140,
    image: img1,
  },
  {
    id: 5,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    rating: 4.9,
    reviews: 150,
    image: products6,
  },
  {
    id: 6,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    rating: 4.9,
    reviews: 156,
    image: product7,
  },
  {
    id: 7,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    rating: 4.9,
    reviews: 126,
    image: product4,
  },
  {
    id: 8,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    rating: 4.9,
    reviews: 150,
    image: products5,
  },
  {
    id: 9,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    rating: 4.9,
    reviews: 146,
    image: product8,
  },
];

export default function ProductsCard() {

  const navigate = useNavigate();

  return (
    <section className="bg-[#fffaf5] py-16 px-6 md:px-20 mt-7">
      <div className="px-4 md:px-15">
        <button
          onClick={() => navigate(-1)}
          className="text-sm md:text-md text-white flex items-center justify-center gap-2 h-8 w-20 rounded-full bg-amber-800 hover:text-amber-300 cursor-pointer"
        >
          ← Back
        </button>
      </div>
      <div className="text-center mb-12 mt-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love, sourced ethically from African women cooperatives. Each calabash tells a story of tradition, purity, and natural beauty.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100 hover:scale-105 w-[250px] mx-auto"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] object-cover"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  {product.tag}
                </span>
              )}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full hover:scale-105 transition">
                🤍
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>

              <div className="flex items-center text-yellow-500 text-sm space-x-1">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-800 font-medium ml-2">{product.rating}</span>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
