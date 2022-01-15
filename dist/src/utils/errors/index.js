"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAllowedCors = exports.UnauthorizedError = exports.MissingParamError = exports.InvalidParamError = void 0;
const InvalidParamError_1 = __importDefault(require("./InvalidParamError"));
exports.InvalidParamError = InvalidParamError_1.default;
const MissingParamError_1 = __importDefault(require("./MissingParamError"));
exports.MissingParamError = MissingParamError_1.default;
const UnauthorizedError_1 = __importDefault(require("./UnauthorizedError"));
exports.UnauthorizedError = UnauthorizedError_1.default;
const NotAllowedCors_1 = __importDefault(require("./NotAllowedCors"));
exports.NotAllowedCors = NotAllowedCors_1.default;
