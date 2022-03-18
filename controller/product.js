const productModel = require('../models/product')

//create
const createProduct = async (req, res, next) => {
  try {
    const createProduct = await productModel.create(req.body)
    // console.log('createProduct:',createProduct)
    res.status(201).json(createProduct)
  } catch (error) {
    next(error)
  }
} 

//get
const getProduct = async (req, res, next) => {
  try {
    const allProduct = await productModel.find({})
    res.status(200).json(allProduct)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProduct,
  getProduct
}