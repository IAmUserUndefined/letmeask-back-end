import { UserRepository } from "../../User/UserRepository/UserRepository";
import { RoomRepository } from "../../Room/RoomRepository/RoomRepository";
import { QuestionRepository } from "../../Question/QuestionRepository/QuestionRepository";
import { ResponseRepository } from "./ResponseRepository";

describe(("Test of response repository"), () => {

	beforeAll(async () => {
		const userRepository = new UserRepository();
		await userRepository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
		const roomRepository = new RoomRepository();
		await roomRepository.store("1", "1", "#45645489489", "Matemática");
		const questionRepository = new QuestionRepository();
		await questionRepository.store("1", "1", "#45645489489", "Qual é a fórmula de Bhaskara");
	});

	afterAll(async () => {
		const questionRepository = new QuestionRepository();
		await questionRepository.destroy("1");
		const roomRepository = new RoomRepository();
		await roomRepository.destroy("#45645489489");
		const userRepository = new UserRepository();
		await userRepository.destroy("1");
	});

	test("Should create response", async () => {
		const repository = new ResponseRepository();
		await repository.store("1", "(-b -+ Raiz Quadra (b ^ 2 - 4 * a * c)) / 2a");
	});
});