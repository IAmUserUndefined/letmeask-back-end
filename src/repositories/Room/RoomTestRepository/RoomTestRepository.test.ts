import { RoomTestRepository } from "./RoomTestRepository";

describe(("Test of room repository"), () => {

	test("Should create test room", async () => {
		const repository = new RoomTestRepository();
		await repository.createTestRoom();
	});

	test("Should remove test room", async () => {
		const repository = new RoomTestRepository();
		await repository.deleteTestRoom();
	});

});