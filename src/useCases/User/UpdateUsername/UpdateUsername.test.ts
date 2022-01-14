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

	test("Should not update email, because the email field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.patch("/update-name")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				name: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha o seu novo nome");
	});

	test("Should update name", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.patch("/update-name")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				name: "Pedro"
			});

		expect(response.body.response).toBe("Nome atualizado com sucesso");
		expect(response.statusCode).toBe(200);
	});
});