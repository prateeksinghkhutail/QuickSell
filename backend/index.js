const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productFetchRoutes = require('./routes/productsFetch'); // New name
const productSellRoutes = require('./routes/productsSell'); // New name
const productsBySeller = require('./routes/productsBySeller');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Allow cross-origin requests

// Routes
app.use('/api/auth', authRoutes);

app.use('/api', productFetchRoutes);

app.use('/api', productSellRoutes);
app.use('/api', productsBySeller);
// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/SEM_TEST', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
