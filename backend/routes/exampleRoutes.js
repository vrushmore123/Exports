const express = require('express');
const { example } = require('../controllers/exampleController');

const router = express.Router();

router.get('/example', example);

module.exports = router;