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
const UserRepository_1 = require("../../../repositories/User/UserRepository/UserRepository");
const errors_1 = require("../../../utils/errors");
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
class UpdatePasswordRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    execute({ id, passwordCurrent, newPassword, newPasswordConfirm }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!passwordCurrent || !newPassword || !newPasswordConfirm)
                return new errors_1.MissingParamError("Preencha todos os campos");
            const passwordCompare = Helper_1.default.compareEncryptPassword(passwordCurrent, yield this.repository.getPasswordById(id));
            if (!passwordCompare)
                return new errors_1.InvalidParamError("Senha atual incorreta");
            const passwordNewCompare = Helper_1.default.compareEncryptPassword(newPassword, yield this.repository.getPasswordById(id));
            if (passwordNewCompare)
                return new errors_1.InvalidParamError("A sua nova senha não pode ser igual a anterior");
            const { result, message } = Helper_1.default.isPasswordValid(newPassword);
            if (!result)
                return new errors_1.InvalidParamError(message);
            if (newPassword !== newPasswordConfirm)
                return new errors_1.InvalidParamError("As senhas não coincidem");
            yield this.repository.updatePasswordById(id, Helper_1.default.encryptPassword(newPassword));
            return "Senha atualizada com sucesso";
        });
    }
}
exports.default = UpdatePasswordRules;
