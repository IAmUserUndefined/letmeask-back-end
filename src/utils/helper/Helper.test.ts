import Helper from "./Helper";

describe(("Test of create functions"), () => {
	test("Should not return undefined", () => {
		const id = Helper.createId();
		const token = Helper.createToken();

		expect(id).not.toBeUndefined();
		expect(token).not.toBeUndefined();
	});
});

describe(("Test of password encryption"), () => {
	test("Should return a encryption", () => {
		const passwordEncrypt = Helper.encryptPassword("Password123");
		expect(passwordEncrypt).not.toBeUndefined();
	});
});