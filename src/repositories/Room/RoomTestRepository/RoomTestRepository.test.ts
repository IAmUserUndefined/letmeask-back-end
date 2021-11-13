import { RoomTestRepository } from "./RoomTestRepository";

describe(("Test of user repository"), () => {

	test("Should create test user", async () => {
		const repository = new RoomTestRepository();
		await repository.createTestRoom();
	});

	test("Should remove test user", async () => {
		const repository = new RoomTestRepository();
		await repository.deleteTestRoom();
	});

});