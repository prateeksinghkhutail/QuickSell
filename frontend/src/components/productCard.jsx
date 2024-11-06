import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img
        src={`http://localhost:5000${product.prodImage}`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.productName}
        </h2>
        {/* add type in database  */}
        <p className="text-gray-500">Type: {product.productType}</p>
        <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Buy
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
