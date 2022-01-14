jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { UserTestRepository } from "../../../repositories/User/UserTestRepository/UserTestRepository";

const userTestRepository = new UserTestRepository();

describe("Update User Email", () => {

	beforeAll(async () => {
		await userTestRepository.createTestUsers();
	});

	afterAll(async () => {
		await userTestRepository.deleteTestUsers();
	});

	test("Should get name", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/get-name")
			.send({
				userId: "aa98bc1b-22f4-4fc6-be64-3d830068bddc"
			})
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.body.response).toBe("João Pedro");
		expect(response.statusCode).toBe(200);
	});
});