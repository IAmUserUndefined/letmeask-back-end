"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotAllowedCors extends Error {
    constructor(paramName) {
        super(paramName);
        this.name = "NotAllowedCors";
    }
}
exports.default = NotAllowedCors;
