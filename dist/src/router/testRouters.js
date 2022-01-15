"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const adapterRouters_1 = __importDefault(require("../adapter/adapterRouters/adapterRouters"));
const adapterMiddlewares_1 = __importDefault(require("../adapter/adapterMiddlewares/adapterMiddlewares"));
const adapterResponses_1 = require("../adapter/adapterResponses/adapterResponses");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/router", (0, adapterRouters_1.default)((request) => {
    return (0, adapterResponses_1.ok)("Response");
}));
router.post("/router-email", (0, adapterRouters_1.default)((request) => {
    const { email } = request.body;
    return (0, adapterResponses_1.ok)(email);
}));
router.post("/router-email-query", (0, adapterRouters_1.default)((request) => {
    const { email } = request.query;
    return (0, adapterResponses_1.ok)(email);
}));
router.post("/router/:id", (0, adapterRouters_1.default)((request) => {
    const { id } = request.params;
    return (0, adapterResponses_1.ok)(id);
}));
router.get("/router-error", (0, adapterRouters_1.default)((request) => {
    return (0, adapterResponses_1.ok)(new errors_1.MissingParamError("Preencha todos os campos"));
}));
router.get("/middleware-unathorized", (0, adapterMiddlewares_1.default)((request) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = request.headers;
    if (!authorization)
        return new errors_1.UnauthorizedError("Token Inválido");
})), (0, adapterRouters_1.default)((request) => {
    const userId = request.userId;
    return (0, adapterResponses_1.ok)(userId);
}));
router.get("/middleware-userid", (0, adapterMiddlewares_1.default)((request) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = request.headers;
    const [, token] = authorization.split(" ");
    return token;
})), (0, adapterRouters_1.default)((request) => {
    const userId = request.userId;
    return (0, adapterResponses_1.ok)(userId);
}));
exports.default = router;
