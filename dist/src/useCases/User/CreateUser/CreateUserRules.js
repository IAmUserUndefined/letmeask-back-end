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
const Mail_1 = __importDefault(require("../../../providers/Mail/Mail"));
class CreateUserRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository;
        this.mail = new Mail_1.default();
    }
    execute({ email, name, password, passwordConfirm }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !name || !password || !passwordConfirm)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if (yield this.repository.findEmailByEmail(email))
                return new errors_1.InvalidParamError("Email já cadastrado");
            const { result, message } = Helper_1.default.isPasswordValid(password);
            if (!result)
                return new errors_1.InvalidParamError(message);
            if (password !== passwordConfirm)
                return new errors_1.InvalidParamError("As senhas não coincidem");
            const token = Helper_1.default.createToken();
            yield this.repository.store(Helper_1.default.createId(), email, name, Helper_1.default.encryptPassword(password), token);
            yield this.mail.sendMail(email, "Verificação de Email", "createUserEmailBody", {
                appUrl: Helper_1.default.getAppUrlEnvironmentVariable(),
                email: email,
                token: token
            });
            return "Usuário cadastrado com sucesso, verique seu email, não esqueça de verificar sua caixa de spam";
        });
    }
}
exports.default = CreateUserRules;
