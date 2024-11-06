import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../services/authService';

const Register = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');  
  const [address, setAddress] = useState('');      
  const [contactNo, setContactNo] = useState('');  
  const [referralCode, setReferralCode] = useState('');

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation checks
  const validateInputs = () => {
    const newErrors = {};

    // Check email format
    if (!email.endsWith('@pilani.bits-pilani.ac.in')) {
      newErrors.email = 'Please log-in with BITS Pilani email id';
    }

    // Check password length
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Confirm password match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Check contact number length
    if (!/^\d{10}$/.test(contactNo)) {
      newErrors.contactNo = 'Contact number must be exactly 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Stop submission if there are validation errors
    }

    try {
      const token = await registerUser(email, password, confirmPassword, firstName, address, contactNo, referralCode);
      localStorage.setItem('token', token);  
      if (onLogin) onLogin(true);  
      navigate("/login");  
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bitsimage.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center text-6xl p-8 font-bold text-white">
          QuickSell
        </div>
        <h1 className="relative z-10 text-2xl font-bold mb-6 text-center text-white">
          Register to BITS PILANI Buy and Sell platform
        </h1>

        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-fit">
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-semibold">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your First Name"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your BITS email"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-semibold">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Room and Bhawan Name"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contactNo" className="text-sm font-semibold">Contact No</label>
              <input
                type="text"
                id="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                placeholder="Enter your contact number"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="referralCode" className="text-sm font-semibold">Referral Code</label>
              <input
                type="text"
                id="referralCode"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder="Enter your referral code"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
            <div className="flex item-center justify-center mt-4 text-sm">
              <a href="/login" className="text-blue-600 hover:underline">Already Registered? Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
