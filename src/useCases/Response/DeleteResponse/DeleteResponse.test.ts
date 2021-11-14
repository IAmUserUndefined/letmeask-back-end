jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { ResponseTestRepository } from "../../../repositories/Response/ResponseTestRepository/ResponseTestRepository";

const responseTestRepository = new ResponseTestRepository();

describe("Delete Response", () => {

	beforeAll(async () => {
		await responseTestRepository.createTestResponse();
	});

	afterAll(async () => {
		await responseTestRepository.deleteTestResponse();
	});

	test("Should not delete response, because user is not the room admin", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beea")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.body.response).toBe("Só o administrador da sala pode fazer essa ação");
		expect(response.statusCode).toBe(401);
	});

	test("Should delete response", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete("/response/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beea")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.body.response).toBe("Resposta excluída com sucesso");
		expect(response.statusCode).toBe(200);
	});

});