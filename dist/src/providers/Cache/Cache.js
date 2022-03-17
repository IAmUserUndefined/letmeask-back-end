"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
const Cache = class Cache {
    static set(key, value, expiryTime) {
        cache.set(key, value, expiryTime);
    }
    static get(key) {
        return cache.get(key);
    }
    static del(key) {
        cache.del(key);
    }
};
exports.default = Cache;
