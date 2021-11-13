import { ResponseTestRepository } from "./ResponseTestRepository";

describe(("Test of response repository"), () => {

	test("Should create test response", async () => {
		const repository = new ResponseTestRepository();
		await repository.createTestResponse();
	});

	test("Should remove test response", async () => {
		const repository = new ResponseTestRepository();
		await repository.deleteTestResponse();
	});

});