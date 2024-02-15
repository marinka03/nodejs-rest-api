// • відповідь повина мати статус-код 200
// • у відповіді повинен повертатися токен
// • у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

const mongoose = require('mongoose');
const request = require('supertest');
const { testLogin } = require('./auth');
require('dotenv').config();

const app = require('../app');
jest.mock('mongoose');

describe('test login controller', () => {
  // beforeAll(()=> {})
  // afterAll(()=> {})

  // test('login controller return test', async() => {
  //
  //     const result = await testLogin({body: {...user}}, {})
  //     console.log(result)
  // })

  test('sdf', async () => {

    return request(app)
      .post('/api/users/login')
      .set('Authorization', 'Bearer TOKEN')
      .send({
        "email": "andriy@gmail.com",
        "password": "123456"
    })
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.statusCode).toBe(200);
      });
  });
});
