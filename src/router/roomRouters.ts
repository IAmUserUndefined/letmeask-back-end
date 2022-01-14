import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";

import CreateRoomController from "../useCases/Room/CreateRoom/CreateRoomController";
import DeleteRoomController from "../useCases/Room/DeleteRoom/DeleteRoomController";
import GetRoomController from "../useCases/Room/GetRoom/GetRoomController";
import GetUserRoomCodeController from "../useCases/Room/GetUserRoomCode/GetUserRoomCodeController";

const router = Router();

router.post("/room", adapterMiddlewares(authenticateUser), adapterRouters(CreateRoomController.handle));
router.delete("/room/:roomCode", adapterMiddlewares(authenticateUser), adapterMiddlewares(authenticateAdmin), adapterRouters(DeleteRoomController.handle));
router.get("/room/:roomCode", adapterMiddlewares(authenticateUser), adapterRouters(GetRoomController.handle));
router.get("/room-code", adapterMiddlewares(authenticateUser), adapterRouters(GetUserRoomCodeController.handle));

export default router;