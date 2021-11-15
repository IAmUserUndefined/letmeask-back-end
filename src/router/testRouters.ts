/* eslint-disable @typescript-eslint/no-unused-vars */

import { MissingParamError, UnauthorizedError } from "../utils/errors";

import IRequestRouters from "../adapter/interfaces/IRequestRouters";
import IRequestMiddleware from "../adapter/interfaces/IRequestMiddlewares";

import adapterRouters from "../adapter/adapterRouters/adapterRouters";
import adapterMiddlewares from "../adapter/adapterMiddlewares/adapterMiddlewares";
import { ok } from "../adapter/adapterResponses/adapterResponses";

import { Router } from "express";

const router = Router();

router.get("/router", adapterRouters((request: IRequestRouters) => {
	return ok("Response");
}));	

router.post("/router-email", adapterRouters((request: IRequestRouters) => {
	const { email } = request.body;
	return ok(email);
}));	

router.post("/router-email-query", adapterRouters((request: IRequestRouters) => {
	const { email } = request.query;
	return ok(email);
}));

router.post("/router/:id", adapterRouters((request: IRequestRouters) => {
	const { id } = request.params;
	return ok(id);
}));

router.get("/router-error", adapterRouters((request: IRequestRouters) => {
	return ok(new MissingParamError("Preencha todos os campos"));
}));

router.get("/middleware-unathorized", 
	adapterMiddlewares(async (request: IRequestMiddleware) => {
		const { authorization } = request.headers;
				
		if(!authorization)
			return new UnauthorizedError("Token Inválido");
	}),
	adapterRouters((request: IRequestRouters) => {
		const userId = request.userId;
		return ok(userId);
	}));	

router.get("/middleware-userid", 
	adapterMiddlewares(async (request: IRequestMiddleware) => {
		const { authorization } = request.headers;

		const [, token] = authorization.split(" ");

		return token;
	}),
	adapterRouters((request: IRequestRouters) => {
		const userId = request.userId;
		return ok(userId);
	}));		


export default router;