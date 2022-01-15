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
const UserRepository_1 = require("../../../repositories/User/UserRepository/UserRepository");
const errors_1 = require("../../../utils/errors");
class VerifyUserEmailRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    execute({ email, token }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !token)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if (yield this.repository.findByEmailVerified(email))
                return new errors_1.InvalidParamError("Email já verificado");
            if ((yield this.repository.getVerificationTokenByEmail(email)) !== token)
                return new errors_1.InvalidParamError("Token inválido");
            yield this.repository.verifyEmail(email, token);
            return "Email verificado com sucesso";
        });
    }
}
exports.default = VerifyUserEmailRules;
