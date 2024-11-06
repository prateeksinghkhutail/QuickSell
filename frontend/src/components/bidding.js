import React, { useState } from 'react';

const Bidding = ({ item }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleBid = async () => {
    // Submit bid to backend service
    const response = await bidService.placeBid(item.id, bidAmount);
    if (response.success) {
      alert("Bid placed successfully!");
    } else {
      alert("Failed to place bid");
    }
  };

  return (
    <div className="bidding">
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Enter bid amount"
      />
      <button onClick={handleBid}>Place Bid</button>
      <p>Auction ends in: 1:30:00 (use a countdown timer here)</p>
    </div>
  );
};

export default Bidding;
