const form = require('../models/form');

// @desc    Save form submission
// @route   POST /api/submit
// @access  Public
const submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const newEntry = new form({ name, email, message });
    await newEntry.save();

    res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports = { submitForm };
