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
class UserLoginRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !password)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if (!(yield this.repository.findEmailByEmail(email)))
                return new errors_1.UnauthorizedError("Email/Senha Incorreto(s)");
            if (!(yield this.repository.findByEmailVerified(email)))
                return new errors_1.UnauthorizedError("Email não verificado");
            const result = Helper_1.default.compareEncryptPassword(password, yield this.repository.getPasswordByEmail(email));
            const id = yield this.repository.getId(email);
            if (result)
                return Helper_1.default.createJwt({ id, email });
            return new errors_1.UnauthorizedError("Email/Senha Incorreto(s)");
        });
    }
}
exports.default = UserLoginRules;
