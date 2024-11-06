import React, { useState } from 'react';

const Sell = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the item details to the backend
    alert(`Item submitted: ${itemName} - ${description}`);
    setItemName('');
    setDescription('');
  };

  return (
    <div>
      <h3>Sell an Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;
