import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

const API_URL = "http://localhost:5000/api/accounts"; // Replace with backend API

const AccountsSection = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(API_URL);
      setAccounts(response.data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3">Accounts Section</h2>
      <ul>
        {accounts.map((user) => (
          <li key={user._id} className="p-2 border-b">
            {user.username} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsSection;
