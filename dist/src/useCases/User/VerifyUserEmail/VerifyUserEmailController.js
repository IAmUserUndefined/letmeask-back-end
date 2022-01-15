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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VerifyUserEmailRules_1 = __importDefault(require("./VerifyUserEmailRules"));
const adapterResponses_1 = require("../../../adapter/adapterResponses/adapterResponses");
exports.default = new class VerifyUserEmailController {
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, token } = request.query;
            const verifyUserEmailRules = new VerifyUserEmailRules_1.default();
            const response = yield verifyUserEmailRules.execute({ email, token });
            return (0, adapterResponses_1.ok)(response);
        });
    }
};
