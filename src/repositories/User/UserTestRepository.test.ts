import { createConnection } from "typeorm";
import { UserTestRepository } from "./UserTestRepository";

describe(("Test of user repository"), () => {

	beforeAll(async () => {
		await createConnection();
	});

	test("Should create test user", async () => {
		const repository = new UserTestRepository();
		await repository.createTestUsers();
	});

	test("Should remove test user", async () => {
		const repository = new UserTestRepository();
		await repository.deleteTestUsers();
	});

});