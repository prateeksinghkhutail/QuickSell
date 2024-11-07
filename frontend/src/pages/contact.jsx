import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Get logged-in user details from localStorage
  const userToken = localStorage.getItem("token"); // Assuming the token or user info is stored in localStorage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // API endpoint for contact form submission
    const apiUrl = "http://localhost:8000/api/contact"; // Update this with your actual backend API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`, // Add user token in headers for authentication
        },
        body: JSON.stringify({
          ...formData,
          user: userToken, // Attach user information (adjust as needed)
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      const data = await response.json();
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">
            Contact Us
          </h2>
          <p className="text-center text-gray-300 mb-12">
            If you have any questions or need assistance, please feel free to
            reach out to us. We’re here to help university students make the
            most out of our platform!
          </p>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-around mb-12">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-gray-300">support@quicksell.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <FaPhone className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-gray-300">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Our Location</h4>
                <p className="text-gray-300">University Campus, Block A</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-gray-900">
            <h3 className="text-2xl font-semibold text-center mb-6 text-blue-500">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              {successMessage && (
                <p className="text-green-500 text-center">{successMessage}</p>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
