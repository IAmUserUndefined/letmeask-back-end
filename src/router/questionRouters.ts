import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import ensureUserNotBeRoomAdmin from "../middlewares/ensureUserNotBeRoomAdmin";

import CreateQuestionController from "../useCases/Question/CreateQuestion/CreateQuestionController";

const router = Router();

router.post("/question/:roomId", adapterMiddlewares(authenticateUser), adapterMiddlewares(ensureUserNotBeRoomAdmin), adapterRouters(CreateQuestionController.handle));

export default router;