import React from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Footer from "../components/footer";
import ProductList from "../components/productList";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24 bg-gray-900 text-white h-screen">
        <div className="mt-10 p-10">
          <Search />
          <div className="p-10">
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Homepage;
