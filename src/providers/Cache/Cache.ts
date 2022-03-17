import NodeCache from "node-cache";
import ICache from "./ICache";

const cache = new NodeCache();

const Cache: ICache = class Cache {

	static set(key: string, value: string, expiryTime?: number): void {
		cache.set(key, value, expiryTime);
	}

	static get(key: string): string {
		return cache.get(key);
	}
    
	static del(key: string): void {
		cache.del(key);
	}
};

export default Cache;