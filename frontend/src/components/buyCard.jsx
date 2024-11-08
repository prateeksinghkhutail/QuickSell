import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyCard = ({ product }) => {
  const [buttonState, setButtonState] = useState("Accept");
  const [showModal, setShowModal] = useState(false);
  const [sellerDetails, setSellerDetails] = useState(null);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  const [bidAmount, setBidAmount] = useState("");

  const handleAcceptClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/acceptProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          buyerEmail: userEmail, 
        }),
      });

      if (response.ok) {
        setButtonState("View Details");
        alert("Product accepted and marked as 'Sales Completed'. Wallets updated.");
      } else {
        console.error("Failed to accept product.");
      }
    } catch (error) {
      console.error("Error accepting product:", error);
    }
  };

  const handleRejectClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/rejectProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
        }),
      });

      if (response.ok) {
        alert("Product status reset to 'Available'.");
      } else {
        console.error("Failed to reject product.");
      }
    } catch (error) {
      console.error("Error rejecting product:", error);
    }
  };

  const handleBidClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/placeBid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
  };

  const handleViewDetailsClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/sellerDetails?productId=${product._id}`
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
        className="w-full h-48 object-cover mb-4"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.productName}</h2>
        <p className="text-gray-500">Type: {product.productType}</p>
        <p className="text-gray-700 font-semibold">Price: ₹{product.price}</p>
        
        {/* Conditional rendering based on product status */}
        {product.productStatus === "Sales Completed" ? (
          <button
            onClick={handleViewDetailsClick}
            className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
          >
            View Details
          </button>
        ) : (
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 items-center">
            {product.bid ? (
              <div className="flex items-center space-x-2">
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
                  className="w-28 px-2 py-1 border rounded-md text-black"
                />
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleRejectClick}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Reject Product
                </button>
                <button
                  onClick={handleAcceptClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Accept Product
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Seller Details
            </h3>
            {sellerDetails ? (
              <>
                <p className="text-gray-700"><strong>Name:</strong> {sellerDetails.name}</p>
                <p className="text-gray-700"><strong>Email:</strong> {sellerDetails.email}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {sellerDetails.contactNo}</p>
                <p className="text-gray-700"><strong>Address:</strong> {sellerDetails.address}</p>
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

export default BuyCard;
