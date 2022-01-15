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
const errors_1 = require("../../../../utils/errors");
const UserRepository_1 = require("../../../../repositories/User/UserRepository/UserRepository");
const Mail_1 = __importDefault(require("../../../../provider/Mail/Mail"));
class UpdateUserEmailRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository;
        this.mail = new Mail_1.default();
    }
    execute({ id, email, token }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !token)
                return new errors_1.MissingParamError("Preencha todos os campos");
            if (token !== (yield this.repository.getVerificationTokenById(id)))
                return new errors_1.InvalidParamError("Token Inválido");
            if (Date.now() > (yield this.repository.getVerificationTokenExpiryDateById(id)))
                return new errors_1.InvalidParamError("Link expirado, recomece o processo");
            yield this.repository.updateEmail(id, email);
            yield this.repository.updateVerificationTokenExpiryDateById(id, BigInt(0));
            return "Email atualizado com sucesso";
        });
    }
}
exports.default = UpdateUserEmailRules;
