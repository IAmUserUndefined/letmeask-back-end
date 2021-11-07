import { UserRepository } from "./UserRepository";

describe(("Test of user repository"), () => {

	test("Should create user", async () => {
		const repository = new UserRepository();
		await repository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
	});

	test("Should verify user", async () => {
		const repository = new UserRepository();
		await repository.verifyEmail("email@teste.com", "abc-123-456");
	});

	test("Should update name", async () => {
		const repository = new UserRepository();
		await repository.updateName("1", "Pedro João");
	});

	test("Should return email by id", async () => {
		const repository = new UserRepository();
		const email = await repository.findEmailById("1");
		expect(email).toBe("email@teste.com");
	});

	test("Should return email by email", async () => {
		const repository = new UserRepository();
		const email = await repository.findEmailByEmail("email@teste.com");
		expect(email).toBe("email@teste.com");
	});

	test("Should return id", async () => {
		const repository = new UserRepository();
		const email = await repository.getId("email@teste.com");
		expect(email).toBe("1");
	});

	test("Should return password by id", async () => {
		const repository = new UserRepository();
		const email = await repository.getPasswordById("1");
		expect(email).toBe("Teste123");
	});

	test("Should return password by email", async () => {
		const repository = new UserRepository();
		const email = await repository.getPasswordByEmail("email@teste.com");
		expect(email).toBe("Teste123");
	});

	test("Should return verification token by id", async () => {
		const repository = new UserRepository();
		const verificationToken = await repository.getVerificationTokenById("1");
		expect(verificationToken).toBe("abc-123-456");
	});

	test("Should return verification token by email", async () => {
		const repository = new UserRepository();
		const verificationToken = await repository.getVerificationTokenByEmail("email@teste.com");
		expect(verificationToken).toBe("abc-123-456");
	});

	test("Should update verification token by id", async () => {
		const repository = new UserRepository();
		await repository.updateVerificationTokenById("1", "efg-213-456");
	});

	test("Should update verification token by email", async () => {
		const repository = new UserRepository();
		await repository.updateVerificationTokenByEmail("email@teste.com", "efg-213-456");
	});

	test("Should return verification token expiry date by id", async () => {
		const repository = new UserRepository();
		const verificationTokenExpiryDate = await repository.getVerificationTokenExpiryDateById("1");
		expect(verificationTokenExpiryDate).toBe(BigInt(0));
	});

	test("Should return verification token expiry date by email", async () => {
		const repository = new UserRepository();
		const verificationTokenExpiryDate = await repository.getVerificationTokenExpiryDateByEmail("email@teste.com");
		expect(verificationTokenExpiryDate).toBe(BigInt(0));
	});

	test("Should update verification token expiry date by id", async () => {
		const repository = new UserRepository();
		await repository.updateVerificationTokenExpiryDateById("1", BigInt(1));
	});

	test("Should update verification token expiry date by email", async () => {
		const repository = new UserRepository();
		await repository.updateVerificationTokenExpiryDateByEmail("email@teste.com", BigInt(1));
	});

	test("Should update email", async () => {
		const repository = new UserRepository();
		await repository.updateEmail("1", "email1@teste.com");
	});

	test("Should update password by id", async () => {
		const repository = new UserRepository();
		await repository.updatePasswordById("1", "Teste456");
	});

	test("Should update password by email", async () => {
		const repository = new UserRepository();
		await repository.updatePasswordByEmail("email1@teste.com", "Teste789");
	});

	test("Should delete user", async () => {
		const repository = new UserRepository();
		await repository.destroy("1");
	});

});