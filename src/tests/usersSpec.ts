import { UsersModel } from '../models/users';
import app from '../server';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';

const user = new UsersModel();

const request = supertest(app);

const newUser = {
  firstName: 'first',
  lastName: 'last',
  password: '12345678',
};

const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string);

describe('Testing User Methods', () => {
  it('A method that get all users', () => {
    expect(user.index).toBeDefined();
  });

  it('A method that get a specific user', () => {
    expect(user.show).toBeDefined();
  });

  it('A method that create a new user', () => {
    expect(user.create).toBeDefined();
  });
  it('A method that update data of a user', () => {
    expect(user.update).toBeDefined();
  });
  it('A method that delete a user', () => {
    expect(user.delete).toBeDefined();
  });
});
describe('Testing Users Endpoints.', () => {
  it('GET /users without prodiving a token', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(401);
  });

  it('GET /users with providing a token', async () => {
    const response = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('GET /user/:id without prodiving a token', async () => {
    const response = await request.get('/user/1');
    expect(response.status).toBe(401);
  });

  it('GET /user/:id with providing a token', async () => {
    const response = await request
      .get('/user/1')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('POST /user', async () => {
    const response = await request.post('/user').send({
      firstName: 'first',
      lastName: 'last',
      password: '12345678',
    });
    expect(response.status).toBe(200);
  });

  it('PUT /user without prodiving a token', async () => {
    const response = await request.put('/user').send({
      id: 1,
      firstName: 'update',
      lastName: 'update',
      password: 'update',
    });
    expect(response.status).toBe(401);
  });

  it('PUT /user with providing a token', async () => {
    const response = await request
      .put('/user')
      .send({
        id: 1,
        firstName: 'update',
        lastName: 'update',
        password: 'update',
      })
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it('DELETE /user without prodiving a token', async () => {
    const response = await request.delete('/user').send({
      id: 1,
    });
    expect(response.status).toBe(401);
  });

  // it('DELETE /user with providing a token', async () => {
  //   const response = await request
  //     .delete('/user')
  //     .send({
  //       id: 1,
  //     })
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(response.status).toBe(200);
  // });
});
