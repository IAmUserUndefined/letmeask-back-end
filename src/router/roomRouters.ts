import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";

import CreateRoomController from "../useCases/Room/CreateRoom/CreateRoomController";
import DeleteRoomController from "../useCases/Room/DeleteRoom/DeleteRoomController";
import GetRoomsController from "../useCases/Room/GetRooms/GetRoomsController";

const router = Router();

router.post("/room", adapterMiddlewares(authenticateUser), adapterRouters(CreateRoomController.handle));
router.delete("/room/:roomId", adapterMiddlewares(authenticateUser), adapterMiddlewares(authenticateAdmin), adapterRouters(DeleteRoomController.handle));
router.get("/room", adapterMiddlewares(authenticateUser), adapterRouters(GetRoomsController.handle));

export default router;