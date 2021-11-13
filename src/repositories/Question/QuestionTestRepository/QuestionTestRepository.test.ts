import { QuestionTestRepository } from "./QuestionTestRepository";

describe(("Test of user repository"), () => {

	test("Should create test user", async () => {
		const repository = new QuestionTestRepository();
		await repository.createTestQuestion();
	});

	test("Should remove test user", async () => {
		const repository = new QuestionTestRepository();
		await repository.deleteTestQuestion();
	});

});