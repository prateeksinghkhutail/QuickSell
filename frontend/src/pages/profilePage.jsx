import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Profile from "../components/profile";
import BuyList from "../components/buyList";
import SalesHistory from "../components/salesHistory";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 p-4 pt-24 min-h-screen">
        <div className="pt-8 flex flex-col lg:flex-row lg:justify-between px-4 lg:px-24 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <Profile />
          </div>
          <div className="w-full px-4 lg:w-3/5 xl:w-2/3">
          <div className="mb-8"> 
              <BuyList />
            </div>
            <div className="mt-8">
              <SalesHistory />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
