const productController = require('../../controller/product')

describe('product controller create', () => {
  it('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function')
  })  
})