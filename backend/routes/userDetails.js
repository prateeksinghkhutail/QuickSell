// routes/userRoutes.js
const express = require('express');
const UserDetails = require('../models/user');
const router = express.Router();

// Route to get user details by email
router.get('/userDetails', async (req, res) => {
  const { email } = req.query; // Get the email from the query parameter

  if (!email) {
    return res.status(400).json({ msg: 'Email query parameter is required' });
  }

  try {
    const user = await UserDetails.findOne({ email }); // Find the user by email
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user); // Send the user details as JSON response
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ msg: 'Server error while fetching user details' });
  }
});

module.exports = router;
