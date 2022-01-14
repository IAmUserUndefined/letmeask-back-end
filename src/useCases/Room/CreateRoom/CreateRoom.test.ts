jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { RoomTestRepository } from "../../../repositories/Room/RoomTestRepository/RoomTestRepository";

const roomTestRepository = new RoomTestRepository();

describe("Create Room", () => {

	beforeAll(async () => {
		await roomTestRepository.createTestRoom();
	});

	afterAll(async () => {
		await roomTestRepository.deleteTestRoom();
	});

	test("Should not create room, because user alredy created has a room", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/room")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				name: "Matemática"
			});

		expect(response.statusCode).toBe(401);
		expect(response.body.response).toBe("Você já tem uma sala criada, exclua ela para criar outra");
	});

	test("Should not create room, because user alredy created has a room", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/room")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				name: ""
			});
            
		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha o nome da sala");
	});

	test("Should create room", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao1000@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/room")
			.set("Authorization", `Bearer ${token.body.response}`)
			.send({
				name: "História"
			});
            
		expect(response.statusCode).toBe(200);
	});
    
});