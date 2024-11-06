const mongoose = require('mongoose');

// Define the schema for the 'products' collection
const productSchema = new mongoose.Schema({
  sellerStudentID: {
    type: String,  // Reference to the User (Seller)
    ref: 'userDetails',
    required: true
  },
  productID: {
    type: String,
    required: true,
    unique: true  // Ensure that each product has a unique ID
  },
  productName: {
    type: String,
    required: true
  },
  productDesc: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  prodImage: {
    type: String,  // Store image as a URL or file path
    default: null
  },
  bid: {
    type: Boolean,  // Whether the product is up for bidding or not (Yes/No)
    required: true,
    default:false
  },
  price: {
    type: Number,
    required: true  // Price for the product
  },
  base_price: {
    type: Number,
    required: false  // base bid for the product
  },
  buyerStudentID: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the User (Buyer)
    ref: 'userDetails',
    default: null  // This will be null until the product is purchased
  },
  productStatus: {
    type: String,
    enum: ['Available','Sale Pending', 'Sold'],  // Only 'Available' or 'Sold' status
    default: 'Available'
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create the model using the schema
const Product = mongoose.model('products', productSchema);

module.exports = Product;
