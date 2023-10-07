import { Router } from 'express';
import teamsRoute from './teams.route';
import userRoute from './users.route';
import matchesRoute from './matches.route';
import leaderBoardRoute from './leaderboard.route';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', userRoute);
router.use('/login/role', userRoute);
router.use('/matches', matchesRoute);
router.use('/matches/:id/finish', matchesRoute);
router.use('/leaderboard', leaderBoardRoute);

export default router;
