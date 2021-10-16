/* eslint-disable @typescript-eslint/no-unused-vars */

jest.setTimeout(15000);

import { UnauthorizedError } from "../../utils/errors/index";

import adapterRouters from "../adapterRouters/adapterRouters";

import IRequestRouters from "../interfaces/IRequestRouters";

import adapterMiddlewares from "./adapterMiddlewares";

import IRequestMiddleware from "../interfaces/IRequestMiddlewares";

import { ok } from "../adapterResponses/adapterResponses";

import request from "supertest";

import express, { Router, json } from "express";

describe("Adapter routers middlewares", () => {

	test("Should return a unauthorized error", async () => {

		const router = Router();

		const testRouter = router.get("/", 
			adapterMiddlewares(async (request: IRequestMiddleware) => {
				const { authorization } = request.headers;
				
				if(!authorization)
					return new UnauthorizedError("Token Inválido");
			}),
			adapterRouters((request: IRequestRouters) => {
				const userId = request.userId;
				return ok(userId);
			}));		

		const app = express();

		app.use(testRouter);

		const response = await request(app)
			.get("/");

		expect(response.body.response).toBe("Token Inválido");
		expect(response.status).toBe(401);
	});

	test("Should return the user id", async () => {

		const router = Router();

		const testRouter = router.get("/", 
			adapterMiddlewares(async (request: IRequestMiddleware) => {
				const { authorization } = request.headers;

				const [, token] = authorization.split(" ");

				return token;
			}),
			adapterRouters((request: IRequestRouters) => {
				const userId = request.userId;
				return ok(userId);
			}));		

		const app = express();

		app.use(json());
		app.use(testRouter);

		const response = await request(app)
			.get("/")
			.set("Authorization", "Bearer userId");

		expect(response.body.response).toBe("userId");
		expect(response.status).toBe(200);
	});

});