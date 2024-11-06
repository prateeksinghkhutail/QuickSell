import React, { useState, useEffect } from 'react';

const Buy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching items from an API (replace with your actual API call)
    const fetchedItems = [
      { id: 1, name: 'Laptop', description: 'Gaming laptop, barely used' },
      { id: 2, name: 'Bicycle', description: 'Mountain bike, great condition' }
    ];
    setItems(fetchedItems);
  }, []);

  return (
    <div>
      <h3>Items Available for Purchase</h3>
      {items.length === 0 ? (
        <p>No items available right now</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buy;
