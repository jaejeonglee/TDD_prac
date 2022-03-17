const productModel = require('../models/product')

exports.createProduct = (req, res, next) => {
  const createProduct = productModel.create(req.body)
  return res.status(201).json(createProduct)
} 