const express = require('express');
const router = express.Router();
const product = require('./controller/product')

router.post('/', product.createProduct)

module.exports = router;
