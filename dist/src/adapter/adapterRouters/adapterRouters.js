"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../utils/errors/index");
exports.default = (router) => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { response, statusCode } = yield router({
            body: req.body,
            query: req.query,
            params: req.params,
            userId: req.userId
        });
        if (response instanceof index_1.UnauthorizedError)
            return res.status(401).json({ response: response.message });
        if (response instanceof index_1.InvalidParamError || response instanceof index_1.MissingParamError)
            return res.status(400).json({ response: response.message });
        if (response instanceof Error)
            return res.status(500).json({ response: response.message });
        return res.status(statusCode).json({ response: response });
    });
};
