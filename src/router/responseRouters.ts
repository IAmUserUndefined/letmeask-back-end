import { Router } from "express";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";

import authenticateUser from "../middlewares/authenticateUser";
import authenticateAdmin from "../middlewares/authenticateAdmin";

import CreateResponseController from "../useCases/Response/CreateResponse/CreateResponseController";

const router = Router();

router.post(
	"/response/:roomId/:questionId", 
	adapterMiddlewares(authenticateUser), 
	adapterMiddlewares(authenticateAdmin), 
	adapterRouters(CreateResponseController.handle)
);

export default router;