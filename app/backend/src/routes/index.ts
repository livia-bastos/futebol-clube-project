import { Router } from 'express';
import teamsRoute from './teams.route';
import userRoute from './users.route';
import matchesRoute from './matches.route';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', userRoute);
router.use('/login/role', userRoute);
router.use('/matches', matchesRoute);
router.use('/matches/:id/finish', matchesRoute);

export default router;
