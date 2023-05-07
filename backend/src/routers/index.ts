import { Router } from "express";
import UserRouter from './user.route';
import { verify } from "../middlewares/request.logger";
import { userController } from "../controllers/user.controller";


const router = Router();
router.use('/users', UserRouter);
router.get('/verify', verify, userController.verify);

export default router;