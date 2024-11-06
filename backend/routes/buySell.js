const express = require('express');
const Product = require('../models/product');  // Import the Product model
const router = express.Router();

// Route to add a new product for sale
router.post('/sell', async (req, res) => {
  const { sellerStudentID, productID, productName, productDesc, prodImage, bid, price } = req.body;

  try {
    // Check if the productID already exists
    let product = await Product.findOne({ productID });
    if (product) {
      return res.status(400).json({ msg: 'Product already exists' });
    }

    // Create a new product
    product = new Product({
      sellerStudentID,
      productID,
      productName,
      productDesc,
      prodImage,
      bid,
      price
    });

    // Save the product to the database
    await product.save();

    res.json({ msg: 'Product listed for sale successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to update product status (e.g., marking a product as sold)
router.put('/buy/:productID', async (req, res) => {
  const { buyerStudentID } = req.body;

  try {
    // Find the product by productID
    let product = await Product.findOne({ productID: req.params.productID });
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Update the product with buyer's details and mark as "Sold"
    product.buyerStudentID = buyerStudentID;
    product.productStatus = 'Sale Pending';

    // Save the updated product
    await product.save();

    res.json({ msg: 'Product purchased successfully', product });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
