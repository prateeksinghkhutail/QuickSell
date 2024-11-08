//present under sell tab
import React, { useEffect, useState } from "react";
import SellCard from "./sellCard";

const SellList = ({ refresh }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const email = localStorage.getItem("email"); // Ensure email is stored in localStorage

      if (!email) {
        console.error("User email not found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8000/api/productsBySeller?email=${email}`
        );
        if (response.ok) {
          const data = await response.json();
          setProducts(Array.isArray(data) ? data : []);
        } else {
          console.error("Failed to fetch products.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refresh]);

  if (loading)
    return <p className="text-center">Loading selling products...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sell List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <SellCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">
            No products found for this seller.
          </p>
        )}
      </div>
    </div>
  );
};

export default SellList;
