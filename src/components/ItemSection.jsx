import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

const API_URL = "http://localhost:5000/api/items"; // Update with actual API

const ItemSection = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Fetch Items from API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Add Item
  const addItem = async () => {
    if (!newItem) return;
    try {
      await axios.post(API_URL, { name: newItem });
      setNewItem("");
      fetchItems(); // Refresh items
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Delete Item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems(); // Refresh after delete
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3">Item Section</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addItem}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id} className="flex justify-between p-2 border-b">
            {item.name}
            <button className="text-red-500" onClick={() => deleteItem(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemSection;
