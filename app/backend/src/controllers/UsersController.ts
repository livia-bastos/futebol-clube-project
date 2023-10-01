import { Request, Response } from 'express';
// import mapStatusHTTP from '../utils/MapStatusHttp';
import jwt = require('jsonwebtoken');
import UserService from '../services/UserService';

export default class UsersController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async allowLogin(req: Request, res: Response) {
    const serviceResponse = await this.userService.allowLogin(req.body);
    if (!serviceResponse) return res.status(401).json({ message: 'Invalid email or password' });
    const token = jwt.sign(req.body, 'jwt_secret', {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  }
}
