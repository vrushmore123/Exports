const express = require('express');

const router = express.Router();

// Simple test route first
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // For now, just return success without database save
    res.status(201).json({ 
      success: true, 
      data: { name, email, message },
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      error: 'Server Error' 
    });
  }
});

module.exports = router;