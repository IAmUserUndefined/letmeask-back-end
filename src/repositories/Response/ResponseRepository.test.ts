import { createConnection } from "typeorm";
import { UserRepository } from "../User/UserRepository";
import { RoomRepository } from "../Room/RoomRepository";
import { QuestionRepository } from "../Question/QuestionRepository";
import { ResponseRepository } from "./ResponseRepository";

describe(("Test of response repository"), () => {

	beforeAll(async () => {
		await createConnection();
		const userRepository = new UserRepository();
		await userRepository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
		const roomRepository = new RoomRepository();
		await roomRepository.store("1", "1", "#45645489489", "Matemática");
		const questionRepository = new QuestionRepository();
		await questionRepository.store("1", "1", "Qual é a fórmula de Bhaskara");
	});

	afterAll(async () => {
		const repository = new UserRepository();
		await repository.destroy("1");
	});

	test("Should create response", async () => {
		const repository = new ResponseRepository();
		await repository.store("1", "1", "(-b -+ Raiz Quadra (b ^ 2 - 4 * a * c)) / 2a");
	});

	test("Should get response", async () => {
		const repository = new ResponseRepository();
		const question = await repository.getResponse("1");
		expect(question[0].id).toBe("1");
		expect(question[0].questionId).toBe("1");
		expect(question[0].name).toBe("(-b -+ Raiz Quadra (b ^ 2 - 4 * a * c)) / 2a");
	});

	test("Should delete response", async () => {
		const repository = new ResponseRepository();
		await repository.destroy("1");
	});
});