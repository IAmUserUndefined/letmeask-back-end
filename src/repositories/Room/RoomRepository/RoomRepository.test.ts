import { UserRepository } from "../../User/UserRepository/UserRepository";
import { RoomRepository } from "./RoomRepository";

describe(("Test of room repository"), () => {

	beforeAll(async () => {
		const repository = new UserRepository();
		await repository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
	});

	afterAll(async () => {
		const repository = new UserRepository();
		await repository.destroy("1");
	});

	test("Should create room", async () => {
		const repository = new RoomRepository();
		await repository.store("1", "1", "#45645489489", "Matemática");
	});

	test("Should get rooms", async () => {
		const repository = new RoomRepository();
		const room = await repository.getRoom("#45645489489");
		expect(room.id).toBe("1");
		expect(room.userId).toBe("1");
		expect(room.code).toBe("#45645489489");
		expect(room.name).toBe("Matemática");
	});

	test("Should delete room", async () => {
		const repository = new RoomRepository();
		await repository.destroy("#45645489489");
	});
});