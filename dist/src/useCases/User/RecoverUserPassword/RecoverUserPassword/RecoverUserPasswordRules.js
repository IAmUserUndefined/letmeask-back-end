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
const UserRepository_1 = require("../../../../repositories/User/UserRepository/UserRepository");
const errors_1 = require("../../../../utils/errors");
const Helper_1 = __importDefault(require("../../../../utils/helper/Helper"));
class RecoverPasswordRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    execute({ email, token, password, passwordConfirm }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!password || !passwordConfirm || !email || !token)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if ((yield this.repository.getVerificationTokenByEmail(email)) !== token)
                return new errors_1.InvalidParamError("Token Inválido");
            if (Date.now() > (yield this.repository.getVerificationTokenExpiryDateByEmail(email)))
                return new errors_1.InvalidParamError("Link expirado, recomece o processo");
            const userPassword = yield this.repository.getPasswordByEmail(email);
            const passwordCompare = Helper_1.default.compareEncryptPassword(password, userPassword);
            if (passwordCompare)
                return new errors_1.InvalidParamError("A sua nova senha não pode ser igual a anterior");
            const { result, message } = Helper_1.default.isPasswordValid(password);
            if (!result)
                return new errors_1.InvalidParamError(message);
            if (password !== passwordConfirm)
                return new errors_1.InvalidParamError("As senhas não coincidem");
            yield this.repository.updatePasswordByEmail(email, Helper_1.default.encryptPassword(password));
            yield this.repository.updateVerificationTokenExpiryDateByEmail(email, BigInt(0));
            return "Senha atualizada com sucesso";
        });
    }
}
exports.default = RecoverPasswordRules;
