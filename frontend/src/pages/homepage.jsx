import React, { useState } from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Footer from "../components/footer";
import ProductList from "../components/productList";
import Filter from "../components/filter";
const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 flex bg-gray-900 flex-col  text-white h-screen">
        <div className="mt-10 bg-gray-900">
          <Search onSearch={handleSearch} />
          <div className="flex justify-center pt-8 px-8">
            <Filter onCategorySelect={handleCategorySelect} />
          </div>
          <div className="p-10">
            <ProductList
              searchQuery={searchQuery}
              category={selectedCategory}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
