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
const Mail_1 = __importDefault(require("../../../../providers/Mail/Mail"));
const Helper_1 = __importDefault(require("../../../../utils/helper/Helper"));
class SendUserPasswordRecoveryLinkRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository();
        this.mail = new Mail_1.default();
    }
    execute({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email)
                return new errors_1.MissingParamError("Preencha o campo email");
            if (!(yield this.repository.findEmailByEmail(email)))
                return new errors_1.InvalidParamError("Email não cadastrado");
            const token = Helper_1.default.createToken();
            yield this.repository.updateVerificationTokenByEmail(email, token);
            yield this.repository.updateVerificationTokenExpiryDateByEmail(email, BigInt(Helper_1.default.createTokenExpiryDate()));
            yield this.mail.sendMail(email, "Recuperação de Senha", "recoverPasswordEmailBody", {
                appUrl: Helper_1.default.getAppUrlEnvironmentVariable(),
                email: email,
                token: token
            });
            return "O link de recuperação de senha foi enviado para seu email, ele é válido por alguns minutos, não esqueça de verificar sua caixa de spam";
        });
    }
}
exports.default = SendUserPasswordRecoveryLinkRules;
