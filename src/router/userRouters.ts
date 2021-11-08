import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";

import CreateUserController from "../useCases/User/CreateUser/CreateUserController";
import VerifyUserEmailController from "../useCases/User/VerifyUserEmail/VerifyUserEmailController";

const router = Router();

router.post("/user/create", adapterRouters(CreateUserController.handle));
router.post("/verify-email", adapterRouters(VerifyUserEmailController.handle));

export default router;