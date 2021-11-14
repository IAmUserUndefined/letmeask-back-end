import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";

import CreateResponseController from "../useCases/Response/CreateResponse/CreateResponseController";
import GetResponsesController from "../useCases/Response/GetResponses/GetResponsesController";
import DeleteResponseController from "../useCases/Response/DeleteResponse/DeleteResponseController";

const router = Router();

router.post(
	"/response/:roomId/:questionId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(authenticateAdmin), 
	adapterRouters(CreateResponseController.handle)
);

router.get("/response/:roomId/:questionId", adapterMiddlewares(authenticateUser), adapterRouters(GetResponsesController.handle));

router.delete(
	"/response/:roomId/:responseId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(authenticateAdmin), 
	adapterRouters(DeleteResponseController.handle)
);

export default router;