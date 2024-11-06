// routes/productsSell.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Endpoint to fetch products by sellerStudentID (email)
router.get('/productsBySeller', async (req, res) => {
  try {
    const userEmail = req.query.email; // Get email from query parameters

    if (!userEmail) {
      return res.status(400).json({ msg: 'Seller email is required' });
    }

    // Find products where sellerStudentID matches the provided email
    const products = await Product.find({ sellerStudentID: userEmail });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products by seller:', error);
    res.status(500).json({ msg: 'Server error while fetching products' });
  }
});

module.exports = router;
