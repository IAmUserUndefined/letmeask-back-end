jest.setTimeout(15000);

import request from "supertest";

import app from "../../../../app";

import { UserTestRepository } from "../../../../repositories/User/UserTestRepository/UserTestRepository";

const userTestRepository = new UserTestRepository();

describe("Recover user password", () => {

	beforeAll(async () => {
		await userTestRepository.createTestUsers();
	});

	afterAll(async () => {
		await userTestRepository.deleteTestUsers();
	});

	test("Should not recovery password, because the field email is empty", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not recovery password, because the verification token field is empty", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not recovery password, because the password new field is empty", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not recovery password, because the confirm new password field is empty", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "",
			});


		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not recovery password, because all fields are empty", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "",
				token: "",
			})
			.send({
				password: "",
				passwordConfirm: "",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Preencha todos os campos");
	});

	test("Should not recovery password, because the verification token is incorrect", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc75",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Token Inválido");
	});

	test("Should not recovery password, because the link was expired", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao5000@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("Link expirado, recomece o processo");
	});

	test("Should not recovery password, because the password is equal as previous", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians1910",
				passwordConfirm: "Corinthians1910",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("A sua nova senha não pode ser igual a anterior");
	});

	test("Should not recovery password, because the passwords is not match", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians20123",
			});

		expect(response.statusCode).toBe(400);
		expect(response.body.response).toBe("As senhas não coincidem");
	});

	test("Should recovery password", async () => {

		const response = await request(app)
			.patch("/user/password/password-recover")
			.query({
				email: "joao@teste.com",
				token: "544f818f5f5cd4cde44c611683fc71",
			})
			.send({
				password: "Corinthians2012",
				passwordConfirm: "Corinthians2012",
			});

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Senha atualizada com sucesso");
	});
});