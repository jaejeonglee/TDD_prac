const productModel = require('../models/product')

exports.createProduct = async (req, res, next) => {
  try {
    const createProduct = await productModel.create(req.body)
    // console.log('createProduct:',createProduct)
    return res.status(201).json(createProduct)
  } catch (error) {
    next(error)
  }
} 