const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // adds createdAt and updatedAt automatically
});

// Export model
module.exports = mongoose.model('User', userSchema);
