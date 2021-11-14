jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { ResponseTestRepository } from "../../../repositories/Response/ResponseTestRepository/ResponseTestRepository";

const responseTestRepository = new ResponseTestRepository();

describe("Create Question", () => {

	beforeAll(async () => {
		await responseTestRepository.createTestResponse();
	});

	afterAll(async () => {
		await responseTestRepository.deleteTestResponse();
	});

	test("Should not create response, because the user is not room admin", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				response: "Em 1789"
			});

		expect(response.body.response).toBe("Só o administrador da sala pode fazer essa ação");
		expect(response.statusCode).toBe(401);
	});

	test("Should not create response, because response field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				response: ""
			});

		expect(response.body.response).toBe("Preencha o nome da resposta");
		expect(response.statusCode).toBe(400);
	});

	test("Should create response", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				response: "Em 1789"
			});

		expect(response.body.response).toBe("Resposta enviada com sucesso");
		expect(response.statusCode).toBe(200);
	});
});