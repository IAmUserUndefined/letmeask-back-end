import { QuestionTestRepository } from "./QuestionTestRepository";

describe(("Test of question repository"), () => {

	test("Should create test question", async () => {
		const repository = new QuestionTestRepository();
		await repository.createTestQuestion();
	});

	test("Should remove test question", async () => {
		const repository = new QuestionTestRepository();
		await repository.deleteTestQuestion();
	});

});