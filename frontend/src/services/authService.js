// src/services/authService.js
const API_URL = 'http://localhost:8000/api/auth';  // Make sure this matches your backend URL

// Register a new user
export const registerUser = async (email, password, confirmPassword, name, address, contactNo, referralCode) => {

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        email, 
        password, 
        confirmPassword,
        name,        // Combined name field
        address,
        contactNo,   // Renamed to match backend expectations
        referralCode // Renamed to match backend expectations
      })
    });

    const data = await response.json();

    console.log('Response status:', response.status);
    console.log('Response data:', data);
    
    if (!response.ok) {
      throw new Error(data.msg || 'Registration failed');
    }

    // Registration successful, return the JWT token
    return data.token;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// Login existing user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.msg || 'Login failed');
    }

    // Login successful, return the JWT token
    return data.token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
