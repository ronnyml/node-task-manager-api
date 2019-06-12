const request = require('supertest')
const app = require('../src/app')
const Category = require('../src/models/category')
const { userOne, userTwo, categoryOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should fetch user categories', async () => {
  await request(app)
    .get('/categories')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should create category', async () => {
  const response = await request(app)
    .post('/categories')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'Test category'
    })
    .expect(201)

  const category = await Category.findById(response.body._id)
  expect(category).not.toBeNull()
})

test('Should not delete other user categories', async () => {
  await request(app)
    .delete(`/categories/${categoryOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404)

  const category = await Category.findById(categoryOne._id)
  expect(category).not.toBeNull()
})
