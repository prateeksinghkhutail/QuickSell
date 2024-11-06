import React, { useEffect, useState } from 'react';
import ItemList from './itemList';  // Import ItemList component

const Dashboard = () => {
  const [items, setItems] = useState([]);         // State for the list of items
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered items

  // Simulating API call to fetch items (you'll replace this with actual API service)
  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItemsFromAPI(); // Replace with actual API call
      setItems(fetchedItems);
      setFilteredItems(fetchedItems);
    };
    fetchItems();
  }, []);

  // Function to filter items based on search term
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term)
    );
    
    setFilteredItems(filtered);
  };

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />
      <ItemList items={filteredItems} /> {/* Display filtered items */}
    </div>
  );
};

// Simulate a function that fetches items from an API (replace with real service)
const getItemsFromAPI = async () => {
  return [
    { id: 1, name: 'Laptop', description: 'Lightly used, 8GB RAM' },
    { id: 2, name: 'Bicycle', description: 'Mountain bike, great condition' },
    { id: 3, name: 'Textbooks', description: 'Physics and Math textbooks' },
    { id: 4, name: 'Headphones', description: 'Noise-canceling over-ear' }
  ];
};

export default Dashboard;
