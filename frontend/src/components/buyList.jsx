import React, { useEffect, useState } from "react";
import BuyCard from "./buyCard";

const BuyList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <p className="text-center text-white">Loading products...</p>;

  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-green-500 mb-8">Product List</h1>
      </div>

      {/* Adjusted grid for 3 cards per row on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <BuyCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BuyList;
