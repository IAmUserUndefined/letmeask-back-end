import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";

import CreateUserController from "../useCases/User/CreateUser/CreateUserController";

const router = Router();

router.post("/user/create", adapterRouters(CreateUserController.handle));

export default router;