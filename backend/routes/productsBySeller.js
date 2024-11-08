// routes/productsSell.js
const express = require('express');
const Product = require('../models/Product');
const User = require('../models/user')
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

// Endpoint to get buyer details based on productId
router.get('/buyerDetails', async (req, res) => {
  const { productId } = req.query;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Check if the product has a buyerStudentID
    if (!product.buyerStudentID) {
      return res.status(404).json({ msg: 'No buyer for this product' });
    }

    // Find the buyer details from the User model
    const buyer = await User.findOne({ email: product.buyerStudentID });
    if (!buyer) {
      return res.status(404).json({ msg: 'Buyer details not found' });
    }

    // Return buyer details
    const buyerDetails = {
      name: buyer.name,
      email: buyer.email,
      contactNo: buyer.contactNo,
      address: buyer.address,
    };

    res.status(200).json(buyerDetails);
  } catch (error) {
    console.error('Error fetching buyer details:', error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});


router.get('/sellerDetails', async (req, res) => {
  const { productId } = req.query;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Check if the product has a sellerStudentID
    if (!product.sellerStudentID) {
      return res.status(404).json({ msg: 'Seller not assigned for this product' });
    }

    // Find the seller details from the User model
    const seller = await User.findOne({ email: product.sellerStudentID });
    if (!seller) {
      return res.status(404).json({ msg: 'Seller details not found' });
    }

    // Return seller details
    const sellerDetails = {
      name: seller.name,
      email: seller.email,
      contactNo: seller.contactNo,
      address: seller.address,
    };

    res.status(200).json(sellerDetails);
  } catch (error) {
    console.error('Error fetching seller details:', error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});



module.exports = router;
