import { ResponseTestRepository } from "./ResponseTestRepository";

describe(("Test of user repository"), () => {

	test("Should create test user", async () => {
		const repository = new ResponseTestRepository();
		await repository.createTestResponse();
	});

	test("Should remove test user", async () => {
		const repository = new ResponseTestRepository();
		await repository.deleteTestResponse();
	});

});