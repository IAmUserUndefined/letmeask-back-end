import Cache from "./Cache";

describe("Cache test", () => {

	afterAll(() => Cache.del("key"));

	test("Should set and get the cache", async () => {
		Cache.set("key", "value");
		expect(Cache.get("key")).toBe("value");
	});
});