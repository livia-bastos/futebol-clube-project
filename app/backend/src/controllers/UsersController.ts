import { Request, Response } from 'express';
import jwt = require('jsonwebtoken');
import UserService from '../services/UserService';

export default class UsersController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async allowLogin(req: Request, res: Response) {
    const serviceResponse = await this.userService.allowLogin(req.body);
    if (!serviceResponse) return res.status(401).json({ message: 'Invalid email or password' });
    req.body.role = serviceResponse.data.role;
    const token = jwt.sign(req.body, 'jwt_secret', {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  }

  public static returnRole(req: Request, res: Response) {
    const { role } = req.body;
    res.status(200).json({ role });
  }
}
