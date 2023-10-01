import { Router } from 'express';
import teamsRoute from './teams.route';
import userRoute from './users.route';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', userRoute);

export default router;
