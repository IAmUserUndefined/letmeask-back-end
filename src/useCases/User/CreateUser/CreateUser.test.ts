jest.setTimeout(15000);

import request from "supertest";

import app from "../../../app";

import { UserTestRepository } from "../../../repositories/User/UserTestRepository/UserTestRepository";

const userTestRepository = new UserTestRepository();

describe("Create User", () => {

	beforeAll(async () => {
		await userTestRepository.createTestUsers();
	});

	afterAll(async () => {
		await userTestRepository.deleteTestUsers();
	});

	test("Should not create the user, because the email field is empty", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "",
				name: "João Pedro",
				password: "Corinthians1910",
				passwordConfirm: "Corinthians1910"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");

	});

	test("Should not create the user, because the name field is empty", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao@teste.com",
				name: "",
				password: "Corinthians1910",
				passwordConfirm: "Corinthians1910"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");

	});

	test("Should not create the user, because the password field is empty", async() => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao@teste.com",
				password: "",
				name: "João Pedro",
				passwordConfirm: "Corinthians1910"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not create the user, because the password confirm field is empty", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao@teste.com",
				name: "João Pedro",
				password: "Corinthians1910",
				passwordConfirm: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not create the user, because all fields is empty", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "",
				name: "",
				password: "",
				passwordConfirm: ""
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not create the user, because the email already was registered", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao@teste.com",
				name: "João Pedro",
				password: "Corinthians1910",
				passwordConfirm: "Corinthians1910"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Email já cadastrado");
	});

	test("Should not create the user, because the passwords is not match", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao2000@teste.com",
				name: "João Pedro",
				password: "Corinthians1910",
				passwordConfirm: "Corinthians191"
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("As senhas não coincidem");
	});

	test("Should create the user", async () => {

		const response = await request(app)
			.post("/user/create")
			.send({
				email: "joao2000@teste.com",
				name: "João Pedro",
				password: "Corinthians1910",
				passwordConfirm: "Corinthians1910"
			});

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Usuário cadastrado com sucesso, verique seu email, não esqueça de verificar sua caixa de spam");

	});
});