const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// JWT Secret
const JWT_SECRET = 'mysecretkey';

function generateReferralCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}



// Registration Route
router.post('/register', async (req, res) => {
  const { email, password, confirmPassword, name, address, contactNo, referralCode } = req.body;
  console.log(req.body)
  // Validate required fields
  if (!email || !password || !confirmPassword || !name || !address || !contactNo) {
    return res.status(400).json({ msg: 'Please enter all required fields' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const inputReferralCode = referralCode


    if(!referralCode){
      // Create new user
    user = new User({ email, password: hashedPassword, name, address, contactNo, referralCode:generateReferralCode(), walletAmount:10000 });
    await user.save();
    }

    // Handle referral bonus logic (optional)
    else{
      // Find the user who referred
      const referringUser = await User.findOne({ referralCode });
      if (referringUser) {
        // Add bonus points or perform any other referral reward logic
        // E.g., updating wallet amount or referral count
        referringUser.walletAmount = (referringUser.walletAmount || 0) + 100; // Example bonus
        await referringUser.save();
      }

      user = new User({ email, password: hashedPassword, name, address, contactNo, referralCode:generateReferralCode(), walletAmount: 10100 });
    await user.save();
    }

    // Return JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Return JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Auth middleware to verify token (optional, for protected routes)
const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = router;
