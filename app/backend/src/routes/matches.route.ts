import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const matchesController = new MatchesController();

const router = Router();

router.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));
router.patch(
  '/:id/finish',
  validateToken.validateToken,
  (req: Request, res: Response) => matchesController.updateMatch(req, res),
);
router.patch(
  '/:id',
  validateToken.validateToken,
  (req: Request, res: Response) => matchesController.updateMatch(req, res),
);

router.post(
  '/',
  validateToken.validateToken,
  (req: Request, res: Response) => matchesController.createMatch(req, res),
);

export default router;
