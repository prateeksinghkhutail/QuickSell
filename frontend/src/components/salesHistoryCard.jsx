import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SalesCard = ({ product, refreshProducts }) => {
  const [buttonState, setButtonState] = useState("Accept");
  const [showModal, setShowModal] = useState(false);
  const [sellerDetails, setSellerDetails] = useState(null);
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState("");

  const handleAcceptBidClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/acceptBid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id }),
      });

      if (response.ok) {
        setButtonState("View Details");
        refreshProducts(); // Trigger a refresh after accepting
      } else {
        console.error("Failed to accept product.");
      }
    } catch (error) {
      console.error("Error accepting product:", error);
    }
  };

  const handleViewDetailsClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/buyerDetails?productId=${product._id}`
      );
      const data = await response.json();
      setSellerDetails(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching seller details:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/profilepage");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img
        src={`http://localhost:8000${product.prodImage}`}
        alt={product.productName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.productName}
        </h2>
        <p className="text-gray-500">Type: {product.productType}</p>
        <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {product.productStatus === "Sales Completed" ? (
            <button
              onClick={handleViewDetailsClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              View Details
            </button>
          ) : product.bid ? (
            <button
              onClick={handleAcceptBidClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Accept
            </button>
          ) : (
            <button
              onClick={handleViewDetailsClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              View Details
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Seller Details
            </h3>
            {sellerDetails ? (
              <>
                <p className="text-gray-700">
                  <strong>Name:</strong> {sellerDetails.name}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {sellerDetails.email}
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> {sellerDetails.contactNo}
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> {sellerDetails.address}
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesCard;
