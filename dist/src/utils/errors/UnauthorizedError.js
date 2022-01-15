"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnauthorizedError extends Error {
    constructor(paramName) {
        super(paramName);
        this.name = "UnauthorizedError";
    }
}
exports.default = UnauthorizedError;
