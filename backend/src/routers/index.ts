import { Router } from "express";
import UserRouter from './user.route';
import { verify } from "../middlewares/request.logger";
import UserController from "../controllers/user.controller";


const router = Router();
router.use('/users', UserRouter);
router.get('/verify', verify, UserController.verify);

export default router;