const productController = require('../../controller/product')
const productModel =require('../../models/product')
const httpMocks = require('node-mocks-http')//?
const newProduct = require('../data/new-product.json')

//Mock 함수 생성
productModel.create = jest.fn()

//저장할 데이터 인위적으로 만들기
//beforeEach를 이용하면 공통된 코드의 반복을 줄일 수 있음
let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = jest.fn()
})

describe('Product Controller Create', () => {

  beforeEach(() => {
    req.body = newProduct//미리 작성해둔 body 사용
  })
  
  //createProduct함수가 함수로 동작하는게 맞는지 확인
  it('should have a createProduct function', () => {
    expect(typeof productController.createProduct).toBe('function')
  })
  //createProduct함수를 호출할 때 Product Model의 Create 메소드가 호출되는지 확인
  it('should call productModel.create', async () => {
    await productController.createProduct(req, res, next)
    expect(productModel.create).toBeCalledWith(newProduct)
  })
  //성공적으로 데이터를 create했을 시 상태코드를 201로 response보내는지 확인 
  it('should return 201 response code', async () => {
    await productController.createProduct(req, res, next)
    expect(res.statusCode).toBe(201)
    // expect(res._isEndCalled()).toBeTruthy()// res.send를 실제로 하고있다면 true이기 때문에 passed
    expect(res._isJSON()).toBeTruthy()// res.json을 실제로 하고있다면 true이기 때문에 passed
  })
  //
  it('should return json body in response',async () => {
    productModel.create.mockReturnValue(newProduct)//Mock함수로 create했을 때 return값은 newProduct
    await productController.createProduct(req, res, next)
    expect(res._getJSONData()).toStrictEqual(newProduct)//response되는 json데이터가 newProduct랑 같은지 확인
  })
  //임의로 예외처리를 해주어 핸들링하기
  it('should handle errors', async () => {
    const errorMessage = { message: "description property missing"}// 에러메세지 정해주기
    const rejectedPromise = Promise.reject(errorMessage)// 비동기 요청이 실패하면 Promise.reject(reason)의 형식으로 왜 실패했는지 알려준다
    productModel.create.mockReturnValue(rejectedPromise)// 일부러 동기처리하지 안하기
    await productController.createProduct(req, res, next)
    expect(next).toBeCalledWith(errorMessage)// 비동기에 대한 예외처리를 next로 해줘야하기 때문에 next가 실행됐을 때 에러메세지 동작하는지 확인
  })
})