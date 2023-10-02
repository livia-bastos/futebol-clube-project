import { NextFunction, Request, Response } from 'express';
import jwt = require('jsonwebtoken');

class validateToken {
  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    try {
      const { authorization } = req.headers;
      if (!authorization) return res.status(401).json({ message: 'Token not found' });
      const token = authorization.split(' ')[1];
      const payload = jwt.verify(token, 'jwt_secret');
      req.body = payload;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}

export default validateToken;
