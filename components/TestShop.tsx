'use client';
import { useState } from "react";

const products = [
  { id: 1, name: 'Rosy Posies', price: 799, color: 'Jet Blue', tcolor: 'blue-200', badge: 'Best Seller', image: '/images/shirts/1.jpeg', rating: 4.3, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 2, name: 'Flower Warrior', price: 899, color: 'Bone', tcolor: 'blue-200', badge: 'Limited', image: '/images/shirts/2.jpeg', rating: 3.9, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 3, name: 'Ocean and Life', price: 699, color: 'White', tcolor: 'red-200', badge: 'New', image: '/images/shirts/3.jpeg', rating: 4.8, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL', 'XXL'], },
  { id: 4, name: 'Poppies and Cherries', price: 849, color: 'Jet Blue', tcolor: 'blue-50', badge: 'Hot', image: '/images/shirts/4.jpeg', rating: 4.5, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 5, name: 'Off White Floral', price: 799, color: 'Creamy White', tcolor: 'blue-50', badge: 'Best Seller', image: '/images/shirts/5.jpeg', rating: 4.7, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 6, name: 'Oh My Stars', price: 899, color: 'Bluey Blue', tcolor: 'blue-50', badge: 'Limited', image: '/images/shirts/6.jpeg', rating: 4.2, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
  { id: 8, name: 'Floral King', price: 849, color: 'Off White', tcolor: 'blue-50', badge: 'Hot', image: '/images/shirts/8.jpeg', rating: 4.9, totalReviews: 103, sizes: ['S', 'M', 'L', 'XL'], },
];

export default function Shop2() {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const handleSizeChange = (id: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [id]: size }));
  };

  const handleAddToCart = (product: any) => {
    const size = selectedSizes[product.id] || product.sizes[0]; // default first size
    const cartItem = { ...product, size };

    // Get existing cart
    const stored = localStorage.getItem("cartItems");
    const cart = stored ? JSON.parse(stored) : [];

    // Add new product
    cart.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(cart));

    alert(`${product.name} (${size}) added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
          <div className="mt-3">
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">{product.badge}</span>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">₹{product.price}</p>
            <p className="text-sm">⭐ {product.rating} ({product.totalReviews} reviews)</p>
          </div>
          <div className="mt-3">
            <label className="block text-sm">Select Size:</label>
            <select
              className="border rounded p-1 w-full mt-1"
              value={selectedSizes[product.id] || ""}
              onChange={(e) => handleSizeChange(product.id, e.target.value)}
            >
              <option value="">Choose</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <button
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
