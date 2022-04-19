import { UsersModel } from '../models/users';
import { Application, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { verifyAuthToken } from '../middleware/verifyAuthToken';

const users = new UsersModel();

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const getUsers = await users.index();
    res.send(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await users.show(id);
    res.send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password } = req.body;
    const newUser = await users.create(firstName, lastName, password);
    const token = jwt.sign(newUser, process.env.TOKEN_SECRET as string);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id, firstName, lastName, password } = req.body;
    const updatedUser = await users.update(id, firstName, lastName, password);
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const deletedUser = await users.delete(id);
    res.send(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const users_routes = (app: Application) => {
  app.get('/users', verifyAuthToken, getAllUsers);
  app.get('/user/:id', verifyAuthToken, getUser);
  app.post('/user', createUser);
  app.put('/user', verifyAuthToken, updateUser);
  app.delete('/user', verifyAuthToken, deleteUser);
};

export default users_routes;
