import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from '../services/authService';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');  // For registration
  const [rememberMe, setRememberMe] = useState(false);  // Add rememberMe state

  const navigate = useNavigate();  // Initialize navigate

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(email, password);
      localStorage.setItem('token', token);  // Store the JWT token
      localStorage.setItem('email', email);
      onLogin(true);  // Proceed to the app
      navigate("/homepage");  // Navigate to homepage on successful login
    } catch (error) {
      alert('Login failed');
    }
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const token = await registerUser(email, password, confirmPassword);
      localStorage.setItem('token', token);  // Store the JWT token
      onLogin(true);  // Proceed to the app
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <>
      <title>Login - BITS Buy & Sell</title>

      {/* Background container with overlay */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bitsimage.jpg')" }} // Replace with your image path
      >
        {/* Overlay for fade effect */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-6xl p-8 font-bold text-white">
          QuickSell
        </div>
        <h1 className="relative z-10 text-2xl font-bold mb-6 text-center text-white">
          Login to BITS PILANI Buy and Sell platform
        </h1>

        <main className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your BITS email"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm">
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
