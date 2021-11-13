import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";

import CreateRoomController from "../useCases/Room/CreateRoom/CreateRoomController";

const router = Router();

router.post("/room", adapterMiddlewares(authenticateUser), adapterRouters(CreateRoomController.handle));

export default router;