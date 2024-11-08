import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SellList from "../components/sellList";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    type: "",
    description: "",
    price: "",
  });
  const [bid, setBid] = useState(false); // Separate bid state for the checkbox
  const navigate = useNavigate();
  const [refreshList, setRefreshList] = useState(false);

  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    if (!userEmail) {
      alert("Please log in to continue");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("productName", formData.name);
    formDataToSend.append("productType", formData.type);
    formDataToSend.append("productDesc", formData.description);
    formDataToSend.append("bid", bid); // Append the boolean bid directly

    // Conditionally set the price field based on the bid flag
    if (bid) {
      formDataToSend.append("base_price", formData.price); // Set as base_price if bidding is enabled
    } else {
      formDataToSend.append("price", formData.price); // Set as price if bidding is disabled
    }

    formDataToSend.append("sellerStudentID", userEmail);
    formDataToSend.append("productID", `PROD_${Date.now()}`);

    try {
      const response = await fetch("http://localhost:8000/api/postProducts", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        alert("Product listed successfully!");
        setFormData({
          image: "",
          name: "",
          type: "",
          description: "",
          price: "",
        });
        setShowForm(false);
        setBid(false); // Reset bid state
        setRefreshList(!refreshList);
      } else {
        console.log("Failed to list product.");
      }
    } catch (error) {
      console.error("Error listing product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "form-overlay") {
      setShowForm(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className={`${
          showForm ? "blur-sm" : ""
        } flex-grow p-8 bg-gray-900 pt-24 text-white transition duration-200`}
      >
        <div className="flex justify-center mt-10">
          {!showForm && (
            <button
              onClick={handleToggleForm}
              className="text-3xl bg-green-500 p-3 rounded-md hover:bg-green-700 transition duration-200"
            >
              Sell Product
            </button>
          )}
        </div>

        <SellList refresh={refreshList} />
      </div>

      {showForm && (
        <div
          id="form-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-10 bg-white rounded-lg max-w-md w-full mx-auto shadow-lg"
          >
            <div className="text-center text-2xl mb-4">
              Upload the Details of Product
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  required
                  className="block py-2 px-3 w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the product Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-2 border border-gray-600 rounded-md text-black placeholder-gray-300"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="type"
                  placeholder="Enter the Type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-2 border border-gray-600 rounded-md text-black placeholder-gray-300"
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Enter the Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-2 border border-gray-600 rounded-md text-black placeholder-gray-300"
                />
              </div>

              <div>
                <input
                  type="number"
                  min="0"
                  name="price"
                  placeholder="Selling Price or Base Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-2 border border-gray-600 rounded-md text-black placeholder-gray-300"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bid"
                  checked={bid}
                  onChange={(e) => setBid(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="bid" className="ml-2 text-sm">
                  Enable Bidding
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 py-2 px-4 rounded-md text-black hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Sell;
