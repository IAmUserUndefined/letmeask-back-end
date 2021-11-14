import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";
import ensureUserNotBeRoomAdmin from "../middlewares/ensureUserNotBeRoomAdmin";

import CreateQuestionController from "../useCases/Question/CreateQuestion/CreateQuestionController";
import DeleteQuestionController from "../useCases/Question/DeleteQuestion/DeleteQuestionController";

const router = Router();

router.post(
	"/question/:roomId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(ensureUserNotBeRoomAdmin), 
	adapterRouters(CreateQuestionController.handle)
);

router.delete(
	"/question/:roomId/:questionId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(authenticateAdmin), 
	adapterRouters(DeleteQuestionController.handle)
);

export default router;