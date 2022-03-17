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
const Cache_1 = __importDefault(require("../../../providers/Cache/Cache"));
class DeleteUserRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    execute({ id, password, passwordConfirm }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!password || !passwordConfirm)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if (password !== passwordConfirm)
                return new errors_1.InvalidParamError("As senhas não coincidem");
            const comparePassword = Helper_1.default.compareEncryptPassword(password, yield this.repository.getPasswordById(id));
            if (comparePassword) {
                Cache_1.default.del(`username-${id}`);
                yield this.repository.destroy(id);
                return "Usuário excluído com sucesso";
            }
            return new errors_1.InvalidParamError("A sua senha está incorreta");
        });
    }
}
exports.default = DeleteUserRules;
