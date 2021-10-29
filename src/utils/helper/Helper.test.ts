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

describe("Test of environment variable get", () => {

	test("Should return environment variable ", () => {
          
		const appUrl = Helper.getAppUrlEnvironmentVariable();
		const email = Helper.getEmailEnvironmentVariable();
		const password = Helper.getEmailPasswordEnvironmentVariable();
		const secretKeyJwt = Helper.getSecretKeyJwtEnvironmentVariable();
		const databaseUsername = Helper.getDatabaseUsernameEnvironmentVariable();
		const databasePassword = Helper.getDatabasePasswordEnvironmentVariable();
		const databaseType = Helper.getDatabaseTypeEnvironmentVariable();
		const databasePort = Helper.getDatabasePortEnvironmentVariable();
		const databaseName = Helper.getDatabaseNameEnvironmentVariable();
		const host = Helper.getHostEnvironmentVariable();

		expect(appUrl).not.toBeUndefined();
		expect(email).not.toBeUndefined();
		expect(password).not.toBeUndefined();
		expect(secretKeyJwt).not.toBeUndefined();
		expect(databaseUsername).not.toBeUndefined();
		expect(databasePassword).not.toBeUndefined();
		expect(databaseType).not.toBeUndefined();
		expect(databasePort).not.toBeUndefined();
		expect(databaseName).not.toBeUndefined();
		expect(host).not.toBeUndefined();
	});
});