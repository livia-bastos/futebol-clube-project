import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const user = req.body;
    if (user.email.length === 0 || user.password.length === 0) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    if (user.password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(user.email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }
}

export default Validations;
