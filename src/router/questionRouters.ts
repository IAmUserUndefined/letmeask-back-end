import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import ensureUserNotBeRoomAdmin from "../middlewares/ensureUserNotBeRoomAdmin";

import CreateQuestionController from "../useCases/Question/CreateQuestion/CreateQuestionController";
import DeleteQuestionController from "../useCases/Question/DeleteQuestion/DeleteQuestionController";
import GetQuestionsController from "../useCases/Question/GetQuestions/GetQuestionsController";
import GetUserQuestionsController from "../useCases/Question/GetUserQuestions/GetUserQuestionsController";

const router = Router();

router.post(
	"/question/:roomCode", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(ensureUserNotBeRoomAdmin), 
	adapterRouters(CreateQuestionController.handle)
);

router.delete(
	"/question/:questionId", 
	adapterMiddlewares(authenticateUser), 
	adapterRouters(DeleteQuestionController.handle)
);

router.get(
	"/question/:roomCode/", 
	adapterMiddlewares(authenticateUser), 
	adapterRouters(GetQuestionsController.handle)
);

router.get("/question", adapterMiddlewares(authenticateUser), adapterRouters(GetUserQuestionsController.handle));

export default router;