import React from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Footer from "../components/footer";
import ProductList from "../components/productList";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24 flex bg-gray-900 flex-col  text-white h-screen">
        <div className="mt-10 bg-gray-900 p-10">
          <Search />
          <div className="p-10">
            <ProductList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
