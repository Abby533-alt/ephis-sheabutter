import bash from "../assets/images/bash.jpg"

const products = [
  {
    id: 1,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    price: 24.99,
    oldPrice: 29.99,
    rating: 4.9,
    reviews: 127,
    tag: "Best Seller",
    image: "/images/img6.jpeg",
  },
  {
    id: 2,
    title: "Organic Shea Butter",
    description: "Calming lavender infused shea butter",
    price: 27.99,
    rating: 4.8,
    reviews: 89,
    tag: "New",
    image: "/images/shea-2.jpg",
  },
  {
    id: 3,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 4,
    title: "Pure Shea Butter",
    description: "100% pure, unrefined African shea butter",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 5,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 6,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 7,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 8,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
  {
    id: 9,
    title: "Coconut Shea Butter",
    description: "Tropical coconut and shea butter blend",
    price: 26.99,
    rating: 4.9,
    reviews: 156,
    image: "/images/shea-3.jpg",
  },
];

export default function ProductsCard() {
  return (
    <section className="bg-[#fffaf5] py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love, sourced ethically from African women cooperatives. Each calabash tells a story of tradition, purity, and natural beauty.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100">
            <div className="relative">
              <img src={bash} alt={product.title} className="w-full object-cover h-[350px]" />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  {product.tag}
                </span>
              )}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition">
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

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-yellow-700">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
