const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
    trim: true,
  },
  referralCode: {
    type: String,
    default: null
  },
  walletAmount: {
    type: Number
  }
}, {
  timestamps: true
});

// Export the model in a single statement
module.exports = mongoose.model('User', UserSchema);
