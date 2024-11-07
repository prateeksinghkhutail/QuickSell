import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setInput(query);
    onSearch(query);
  };

  return (
    <div className="flex justify-center mt-8 px-2 ">
      <form onSubmit={handleChange} className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for items..."
          value={input}
          onChange={handleChange}
          className="w-full text-black p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 hover:text-blue-500"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
