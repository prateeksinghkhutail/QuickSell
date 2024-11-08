const express = require('express');
const Product = require('../models/Product');  // Import the Product model
const User = require('../models/user');
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

// Endpoint to initiate buying a product
router.post('/buyProduct', async (req, res) => {
  const { productId, buyerStudentID } = req.body;

  try {
    // Retrieve the product details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Retrieve the buyer's details (wallet amount)
    const buyer = await User.findOne({ email: buyerStudentID });

    if (!buyer) {
      return res.status(404).json({ msg: 'Buyer not found' });
    }

    // Check if buyer's wallet amount is sufficient
    if (buyer.walletAmount < product.price) {
      return res.status(400).json({ msg: 'Insufficient wallet amount' });
    }


    // Update the product with the buyer's ID and change its status
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { buyerStudentID, productStatus: 'Sale Pending' },
      { new: true }
    );

    res.json({ msg: 'Collect your order from the seller', product: updatedProduct });
  } catch (error) {
    console.error('Error buying product:', error);
    res.status(500).json({ msg: 'Server error while buying product' });
  }
});

// Endpoint to accept a product sale
router.post('/acceptProduct', async (req, res) => {
  const { productId, buyerEmail } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Find the buyer and seller by their email IDs
    const buyer = await User.findOne({ email: buyerEmail });
    const seller = await User.findOne({ email: product.sellerStudentID });
    if (!buyer || !seller) {
      return res.status(404).json({ msg: 'Buyer or Seller not found' });
    }

    // Check if buyer has enough balance
    if (buyer.walletAmount < product.price) {
      return res.status(400).json({ msg: 'Insufficient wallet balance' });
    }

    // Update the wallet balances
    buyer.walletAmount -= product.price;
    seller.walletAmount += product.price;

    // Update product status to "Sales Completed"
    product.productStatus = 'Sales Completed';
    product.buyerStudentID = buyer.email; // Set buyer ID in product

    // Save updates to the database
    await buyer.save();
    await seller.save();
    await product.save();

    res.json({ msg: 'Product accepted successfully', product });
  } catch (error) {
    console.error('Error accepting product:', error);
    res.status(500).json({ msg: 'Server error while accepting product' });
  }
});

// Endpoint to reject a product sale
router.post('/rejectProduct', async (req, res) => {
  const { productId } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Set product status back to "Available"
    product.productStatus = 'Available';
    product.buyerStudentID = null; // Clear the buyer ID

    // Save the product with the updated status
    await product.save();

    res.json({ msg: 'Product status reset to "Available"', product });
  } catch (error) {
    console.error('Error rejecting product:', error);
    res.status(500).json({ msg: 'Server error while rejecting product' });
  }
});



// Endpoint to handle placing a bid
router.post('/placeBid', async (req, res) => {
  const { productId, buyerStudentID, bidAmount } = req.body;

  try {
    // Retrieve the product details
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Check if the new bid amount is higher than the current bid
    if (bidAmount <= product.price) {
      return res.status(400).json({ msg: 'Bid must be higher than the current highest bid' });
    }

    // Retrieve the buyer's details (wallet amount)
    const buyer = await User.findOne({ email: buyerStudentID });

    if (!buyer) {
      return res.status(404).json({ msg: 'Buyer not found' });
    }

    // Check if buyer's wallet amount is sufficient for the bid
    if (buyer.walletAmount < bidAmount) {
      return res.status(400).json({ msg: 'Insufficient wallet amount to place this bid' });
    }

    // Update the product with the new highest bid and the buyer's ID
    product.price = bidAmount;
    product.buyerStudentID = buyerStudentID;
    product.productStatus = 'Place your bids';

    // Save the updated product in the database
    await product.save();

    res.json({ msg: 'Bid placed successfully', product });
  } catch (error) {
    console.error('Error placing bid:', error);
    res.status(500).json({ msg: 'Server error while placing bid' });
  }
});

router.post('/acceptBid', async (req, res) => {
  const { productId } = req.body;

  try {
    // Step 1: Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }


    // Step 2: Fetch buyer and seller details
    const buyer = await User.findOne({ email: product.buyerStudentID });
    const seller = await User.findOne({ email: product.sellerStudentID });

    if (!buyer || !seller) {
      return res.status(404).json({ msg: 'Buyer or seller not found' });
    }

    // Step 3: Ensure buyer has sufficient funds for the highest bid
    if (buyer.walletAmount < product.price) {
      return res.status(400).json({ msg: 'Insufficient funds in buyer wallet' });
    }

    // Step 4: Update product status to "Sales Completed"
    product.productStatus = "Sales Completed";

    // Step 5: Deduct bid amount from buyer's wallet and add to seller's wallet
    buyer.walletAmount -= product.price;
    seller.walletAmount += product.price;

    // Step 7: Save changes to buyer, seller, and product
    await buyer.save();
    await seller.save();
    await product.save();

    return res.json({ msg: 'Bid accepted successfully', product });
  } catch (error) {
    console.error('Error in acceptBid:', error);
    res.status(500).json({ msg: 'Server error while accepting bid' });
  }
});


module.exports = router;
