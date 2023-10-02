import { Request, Router, Response } from 'express';
import validateToken from '../middlewares/validateToken';
import UsersController from '../controllers/UsersController';
import Validations from '../middlewares/validations';

const userController = new UsersController();

const router = Router();

router.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => userController.allowLogin(req, res),
);
router.get(
  '/role',
  validateToken.validateToken,
  (req: Request, res: Response) => UsersController.returnRole(req, res),
);

export default router;
