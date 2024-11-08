// Filter.jsx
import React, { useState } from "react";

const Filter = ({ onCategorySelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = [
    "Electronics",
    "General",
    "Cycle",
    "Books",
    "Household Items",
    "None"
  ];

  // Handle category selection
  const handleSelect = (category) => {
    console.log("Filter Selected Category:", category); // Debugging log
    onCategorySelect(category); // Pass category to parent
    setShowDropdown(false); // Close dropdown
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-green-500 text-white text-xl px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Filter by Category
      </button>
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleSelect(category)}
              className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
