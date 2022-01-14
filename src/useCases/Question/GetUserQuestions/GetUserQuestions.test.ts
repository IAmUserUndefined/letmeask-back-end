jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { QuestionTestRepository } from "../../../repositories/Question/QuestionTestRepository/QuestionTestRepository";

const questionTestRepository = new QuestionTestRepository();

describe("Get Questions", () => {

	beforeAll(async () => {
		await questionTestRepository.createTestQuestion();
	});

	afterAll(async () => {
		await questionTestRepository.deleteTestQuestion();
	});

	test("Should get the question", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.get("/question/hh98bc1b-22f4-4fc6-be64-3d830068beec")
			.set("Authorization", `Bearer ${token.body.response}`);
            
		expect(response.statusCode).toBe(200);
		expect(response.body.response[0].id).not.toBeUndefined();
		expect(response.body.response[0].name).not.toBeUndefined();
	});
});