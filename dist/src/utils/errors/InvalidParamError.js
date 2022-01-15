"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidParamError extends Error {
    constructor(paramName) {
        super(paramName);
        this.name = "InvalidParamError";
    }
}
exports.default = InvalidParamError;
