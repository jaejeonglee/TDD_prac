const { response } = require('express')
const request = require('supertest')
const app = require('../../server')
const newProduct = require('../data/new-product.json')

it('POST /api/products', async () => {
    const response = await request(app)
        .post('/api/products')// req.originalUrl 확인
        .send(newProduct)// newProduct가 res에 제대로 넘어가는지 확인
    expect(response.statusCode).toBe(201)// 상태코드 확인
    expect(response.body.name).toBe(newProduct.name)// body의 name이 동일한지 확인
    expect(response.body.description).toBe(newProduct.description)// body의 description이 동일한지 확인
})
it('should return 500 on POST /api/products', async () => {
    const response = await request(app)
        .post('/api/products')
        .send({name: "phone"})

    expect(response.statusCode).toBe(500)// res의 statusCode가 500인지 확인
   
})