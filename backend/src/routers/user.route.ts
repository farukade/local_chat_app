import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

router.get('/', userController.get);
router.post('/', userController.create);
router.post('/login', userController.login);
router.delete('/', userController.delete);
router.patch('/login', userController.update);

export default router;