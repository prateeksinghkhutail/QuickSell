// //present in buy page or homepage

import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [bidAmount, setBidAmount] = useState(""); // State to hold the bid amount
  const userEmail = localStorage.getItem("email");

  // Function to handle Buy action
  const handleBuyClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/buyProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          buyerStudentID: userEmail,
        }),
      });

      if (response.ok) {
        alert("Product purchased successfully!");
      } else {
        alert("Please check your wallet balance!");
      }
    } catch (error) {
      console.error("Error purchasing product:", error);
    }
    window.location.reload();
  };

  // Function to handle Bid action
  const handleBidClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/placeBid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          buyerStudentID: userEmail,
          bidAmount: bidAmount,
        }),
      });

      if (response.ok) {
        alert("Bid placed successfully!");
      } else {
        alert("Place a bid higher than the current bid and check your wallet amount.");
      }
    } catch (error) {
      console.error("Error placing bid:", error);
    }
    window.location.reload();
  };

  if (product.sellerStudentID === userEmail || product.productStatus === "Sales Completed") {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img
        src={`http://localhost:8000${product.prodImage}`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.productName}
        </h2>
        <p className="text-gray-500">Type: {product.productType}</p>
        
        {!product.bid ? (
      <p className="text-gray-700 font-semibold">Price: ₹{product.price}</p>) : (
      <div>
        {product.price ? (
          <>
            <p className="text-gray-700 font-semibold">Highest Bid: ₹{product.price}</p>
            <p className="text-gray-700 font-semibold">Base Price: ₹{product.base_price}</p>
          </>
        ) : (
          <>
          <p className="text-gray-700 font-semibold">No bids placed</p>
          <p className="text-gray-700 font-semibold">Base Price: ₹{product.base_price}</p>
          </>
        )}
      </div>
)}

        <div className="flex space-x-4 mt-4">
          {!product.bid ? (
            <div className="flex space-x-4 mt-4">
              {product.productStatus === "Available" ? (
                <button
                  onClick={handleBuyClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Buy
                </button>
              ) : (
                <span className="text-gray-700 font-semibold">
                  {product.productStatus}
                </span>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={handleBidClick}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Bid
              </button>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter bid"
                className="rounded-md border text-black ml-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
