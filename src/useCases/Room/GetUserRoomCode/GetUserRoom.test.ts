jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { RoomTestRepository } from "../../../repositories/Room/RoomTestRepository/RoomTestRepository";

const roomTestRepository = new RoomTestRepository();

describe("Get room", () => {

	beforeAll(async () => {
		await roomTestRepository.createTestRoom();
	});

	afterAll(async () => {
		await roomTestRepository.deleteTestRoom();
	});
    
	test("Should get room", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.get("/room-code")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(200);
	});
});