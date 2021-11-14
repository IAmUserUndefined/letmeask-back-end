jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { ResponseTestRepository } from "../../../repositories/Response/ResponseTestRepository/ResponseTestRepository";

const responseTestRepository = new ResponseTestRepository();

describe("Get Questions", () => {

	beforeAll(async () => {
		await responseTestRepository.createTestResponse();
	});

	afterAll(async () => {
		await responseTestRepository.deleteTestResponse();
	});

	test("Should get responses", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.get("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beea")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(200);
		expect(response.body.response[0].id).not.toBeUndefined();
		expect(response.body.response[0].name).not.toBeUndefined();
	});
});