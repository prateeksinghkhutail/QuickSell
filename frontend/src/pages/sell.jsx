import React, { useState } from "react";
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
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form submission logic: Send data to API
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image); // Matches `prodImage` in the schema
    formDataToSend.append("productName", formData.name); // Matches `productName` in the schema
    formDataToSend.append("productType", formData.type); // Matches `productType` in the schema
    formDataToSend.append("productDesc", formData.description); // Matches `productDesc` in the schema
    formDataToSend.append("price", formData.price); // `price` matches schema
    formDataToSend.append("bid", false); // Set bid to false or true as needed

    // Default or required values
    formDataToSend.append("sellerStudentID", userEmail); // Replace with actual seller ID if needed
    formDataToSend.append("productID", `PROD_${Date.now()}`); // Unique product ID

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
        navigate("/sell");
      } else {
        console.log("Failed to list product.");
      }
    } catch (error) {
      console.error("Error listing product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 bg-gray-900 text-white h-screen">
        <div className="mt-10 p-10 flex justify-center">
          <button
            onClick={handleToggleForm}
            className="text-3xl bg-green-500 rounded p-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sell Product
          </button>
        </div>

        {/* Conditionally render the form */}
        {showForm && (
          <div className="mt-5 p-10 bg-gray-800 rounded-lg max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Selling Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Display list of products */}
        <SellList />
      </div>
      <Footer />
    </>
  );
};

export default Sell;
