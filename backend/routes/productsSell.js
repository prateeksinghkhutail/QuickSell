// routes/productsSell.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Endpoint to post a new product
router.post('/postProducts', upload.single('image'), async (req, res) => {
  console.log("Inside POST /postProducts route");

  try {
    // Destructure fields from req.body and provide default values if not present
    const {
      sellerStudentID,
      productID,
      productName,
      productDesc,
      productType,
      bid,
      price,
      base_price = null,   // Set default value if not provided
      buyerStudentID = null  // Default to null if not provided
    } = req.body;

    // Check if image was uploaded, else set it to null
    const prodImage = req.file ? `/uploads/${req.file.filename}` : null;

    // Validate required fields
    if (!sellerStudentID || !productID || !productName || !productDesc || !productType || bid === undefined) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Create a new product document using the schema
    const product = new Product({
      sellerStudentID,
      productID,
      productName,
      productDesc,
      productType,
      prodImage,
      bid,
      price: price || null, // Only set if price is provided
      base_price: base_price || null, // Only set if base_price is provided
      buyerStudentID,      // optional field
      productStatus: 'Available' // Default status
    });

    // Save to the database
    await product.save();
    res.status(201).json({ msg: 'Product listed successfully', product });
  } catch (error) {
    console.error('Error listing product:', error);
    res.status(500).json({ msg: 'Failed to list product', error: error.message });
  }
});

module.exports = router;
