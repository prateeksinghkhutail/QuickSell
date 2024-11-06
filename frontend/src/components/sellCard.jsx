import React, { useEffect, useState } from "react";
const SellCard = ({ product }) => {
  const [bid, setBid] = useState(true);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img
        src={`http://localhost:5000${product.prodImage}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-4 ">
        <h2 className="text-xl text-center font-semibold text-gray-800">
          {product.productName}
        </h2>
        <p className="text-gray-500 text-center">Type: {product.productType}</p>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex justify-between pt-2">
          <p className="text-gray-800 text-center rounded-md bg-green-500 p-2 font-semibold">
            Selling Price: <span>${product.price}</span>
          </p>
          {bid && (
            <p className="text-gray-800 text-center rounded-md bg-green-500 p-2 font-semibold">
              Bid Price: <span>${product.BidPrice}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellCard;
