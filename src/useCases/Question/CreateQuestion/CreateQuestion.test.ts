jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { QuestionTestRepository } from "../../../repositories/Question/QuestionTestRepository/QuestionTestRepository";

const questionTestRepository = new QuestionTestRepository();

describe("Create Question", () => {

	beforeAll(async () => {
		await questionTestRepository.createTestQuestion();
	});

	afterAll(async () => {
		await questionTestRepository.deleteTestQuestion();
	});

	test("Should not create question, because the user is room admin", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				question: "Quando foi a revolução francesa?"
			});

		expect(response.body.response).toBe("O administrador da sala só pode responder perguntas");
		expect(response.statusCode).toBe(401);
	});

	test("Should not create question, because response field is empty", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				question: ""
			});

		expect(response.body.response).toBe("Preencha o nome da questão");
		expect(response.statusCode).toBe(400);
	});

	test("Should create question", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				question: "Quando foi a revolução francesa?"
			});

        
		expect(response.body.response).toBe("Pergunta criada com sucesso");
		expect(response.statusCode).toBe(200);
	});
});