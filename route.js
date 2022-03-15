const express = require('express');
const router = express.Router();
const product = require('./controller/product')

router.get('/', product.hi)

module.exports = router;
