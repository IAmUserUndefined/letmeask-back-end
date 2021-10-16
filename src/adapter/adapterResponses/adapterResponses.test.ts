/* eslint-disable @typescript-eslint/no-unused-vars */

jest.setTimeout(15000);

import { ok } from "./adapterResponses";

describe("Adapter responses test", () => {

	test("Should return a object with two attributes, the response and the status code", async () => {

		const { statusCode, response } = await ok("Response");

		expect(response).toBe("Response");
		expect(statusCode).toBe(200);

	});
});