interface ICache {
    set(key: string, value: string, expiryTime?: number): void;
    get(key: string): string;
    del(key: string): void;
}

export default ICache;