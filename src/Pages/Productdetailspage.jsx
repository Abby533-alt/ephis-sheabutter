import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Simulated product data fetch
  useEffect(() => {
    // Replace with actual API call or data context
    const mockProducts = [
      {
        id: '1',
        name: 'Pure Shea Butter',
        image: '/images/pure-shea.jpg',
        price: 24.99,
        oldPrice: 29.99,
        rating: 4.9,
        reviews: 127,
        description: '100% pure, unrefined African shea butter. Great for dry skin, hair, and stretch marks.',
      },
      {
        id: '2',
        name: 'Organic Shea Butter',
        image: '/images/organic-shea.jpg',
        price: 27.99,
        rating: 4.8,
        reviews: 89,
        description: 'Calming lavender-infused shea butter for relaxing skin and soul.',
      },
    ];

    const found = mockProducts.find((p) => p.id === productId);
    setProduct(found);
  }, [productId]);

  if (!product) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center gap-2 text-yellow-500">
            <span>⭐ {product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {product.oldPrice && (
              <span className="line-through text-gray-400">${product.oldPrice}</span>
            )}
          </div>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
