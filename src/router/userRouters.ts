import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";

import CreateUserController from "../useCases/User/CreateUser/CreateUserController";
import VerifyUserEmailController from "../useCases/User/VerifyUserEmail/VerifyUserEmailController";
import UserLoginController from "../useCases/User/UserLogin/UserLoginController";

const router = Router();

router.post("/user/create", adapterRouters(CreateUserController.handle));
router.post("/verify-email", adapterRouters(VerifyUserEmailController.handle));
router.post("/user/login", adapterRouters(UserLoginController.handle));

export default router;