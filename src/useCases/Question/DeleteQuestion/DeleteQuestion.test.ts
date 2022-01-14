jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { QuestionTestRepository } from "../../../repositories/Question/QuestionTestRepository/QuestionTestRepository";

const questionTestRepository = new QuestionTestRepository();

describe("Delete Question", () => {

	beforeAll(async () => {
		await questionTestRepository.createTestQuestion();
	});

	afterAll(async () => {
		await questionTestRepository.deleteTestQuestion();
	});

	test("Should not delete the question, because user is not room admin", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(401);
		expect(response.body.response).toBe("Só o administrador da sala pode fazer essa ação");
	});

	test("Should delete the question", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.body.response).toBe("Questão excluída com sucesso");
		expect(response.statusCode).toBe(200);
	});
});