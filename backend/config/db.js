const mongoose = require('mongoose');

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdb');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    console.log('Server will continue without database connection');
    // Don't exit process, just log the error
  }
};