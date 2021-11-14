import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";

import CreateRoomController from "../useCases/Room/CreateRoom/CreateRoomController";
import DeleteRoomController from "../useCases/Room/DeleteRoom/DeleteRoomController";

const router = Router();

router.post("/room", adapterMiddlewares(authenticateUser), adapterRouters(CreateRoomController.handle));
router.delete("/room/:roomId", adapterMiddlewares(authenticateUser), adapterMiddlewares(authenticateUser), adapterRouters(DeleteRoomController.handle));

export default router;