/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	globalSetup: "<rootDir>/dotenv.test.config.ts"
};