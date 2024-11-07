import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductList = ({ searchQuery, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:8000/api/products";
        if (category) {
          url += `?category=${encodeURIComponent(category)}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  if (loading) return <p className="text-center">Loading products...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} /> // Use product._id for MongoDB ObjectId
        ))}
      </div>
    </div>
  );
};

export default ProductList;
