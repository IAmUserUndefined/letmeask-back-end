"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MissingParamError extends Error {
    constructor(paramName) {
        super(paramName);
        this.name = "MissingParamError";
    }
}
exports.default = MissingParamError;
