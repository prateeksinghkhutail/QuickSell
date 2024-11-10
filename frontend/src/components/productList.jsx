import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductList = ({ searchQuery, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
    let filtered = products;

    // Apply category filter if category is selected
    if (category && category !== "None") {
      filtered = filtered.filter(
        (product) =>
          product.productType.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply search filter if searchQuery is provided
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.productName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.productType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, products]);

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
